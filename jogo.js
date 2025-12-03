function jogar(){
    tela.desenhar();
    placar.desenhar();
    cobra.desenhar();
    cobra.mover();
    maca.desenhar();
    if (maca.teveColisao(cobra)){
        placar.pontuacao++;
        maca = new Maca([30]);
    }
    if (cobra.vida>=1){
    requestAnimationFrame(jogar);
}
else
{
    placar.nomeJogo = "Fim de Jogo" 
    placar.desenhar();
}
}
let maca = new Maca([30]);
jogar();
document.addEventListener("keydown",(evento)=>{
if (evento.key== "w") cobra.direcao="up";
if (evento.key== "d") cobra.direcao="right";
if (evento.key== "s") cobra.direcao="down";
if (evento.key== "a") cobra.direcao="left";
})

