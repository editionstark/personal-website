function velocity(magnitude,angle){
    this._v_=magnitude,
    this.a_rad=angle*(3.14159/180),
    this.a_deg=angle,
    this.getvx=()=>magnitude*Math.cos(this.a_rad),
    this.getvy=()=>magnitude*Math.sin(this.a_rad)

}
var v1=new velocity(2*(3**(1/2)),30);
console.log(v1.getvy());


