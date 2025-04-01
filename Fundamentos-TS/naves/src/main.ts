let spaceships:Spaceship[] = []

class Spaceship{
    id:number
    name:string
    pilot:string
    crewLimit:number
    crew: string[]
    inMission:boolean
    
    constructor(name:string, pilot:string, crewLimit:number) {
        this.name = name
        this.pilot = pilot
        this.crewLimit = crewLimit
        this.crew = []
        this.inMission = false
    }
}

async function createSpaceship() {
    try{
        const name:string = prompt('Digite o nome da nave: ')
        const pilot:string = prompt('Digite o nome do piloto')
        const crewLimit:number = parseFloat(prompt('Digite o limite de tripulantes'))

        if(isNaN(crewLimit) || crewLimit <= 0){
            throw new Error('O limite digitado é invalido')
        }

        const newSpaceship = new Spaceship(name,pilot,crewLimit)
        spaceships.push(newSpaceship)
        const response = await fetch('http://localhost:3000/spaceships',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newSpaceship)
        })

        const spaceship = await response.json()
        renderSpaceship(spaceship)
        alert(`A nave foi criada:\n${spaceship.name}`)

    } catch(error) {
        alert(error)
    }
}

async function getSpaceships(){
    const response = await fetch('http://localhost:3000/spaceships')
    const spaceships = await response.json()

    spaceships.forEach(spaceship => {
        renderSpaceship(spaceship)
    })
}

function renderSpaceship(spaceship:Spaceship){
    const section = document.getElementById('spaceships')

    const div = document.createElement(`div`)
    div.id = `div-${spaceship.id}`
    div.classList.add('spaceship-div')

    const name = document.createElement('h2')
    name.textContent = `${spaceship.name}`
    name.classList.add('spaceship-name')

    const pilot = document.createElement('p')
    pilot.textContent = `Piloto: ${spaceship.pilot}`
    pilot.classList.add('spaceship-pilot') 

    const crew = document.createElement('p')
    crew.textContent = `Tripulação: ${spaceship.crew.join(' | ') || 'Nenhum tripulante'}`;
    crew.classList.add('spaceship-crew') 

    const crewLimit = document.createElement('p')
    crewLimit.textContent = `limite: ${spaceship.crewLimit}`
    crewLimit.classList.add('spaceship-crewLimit')

    const inMission = document.createElement('p')
    inMission.textContent = `Em missão: ${spaceship.inMission}`
    inMission.classList.add('spaceship-inMission')

    const addCrewBtn = document.createElement('button')
    addCrewBtn.classList.add('addCrewBtn')
    addCrewBtn.textContent = `Adicionar tripulante`
    addCrewBtn.addEventListener('click', () => addCrew(spaceship))

    const sendToMissionBtn = document.createElement('button')
    sendToMissionBtn.classList.add('sendToMissionBtn')
    sendToMissionBtn.textContent = `Mandar para missão`
    sendToMissionBtn.addEventListener('click', () => sendToMission(spaceship))

    div.append(name,pilot,crew,crewLimit, inMission,addCrewBtn, sendToMissionBtn)
    section.append(div)
}

document.addEventListener('DOMContentLoaded',getSpaceships)
document.getElementById('create').addEventListener('click',createSpaceship)


async function addCrew(spaceship:Spaceship){
    const id = spaceship.id

    const getSpaceship = await fetch(`http://localhost:3000/spaceships/${id}`)
    const stringSpaceship = await getSpaceship.json()

    if (parseFloat(stringSpaceship.crewLimit) > stringSpaceship.crew.length){
        const newCrew = prompt(`Digite o nome do tripulante para a nave ${spaceship.name}:`)
        stringSpaceship.crew.push(newCrew)

        const response = await fetch(`http://localhost:3000/spaceships/${id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(stringSpaceship)
        })
        const editedSpaceship = await response.json()
        document.getElementById(`div-${spaceship.id}`).remove()
        renderSpaceship(editedSpaceship)
    }
    else{
        alert(`Número de tripulantes Excedidos: ${parseFloat(stringSpaceship.crewLimit)}`)
    }
}

async function sendToMission(spaceship:Spaceship){
    const id = spaceship.id

    const getSpaceship = await fetch(`http://localhost:3000/spaceships/${id}`)
    const stringSpaceship = await getSpaceship.json()

    if(stringSpaceship.inMission){
        return alert(`A nave ${stringSpaceship.name} já está em missão`)
    }

    if (Math.floor(parseFloat(stringSpaceship.crewLimit)/3) <= stringSpaceship.crew.length){
        stringSpaceship.inMission = true

        const response = await fetch(`http://localhost:3000/spaceships/${id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(stringSpaceship)
        })
        const editedSpaceship = await response.json()
        document.getElementById(`div-${spaceship.id}`).remove()
        renderSpaceship(editedSpaceship)
    }
    else{
        alert(`Você precisa de no mínimo 1/3 dos tripulantes na nave`);
    }
}