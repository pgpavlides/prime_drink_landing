
    const section = document.querySelector('.sec')
    const section_c = document.querySelector('.sec::before')
    
    const bottle = document.querySelector('.content__imgBox--image')


    let startTime = performance.now();
    let opacity = 1;
    let step = -0.01;
    let duration = 1000;


    section.style.background = "linear-gradient(90deg, rgba(32,113,148,1) 0%, rgba(85,207,250,1) 52%, rgba(44,201,255,1) 100%)";
    
    
    
    
    const drink1 = document.querySelector('.thumb__drink1')
    


    drink1.addEventListener("click", function(){
        BottleOpacity(bottle) 
         
        section.style.setProperty("--opacity_child",0)
        
        setTimeout(function(){           
            bottle.style.opacity = "1"
            bottle.src = "/imgs/prime_blue.png"
            section.style.setProperty("--opacity_child",1)
            section.style.setProperty("--background_custom","linear-gradient(90deg, rgba(32,113,148,1) 0%, rgba(85,207,250,1) 52%, rgba(44,201,255,1) 100%)")
       }, 175);   
        bottle.style.transition = "all 0.2s" 
        
    })
    const drink2 = document.querySelector('.thumb__drink2')  
    drink2.addEventListener("click", function(){
        BottleOpacity(bottle)

        section.style.setProperty("--opacity_child",0)
        
        setTimeout(function(){           
            bottle.style.opacity = "1"
            bottle.src = "/imgs/prime_red.png"
            section.style.setProperty("--opacity_child",1)
            section.style.setProperty("--background_custom","linear-gradient(90deg, hsl(0, 52%, 35%), hsl(0, 84%, 54%))")
       }, 175);
        

       
        bottle.style.transition = "all 0.2s"
        

    })
    const drink3 = document.querySelector('.thumb__drink3')
    drink3.addEventListener("click", function(){      
        BottleOpacity(bottle)

        section.style.setProperty("--opacity_child",0)
        setTimeout(function(){
            
            bottle.style.opacity = "1"
            bottle.src = "/imgs/prime_green.png"
            section.style.setProperty("--opacity_child",1)
            section.style.setProperty("--background_custom","linear-gradient(90deg, hsl(113, 54%, 28%), hsl(130, 95%, 60%))")
       }, 175);
        

        
        bottle.style.transition = "all 0.2s"

    })
    const drink4 = document.querySelector('.thumb__drink4')
    drink4.addEventListener("click", function(){
        BottleOpacity(bottle)

        section.style.setProperty("--opacity_child",0)
        setTimeout(function(){
            
            bottle.style.opacity = "1"
            bottle.src = "/imgs/prime_purple.png"
            section.style.setProperty("--opacity_child",1)
            section.style.setProperty("--background_custom","linear-gradient(90deg, hsl(276, 51%, 34%), hsl(278, 98%, 55%))")
       }, 175);
        

        
        bottle.style.transition = "all 0.2s"

    })
    const drink5 = document.querySelector('.thumb__drink5')
    drink5.addEventListener("click", function(){     
        BottleOpacity(bottle)

        section.style.setProperty("--opacity_child",0)
        setTimeout(function(){
            
            bottle.style.opacity = "1"
            bottle.src = "/imgs/prime_white.png"
            section.style.setProperty("--opacity_child",1)
            section.style.setProperty("--background_custom","linear-gradient(90deg, hsl(0, 0%, 53%), hsl(0, 0%, 20%))")
       }, 175);
        

        
        bottle.style.transition = "all 0.2s"

    })
    const drink6 = document.querySelector('.thumb__drink6')
    drink6.addEventListener("click", function(){
         BottleOpacity(bottle)

         section.style.setProperty("--opacity_child",0)
        setTimeout(function(){
            
            bottle.style.opacity = "1"
            bottle.src = "/imgs/prime_3color.png"
            section.style.setProperty("--opacity_child",1)
            section.style.setProperty("--background_custom","radial-gradient(circle, rgba(249,21,21,1) 0%, rgba(238,238,238,1) 47%, rgba(44,201,255,1) 100%)")
       }, 175);
        

        
        bottle.style.transition = "all 0.2s"

    })

    function BottleOpacity(target){
        target.style.transition = "all 0.2s"
        target.style.opacity = "0"   
    }
    function appear(target) {
        target.style.transition = "all 0.2s"
        target.style.opacity = "1"
    }

    
    


