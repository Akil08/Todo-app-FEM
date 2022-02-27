var userInput = document.querySelector("#input-value");
var page = document.querySelectorAll(".last-items p");
var dupPage = document.querySelectorAll("#dup p");
var todoItems = document.querySelector(".todo-items");
var leftItems = document.querySelector(".left-items");
var checkedCircle = document.getElementsByClassName("c");
var checkedCircleCount = checkedCircle.length;
// var ul = document.querySelector("ul");
var ul = document.getElementById("ul");
var clear = document.querySelector(".clear-completed");
var toggle = document.querySelector(".heading img")
var totalList = 0;

userInput.addEventListener("change",function(){
    
    // count left items
    checkedCircleCount++;
    leftItems.innerHTML = checkedCircleCount;

    // which todo items is shown
    page[0].classList.add("page");
    page[1].classList.remove("page");
    page[2].classList.remove("page");

    // creating new list
    var list = document.createElement("li");
    var todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    var content = document.createElement("div");
    content.classList.add("content");
    var c = document.createElement("span");
    c.classList.add("c");
    var paragraph = document.createElement("p");
    paragraph.textContent = this.value;
    var img = document.createElement("img");
    img.classList.add("cross");
    var hr = document.createElement("span");
    hr.classList.add("hr");
    content.appendChild(c);
    content.appendChild(paragraph);
    img.setAttribute("src","images/icon-cross.svg")
    todoItem.appendChild(content);
    todoItem.appendChild(img);
    list.appendChild(todoItem);
    list.appendChild(hr);
    todoItems.appendChild(list);

    userInput.value = "";
});


ul.addEventListener("click",function(e){
    // console.log(e.target.tagName)
    if(e.target.classList.contains("c") && e.target.parentNode.classList.contains("display") ) {
        e.target.parentNode.parentNode.parentNode.classList.remove("done-todo")
        e.target.parentNode.classList.remove("display");
        e.target.classList.remove("check")
        checkedCircleCount++;
        leftItems.innerHTML = checkedCircleCount;
    }
    else if(e.target.classList.contains("c") && !e.target.parentNode.classList.contains("display") ) {
        e.target.parentNode.parentNode.parentNode.classList.add("done-todo")
        e.target.parentNode.classList.add("display");
        e.target.classList.add("check");
        totalList++;
        checkedCircleCount--;
        leftItems.innerHTML = checkedCircleCount;
        // console.log(e.target.parentNode.textContent);
    } 
    else if(e.target.tagName === "IMG" ){ 
        totalList--;
        if(!e.target.parentNode.parentNode.classList.contains("done-todo")){
            checkedCircleCount--;
            leftItems.innerHTML = checkedCircleCount;
        }
        ul.removeChild(e.target.parentNode.parentNode)
    }
})



page[0].addEventListener("click",function(){
  page[0].classList.add("page");
  page[1].classList.remove("page");
  page[2].classList.remove("page");
  
  for(var i=0; i<ul.children.length; i++){
      if(ul.children[i].classList.contains("hide")){
          ul.children[i].classList.remove("hide")
      }
  }
});

dupPage[0].addEventListener("click",function(){
    dupPage[0].classList.add("page");
    dupPage[1].classList.remove("page");
    dupPage[2].classList.remove("page");
    
    for(var i=0; i<ul.children.length; i++){
        if(ul.children[i].classList.contains("hide")){
            ul.children[i].classList.remove("hide")
        }
    }
  });

page[1].addEventListener("click",function(){
   
    page[0].classList.remove("page");
    page[1].classList.add("page");
    page[2].classList.remove("page");
  
  for(var i=0; i<ul.children.length; i++){
      if(ul.children[i].classList.contains("done-todo")){
        ul.children[i].classList.add("hide");
      }else{
        ul.children[i].classList.remove("hide");
    }
  }
});

dupPage[1].addEventListener("click",function(){
   
    dupPage[0].classList.remove("page");
    dupPage[1].classList.add("page");
    dupPage[2].classList.remove("page");
  
  for(var i=0; i<ul.children.length; i++){
      if(ul.children[i].classList.contains("done-todo")){
        ul.children[i].classList.add("hide");
      }else{
        ul.children[i].classList.remove("hide");
    }
  }
});

page[2].addEventListener("click",function(){
  
    page[0].classList.remove("page");
    page[1].classList.remove("page");
    page[2].classList.add("page");

    for(var i=0; i<ul.children.length; i++){
        if(ul.children[i].classList.contains("done-todo")){
          ul.children[i].classList.remove("hide");
        }else{
            ul.children[i].classList.add("hide");
        }
    }
});


dupPage[2].addEventListener("click",function(){
  
    dupPage[0].classList.remove("page");
    dupPage[1].classList.remove("page");
    dupPage[2].classList.add("page");

    for(var i=0; i<ul.children.length; i++){
        if(ul.children[i].classList.contains("done-todo")){
          ul.children[i].classList.remove("hide");
        }else{
            ul.children[i].classList.add("hide");
        }
    }
});


clear.addEventListener("click",function(){
    var x = ul.children.length;

   while( totalList!= 0 ){

    for(var i=0; i<ul.children.length; i++){
       
        if(ul.children[i].classList.contains("done-todo")){
            totalList--;
            // x--;
            // if( x === 0) break;
            ul.removeChild(ul.children[i]);
            // if( x === 0) break;/
        }
    }
    
   } 

})

toggle.addEventListener("click",function(){
   if( document.querySelector("body").classList.contains("day") ){
        document.querySelector("body").classList.remove("day")
        document.querySelector("body").classList.add("night")
    } else {
        document.querySelector("body").classList.add("day")
        document.querySelector("body").classList.remove("night")
    }
})













