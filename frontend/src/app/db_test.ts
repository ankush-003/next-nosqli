import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

async function main() {
    const users = await prisma.users.findMany({});
    console.log(users);
}

async function create() {
    const newUser = await prisma.users.create({
        data:{
            username: 'test',
            password: 'test',
            email: 'test@test.com'
        }
    })
}

create().then(() => {
    console.log('created');
    main().finally(() => {
        prisma.$disconnect();
    });
})
.catch((e) => {
    console.log(e);
    prisma.$disconnect();
});