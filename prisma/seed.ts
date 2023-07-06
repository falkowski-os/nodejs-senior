import { PrismaClient } from '@prisma/client';

import { customers } from './seeds/customers';
import { groups } from './seeds/groups';
import { customerGroups } from './seeds/customer_groups';

const prisma = new PrismaClient();

async function main() {
  await insertGroups()
  await insertCustomers()
  await insertCustomerGroups()
  
}

async function insertCustomers() {
  for (const customer of customers) {
    await prisma.customer.upsert({
      where: { id: customer.id },
      update: {},
      create: customer,
    });
  }
  console.log(`Created ${customers.length} customers`);
}

async function insertCustomerGroups() {
  for (const customerGroup of customerGroups) {
    await prisma.customerGroup.upsert({
      where: { customerId_groupId: {
        customerId: customerGroup.customerId,
        groupId: customerGroup.groupId
      }},
      update: {},
      create: customerGroup,
    });
  }
  console.log(`Created ${customerGroups.length} customer groups`);
}

async function insertGroups() {
  for (const group of groups) {
    await prisma.group.upsert({
      where: { id: group.id },
      update: {},
      create: group,
    }); 
  }
  console.log(`Created ${groups.length} groups`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
