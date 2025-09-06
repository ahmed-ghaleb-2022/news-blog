import AppLayout from '@/layouts/app-layout';

import { index } from '@/routes/posts';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All posts',
        href: index().url,
    },
    {
        title: 'show post',
        href: '#',
    },
];

interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export default function Show({ post }: { post: Post }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="show post" />
            <div className="m-4">

                <div>
                    <Link href={index().url} className="rounded bg-black px-4 py-2 font-bold text-white hover:bg-gray-700">
                        Back  
                    </Link>
                </div>

                <div className="my-5 rounded-xl border border-gray-400">
                    <h2 className="rounded-t-xl bg-gray-200 px-2 py-3 text-lg">post Info</h2>
                    <div className="px-2 py-2">
                        <p className="text-xl font-semibold">Title: {post.title}</p>
                        <p className="text-lg">postText: </p>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>

                <div className="my-5 rounded-xl border border-gray-400">
                    <h2 className="rounded-t-xl bg-gray-200 px-2 py-3 text-lg">Post creater info</h2>
                    <div className="px-2 py-2">
                        <p className="text-base">Created At: { new Date(post.created_at).toLocaleDateString('de-DE', {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                            }) }</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
