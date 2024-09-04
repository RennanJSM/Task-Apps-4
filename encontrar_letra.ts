function verificarLetraA(texto: string) {
    
    const textoMinusc = texto.toLowerCase();

    const existeA = textoMinusc.includes('a');

    const quantidadeA = textoMinusc.split('a').length - 1;

    if (existeA) {
        console.log(`A letra 'a' existe e aparece ${quantidadeA} vezes.`);
    } else {
        console.log("A letra 'a' não existe no texto.");
    }
}

const texto = "arara";
verificarLetraA(texto);
