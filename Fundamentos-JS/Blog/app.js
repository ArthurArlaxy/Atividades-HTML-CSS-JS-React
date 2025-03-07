const prompt = require('prompt-sync')()

class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }
    addPost(){
        let title = prompt(`Qual será o título do seu post: `)
        let description = prompt(`Qual será a descrição do seu post: `)
        let imagem = prompt(`Seu post possui imagem (true/false): `)
        let newPost = new Post(title,description,imagem,this.name)
        this.posts.push(newPost)
        return newPost
    }
}

class Post{
    constructor(title, description, imagem, author){
        this.title = title
        this.description = description
        this.imagem = imagem
        this.author = author
        this.comments = []
    }
    addComment(){
        let name = prompt(`Qual é o seu nome: `)
        let comment = prompt(`Escreva seu comentário: `)
        let newComment = new Comment(name,comment)
        this.comments.push(newComment)
    }
}

class Comment{
    constructor(name,comment){
        this.name = name
        this.comment = comment
        this.createdAt = new Date()
    }
}

let arlaxy = new Author('Arlaxy')

let first = arlaxy.addPost()


first.addComment()

console.log(arlaxy)
console.log(first)