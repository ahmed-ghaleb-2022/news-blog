import { PageProps, RoleType } from '@/types';
import { usePage } from '@inertiajs/react';

type CanProps = {
    permission?: string;
    role?: RoleType;
    children: React.ReactNode;
};
export default function Can({ permission, role, children }: CanProps) {
    //get the Auth 
    const { auth } = usePage<PageProps>().props;

    //get the user
    const user = auth.user;
    

    //check if user defined
    if (!user) return null;

    //check if the role is valid
    if (role && !user.roles.includes(role)) {
        return null;
    }

    //check if the permission is valid
    if (permission && !user.permissions.includes(permission)) {
        return null;
    }

    return <>{children}</>;
}
