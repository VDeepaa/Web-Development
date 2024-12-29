var popupoverlay = document.querySelector(".popup-overlay")
var input = document.querySelector(".popup-box")
var button = document.getElementById("addbtn")
button.addEventListener("click",function(){
     popupoverlay.style.display="block"
     input.style.display="block"
})


var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
     input.style.display="none"
}) 
var container = document.querySelector(".container")
var addpopup = document.getElementById("add-popup")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescribe = document.getElementById("book-describe")
    

addpopup.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
     div.setAttribute("class","content")
     div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescribe.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    input.style.display="none"
     
})

function deletebook(event)
{
    event.target.parentElement.remove()
}