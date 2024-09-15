const form = window.document.getElementById("formulario");
let telefones = [];

form.addEventListener("submit", adicionar);
function adicionar(e){
    e.preventDefault();
    adicionarLinha();
}

function adicionarLinha(){
    const nome = window.document.getElementById("nome");
    const telefone = window.document.getElementById("telefone");
    const linha = window.document.querySelector("tbody");

        if(telefones.includes(telefone.value)){
            window.alert("O número digitado já foi inserido")
        }else{
            telefones.push(telefone.value)

            let linhas = "<tr>";;
            linhas += `<td class="name">${nome.value}</td>`;
            linhas += `<td class="number">${telefone.value}</td>`;
            linhas += "</tr>";

            linha.innerHTML += linhas;
        }

    nome.value = "";
    telefone.value = "";
}