let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let itm = document.createElement("li");
    itm.innerText = inp.value;
    let delOne=document.createElement("button") 
    delOne.innerText="delete"
    delOne.classList.add("delete");
    itm.appendChild(delOne);
    ul.appendChild(itm); 
    inp.value ="";
})
//Event Delegation
ul.addEventListener("click",function(){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");

    }
   
})
/////////Problem

// let delbtns = document.querySelectorAll(".delete");
// for(delOne of delbtns){
//     delOne.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();                
//     });
// }