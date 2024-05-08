import fs from 'fs-extra';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const usersPath = path.join(process.cwd(), 'app/data/users.json');
const itemsPath = path.join(process.cwd(), 'app/data/items.json');

async function seed() {
    try {
        const { customers, sellers, admin } = await fs.readJSON(usersPath);
        const categories = await fs.readJSON(itemsPath);

        // Delete all existing entries in the database
        await prisma.purchase.deleteMany({});
        await prisma.selling.deleteMany({});
        await prisma.item.deleteMany({});
        await prisma.category.deleteMany({});
        await prisma.customer.deleteMany({});
        await prisma.seller.deleteMany({});
        await prisma.admin.deleteMany({});

        // Seed categories and items
        for (const category of categories) {
            await prisma.category.create({
                data: {
                    name: category.category,
                    items: {
                        create: category.items,
                    },
                },
            });
        }

        // Seed customers and their purchases
for (const customer of customers) {
    const createdCustomer = await prisma.customer.create({
        data: {
            id: customer.id,
            name: customer.name,
            surname: customer.surname,
            username: customer.username,
            shippingAddress: customer.shipping_address,
            password: customer.password,
            balance: customer.balance,
        },
    });

    // Assuming `purchase` is an array of item purchases
    for (const purchase of customer.purchase) {
        await prisma.purchase.create({
            data: {
                customerId: createdCustomer.id,
                itemId: purchase.id,
                quantity: purchase.quantity,
            }
        });
    }
}


// Seed sellers and their sellings
for (const seller of sellers) {
    const createdSeller = await prisma.seller.create({
        data: {
            id: seller.id,
            companyName: seller.company_name,
            username: seller.username,
            password: seller.password,
            bankAccount: seller.bank_account,
        },
    });

    // Assuming `sellings` is an array of item sales
    for (const selling of seller.sellings) {
        await prisma.selling.create({
            data: {
                sellerId: createdSeller.id,
                itemId: selling.id,  // Make sure this corresponds to a valid Item ID
                quantity: selling.quantity,
            }
        });
    }
}

// Seed admins
for (const adminData of admin) {
    await prisma.admin.create({ data: adminData });
}





        console.log('Seeding completed successfully.');
    } catch (error) {
        console.error('Failed to seed:', error);
    }
}

seed();
