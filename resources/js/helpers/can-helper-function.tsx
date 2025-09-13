import type { UserType } from '@/types';

export function can(user: UserType | null, permission: string): boolean {
  return !!user?.permissions?.includes(permission);
}