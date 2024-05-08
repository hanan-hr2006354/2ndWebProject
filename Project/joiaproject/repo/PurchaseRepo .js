import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class PurchaseRepo {
    async addPurchase(purchase) {
        try {
            return await prisma.purchase.create({ data: purchase });
        } catch (error) {
            return { error: error.message };
        }
    }

    async getPurchaseById(id) {
        try {
            return await prisma.purchase.findUnique({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }

    async getAllPurchasesByCustomer(customerId) {
        try {
            return await prisma.purchase.findMany({ where: { customerId } });
        } catch (error) {
            return { error: error.message };
        }
    }

    async deletePurchase(id) {
        try {
            return await prisma.purchase.delete({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }
}

export default new PurchaseRepo();
