import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class SellingRepo {

    //Done
    async getSelling() {
        try {
            return await prisma.selling.findMany();
        } catch (error) {
            return { error: error.message };
        }
    }


//DOne
    async addSelling(selling) {
        try {
            return await prisma.selling.create({ data: selling });
        } catch (error) {
            return { error: error.message };
        }
    }
    //DOne

    async updateSelling(id, updateData) {
        try {
            return await prisma.selling.update({
                where: { id },
                data: updateData
            });
        } catch (error) {
            return { error: error.message };
        }
    }
//Done
    async getSellingById(id) {
        try {
            return await prisma.selling.findUnique({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }

    //done in seller aboves

    // async getAllSellingsBySeller(sellerId) {
    //     try {
    //         return await prisma.selling.findMany({ where: { sellerId } });
    //     } catch (error) {
    //         return { error: error.message };
    //     }
    // }

    //done
    async deleteSelling(id) {
        try {
            return await prisma.selling.delete({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }
}
export default new SellingRepo();