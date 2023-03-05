import {Component}  from "./component.js";

var ma = document.getElementById("representation");

fetch('/first_page.json')
    .then((response)=>response.json())
    .then((json) => init_bis(json))

function init_bis(json){
    Component.init("representation")
    json.Elements.forEach(element => {
        new Component(element.name)
    });
    console.log(Component.instanciated)
    // random_item(Component.instanciated).blink()
}


function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}