import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class CategoryRepo {
    async getCategorybyName(name) {
        try {
            // Fetch the category by name
            const category = await prisma.category.findFirst({
                where: { name }
            });

            // If category is found, fetch its items
            if (category) {
                const items = await prisma.item.findMany({
                    where: { categoryId: category.id }
                });
                return items;
            } else {
                // Return null if category is not found
                return null;
            }
        } catch (error) {
            // Return error message if any error occurs
            return { error: error.message };
        }
    }
}

export default new CategoryRepo();
