export default class Carrossel {
    
    constructor(img, content, target, time){
        this.img = document.querySelectorAll(img)
        this.content = document.querySelector(content)
        this.button = document.querySelectorAll(target)
        this.time = time;
        this.elements = this.img.length;
        this.index = 0
        this.widthContent = document.querySelector('.content-img').clientWidth;
    }
    addEvent(){
        this.button[0].addEventListener('click',()=>{
            this.back();
        })
        this.button[1].addEventListener('click',()=>{
            this.forward();
        })          
    }

    back(){
       this.index--
       if(this.index < 0){
           this.index = (this.elements - 1)
       }       
       this.updateMargin()
    }
    forward(){
       this.index++
       if(this.index > ( this.elements - 1)){
           this.index = 0
       }
       this.updateMargin()
    }

    updateMargin(){
       
        let newMargin = `-${this.widthContent * this.index}`;
        console.log(newMargin)
        this.content.style.marginLeft = `${newMargin}px`
      
    }

    init(){
        this.addEvent();        
         document.querySelector('.content-img').style.width = `${this.elements *  this.widthContent}px`;
         setInterval(() => {
            this.forward();  
      },  this.time);
    }
       
    

}
