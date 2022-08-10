//bài 1
// function a() {
//     let b = parseInt(prompt("nhập j bn thik"))
//     let c = parseInt(prompt("nhập sô mày thích"))
//     return b + c 
// }
// console.log(a());

//bài 2

// function array(){
//     let arr = [1,2,3,4,5,6];
//     let a = 0;
//     for(let i = 0; i< arr.length;i++){
//     if(arr[i] %2 !== 0){
//         a = a + arr[i];
//     }
// }console.log(a)
// }
// array()

//bài 2.1
// function a(){
//     let b = Number(prompt("nhập số bất kì"))
//     let c = b*b
//     console.log(c)
// }
// a()

//bài 2.2

// function a(){
//     let bankinh = Number(prompt("nhập số bất kì"))
//     let dientich = bankinh*bankinh*Math.PI
//     let chuvi = bankinh *2 * Math.PI
// alert(`diện tích của hình tròn là ${dientich}`)
// alert(`chu vi của hình tròn là ${chuvi}`)
// }
// a()

// bài 2.3

//bài 2.4

// function number(){
//     let a = Number(prompt("nhập gì mày thích"))
    
//     if(a ===Number(a)){
//         console.log(`${a} là kí tự số : true`)
//     }else{
//        console.log(`${a} không phải là kí tự số : flase`)
//     }
// }
// number()

//bài 5
// function fineMax() {
//     let a = Number(prompt("nhập số m thik"))
//     let b = Number(prompt("nhập số "))
//     let c = Number(prompt("nhập số"))
//     d = Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)
//     if (a <= b && a <= c && d) {
//         console.log(`${a} là số nhỏ nhất`);
//     } else if (b <= a && b <= c && d) {
//         console.log(`${b} là số nhỏ nhất`);
//     } else if (c <= a && c <= b && d) {
//         console.log(`${c} là số nhỏ nhất`);
//     }
// } fineMax();
    
//bài 6
// function number(){
//     let a = Number(prompt("nhập số"))
//     let b = Number.isInteger(a)&&a>0
//     if(b===true){
//         console.log(`${a} là số nguyên : true`)

//     }else{
//        console.log(`${a} không phải là số nguyên : flase`)
//     }
// }number()

//bài 7
// function user(){
//     let a = Number(prompt("nhập vào số bất kì"))
//     let b = Number(prompt("nhập vào số bất kì"))
//     let temp = a;
//     a = b;
//     b= temp;
// console.log("a",a);
// console.log("b",b);
// }
// user();


//bài 3
// let bien = 1;
//  function songuyen(){
//     let a =  Number(prompt("nhập số"))
//     let c=Number.isInteger(a)&&a>0
//     if(c===true){
//     for(let i=1;i<=a;i++){
        
//         bien=bien*i
//        console.log(bien);
//     }
//  }
// }
// songuyen()

//bài 9


// function a() {
//     let array = prompt(`Hay nhap thu gi cung duoc`).split("");
//     let inPut = prompt(`Nhập một kí tự bất kì`);
//     let bienAo = 0;
//     for (i = 0; i < array.length; i++) {
//        if (array[i] === inPut) {
//           bienAo = bienAo + 1;
//        }
//     }
//     if (bienAo > 0) {
//        alert(`Kí tự xuất hiện ${bienAo} lần trong những thứ linh tinh đã nhập`)
//     } else {
//        alert(`Kí tự không có trong những thứ kia`)
//     }
// }
//  a()

//bài 8
// function a() {
//     let b = prompt(`Hay nhap thu gi cung duoc`).split("");
//     let c = prompt(`Nhập một kí tự bất kì`);
//     let bienAo = 0;
//     for (i = 0; i < b.length; i++) {
//        if (b[i] === c) {
//           bienAo = bienAo + 1;
//        }
//     }
//     if (bienAo > 0) {
//        alert(`Kí tự xuất hiện ${bienAo} lần trong những thứ linh tinh đã nhập`)
//     } else {
//        alert(`Kí tự không có trong những thứ kia`)
//     }
//  }
//  a()


