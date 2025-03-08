const palavra_dica = [
    { "palavra": "PROFESSOR", "dica": "ESCOLA" },
    { "palavra": "ALUNO", "dica": "ESCOLA" },
    { "palavra": "RECREIO", "dica": "ESCOLA" },
    { "palavra": "VOLANTE", "dica": "CARRO" },
    { "palavra": "BUZINA", "dica": "CARRO" }
];

let palavraSorteada = "";
let letrasDigitadas = [];
let tentativas = 0;

formatarPalavraSorteada();
chutarPalavra();
novoJogo();

function chutarPalavra() {

    const inputLetraDigitada = document.getElementById("letraDigitada");

    inputLetraDigitada.addEventListener("keydown", (event) => {

        if ( event.key === "Enter" ) {

            const letraDigitada = inputLetraDigitada.value;

            if( letraDigitada == "") alert('Digite uma letra');

            validarLetraDigitadaComPalavraSorteada(letraDigitada.toUpperCase());

            inputLetraDigitada.value = "";
            inputLetraDigitada.focus();

        }

    });

}

function validarLetraDigitadaComPalavraSorteada(letraDigitada) {

    if ( letrasDigitadas.includes(letraDigitada) ) {
        alert(`A letra ${letraDigitada} já foi digita antes.`);
        return;
    }
    
    letrasDigitadas.push(letraDigitada);
    
    let letraAcertada = false;

    palavraSorteada.split("").forEach((letra, index) => {
        
        if (letra === letraDigitada) {
            document.getElementById(`letra_${index}`).value = letraDigitada; 
            letraAcertada = true;
        }

    });

    if ( letraAcertada === false ) {
        tentativas++; 
        mostrarBonecoForca();
    }

    exibirLetrasDigitadas();
    validarFimJogo();
}

function formatarPalavraSorteada() {

    document.getElementById("letraDigitada").focus();

    letrasDigitadas = [];

    const indicePalavraSorteada = sortearPosicaoPalavra();
    
    const divPalavraSorteada = document.getElementById("divPalavraSorteada");
    divPalavraSorteada.innerHTML = ""; // Limpa antes de adicionar

    palavraSorteada = palavra_dica[indicePalavraSorteada]['palavra'];
    
    palavraSorteada.split("").forEach((letra, index) => {
    
        const inputLetra = document.createElement("input");
        inputLetra.classList.add("mr-4", "col-sm-1", "text-center", "inputLetra");
        inputLetra.readOnly = true;
        inputLetra.id = `letra_${index}`;

        divPalavraSorteada.appendChild(inputLetra);
        
    });

    const dicaSorteada = palavra_dica[indicePalavraSorteada]['dica'];
    document.getElementById("dica").textContent = dicaSorteada; 


}

function sortearPosicaoPalavra() {
    return numeroPalavraSorteada = Math.floor(Math.random() * palavra_dica.length);
}

function exibirLetrasDigitadas() {

    const letrasDigitadasContainer = document.getElementById("letrasDigitadas");
    letrasDigitadasContainer.innerHTML = "";

    letrasDigitadas.forEach((letraDigitada, index) => {

        const span = document.createElement("span");
        span.textContent = letraDigitada;

        const acerto = palavraSorteada.includes(letraDigitada);
        span.classList.add(acerto ? "text-success" : "text-danger");

        letrasDigitadasContainer.appendChild(span);

        if (index < letrasDigitadas.length - 1) {
            letrasDigitadasContainer.appendChild(document.createTextNode(" - "));
        }
    });

}

function validarFimJogo() {

    const inputs = document.querySelectorAll(".inputLetra");
    const todasLetrasAcertadas = Array.from(inputs).every(input => input.value !== "");

    const spanLetrasErradas = document.querySelectorAll(".text-danger");
    
    const inputLetraDigitada = document.getElementById("letraDigitada");

    if ( todasLetrasAcertadas ) {
        inputLetraDigitada.disabled = true;
        alert('Você venceu.');
        return;
    }

    if ( tentativas > 5 ) {
        inputLetraDigitada.disabled = true;
        alert('Você perdeu.');
        return;
    }

}

function novoJogo() {

    const btn = document.getElementById("btnReiniciarJogo");
    btn.addEventListener("click", () => {
        
        location.reload();

    });

}

function mostrarBonecoForca() {
    const partes = ["cabeca", "corpo", "bracoEsquerdo", "bracoDireito", "pernaEsquerda", "pernaDireita"];
    // Exibe as partes conforme as tentativas
    for (let i = 0; i < tentativas; i++) {
      document.getElementById(partes[i]).style.display = "block";
    }
}
