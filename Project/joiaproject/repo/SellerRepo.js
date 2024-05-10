import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class SellerRepo {

//Done

    async getSeller() {
        return await prisma.seller.findMany();

}

//Done
async addSeller(seller) {
        try {
            return await prisma.seller.create({ data: seller });
        } catch (error) {
            return { error: error.message };
        }
    }

    async addItemOrUpdateQuantity(sellerId, itemDetails) {
        const { itemId, quantityToAdd } = itemDetails;
        try {
            // Check if the item already exists in the selling list of the seller
            const existingItem = await prisma.selling.findFirst({
                where: {
                    sellerId: sellerId,
                    itemId: itemId
                }
            });

            if (existingItem) {
                // If item exists, update the quantity
                return await prisma.selling.update({
                    where: { id: existingItem.id },
                    data: { quantity: existingItem.quantity + quantityToAdd }
                });
            } else {
                // If item does not exist, create new selling record
                return await prisma.selling.create({
                    data: {
                        sellerId: sellerId,
                        itemId: itemId,
                        quantity: quantityToAdd
                    }
                });
            }
        } catch (error) {
            return { error: error.message };
        }
    }

    // Get all items with user names and quantities purchased
    async getAllItemsWithUserNamesAndQuantities(sellerId) {
        try {
            return await prisma.seller.findUnique({
                where: { id: sellerId },
                include: {
                    sellings: {
                        include: {
                            item: true,
                            purchases: {
                                select: {
                                    quantity: true,
                                    customer: {
                                        select: {
                                            username: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        } catch (error) {
            return { error: error.message };
        }
    }
//Done

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
//Done
    async deleteSeller(id) {
        try {
            return await prisma.seller.delete({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }


//Done
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