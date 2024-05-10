import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class Static {
//Done
async getCustomersPerLocation() {
    try {
        return await prisma.customer.groupBy({
            by: ['location'], // Change to 'location' to group by location
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
//Done
async get3MostPurchasedItemsForSixMonths() {
    try {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        return await prisma.item.findMany({
            where: {
                purchases: {
                    some: {
                        date: {
                            gte: sixMonthsAgo // Filter purchases from the last six months
                        }
                    }
                }
            },
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

//not wokring
  async  getTotalUniqueProductsPurchased(itemId) {
    try {
        return await prisma.purchase.groupBy({
            where: {
                itemId: itemId 
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

async getTotalPurchasesPerProductYear() {
    try {
        return await prisma.purchase.groupBy({
            by: [{ key: 'itemId', alias: 'itemId' }, { key: 'date', alias: 'year', _type: 'date' }],
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
