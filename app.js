var inputdata = document.getElementById("input");

var addbutton = document.getElementById("button");

var toodolist = document.getElementById("todolist");

var data = [];


addbutton.addEventListener("click",() => {
    data.push(inputdata.value)
    console.log(data)

    inputdata.value=" "
    toShowData();
});

function toShowData(item, index){
    toodolist.innerHTML = " "

     data.forEach((item,index)=>{
        console.log(item)
        toodolist.innerHTML += `<li>${item}   <a onclick="EditItem(${index})"> Edit</a>  <a onclick="deleteitem (${index})">x | </a></li>`

     })
}


 function deleteitem(i) {
    data.splice(i,1)
    toShowData();
 }

 function EditItem(i){
    var newText = prompt("Enter the new text")
    data.splice(i,1,newText)
    toShowData();
 }