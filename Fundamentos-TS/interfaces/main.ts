const users: User[] = []

interface User{
    id:number,
    login:string,
    name:string,
    bio:string,
    public_repos:number,
    repos_url:string,
}

interface UserGitHubRepos{
    name:string
    description:string
    fork:boolean
    stargazers_count:number
}

class User implements User{
    constructor(id:number,login:string,name:string,bio:string,public_repos:number,repos_url:string) {
        this.id = id,
        this.login = login,
        this.name = name,
        this.bio = bio,
        this.public_repos = public_repos,
        this.repos_url = repos_url
    }
}

async function addUser() {
    const username = prompt('Digite o nome do usuário que deseja encontrar:')
    const response = await fetch(`https://api.github.com/users/${username}`)
    const newUser = await response.json()
    if (newUser.message === "Not Found"){
        return alert(`O usuário ${username} não foi encontrado!`)
    }

    const user:User = new User(newUser.id,newUser.login,newUser.name,newUser.bio,newUser.public_repos,newUser.repos_url)
    users.push(user)
    alert(`O usuário ${user.name} foi adicionado com sucesso!!`)
}

function getUser(name:string){
    const findUser = users.find(user => user.name === name) 
    return findUser
}

async function getReposFromUser() {
    const username = prompt('Digite o nome do usuário que deseja visualizar o repositório: ')
    const user = getUser(username)
    if(!user){
        return alert(`O usuário ${username} não foi encontrado!`)
    }
    const response = await fetch(`${user.repos_url}`)
    const user_repos = await response.json()
    const repositories = user_repos.map(repo=>`Name: ${repo.name}\nDescription: ${repo.description}\nFork:${repo.fork}\nStargazers_count: ${repo.stargazers_count}`)
    alert(repositories.join("\n-----------------------------\n"))
}

function numberOfUsers(){
    let message = `Número de usuários registrados: ${users.length}:\n`
    users.forEach(user => message += `\n- ${user.login}`)
    return alert(message)
}

function numberOfrepositories(){
    const sumOfRepos = users.reduce((acc,user)=>{
        return acc+user.public_repos
    },0)
    return alert(`Número de total de repositorios: ${sumOfRepos}`)
}

function mostReposUsers(){
    const orderedUsers = users.slice().sort((a,b) => b.public_repos - a.public_repos)
    const topCount = Math.min(5,orderedUsers.length)

    let text = "Top User respos:\n"
    for(let i=0; i < topCount; i++){
        text += `${i+1}° ${orderedUsers[i].name}: ${orderedUsers[i].public_repos}\n`
    }

    alert(text)
}