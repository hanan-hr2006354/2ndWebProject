import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class PurchaseRepo {
    //move to customer

    // async addPurchase(purchase) {
    //     try {
    //         return await prisma.purchase.create({ data: purchase });
    //     } catch (error) {
    //         return { error: error.message };
    //     }
    // }

    //Done
    async getPurchaseById(id) {
        try {
            return await prisma.purchase.findUnique({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }

    //Done
    async getPurchase() {
        try {
            return await prisma.purchase.findMany();
        } catch (error) {
            return { error: error.message };
        }
    }

    //Done
    async deletePurchase(id) {
        try {
            return await prisma.purchase.delete({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }
}

export default new PurchaseRepo();