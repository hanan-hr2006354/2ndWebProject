import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class ItemRepo {
    async getItem() {
        try {
            return await prisma.item.findMany();
        } catch (error) {
            return { error: error.message };
        }
    }
//DONE
    async addItem(item) {
        try {
            return await prisma.item.create({ data: item });
        } catch (error) {
            return { error: error.message };
        }
    }

//DONe
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

//DOne
    async deleteItem(id) {
        try {
            return await prisma.item.delete({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }

//DOne
    async getItemByName(name) {
        try {
            return await prisma.item.findMany({
                where: {
                    name: { equals: name.toUpperCase() }
                }
            });
        } catch (error) {
            return { error: error.message };
        }
    }
    
//DONE
    async getItemsByCategory(enteredCategory) {
        try {
            const categories = await prisma.category.findMany();
                const matchedCategory = categories.find(category => category.name===enteredCategory);
    
            if (!matchedCategory) {
                return { error: `Category '${enteredCategory}' not found` };
            }
    
            const items = await prisma.item.findMany({
                where: {
                    categoryId: matchedCategory.id
                }
            });
            return items;
        } catch (error) {
            return { error: error.message };
        }
    }
    

    //NOT WORKING
    async getItemsByPriceRange(minPrice,maxPrice) {
        try {
              const items = await prisma.item.findMany({
            where: {
                AND: [
                    { price: { gte: minPrice } },
                    { price: { lte: maxPrice } }
                ]
            }
        });
        return items;
        } catch (error) {
            return { error: error.message };
        }
    }
}

export default new ItemRepo();