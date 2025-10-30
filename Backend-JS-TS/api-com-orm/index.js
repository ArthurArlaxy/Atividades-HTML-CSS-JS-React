const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    await prisma.post.createMany({
        data: [
            {
                title:"Olá, mundo",
                content: "Esse é o meu primeiro post com a ajuda do Prisma ORM",
                published: true
            },
            {
                title:"Post 2",
                content: null,
            }
        ]
    })
}

main().then(async () => {
    const result = await prisma.post.findMany()
    console.log(result[0].title)
    prisma.$disconnect()
})