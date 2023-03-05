export class Component {

    static base;
    static instanciated = new Array();
    static init(base_name){
        Component.base = document.getElementById(base_name);
    }

    element;
    textelement;

    constructor(name) {
        this.element = Component.base.contentDocument.getElementById(name)
        this.textelement = Component.base.contentDocument.getElementById(name + '_text')
        if(this.textelement){
            this.textelement.style.display = "none";
        }
        this.element.addEventListener("mouseover",this.#On.bind(this),false)
        this.element.addEventListener("mouseleave",this.#Off.bind(this),false)
        Component.instanciated.push(this);
    }

    #On(){
        this.element.style.fill= "#8ddb23"
        this.element.style.cursor = "pointer"
        if(this.textelement){
            this.textelement.style.display = "";
        }
    }
    #Off() {
        this.element.style.fill = "#ffffff"
        this.element.style.cursor = "default"
        if(this.textelement){
            this.textelement.style.display = "none";
        }
    }

    blink(color = "#ff00ff"){
        this.element.style.fill = color
    }
  
}