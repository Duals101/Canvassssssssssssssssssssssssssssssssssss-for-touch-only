var lastX,lastY;
canvas=document.getElementById("Just_lose_it");
ctx=canvas.getContext("2d")
color="darkblue";
linewidth=1
width=screen.width;
newwidth=screen.width-101;
newhieight=screen.height-303;
if(width<992){
    document.getElementById("Just_lose_it").width=newwidth;
    document.getElementById("Just_lose_it").height=newheight;
    document.body.style.overflow="hidden;"
}
canvas.addEventListener("touchstart", touchstart);
function touchstart(e){
    color=document.getElementById("color").value;
    linewidth=document.getElementById("linewidth").value;
    lastX=e.touches[0].clientX-canvas.offsetLeft
    lastY=e.touches[0].clientY-canvas.offsetTop
} 

canvas.addEventListener("touchmove", touchmove);
function touchmove(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft;
    currentY=e.touches[0].clientY-canvas.offsetTop;
  
        ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
    
    lastX=currentX;
    lastY=currentY;
    
}
function cleararea(){
ctx.clearRect(0, 0, canvas.width, canvas.height); 
}