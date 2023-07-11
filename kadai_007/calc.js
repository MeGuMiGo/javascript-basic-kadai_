let num = Math.floor(Math.random() *30);

if (num % 3 === num) {
  console.log("3の倍数です");
} 
else if (num % 5 === num) {
  console.log("5の倍数です");
} 
else if (num % 15 === num) {
  console.log("3と5の倍数です");
}
else {
  console.log(num);
}
