import AppLayout from '@/layouts/app-layout';

import { create, destroy, edit, index, show } from '@/routes/user-roles';
import { UserType, type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users and Roles',
        href: index().url,
    },
];

export default function Index({ users }: { users: UserType[] }) {
    const { delete: deletePost } = useForm();

    const deleteHandler = (e: React.FormEvent<HTMLFormElement>, $id: number) => {
        e.preventDefault();
        deletePost(destroy($id).url);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
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
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{index + 1}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.roles.map((role: any) => role.name).join(', ')}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex gap-2">
                                            <Link
                                                href={show(user.id).url}
                                                className="rounded bg-teal-600 px-4 py-2 font-bold text-white hover:bg-teal-700"
                                            >
                                                view
                                            </Link>
                                            <Link
                                                href={edit(user.id).url}
                                                className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
                                            >
                                                Edit
                                            </Link>

                                            <form onSubmit={(e) => deleteHandler(e, user.id)} className="inline">
                                                <button type="submit" className="rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
                                                    Clear
                                                </button>
                                            </form>
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
