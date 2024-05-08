import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class SellerRepo {
    async addSeller(seller) {
        try {
            return await prisma.seller.create({ data: seller });
        } catch (error) {
            return { error: error.message };
        }
    }

    async updateSeller(id, seller) {
        try {
            return await prisma.seller.update({
                where: { id },
                data: seller
            });
        } catch (error) {
            return { error: error.message };
        }
    }

    async deleteSeller(id) {
        try {
            return await prisma.seller.delete({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }

    async getSellerSales(sellerId) {
        try {
            return await prisma.selling.findMany({
                where: { sellerId }
            });
        } catch (error) {
            return { error: error.message };
        }
    }
}

export default new SellerRepo();
