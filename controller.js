function finalePosition(objct,grnd){
    this.X1=objct.X;
    this.Y1=objct.Y;
    this.getfinale=function(){
        let finaleposi=new Array();
        let v=velo.magnitude;
        let Q=velo.angle;
        let h=grnd.height;
        let b=grnd.width;
        let timex=v*Math.cos(Q)*(this.X1-b);
        let timey=v*Math.sin(Q)*(this.Y1-h);
        if(timex<timey){
            finaleposi["x"]=b;
            finaleposi["y"]=Math.tan(Q)*(b-this.X1)+this.Y1;
        }else{
            finaleposi["y"]=h;
            finaleposi["x"]=(1/Math.tan(Q))*(h-this.Y1)+this.X1;
        }
        return(finaleposi);
    }
}

function velocity(m,th){
    this.magnitude=m;
    this.angle=th*(Math.PI/180);
    this.Xcomp=m*(Math.cos(this.angle));
    this.Ycomp=m*(Math.sin(this.angle));
}

function squareGround(h,b){
    this.height=h;this.width=b;
}



function position(x,y){
    this.x=x;
    this.y=y;
    this.r=function(){
        let mag=((x**2)+(y**2))**(1/2);
        let angle=Math.atan2(x,y)*180*Math.PI;
        let r={
            magnitude:mag,
            anglewithX:angle,
            anglewithY:90-angle,
        }
        return r;
    }
}
function object(mass,velo,posi,forceonit,shape){
    this.x=posi.x;this.y=posi.y;
    this.velocity=velo;
    this.mass=mass;
    this.forceonit=forceonit;
    this.acceleration=this.forceonit/this.mass;
    this.speed=velo.magnitude;
}




