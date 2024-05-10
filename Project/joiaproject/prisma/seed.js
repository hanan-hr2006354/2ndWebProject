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

        await prisma.purchase.deleteMany({});
        await prisma.selling.deleteMany({});
        await prisma.item.deleteMany({});
        await prisma.category.deleteMany({});
        await prisma.customer.deleteMany({});
        await prisma.seller.deleteMany({});
        await prisma.admin.deleteMany({});

        for (const category of categories) {
            await prisma.category.create({
                data: {
                    name: category.category,
                    items: {
                        create: category.items.map(item => ({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            quantity: parseInt(item.quantity),
                        })),
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

            for (const purchase of customer.purchase) {
                await prisma.purchase.create({
                    data: {
                        customerId: createdCustomer.id,
                        itemId: purchase.id,
                        quantity: purchase.quantity,
                        date: new Date(purchase.date),
                        location: purchase.location,
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

            for (const selling of seller.sellings) {
                await prisma.selling.create({
                    data: {
                        sellerId: createdSeller.id,
                        itemId: selling.id,
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
