import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class Static {
//Done/UI Done/
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
//Done/UI Done/
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
//Done/UI Done/
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


//Done/UI Done/ make sure adding a purchase
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
//Done/UI Done/
async getItemsPerCategory() {
    try {
        return await prisma.item.groupBy({
            by: ['categoryId'],
            _count: true 
        });
    } catch (error) {
        return { error: error.message };
    }
}

async getCustomerDetails() {
    try {
      const customers = await prisma.customer.findMany({
        select: {
          id: true,
          username: true,
          purchases: {
            select: {
              quantity: true,
              item: {
                select: {
                  price: true,
                },
              },
            },
          },
        },
      });

      const customerDetails = customers.map((customer) => {
        const totalPurchaseQuantity = customer.purchases.reduce(
          (total, purchase) => total + purchase.quantity,
          0
        );

        const totalPrice = customer.purchases.reduce(
          (total, purchase) => total + purchase.quantity * purchase.item.price,
          0
        );

        return {
          id: customer.id,
          username: customer.username,
          totalPurchaseQuantity,
          totalPrice,
        };
      });

      return customerDetails;
    } catch (error) {
      return { error: error.message };
    }
  }

  async getItemPriceRangeWithDetails() {
    try {
      const minPriceItem = await prisma.item.findFirst({
        select: {
          id: true,
          name: true,
          price: true,
          image: true
        },
        orderBy: {
          price: 'asc'
        }
      });

      const maxPriceItem = await prisma.item.findFirst({
        select: {
          id: true,
          name: true,
          price: true,
          image: true
        },
        orderBy: {
          price: 'desc'
        }
      });

      return { 
        minPriceItem: minPriceItem || { id: null, name: null, price: 0, image: null },
        maxPriceItem: maxPriceItem || { id: null, name: null, price: 0, image: null }
      };
    } catch (error) {
      return { error: error.message };
    }
  }

}
export default new Static();
