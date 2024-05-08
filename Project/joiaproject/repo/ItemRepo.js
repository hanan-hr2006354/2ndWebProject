import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class ItemRepo {
    async addItem(item) {
        try {
            return await prisma.item.create({ data: item });
        } catch (error) {
            return { error: error.message };
        }
    }

    async updateItem(id, item) {
        try {
            return await prisma.item.update({
                where: { id },
                data: item
            });
        } catch (error) {
            return { error: error.message };
        }
    }

    async deleteItem(id) {
        try {
            return await prisma.item.delete({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }

    async getItemByName(name) {
        try {
            return await prisma.item.findUnique({ where: { name } });
        } catch (error) {
            return { error: error.message };
        }
    }

    async getItemsByCategory(category) {
        try {
            return await prisma.item.findMany({ where: { category } });
        } catch (error) {
            return { error: error.message };
        }
    }

    async getItemsByPriceRange(minPrice, maxPrice) {
        try {
            return await prisma.item.findMany({
                where: {
                    price: {
                        gte: minPrice,
                        lte: maxPrice
                    }
                }
            });
        } catch (error) {
            return { error: error.message };
        }
    }
}

export default new ItemRepo();
