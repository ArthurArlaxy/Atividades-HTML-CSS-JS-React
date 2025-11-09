import { response, Router } from "express";
import { prisma } from "../database";
import { Prisma } from "@prisma/client";

export const router = Router()


//Utilizando paginação
router.get("/", async (req, res) => {
    const page = req.query.page ? Number(req.query.page) : 1;
    const pageSize = req.query.pageSize ? +req.query.pageSize : 10

    const skip = (page - 1) * pageSize

    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize
    })

    const totalPosts = await prisma.post.count()
    const totalPage = Math.ceil(totalPosts / pageSize)



    res.json({
        posts,
        pagination: {
            totalPosts,
            totalPage
        }
    })
})

//Utilizando filtros
router.get("/search", async (req, res) => {
    const { title, authorId, published, startDate, endDate } = req.query
    const filter: Prisma.PostWhereInput = {}

    if (title) {
        filter.title = {
            contains: String(title),
            mode: "insensitive"
        }
    }

    if (authorId) {
        filter.authorId = Number(authorId)
    }

    if (published) {
        filter.published = published === "true"
    }

    if (startDate || endDate) {
        filter.createdAt = {}
        if (startDate) {
            filter.createdAt.gte = new Date(String(startDate))
        }
        if (endDate) {
            filter.createdAt.lte = new Date(String(endDate))
        }
    }

    console.log(`Filtros:`, filter)

    const posts = await prisma.post.findMany({
        where: filter,
        orderBy: { createdAt: "desc" }
    })

    res.json(posts)
})

router.post("/:id", async (req, res) => {
    const { title, content, published, tags } = req.body
    const { id } = req.params
    const newPost = await prisma.post.create({
        data: {
            title,
            content,
            published,
            authorId: +id,
            tags: {
                connect: tags
            }
        }
    })
    res.status(201).json(newPost)
})


router.get("/:id", async (req, res) => {
    const { id } = req.params
    const post = await prisma.post.findUnique({
        where: { id: +id },
        include: {
            author: true,
            tags: true
        }
    })
    res.json(post)
})

router.put("/:id", async (req, res) => {
    const { title, content, published, tags } = req.body
    const { id } = req.params
    const updatedPost = await prisma.post.update({
        where: { id: +id },
        data: { title, content, published, tags }
    })
    res.json(updatedPost)
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletePost = await prisma.post.delete({
        where: { id: +id }
    })
    res.status(201).json(deletePost)
})