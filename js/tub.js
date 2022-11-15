
let n=9
let a=0
let i=1;
while (  i<=n){
  if (n%i==0) {
    a+=1
  }
  i++
}
if (a ==2){
  console.log("Tub son");
}
else{
  console.log("Tub emas");
}
