

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then(states => {

        for( const state of states ) {
            ufSelect.innerHTML +=  `<option value ="${state.id}">${state.nome}</option>`

        }
  
    })
}

populateUFs()

function getCities(event){
    const citysSelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex  
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citysSelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citysSelect.disabled = true
    fetch(url)
    .then( res => res.json() )
    .then(cities => {
        
        for( const city of cities ) {
            citysSelect.innerHTML +=  `<option value ="${city.nome}">${city.nome}</option>`
        }
        citysSelect.disabled = false
    })
}

document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)

// Itens de coleta

// Segundo ouvidor de eventos - pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[nome=items]")
// aqui tem um cons e um let
let selectedItems = []

function handleSelectedItem(event){
    
    const itemLi = event.target

    // adicionar ou remover uma classe com javascript > toggle <
    itemLi.classList.toggle("selected")
    const itemId = event.target.dataset.id

    console.log(`ITEM ID: `, itemId)
    
    // verificar se tem itens selecionados, se sim
    //pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // this will be true or false.
        return itemFound
    }) 

    //se já estiver selecionado, tirar da seleção
    if(alreadySelected >= 0) {
        //tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }else {
        //se não estiver selecionado
        //adicionar a lista
        selectedItems.push(itemId)

    }

    console.log(`selectedItems: `, selectedItems)

    // atualizar o campo escondido com os itens selecionos.

 collectedItems.value = selectedItems

}
 