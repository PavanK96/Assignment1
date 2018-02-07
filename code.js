/* 
BTP 600 Assignment 1
Pavan Kamra, Zufishan Ali, and Zukhruf Khan
*/

var startButton;
var size = 13;
var num = [size];
var blocks = [size];
var isPlaying=false;
var i=1;
var j=0;
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//randomize the num array
var ctr = size, temp, index;
while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = num[ctr];
    num[ctr] = num[index];
    num[index] = temp;
}
 
function setup(){
    //this function is called exactly one time when the sketch starts
    createCanvas(1100,545);
    startButton = createButton("Play");
    startButton.position(200, 350);
    startButton.mousePressed(play);
    pauseButton = createButton("Pause");
    pauseButton.position(300, 350);
    pauseButton.mousePressed(pause);
     
    frameRate(5);
    //loop();
}
 
function draw(){
    //draws a grey background (this effectively erases the previous frame)
    background(43,43,43);
    drawArray();

    if (isPlaying) {
        update();
    }
}
 
function drawArray() {
    for (var i = 0; i < num.length; i++) {
        drawSqWithNum(num[i], (0,0,0), (255,255,255), 50, 20+(i*51), 20, i); // co (23, 32, 42)
    }
     
}
 
//draws a square with the number c inside it.  Assume that c is 2 digits max.
//offsetX and offsetY are positional offset from top left corner of drawarea.
//co is colour of text
//sz is size of the square
function drawSqWithNum(c, co, bg, sz, offsetX, offsetY, i){
    stroke(0);
    fill(bg);
    rect(offsetX,offsetY,sz,sz);
    stroke(co);
    fill(co);
    textAlign(CENTER);
    textSize(20);
    blocks[i] =text(c,offsetX+0.5*sz,offsetY+(sz*0.5)+5);
}
   
function play(){
    if(isPlaying==false){
        isPlaying=true;
        loop();
    }
}

function pause(){
    if(isPlaying){
        isPlaying=false;
        noLoop();
    }
}

function update() {
    if(j < num.length -1){
        if(num[j] > num[j+1]){
            var tmp = num[j];
            num[j]=num[j+1];
            num[j+1]=tmp;
        }
        j++;
    }
    else{
        j=0;
    }
    //document.getElementById("msg").textContent = "Done bubble sort!";
}
