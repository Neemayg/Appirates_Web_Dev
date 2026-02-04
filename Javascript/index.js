// // console.log(a);

// // var a = 10;
// // console.log(a);

// // let b = 20;
// // b = "sddsf";
// // console.log(b);
// // const c = 30;
// // c = 89;
// // console.log(c);

// // {
// //   var a = 30;
// //   let b = 40;
// //   console.log(a);
// //   console.log(b);
// // }
// // console.log(a);
// // console.log(b);
// // Named Function
// function a() {
//   console.log("Hello World");
//   console.log("Hello World");
//   console.log("Hello World");
// }

// a();
// // b();
// // function Expression
// let b = function () {
//   console.log("Function Expresion");
// };

// b();

// // Arrow Function
// let c = () => {
//   console.log("Arrow Function");
// };

// c();

// // IIfe Immediately invoked function Expression/ Callback

// (() => {
//   console.log("IIFE");
// })();
// console.log(20 - "2");

// Dom Manipulation

// Tag Name Selector
// let headings = document.getElementsByTagName("h1");
// console.log(headings[0]);

// let classes = document.getElementsByClassName("a");
// console.log(classes[0]);

// let ids = document.getElementById("b");
// console.log(ids);

let qry = document.querySelector(".d");
console.log(qry);

// let qryAll = document.querySelectorAll("h1");
// console.log(qryAll);

console.log(qry.textContent);
// qry.textContent = "Hello from JS";
qry.classList.add("f");
qry.classList.remove("f");
qry.classList.toggle("g");

let b=document.createElement("h1");
b.textContent="Created from JS";
b.classList.add("d");
document.body.appendChild(b);



let c=document.createElement("ol");
let li=document.createElement("li")
li.textContent="23";
let li1=document.createElement("li")
li1.textContent="24";
let li2=document.createElement("li")
li2.textContent="25";
c.appendChild(li)
c.appendChild(li1)
c.appendChild(li2)

document.body.appendChild(c);


const btn = document.querySelector("button");
console.log(btn);
btn.addEventListener("click", () => {
  const ol = document.createElement("ol");
  let arr = ["hello", "world", "from", "JS"];
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.textContent = arr[i];
    ol.appendChild(li);
  }
  document.body.appendChild(ol);
});