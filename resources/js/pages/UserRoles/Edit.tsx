import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { index, update } from '@/routes/user-roles';
import { RoleType, UserType, type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { AlertCircleIcon, Dot } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All users',
        href: index().url,
    },
    {
        title: 'Edit User Role',
        href: '#',
    },
];

export default function Edit({ user, allRoles }: { user: UserType; allRoles: RoleType[] }) {
    const { data, setData, put, errors } = useForm({
        role_name: user?.roles[0]?.name || 'user',
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(update(user.id).url);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="edit user role" />
            <div className="m-4">
                <h3 className="mb-7 text-2xl">edit user role</h3>
                <form onSubmit={submitHandler} className="flex flex-col gap-4">
                    {/* wenn eine error vorhanden ist */}
                    {Object.keys(errors).length > 0 && (
                        <Alert variant="destructive">
                            <AlertCircleIcon />
                            <AlertTitle>Errors !</AlertTitle>
                            <AlertDescription>
                                <ul>
                                    {Object.entries(errors).map(([key, value]) => (
                                        <li key={key}>
                                            {' '}
                                            <Dot className="inline" />
                                            {value as string}
                                        </li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    <div>
                        <h2 className="text-lg capitalize">
                            {' '}
                            <span className="font-bold">Name:</span> {user.name}
                        </h2>
                    </div>
                    <div>
                        <h1>
                            {' '}
                            <span className="font-bold">Email:</span> {user.email}
                        </h1>
                    </div>

                    <p className="font-bold">Select a role:</p>
                    <select
                        name="role_id"
                        value={data.role_name}
                        onChange={(e) => setData('role_name', e.target.value)}
                        className="mt-1 block w-lg rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        {allRoles.map((role) => (
                            <option key={role.id} value={role.name}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    <div>
                        <Button className="mt-4 hover:cursor-pointer" type="submit">
                            Update
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
