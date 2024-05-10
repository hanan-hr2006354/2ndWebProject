import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class CustomerRepo {

    
    async getCustomerbyId(id) {
        try {
            return await prisma.customer.findUnique({
                where: { id }
            });
        } catch (error) {
            return { error: error.message };
        }
    }

    //needed
    async getCustomer() {
        try {
            return await prisma.customer.findMany();
        } catch (error) {
            return { error: error.message };
        }
    }

    async addCustomer(customer) {
        try {
            return await prisma.customer.create({ data: customer });
        } catch (error) {
            return { error: error.message };
        }
    }
    //needed
    async updateCustomer(id, customer) {
        try {
            return await prisma.customer.update({
                where: { id },
                data: customer
            });
        } catch (error) {
            return { error: error.message };
        }
    }

    async deleteCustomer(id) {
        try {
            return await prisma.customer.delete({ where: { id } });
        } catch (error) {
            return { error: error.message };
        }
    }

        //needed
    async getCustomerPurchases(customerId) {
        try {
            return await prisma.purchase.findMany({
                where: { customerId }
            });
        } catch (error) {
            return { error: error.message };
        }
    }


    //Not Working
    async addPurchase(customerId, purchase) {
        
        } catch (error) {
            console.error("Error adding purchase:", error);
            return { error: error.message };
        }
    }
    
    
    
    



export default new CustomerRepo();