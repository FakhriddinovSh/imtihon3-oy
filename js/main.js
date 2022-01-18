// Pokemon container
var containerElement = document.createElement('container')
containerElement.setAttribute('class', 'container container-md container-sm')

function renderPokemonItem(pokemon = pokemons[0]){
    let colElement = document.createElement('div')
    colElement.setAttribute('class', 'col-12 col-sm-6 col-xl-4')

    let pokemonItem = document.createElement('div')
    pokemonItem.setAttribute('class', 'card position-relative')
    console.log(pokemon)
    let pokemonImg = document.createElement('img')
    pokemonImg.setAttribute('src', pokemon.img)
    pokemonImg.setAttribute('class', 'card-image-top bg-dark')
    pokemonImg.setAttribute('alt', 'Hello World')
    pokemonImg.addEventListener('error', ()=>{
        pokemonImg.setAttribute('src','https://picsum.photos/200/300')
    })

    let pokemonBody = document.createElement('div')
    pokemonBody.setAttribute('class', 'card-body')

    // Pokemon Numbers
    let pokemonNumberElement = document.createElement('h4')
    pokemonNumberElement.setAttribute('class','text-info position-absolute top-0 py-3')
    pokemonNumberElement.textContent = pokemon.num


    //Pokemon name
    let pokemonNameElement = document.createElement('p')
    pokemonNameElement.setAttribute('class', 'text-center pokemon-name') 
    pokemonNameElement.textContent = pokemon.name

    // Pokemon height
    let pokemonHeightElement = document.createElement('p')
    pokemonHeightElement.setAttribute('class', 'fs-4')
    pokemonHeightElement.textContent = pokemon.height

    // Pokemon weight
    let pokemonWeightElement = document.createElement('p')
    pokemonWeightElement.setAttribute('class', 'fs-4')
    pokemonWeightElement.textContent = pokemon.weight

    // Pokemon egg
    let pokemonEggElement = document.createElement('p')
    pokemonEggElement.setAttribute('class','btn btn-primary ')
    pokemonEggElement.textContent = pokemon.egg

    // Pokemon spawn chance
    let pokemonSpawnChance = document.createElement('p')
    pokemonSpawnChance.setAttribute('class', 'bg-warning')
    pokemonSpawnChance.textContent = pokemon.spawn_chance

    // Pokemon avg_spawn
    let pokemonAvgSpawn = document.createElement('p')
    pokemonAvgSpawn.setAttribute('class','bg-info')
    pokemonAvgSpawn.textContent = pokemon.avg_spawns

    // Pokemon spawn time
    let pokemonSpawnTime = document.createElement('p')
    pokemonSpawnTime.setAttribute('class', 'bg-light')
    pokemonSpawnTime.textContent = pokemon.spawn_time


    let candysElement = document.createElement('div')
    candysElement.setAttribute('class', 'border-3')

    // Pokemon Evolutions
    var prev_evolution =document.createElement('div')
    prev_evolution.setAttribute('class', 'prev_evolution')
    prev_evolution.textContent = pokemon.prev_evolution

    var next_evolution =document.createElement('div')
    next_evolution.setAttribute('class', 'next_evolution')
    next_evolution.textContent = pokemon.next_evolution

    // Type funksiyasi
    function renderPokemonType (pokemon){
        let pokemonTypeEl=document.createElement('div')
    
        for(let type of pokemon.type){
            let typeItem=document.createElement('div')
            typeItem.setAttribute('class', 'badge mx-2 bg-success text-dark')
            typeItem.textContent=type
            pokemonTypeEl.appendChild(typeItem)
        }
        return pokemonTypeEl
    }

    // Pokemon candy
    let pokemonCandyElement = document.createElement('h4')
    pokemonCandyElement.setAttribute('class', 'badge bg-secondary fs-5')
    pokemonCandyElement.textContent = pokemon.candy
    // Pokemon candyCount
    let pokemonCandyCountElement = document.createElement('p')
    pokemonCandyCountElement.setAttribute('class', 'badge bg-primary')
    pokemonCandyCountElement.textContent = pokemon.candy_count

    // Pokemon appendChild
    pokemonBody.appendChild(prev_evolution)
    pokemonBody.appendChild(next_evolution)
    candysElement.appendChild(pokemonSpawnTime)
    pokemonBody.appendChild(renderPokemonType(pokemon))
    candysElement.appendChild(pokemonSpawnChance)
    candysElement.appendChild(pokemonEggElement)
    pokemonBody.appendChild(candysElement)
    candysElement.appendChild(pokemonCandyElement)
    candysElement.appendChild(pokemonCandyCountElement)
    pokemonBody.appendChild(pokemonCandyElement)
    pokemonBody.appendChild(pokemonHeightElement)
    pokemonBody.appendChild(pokemonWeightElement)
    pokemonBody.appendChild(pokemonNumberElement)
    pokemonBody.appendChild(pokemonNameElement)
    pokemonItem.appendChild(pokemonImg)
    pokemonItem.appendChild(pokemonBody)
    colElement.appendChild(pokemonItem)

    return colElement
}



function renderPokemonRows(pokemon = []){
    let rowElement = document.createElement('div')
    rowElement.setAttribute('class', 'row mt-3 g-5 mb-3')
    
    for (let pokemon of pokemons){
        let pokemonItem = renderPokemonItem(pokemon)
        rowElement.appendChild(pokemonItem)
    }
    return rowElement
}

containerElement.appendChild(renderPokemonRows(pokemons))
document.body.appendChild(containerElement)