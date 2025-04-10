var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const users = [];
class User {
    constructor(id, login, name, bio, public_repos, repos_url) {
        this.id = id,
            this.login = login,
            this.name = name,
            this.bio = bio,
            this.public_repos = public_repos,
            this.repos_url = repos_url;
    }
}
function addUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const username = prompt('Digite o nome do usuário que deseja encontrar:');
        const response = yield fetch(`https://api.github.com/users/${username}`);
        const newUser = yield response.json();
        if (newUser.message === "Not Found") {
            return alert(`O usuário ${username} não foi encontrado!`);
        }
        const user = new User(newUser.id, newUser.login, newUser.name, newUser.bio, newUser.public_repos, newUser.repos_url);
        users.push(user);
        alert(`O usuário ${user.name} foi adicionado com sucesso!!`);
    });
}
function getUser(name) {
    const findUser = users.find(user => user.name === name);
    return findUser;
}
function getReposFromUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const username = prompt('Digite o nome do usuário que deseja visualizar o repositório: ');
        const user = getUser(username);
        const response = yield fetch(`${user.repos_url}`);
        const user_repos = yield response.json();
        const repositories = user_repos.map(repo => `Name: ${repo.name}\nDescription: ${repo.description}\nFork:${repo.fork}\nStargazers_count: ${repo.stargazers_count}`);
        alert(repositories.join("\n-----------------------------\n"));
    });
}
function numberOfUsers() {
    return alert(`Número de usuários registrados: ${users.length}`);
}
function numberOfrepositories() {
    const sumOfRepos = users.reduce((acc, user) => {
        return acc + user.public_repos;
    }, 0);
    return alert(`Número de total de repositorios: ${sumOfRepos}`);
}
function mostReposUsers() {
    const orderedUsers = users.sort((a, b) => b.public_repos - a.public_repos);
    const topCount = Math.min(4, orderedUsers.length);
    let text = "Top User respos:\n";
    for (let i = 0; i <= topCount; i++) {
        text += `${i + 1}° ${orderedUsers[i].name}: ${orderedUsers[i].public_repos}\n`;
    }
    alert(text);
}
