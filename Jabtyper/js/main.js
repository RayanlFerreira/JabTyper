

//Pegando e informando o numero de caracteres digitados
var campo = $("#campo-digitacao");
campo.on("input", function(){
var frase = campo.val();
var nCaracteresDigitados = frase.length;
$("#caracteres-digitados").text(nCaracteresDigitados);

//Pegando e informando o numero de palavras digitados
var nPalavrasDigitadas = frase.split(" ").length;
$("#palavras-digitadas").text(nPalavrasDigitadas);
});

//mexendo com o tempo
var tempoJogo = $("#tempo");
var tempoInicial = tempoJogo.text();
campo.on("focus", function(){
    var cronometro = setInterval(function(){
    var tempoRestante = tempoJogo.text();

    if(tempoRestante <= 0){
        campo.attr("disabled", true);
        clearInterval(cronometro);
        nome = $("#nome").val()
        PalavrasDigitadas = $("#palavras-digitadas").text()
        pontuação = PalavrasDigitadas/tempoInicial * 60
        $("#tabela-resultado").append("<tr><td>"+nome+"</td><td>"+pontuação+"</td><td><button onclick='deletar((this.parentNode.parentNode.rowIndex))'><img src='img/lixeira.png'></button></td></tr>")
    }else{
        tempoRestante--;
        tempoJogo.text(tempoRestante);
}
}, 1000);
});

function deletar(i){
    document.getElementById('tabela-resultado').deleteRow(i)
}

$("#botao-reiniciar").on("click", function(){
    campo.attr("disabled", false);
    campo.val("");
    $("#caracteres-digitados").text("0");
    $("#palavras-digitadas").text("0");
    $("#tempo").text(tempoInicial);
});

var aleatorio = ['Cada vez que você faz uma opção está transformando sua essência em alguma coisa um pouco diferente do que era antes.' , 'Você pode encontrar as coisas que perdeu, mas nunca as que abandonou.' , 
    'Chorar por uma pessoa que esta morta não é tão triste quanto chorar por uma uma pessoa que ainda vive mas que a perdemos para sempre.' , 'Numa toca no chão vivia um hobbit' , 
    'Que haja uma luz nos lugares mais escuros, quando todas as outras luzes se apagarem.'] ;
    var aleatoriorandom = aleatorio[Math.floor(Math.random() * aleatorio.length )];
    document.querySelector('.frase').innerHTML = aleatoriorandom;

