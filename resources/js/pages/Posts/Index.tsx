import Can from '@/components/Can';
import AppLayout from '@/layouts/app-layout';

import { create, destroy, edit, index, show } from '@/routes/posts';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All posts',
        href: index().url,
    },
];

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export default function Index({ posts }: { posts: Post[] }) {
    const { processing, delete: deletePost } = useForm();

    const deleteHandler = (e: React.FormEvent<HTMLFormElement>, $id: number) => {
        e.preventDefault();
        deletePost(destroy($id).url);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="posts" />
            <div className="m-4">
                <Link href={create().url} className="rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700">
                    create post
                </Link>

                <div className="mx-auto mt-20 max-w-7xl">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Content
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Created At
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {posts.map((post, index) => (
                                <tr key={post.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{index + 1}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{post.title}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{post.content.substring(0, 100).replace(/<[^>]+>/g, '')} ...</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {new Date(post.created_at).toLocaleDateString('de-DE', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                            })}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex gap-2">
                                            <Can permission="post.view">
                                                <Link
                                                    href={show(post.id).url}
                                                    className="rounded bg-teal-600 px-4 py-2 font-bold text-white hover:bg-teal-700"
                                                >
                                                    view
                                                </Link>
                                            </Can>
                                            <Can permission="post.edit">
                                                <Link
                                                    href={edit(post.id).url}
                                                    className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
                                                >
                                                    Edit
                                                </Link>
                                            </Can>

                                            <Can permission="post.delete">
                                                <form onSubmit={(e) => deleteHandler(e, post.id)} className="inline">
                                                    <button
                                                        type="submit"
                                                        className="rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </form>
                                            </Can>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
