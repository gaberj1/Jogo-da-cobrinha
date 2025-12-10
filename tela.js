const tela = {
    largura:800,
    altura:400,
    cor:""#286047"",
	esterEgg:true,
    desenhar: function(){
        canvasCtx.fillStyle= this.cor;
        canvasCtx.fillRect(0,60,this.largura,this.altura);
		if (this.esterEgg){	
			canvasCtx.fillStyle= "purple"; 
            canvasCtx.font= "30px Fantasy";
            canvasCtx.textBaseline = "top";
            canvasCtx.textAlign = "center";
            canvasCtx.fillText("Você achou o Easter EGG !",400,160);
            img = new Image();
            img.src = 'imagem.png';
            canvasCtx.drawImage(img, 300, 200,200,200);
		}
		
    }
};
