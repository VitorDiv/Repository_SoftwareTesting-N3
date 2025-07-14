const api = "http://localhost:5000/items";

async function carregar() {
  const res = await fetch(api);
  const itens = await res.json();
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  itens.forEach((item, i) => {
    lista.innerHTML += `<li>${item.nome} 
      <button onclick="editar(${i})">Editar</button>
      <button onclick="remover(${i})">Excluir</button></li>`;
  });
}

document.getElementById("form").onsubmit = async (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  await fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome }),
  });
  carregar();
};

async function remover(index) {
  await fetch(`${api}/${index}`, { method: "DELETE" });
  carregar();
}

async function editar(index) {
  const novoNome = prompt("Novo nome:");
  await fetch(`${api}/${index}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome: novoNome }),
  });
  carregar();
}

carregar();
