let bd_contacts = getLocalStorage(); //no getLocalStorage, ele tenta pegar se tiver, se não volta um array vazio
let ultimo = 0;
if (bd_contacts) {
  let length = bd_contacts.length - 1;
  ultimo = bd_contacts[length];
  updateTable();
}

let ids = ultimo.id + 1;
function addContact() {
  const contact = {
    name: document.getElementById("txtNome").value,
    email: document.getElementById("txtEmail").value,
    telefone: document.getElementById("txtTelefone").value,
    data_nasc: document.getElementById("datanasc").value,
    id: ids,
  };
  bd_contacts.push(contact);
  setLocalStorage(bd_contacts);
}

function setLocalStorage(bd_contacts) {
  localStorage.setItem("bd_contacts", JSON.stringify(bd_contacts)); //aqui está sendo setado um item, chamado "bd_contacts" a partir do bd_contacts
}
function getLocalStorage() {
  let contato = localStorage.getItem("bd_contacts");
  if (contato) {
    return JSON.parse(contato); //converter oq estiver no localstorage pra objeto, a partir do JSON q foi criado no set
  } else {
    contato = [];
    return contato; //começa aqui!!  / isso evita que dê problema na inserção no bd_contacts
  }
}

function updateTable() {
  cleanTable(); //pra não encher a tabela com os dados que já existem
  let bd_contacts = getLocalStorage();
  bd_contacts.forEach(newRow); //refaz a table
}
function cleanTable() {
  document.querySelector("tbody").innerHTML = ""; //pegando só conteudo do body
}
function deleteContact(id) {
  //const bd = getLocalStorage();
  bd_contacts = bd_contacts.filter((contact) => contact.id !== id);
  setLocalStorage(bd_contacts);
  updateTable();
}

function newRow(contact) {
  const line = document.createElement("tr");
  line.className = "linha";
  line.innerHTML = `
    
    <td>${contact.id}</td>
    <td>${contact.name}</td>
    <td>${contact.email}</td>
    <td>${contact.telefone}</td>
    <td>${contact.data_nasc}</td>
    <td><button class="btn btn-sm btn-danger" onClick="deleteContact(${contact.id})">Excluir</button></td>

 `;
  document.querySelector("tbody").appendChild(line); //apontando onde a nova linha com os dados vai  ser inserida
}
