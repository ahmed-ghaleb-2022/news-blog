import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

//Meine Typen

export type RoleType = {
    guard_name: string;
    id: number;
    name: string;
};

export type UserType = {
    id: number;
    name: string;
    email: string;
    roles: RoleType[];
    permissions: string[];
};


export type AuthType = {
    user: UserType | null;
};

export type PageProps = {
    auth: AuthType;
    name?: string;
    quote?: {
        message: string;
        author: string;
    };
    sidebarOpen?: boolean;
};
