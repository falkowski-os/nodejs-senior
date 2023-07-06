import { Prisma } from '@prisma/client';

export const customerGroups: Prisma.CustomerGroupUpsertArgs['create'][] = [
  {
    groupId: 'b73e4f7e-dd7f-4c8f-ba66-423afb81e1aa',
    customerId: '9e391faf-64b2-4d4c-b879-463532920fd3',
  },
  {
    groupId: '53701fe8-27bc-4ff6-8db7-6ac65b0c5f0f',
    customerId: '9e391faf-64b2-4d4c-b879-463532920fd4'
  },
];
