let canvas=/** @type {HTMLCanvasElement}*/(document.getElementById("UI"));
canvas.height=window.innerHeight;
canvas.width=window.innerHeight;
let button=document.getElementById('button');
button.addEventListener("click",()=>{
    document.documentElement.requestFullscreen()
})

let c=canvas.getContext('2d');
var x=100;
var y=20;
var v=69;
var angle=69;
var r=50;
var m=1.4
var kf=.098;
var g=9.8;
var cr=.961;

function velocity(magnitude,angle){
    this._v_=magnitude,
    this.a_rad=angle*(3.14159/180),
    this.a_deg=angle,
    this.getvx=()=>magnitude*Math.cos(this.a_rad),
    this.getvy=()=>magnitude*Math.sin(this.a_rad)
}
function striker(mass,r,color,kf,cr,velocity,position){
    this.render=()=>{
        draw(this.r,this.color);
    }
}


function animate()
{
    var collision=0;
    requestAnimationFrame(animate);

    //drawing part
    c.clearRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.arc(x,y,r,0,Math.PI*2,false);
    c.strokeStyle='blue'
    c.stroke();
    c.fillStyle='red';
    c.fill();

    dx=v*Math.cos(angle*(3.14)/180);
    dy=v*Math.sin(angle*(3.14)/180);
    x=x+dx;
    y=y+dy;

    if(x+r>canvas.width || x-r<0){
        angle=180-angle;
        collision=1;
    }
    if(y+r>canvas.height  || y-r<0){
        angle=360-angle;
        collision=1;
    }
    if(collision==1){
        v=v*cr;
    }
    if(collision==0){
        if(v>0){
            v=v-(kf*g);
        }else{
            v=0;
        }
    }

}
animate();

