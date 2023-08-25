const form = document.querySelector(".form")
form.addEventListener("submit", function (e){
    e.preventDefault(); //impedir de submeter o formulario "normalmente"-rai

    inserirContato();
})

let bd_contacts = getLocalStorage()
let contador = 0

function inserirContato(){
    const contact = {
        name: document.getElementById('txtNome').value,
        fone: document.getElementById('txtFone').value,
        id: contador++
    }
 //const bd_contacts = getLocalStorage() //pq n consegue adicionar os contatos por ser constante - rai

 bd_contacts.push(contact)
 
 setLocalStorage(bd_contacts)

 updateTable()   

}

function getLocalStorage(){
    const contato = localStorage.getItem('bd_contacts')
    if (contato){
        return JSON.parse(contato)
    }
    else {
        contato = []
        return contato
    }
    //return JSON.parse(localStorage.getItem('bd_contacts'))
}

function setLocalStorage(bd_contacts){

    localStorage.setItem('bd_contacts', JSON.stringify(bd_contacts))
}

function newRow(contact){

    const line = document.createElement('div')
    line.className = "linhacontato"
    line.innerHTML = `
    
    <div class="tcell">${contact.id}</div>
    <div class="tcell">${contact.name}</div>
    <div class="tcell">${contact.fone}</div>
    <div class="tcell"><button onClick="deletarContato(${contact.id})">Excluir</button></div>

 `;
 document.querySelector(".tbody").appendChild(line)
}

function cleanTable(){
    document.querySelector(".tbody").innerHTML = ""
}

function updateTable(){

    let bd_contacts = getLocalStorage()

    cleanTable();
    bd_contacts.forEach(newRow)
}

function deletarContato(id){
    bd_contacts = bd_contacts.filter((contact) => contact.id !== id);
    setLocalStorage(bd_contacts)
    updateTable()

    //que nem o professor pedro passou corrigindo a prova, pra pegar/deletar uma das tarefas, dentro do listcomprehension
}