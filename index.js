const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()

  await prisma.post.create({
    data: {
      title: "If you really want something, just complain loudly on GitHub",
      slug: "this-is-a-terrible-lesson-to-teach",
      body: "That's a joke please don't do this.",
    },
  })

  await prisma.post.create({
    data: {
      title: "Second post",
      slug: "post-two",
      body: "This is the second post.",
    },
  })

  const posts = await prisma.post.findMany()

  console.dir(posts, { depth: Infinity })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
