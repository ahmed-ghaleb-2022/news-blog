import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { index, store } from '@/routes/roles';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { AlertCircleIcon, Dot } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'All roles', href: index().url },
  { title: 'create role', href: '#' },
];

type RoleForm = {
  name: string;
  permissions: string[];
};

export default function Create({ allPermissions }: { allPermissions: { id: number; name: string }[] }) {
  const { data, setData, post, processing, errors } = useForm<RoleForm>({
    name: '',
    permissions: [],
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(store().url);
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="create post" />
      <div className="m-4">
        <h3 className="mb-7 text-2xl">create post</h3>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          {Object.keys(errors).length > 0 && (
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Errors !</AlertTitle>
              <AlertDescription>
                <ul>
                  {Object.entries(errors).map(([key, value]) => (
                    <li key={key}>
                      <Dot className="inline" />
                      {value as string}
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <div>
            <Label className="text-lg">Name</Label>
            <Input
              type="text"
              name="title"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
            />
          </div>

          <div>
            <Label className="text-lg">Permissions</Label>
            {allPermissions.map((permission) => (
              <div key={permission.id} className="mb-3 flex items-center gap-4">
                <Input
                  type="checkbox"
                  name="permissions"
                  value={permission.name}
                  checked={data.permissions.includes(permission.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setData('permissions', [...data.permissions, e.target.value]);
                    } else {
                      setData(
                        'permissions',
                        data.permissions.filter((p) => p !== e.target.value)
                      );
                    }
                  }}
                  className="inline-block h-3 w-3"
                />
                <Label className="inline-block text-lg">{permission.name}</Label>
              </div>
            ))}
          </div>

          <div>
            <Button className="mt-4 hover:cursor-pointer" type="submit" disabled={processing}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}