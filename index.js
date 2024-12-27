//console.log("heelll");
//document.getElementById("er").textContent = 'hello';
// n=window.prompt("what's the username?");
// console.log(n)
let g=0;
m=Number(g)
document.getElementById("in").onclick=function(){
      m+=1;
      document.getElementById("ans").textContent=m;
     
}
document.getElementById("de").onclick=function(){
      m-=1;
      document.getElementById("ans").textContent=m;
}
document.getElementById("re").onclick=function(){
      m=0;
      document.getElementById("ans").textContent=m;
}

