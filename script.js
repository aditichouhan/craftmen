
let circle=document.querySelector(".circle2");
let triangle=document.querySelector(".triangle");
let chhota=document.querySelector("chhotabox");
let about=document.querySelector(".about");
let work=document.querySelector("work");
let down= document.querySelector("down");

let divblue= document.querySelector("left");

divblue.addEventListener(`mouseenter`,function(){
    circle.style .backgroundColor='rgb(230,129,126)';
    chhota.style.backgroundColor= 'rgb(201,213,219)';
    triangle.style.borderBottomColor='rgb(212,230,136)';
    console.log('son of a bitch im in')
})


divblue.addEventListener(`mouseout`,function(){
    circle.style .backgroundColor='rgb(170,156,233)';
    chhota.style.backgroundColor= 'rgb(170,156,233)';
    triangle.style.borderBottomColor='rgb(170,156,233)';
    console.log('son of a bitch im in')
})

about.addEventListener('mouseenter',function(){
    chhota.style.height="7vmax";
    chhota.style.width="7vmax";
    circle.style.height="2.5vmax";
    circle.style.width="2.5vmax";
    triangle.style.borderLeftWidth="1.2vmax";
    triangle.style.borderRightWidth="1.2vmax";
    triangle.style.borderBottomWidth="2.4vmax";
    chhota.style.backgroundColor='rgb(201,213,219)';
    console.log('son of a bitch im in')
})
about.addEventListener('mouseenter',function(){
    chhota.style.height="5vmax";
    chhota.style.width="5vmax";
    circle.style.height="5vmax";
    circle.style.width="5vmax";
    triangle.style.borderLeftWidth="2.5vmax";
    triangle.style.borderRightWidth="2.5vmax";
    triangle.style.borderBottomWidth="5vmax";
    chhota.style.backgroundColor='rgb(170,156,233)';
    console.log('son of a bitch im in out')
})

Work.addEventListener('mouseout',function(){
    circle.style.height="5vmax";
    circle.style.width="5vmax";
    chhota.style.height="2.5vmax";
    chhota.style.width="2.5vmax";
    triangle.style.borderLeftWidth="1.2vmax";
    triangle.style.borderRightWidth="1.2vmax";
    triangle.style.borderBottomWidth="2.4vmax";
    circle.style.backgroundColor= 'rgb(230,129,126)';
    console.log('son of a bitch im in')
})
Work.addEventListener('mouseout',function(){
    chhota.style.height="5vmax";
    chhota.style.width="5vmax";
    circle.style.height="5vmax";
    circle.style.width="5vmax";
    triangle.style.borderLeftWidth="1.2vmax";
    triangle.style.borderRightWidth="1.2vmax";
    triangle.style.borderBottomWidth="2.4vmax";
    circle.style.backgroundColor= 'rgb(170,156,233)';
    console.log('son of a bitch im in out')
})
down.addEventListener('mouseout',function(){
    chhota.style.height="2.5vmax";
    chhota.style.width="2.5vmax";
    circle.style.height="2.5vmax";
    circle.style.width="2.5vmax";
    triangle.style.borderLeftWidth="4vmax";
    triangle.style.borderRightWidth="4vmax";
    triangle.style.borderBottomWidth="8vmax";
    circle.style.backgroundColor= 'rgb(212,230,136)';
    console.log('son of a bitch im in ')
})

down.addEventListener('mouseout',function(){
    chhota.style.height="5vmax";
    chhota.style.width="5vmax";
    circle.style.height="5vmax";
    circle.style.width="5vmax";
    triangle.style.borderLeftWidth="2.5vmax";
    triangle.style.borderRightWidth="2.5vmax";
    triangle.style.borderBottomWidth="5vmax";
    circle.style.backgroundColor= 'rgb(170,156,233)';
    console.log('son of a bitch im in out ')
})


gsap.to(".leftsite line1",{
x:25,
scrollTrigger: {
    trigger:".leftsite line1",
    scroll:body,
    start:"top 80%",
    end:"centre 30%",
    scrub:true
}
})
