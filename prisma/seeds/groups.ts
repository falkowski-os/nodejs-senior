import { Prisma } from '@prisma/client';

export const groups: Prisma.GroupUpsertArgs['create'][] = [
  {
    id: 'b73e4f7e-dd7f-4c8f-ba66-423afb81e1aa',
    name: 'Admin'
  },
  {
    id: '53701fe8-27bc-4ff6-8db7-6ac65b0c5f0f',
    name: 'User'
  },
];
