import AppLayout from '@/layouts/app-layout';

import { index, create, show, edit, destroy } from '@/routes/roles';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Roles',
        href: index().url,
    },
];



type RoleType = {
    id: number;
    name: string;
    permissions: {
        id: number;
        name: string;
    }[];
};

export default function Index({ roles }: { roles: RoleType[] }) {

    const {  processing, delete : deletePost } = useForm();

    console.log(roles);

   const deleteHandler = (e :React.FormEvent<HTMLFormElement> , $id: number)=>{
       e.preventDefault();
       deletePost(destroy($id).url);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="roles" />
            <div className="m-4">
                <Link href={create().url} className="rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700">
                    create role
                </Link>

                <div className="mx-auto mt-20 max-w-7xl">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Permissions
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {roles.map((role, index: number) => (
                                <tr key={role.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{role.id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{role.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{role.permissions.map((permission: any) => permission.name).join(', ')}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex gap-2">
                                            <Link
                                                href={show(role.id).url}
                                                className="rounded bg-teal-600 px-4 py-2 font-bold text-white hover:bg-teal-700"
                                            >
                                                view
                                            </Link>
                                            <Link
                                                href={edit(role.id).url}
                                                className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
                                            >
                                                Edit
                                            </Link>

                                            <form onSubmit={ (e) => deleteHandler(e, role.id) } className="inline">
                                                <button
                                                    type="submit"
                                                    className="rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
                                                >
                                                    Delete
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
