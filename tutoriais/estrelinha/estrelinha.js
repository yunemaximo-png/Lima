/*Adicionando um "Listener" para o movimento do mouse*/
window.addEventListener("mousemove",  (elemento)=> {
    /*Criando div contendo o caracter que representa uma estrela*/
    const estrelinha = document.createElement("div");
    estrelinha.className = "estrelinha";
    estrelinha.style.left = elemento.clientX + "px";
    estrelinha.style.top = elemento.clientY + "px";
    estrelinha.innerHTML = "&#10022;";

    //Criando uma deriva horizontal para o efeito de queda da estrela 
    const xAleatorio = (Math.random() - 0.5) * 50 +"px";
    estrelinha.style.setProperty("--xAleatorio", xAleatorio);

    /*Acrescentando a div classe "estrelinha" ao body*/
    document.body.appendChild(estrelinha);

    elemento.clientX
    elemento.clientY
 
    //Removendo o elemento após o término de animação (800ms)
    setTimeout(()=>{
        estrelinha.remove()
    },800)
   
})