const bodys = document.getElementById('boDy').style
const bodyConfig = document.getElementById('boDy')
const boDyT = document.getElementById('texT1')
const boDyT2 = document.getElementById('texT2')
const boDy1s = document.getElementById('texT1').style
const boDy2s = document.getElementById('texT2').style
const boDy3s = document.getElementById('texT3').style
const boDy4s = document.getElementById('texT4').style
const boDy5s = document.getElementById('texT5').style
const boDy6s = document.getElementById('texT6').style
const boDy7s = document.getElementById('texT7').style
const boDy8s = document.getElementById('texT8').style
const boDy9s = document.getElementById('texT9').style
const buttoN1 = document.getElementById('P1').style
const buttoN2 = document.getElementById('P2').style
const divbut = document.getElementById('buttons').style

//estilização divs dos botoes;
divbut.marginTop="-460px"
divbut.marginLeft="17%"

//estilização dos botões;
var but = [buttoN1, buttoN2]

but[0].backgroundColor="green"






//objeto definindo as consts pegas do DOM;
var Quadrado = [boDy1s, boDy2s, boDy3s, boDy4s, boDy5s,
                boDy6s, boDy7s, boDy8s, boDy9s]


//estilização dos marcadores xis e bola;
Quadrado[0].width="108px"
Quadrado[0].height="110px"
Quadrado[0].backgroundSize="100px"
Quadrado[0].backgroundRepeat="no-repeat"

Quadrado[1].width="110px"
Quadrado[1].height="120px"
Quadrado[1].backgroundSize="100px"
Quadrado[1].backgroundRepeat="no-repeat"
Quadrado[1].marginLeft="20px"

Quadrado[2].width="110px"
Quadrado[2].height="120px"
Quadrado[2].backgroundSize="100px"
Quadrado[2].backgroundRepeat="no-repeat"

Quadrado[3].width="110px"
Quadrado[3].height="120px"
Quadrado[3].backgroundSize="100px"
Quadrado[3].backgroundRepeat="no-repeat"

Quadrado[4].width="110px"
Quadrado[4].height="120px"
Quadrado[4].backgroundSize="100px"
Quadrado[4].backgroundRepeat="no-repeat"
Quadrado[4].marginLeft="20px"

Quadrado[5].width="110px"
Quadrado[5].height="120px"
Quadrado[5].backgroundSize="100px"
Quadrado[5].backgroundRepeat="no-repeat"
Quadrado[5].marginLeft="20px"

Quadrado[6].width="110px"
Quadrado[6].height="120px"
Quadrado[6].backgroundSize="100px"
Quadrado[6].backgroundRepeat="no-repeat"
Quadrado[6].marginLeft="20px"

Quadrado[7].width="110px"
Quadrado[7].height="120px"
Quadrado[7].backgroundSize="100px"
Quadrado[7].backgroundRepeat="no-repeat"
Quadrado[7].marginLeft="20px"

Quadrado[8].width="110px"
Quadrado[8].height="120px"
Quadrado[8].backgroundSize="100px"
Quadrado[8].backgroundRepeat="no-repeat"
Quadrado[8].marginLeft="20px"    

function verificaPLayer (parametro){
    if (buttoN1[0]==undefined){
        Quadrado[parametro].backgroundImage="url(/xxx.png)"
    }else{
        Quadrado[parametro].backgroundImage="url(/circulo.png)"
    }
    Quadrado[parametro].alignItems="center"
    
}

//funcao do botao player1
function but1(){
    if(buttoN2[0]==undefined){
        buttoN1.backgroundColor="green"
    }else{
        buttoN2.backgroundColor=""
        buttoN1.backgroundColor="green"
    }
    
}
//funcao do botao player 2
function but2(){
    if(buttoN1[0]==undefined){
        buttoN2.backgroundColor="green"

    }else{
        buttoN1.backgroundColor=""
        buttoN2.backgroundColor="green"
    }
    
}

var circuloazul = 'url("/ciculoazul.png")'
var xisazul = 'url("/xxx.png")'

//função que gerencia as sequencias marcadas pelo player 1
function seq1(){
    if (Quadrado[0].backgroundImage =='url(\"/circulo.png\")' && Quadrado[1].backgroundImage =='url(\"/circulo.png\")' && Quadrado[2].backgroundImage =='url(\"/circulo.png\")'){
        console.log('deu certo')
        Quadrado[0].backgroundImage= circuloazul
        Quadrado[1].backgroundImage=circuloazul
        Quadrado[2].backgroundImage=circuloazul
        win("player1");
        

    }else if (Quadrado[3].backgroundImage =='url(\"/circulo.png\")' && Quadrado[4].backgroundImage =='url(\"/circulo.png\")' && Quadrado[5].backgroundImage =='url(\"/circulo.png\")'){
        console.log('deu certo')
        Quadrado[3].backgroundImage=circuloazul
        Quadrado[4].backgroundImage=circuloazul
        Quadrado[5].backgroundImage=circuloazul
        win("player1");
    }else if (Quadrado[6].backgroundImage =='url(\"/circulo.png\")' && Quadrado[7].backgroundImage =='url(\"/circulo.png\")' && Quadrado[8].backgroundImage =='url(\"/circulo.png\")'){
        console.log('deu certo')
        Quadrado[6].backgroundImage=circuloazul
        Quadrado[7].backgroundImage=circuloazul
        Quadrado[8].backgroundImage=circuloazul
        win("player1");
    }else if (Quadrado[0].backgroundImage =='url(\"/circulo.png\")' && Quadrado[3].backgroundImage =='url(\"/circulo.png\")' && Quadrado[6].backgroundImage =='url(\"/circulo.png\")'){
        console.log('deu certo')
        Quadrado[0].backgroundImage=circuloazul
        Quadrado[3].backgroundImage=circuloazul
        Quadrado[6].backgroundImage=circuloazul
        win("player 1");
    }else if (Quadrado[1].backgroundImage =='url(\"/circulo.png\")' && Quadrado[4].backgroundImage =='url(\"/circulo.png\")' && Quadrado[7].backgroundImage =='url(\"/circulo.png\")'){
        console.log('deu certo')
        Quadrado[1].backgroundImage=circuloazul
        Quadrado[4].backgroundImage=circuloazul
        Quadrado[7].backgroundImage=circuloazul
        win("player1");
    }else if (Quadrado[2].backgroundImage =='url(\"/circulo.png\")' && Quadrado[5].backgroundImage =='url(\"/circulo.png\")' && Quadrado[8].backgroundImage =='url(\"/circulo.png\")'){
        console.log('deu certo')
        Quadrado[2].backgroundImage=circuloazul
        Quadrado[5].backgroundImage=circuloazul
        Quadrado[8].backgroundImage=circuloazul
        win("player 1");
    }else if (Quadrado[0].backgroundImage =='url(\"/circulo.png\")' && Quadrado[4].backgroundImage =='url(\"/circulo.png\")' && Quadrado[8].backgroundImage =='url(\"/circulo.png\")'){
        console.log('deu certo')
        Quadrado[0].backgroundImage=circuloazul
        Quadrado[4].backgroundImage=circuloazul
        Quadrado[8].backgroundImage=circuloazul
        win("player1");
    }else if (
    Quadrado[2].backgroundImage =='url(\"/circulo.png\")' && 
    Quadrado[4].backgroundImage =='url(\"/circulo.png\")' && 
    Quadrado[6].backgroundImage =='url(\"/circulo.png\")'){
        console.log('deu certo')
        Quadrado[2].backgroundImage=circuloazul
        Quadrado[4].backgroundImage=circuloazul
        Quadrado[6].backgroundImage=circuloazul
        win("player1");
    }else if (Quadrado[3].backgroundImage =='url(\"/xxx.png\")' && Quadrado[4].backgroundImage =='url(\"/xxx.png\")' && Quadrado[5].backgroundImage =='url(\"/xxx.png\")'){
        console.log('deu certo')
        Quadrado[3].backgroundImage=xisazul
        Quadrado[4].backgroundImage=xisazul
        Quadrado[5].backgroundImage=xisazul
        win("player2");
    }else if (Quadrado[6].backgroundImage =='url(\"/xxx.png\")' && Quadrado[7].backgroundImage =='url(\"/xxx.png\")' && Quadrado[8].backgroundImage =='url(\"/xxx.png\")'){
        console.log('deu certo')
        Quadrado[6].backgroundImage=xisazul
        Quadrado[7].backgroundImage=xisazul
        Quadrado[8].backgroundImage=xisazul
        win("player2");
    }else if (Quadrado[0].backgroundImage =='url(\"/xxx.png\")' && Quadrado[3].backgroundImage =='url(\"/xxx.png\")' && Quadrado[6].backgroundImage =='url(\"/xxx.png\")'){
        console.log('deu certo')
        Quadrado[0].backgroundImage=xisazul
        Quadrado[3].backgroundImage=xisazul
        Quadrado[6].backgroundImage=xisazul
        win("player2");
    }else if (Quadrado[1].backgroundImage =='url(\"/xxx.png\")' && Quadrado[4].backgroundImage =='url(\"/xxx.png\")' && Quadrado[7].backgroundImage =='url(\"/xxx.png\")'){
        console.log('deu certo')
        Quadrado[1].backgroundImage=xisazul
        Quadrado[4].backgroundImage=xisazul
        Quadrado[7].backgroundImage=xisazul
        win("player2");
    }else if (Quadrado[2].backgroundImage =='url(\"/xxx.png\")' && Quadrado[5].backgroundImage =='url(\"/xxx.png\")' && Quadrado[8].backgroundImage =='url(\"/xxx.png\")'){
        console.log('deu certo')
        Quadrado[2].backgroundImage=xisazul
        Quadrado[5].backgroundImage=xisazul
        Quadrado[8].backgroundImage=xisazul
        win("player2");
    }else if (Quadrado[0].backgroundImage =='url(\"/xxx.png\")' && Quadrado[4].backgroundImage =='url(\"/xxx.png\")' && Quadrado[8].backgroundImage =='url(\"/xxx.png\")'){
        console.log('deu certo')
        Quadrado[0].backgroundImage=xisazul
        Quadrado[4].backgroundImage=xisazul
        Quadrado[8].backgroundImage=xisazul
        win("player2");
    }else if (
    Quadrado[2].backgroundImage =='url(\"/xxx.png\")' && 
    Quadrado[4].backgroundImage =='url(\"/xxx.png\")' && 
    Quadrado[6].backgroundImage =='url(\"/xxx.png\")'){
        console.log('deu certo')
        Quadrado[2].backgroundImage=xisazul
        Quadrado[4].backgroundImage=xisazul
        Quadrado[6].backgroundImage=xisazul
        win("player2");
    }{

    }
}
function clickn(){

    document.location.reload()

}

var contadorObj=[ ]


function contador(){
    if (contadorObj.length==9){
        console.log(contadorObj.length)
        bodyConfig.innerHTML="<div id='playerAlert'>EMPATE!!!!</div><button id='reload' onclick='clickn()'>Reload</button>"
        
        styleMssg()
    }

    
}

function styleMssg(){

    buttoN1.display="none"
    buttoN2.display="none"
    bodyConfig.style.backgroundImage="none"
    bodyConfig.style.backgroundColor="white"


    let reload = document.getElementById('reload')
    let playerAlert = document.getElementById('playerAlert')
    reload.style.display="flex"
    reload.style.marginLeft="140px"
    reload.style.marginTop="100px"
    reload.style.width="100px"
    reload.style.height="40px"
    reload.style.padding="10px"
    playerAlert.style.fontSize="40px"
    playerAlert.style.marginTop="100px"
    playerAlert.style.marginLeft="50px"
    playerAlert.style.color="green"



}

function win (param){
   

    if (param=="player1"){
        bodyConfig.innerHTML="<div id='playerAlert'>Player 1 venceu</div><button id='reload' onclick='clickn()'>Reload</button>"
    }else if (param=="player2"){
        bodyConfig.innerHTML="<div id='playerAlert'>Player 2 venceu</div><button id='reload' onclick='clickn()'>Reload</button>"
    }


   styleMssg()
    

        


        
   
}

function makeoff1() {
    verificaPLayer(0);
    seq1();
    contadorObj.push(1)
    contador();
}

function makeoff2() {
    verificaPLayer(1);
    seq1();
    contadorObj.push(1)
    contador();
}

function makeoff3() {
    verificaPLayer(2);
    contadorObj.push(1)
    seq1();
    contador();
}

function makeoff4() {
    verificaPLayer(3);
    contadorObj.push(1)
    seq1();
    contador();
}

function makeoff5() {
    verificaPLayer(4);
    contadorObj.push(1)
    seq1();
    contador();
}
function makeoff6() {
    verificaPLayer(5);
    contadorObj.push(1)
    seq1();
    contador();
}

function makeoff7() {
    verificaPLayer(6);
    contadorObj.push(1)
    seq1();
    contador();
}

function makeoff8() {
    verificaPLayer(7);
    contadorObj.push(1)
    seq1();
    contador();
}

function makeoff9() {
    verificaPLayer(8);
    contadorObj.push(1)
    seq1();
    contador();
}