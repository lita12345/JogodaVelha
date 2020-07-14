var pos=["z", "z", "z", "z", "z", "z", "z", "z", "z"]
var jogadorAtual = "X";
var comecaJogador = "X";
var pontos1=0;
var pontos2=0;

var leNomes=function(){
    var nomJ1 = prompt("Digite o nome do Player 1");
    document.getElementById("placarP1").innerHTML = nomJ1 + '<div id="placarP1">:</div>'

    var nomJ2 = prompt("Digite o nome do jogador 2");
    document.getElementById("placarP2").innerHTML = nomJ2 + '<div id="placarP2">:</div>'
}



var verificaRodada= function() {
    var venceu = "z";
    if(
        ((pos[0]== pos[1]) && (pos[1]==pos[2]) ||
         (pos[0]==pos[3]) && (pos[3]==pos[6]) || 
         (pos[0]==pos[4]) && (pos[4]==pos[8])
        )
        ){venceu = pos[0];}
if (
    ((pos[1]==pos[4]) && (pos[4]==pos[7]))
 ) { venceu=pos[1]; }

if(
    ((pos[2]== pos[5]) && (pos[5]==pos[8]) || 
    (pos[2]==pos[4]) && (pos[4]==pos[6])
)
){ venceu=pos[2];}

if(
    ((pos[3]== pos[4]) && (pos[4]==pos[5])
)
){ venceu=pos[3];}

if(
    ((pos[6]== pos[7]) && (pos[7]==pos[8])  
    )
){venceu=pos[6]; }

return venceu;
}
var mostre=function(posicao){
    if(pos[parseInt(posicao)] == 'z'){
        if (jogadorAtual=='X'){ 
            document.getElementById(posicao).innerHTML = '<div class = "mostre">X</div>';
            pos[parseInt(posicao)] = "X";
            jogadorAtual = "O";
        } else {
            document.getElementById(posicao).innerHTML = '<div class = "mostre">O</div>';
            pos[parseInt(posicao)] = "O";
            jogadorAtual = "X";
        }    
    }

    if (verificaRodada() != 'z') {
        if (verificaRodada() == 'X') {
            pontos1++;
        } else {
            pontos2++;
        }
        alert(verificaRodada() + "Parabéns você ganhou!");

        

        pos = ["z", "z", "z", "z", "z", "z", "z", "z", "z"];
      if (comecaJogador == 'x') {
       comecaJogador == 'o'
       } else {
       comecaJogador == 'x'
       }
      jogadorAtual == comecaJogador;
        for (var i = 0; i < 9; i++) {
        document.getElementById(i.toString()).innerHTML = '<div class = "mostre"></div>';
       }


       for (var i = 0; i < 9; i++) {
       document.getElementById(i.toString()).innerHTML = "<div></div>";
      }
       document.getElementById("placarP1").innerHTML = placarP1 + ":" + pontos1;
      document.getElementById("placarP2").innerHTML = placarP2 + ":" + pontos2;
    }

}
