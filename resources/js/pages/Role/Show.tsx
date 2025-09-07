import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { index } from '@/routes/roles';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { AlertCircleIcon, Dot } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'All roles', href: index().url },
    { title: 'show role', href: '#' },
];

type RoleForm = {
    id: number;
    name: string;
    permissions: {
        id: number;
        name: string;
    }[];
};

export default function Show({ role, allPermissions }: { role: RoleForm; allPermissions: { id: number; name: string }[] }) {
  
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="show role" />
            <div className="m-4">
                <h3 className="mb-7 text-2xl">Show role</h3>


                <p>
                  <span className='font-bold'>Role Name:</span>  {role.name}
                </p>
                <div className='mt-5'>
                      <h4 className='font-bold mb-4'>Permissions:</h4>

                    {
                        role.permissions.map((permission) => (
                            <p className='bg-slate-200 rounded inline-block px-2 py-1 mx-1' key={permission.id}>{permission.name}</p>
                        ))
                    }
                </div>
                
            </div>
        </AppLayout>
    );
}
