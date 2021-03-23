function areaOfTriangle(a,b,c){
    var s = 1/2 * (a+b+c); // s = semiperimeter
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}