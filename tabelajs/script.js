function inserirContato(){
    const contact = {
        name: document.getElementById('txtNome').value,
        fone: document.getElementById('txtFone').value,
    }

 const bd_contacts = getLocalStorage()

 bd_contacts.push(contact)
 
 setLocalStorage(bd_contacts)

 updateTable()   

}

function getLocalStorage(){
    return JSON.parse(localStorage.getItem('bd_contacts'))
}

function setLocalStorage(bd_contacts){

    localStorage.setItem('bd_contacts', JSON.stringify(bd_contacts))
}

function updateTable(){

    const bd_contacts = getLocalStorage()

    bd_contacts.forEach(newRow)
}

function newRow(contact, index){

    const line = document.createElement('div')
    line.className = "tbody"
    line.innerHTML = `
    
    <div class="tcell">${index}</div>
    <div class="tcell">${contact.name}</div>
    <div class="tcell">${contact.fone}</div>
    <div class="tcell"><button>Excluir</button></div>

 `;
 document.querySelector("#table").appendChild(line)
}

function cleanTable(){
    
}