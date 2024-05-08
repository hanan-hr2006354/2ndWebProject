import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class CustomerRepo {
    async addCustomer(customer) {
        try {
            return await prisma.customer.create({ data: customer });
        } catch (error) {
            return { error: error.message };
        }
    }

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

    async getCustomerPurchases(customerId) {
        try {
            return await prisma.purchase.findMany({
                where: { customerId }
            });
        } catch (error) {
            return { error: error.message };
        }
    }
}

export default new CustomerRepo();
