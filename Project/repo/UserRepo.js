import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllUsers() {
  return await prisma.user.findMany();
}

export async function getUserById(id) {
  return await prisma.user.findUnique({ where: { id: Number(id) } });
}

export async function createUser(data) {
  return await prisma.user.create({ data });
}

export async function updateUser(id, data) {
  return await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
}

export async function deleteUser(id) {
  return await prisma.user.delete({ where: { id: Number(id) } });
}
