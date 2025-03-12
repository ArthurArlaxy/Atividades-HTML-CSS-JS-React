function applyDamage(damage,Character){
    if (damage <= 0){
        return console.log('Não aplicou dano')
    } else {
        return Character.hp -= damage
    }
}

class Character {
    constructor(name, hp, atk, defense){
        this.name = name
        this.hp = hp
        this.atk = atk
        this.defense = defense
    }
    attack(Character){
        let damage = this.atk - Character.defense
        applyDamage(damage,Character)
    }
}

class Thief extends Character{
    constructor(name, hp,atk,defense){
        super(name, hp,atk,defense)
    }
    attack(Character){
        let damage = 2*(this.atk - Character.defense)
        applyDamage(damage,Character)
    }
}

class Mage extends Character{
    constructor(name,hp,atk,defense,mana){
        super(name,hp,atk,defense)
        this.mana = mana
    }
    attack(Character){
        let damage = (this.atk + this.mana) - Character.defense
        applyDamage(damage,Character)
    }
    magicOfLife(Character){
        let heal = 2 * this.mana
        Character.hp += heal
    }
}

class Warrior extends Character{
    #posicao
    constructor(name,hp, atk, defense, escudo){
        super(name,hp, atk, defense)
        this.escudo = escudo
        this.#posicao = "ataque"
    }
    attack(Character){
        if (this.#posicao === "ataque"){
            super.attack(Character)
        } else {
            console.log('Você está em posição de defesa')
        }
    }
    postura(){
        if (this.#posicao === 'ataque'){
            this.#posicao = 'defesa'
            this.defense += this.escudo
        }else{
            this.#posicao = 'ataque'
            this.defense -= this.escudo
        }
    }
}

const arthur = new Character('Arthur',30,15,15)
const catNoir = new Thief('Gato Preto',5,12,1)
const malu = new Mage('Curandeira impetulosa',10,8,10,10)
const igris = new Warrior('Comandante',50,20,10,5)

arthur.attack(catNoir)
console.log(catNoir)
catNoir.attack(arthur)
console.log(arthur)
malu.magicOfLife(arthur)
console.log(arthur)
arthur.attack(igris)
igris.attack(arthur)
console.log(arthur)
igris.postura()
igris.attack(arthur)
console.log(igris)
malu.attack(igris)
console.log(igris)