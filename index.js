
let myLeads = 0;
let myInput = document.getElementById("form");
let inputBtn = document.getElementById("inputBtn");
let myOl = document.getElementById("myOl");
let fastTrack = document.getElementById("fastTrack");
let checkIn =document.getElementById("checkIn");

inputBtn.addEventListener("click",() =>{
    let listItems = document.createElement("li");
    listItems.textContent = myInput.value;
    myOl.appendChild(listItems);
})

fastTrack.addEventListener("click",() =>{
    let listItems = document.createElement("li");
    listItems.textContent = myInput.value;
    myOl.appendChild(listItems);

    let list = document.getElementById("myOl");
    list.insertBefore(listItems,list.childNodes[0]);
})

checkIn.addEventListener("click",() =>{
   let list = document.getElementById("myOl");
   list.removeChild(list.childNodes[0]);
} )


