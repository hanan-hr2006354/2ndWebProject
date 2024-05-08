import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllSales() {
  return await prisma.sale.findMany();
}

export async function getSaleById(id) {
  return await prisma.sale.findUnique({ where: { id: Number(id) } });
}

export async function createSale(data) {
  return await prisma.sale.create({ data });
}

export async function updateSale(id, data) {
  return await prisma.sale.update({
    where: { id: Number(id) },
    data,
  });
}

export async function deleteSale(id) {
  return await prisma.sale.delete({ where: { id: Number(id) } });
}
