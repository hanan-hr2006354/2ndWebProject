import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class Static {
//?? no location is prisma
async  getCustomersPerLocation() {
    try {
        return await prisma.customer.groupBy({
            by: ['shippingAddress'],
            _count: {
                id: true
            }
        });
    } catch (error) {
        return { error: error.message };
    }
}

//Done
async  get3MostPurchasedItems() {
    try {
        return await prisma.item.findMany({
            include: {
                purchases: {
                    select: { id: true } // Just to count them
                }
            },
            orderBy: {
                purchases: {
                    _count: 'desc'
                }
            },
            take: 3
        });
    } catch (error) {
        return { error: error.message };
    }
}


// Done
async getPurchasedItemsSum(itemId) {
    try {
        const aggregatedData = await prisma.purchase.aggregate({
            where: { itemId: itemId },
            _sum: { quantity: true } // Aggregate the sum of quantity instead of price
        });
        return aggregatedData._sum.quantity; // Return the sum of quantity
    } catch (error) {
        return { error: error.message };
    }
}

//Done
async getUnpurchasedItems() {
    try {
        return await prisma.item.findMany({
            where: { 
                purchases: {
                    none: {} 
                } 
            }
        });
    } catch (error) {
        return { error: error.message };
    }
}


//not okring
  async  getTotalUniqueProductsPurchased(itemId) {
    try {
        return await prisma.purchase.groupBy({
            where: {
                itemId: itemId  // Filter purchases by itemId
            },
            by: ['itemId'],
            _count: {
                itemId: true
            }
        });
    } catch (error) {
        return { error: error.message };
    }
}

//Not working: no date identified
async getTotalPurchasesPerProductYear() {
    try {
        return await prisma.purchase.groupBy({
            by: { itemId: true, date: { year: true } },
            _sum: {
                amount: true
            },
            orderBy: {
                date: 'asc'
            }
        });
    } catch (error) {
        return { error: error.message };
    }
}

}
export default new Static();
