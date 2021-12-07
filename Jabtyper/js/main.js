

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