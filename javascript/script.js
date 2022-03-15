document.querySelectorAll(".slider-bullets-button").forEach(function(button){
    button.addEventListener("click", function(evt){
        console.log(evt.target.dataset.screen);
        document.querySelector(".slider-item--active").classList.remove("slider-item--active");
        document.querySelector(".screen-"+evt.target.dataset.screen).classList.add("slider-item--active");
        document.querySelector(".slider-bullets-button-current").classList.remove("slider-bullets-button-current");
        evt.target.classList.add("slider-bullets-button-current");
    });
});

document.querySelector(".slider-next").addEventListener("click", function(){    
    let activeScreenNumber = 1 * document.querySelector(".slider-item--active").dataset.screen;
    console.log(activeScreenNumber + 1)
    if ((activeScreenNumber + 1) < 4){
        document.querySelector(".slider-item--active").classList.remove("slider-item--active");
        document.querySelector(".screen-" + (activeScreenNumber + 1)).classList.add("slider-item--active");
        document.querySelector(".slider-bullets-button-current").classList.remove("slider-bullets-button-current");
        document.querySelector(".slider-bullets-button-"+ (activeScreenNumber + 1)).classList.add("slider-bullets-button-current");
    } else {
        document.querySelector(".slider-item--active").classList.remove("slider-item--active");
        document.querySelector(".screen-" + 1).classList.add("slider-item--active");
        document.querySelector(".slider-bullets-button-current").classList.remove("slider-bullets-button-current");
        document.querySelector(".slider-bullets-button-"+ 1).classList.add("slider-bullets-button-current");
    }    
});

document.querySelector(".slider-prev").addEventListener("click", function(){    
    let activeScreenNumber = 1 * document.querySelector(".slider-item--active").dataset.screen;
    console.log(activeScreenNumber - 1)
    if ((activeScreenNumber - 1) > 0){
        document.querySelector(".slider-item--active").classList.remove("slider-item--active");
        document.querySelector(".screen-" + (activeScreenNumber - 1)).classList.add("slider-item--active");
        document.querySelector(".slider-bullets-button-current").classList.remove("slider-bullets-button-current");
        document.querySelector(".slider-bullets-button-"+ (activeScreenNumber - 1)).classList.add("slider-bullets-button-current");
    } else {
        document.querySelector(".slider-item--active").classList.remove("slider-item--active");
        document.querySelector(".screen-" + 3).classList.add("slider-item--active");
        document.querySelector(".slider-bullets-button-current").classList.remove("slider-bullets-button-current");
        document.querySelector(".slider-bullets-button-" + 3).classList.add("slider-bullets-button-current");
    }    
});

document.querySelectorAll(".services-button").forEach(function(button){
    button.addEventListener("click", function(evt){
        document.querySelector(".service-button--active").classList.remove("service-button--active");
        evt.target.classList.add("service-button--active");
        document.querySelector(".service-slider-item--active").classList.remove("service-slider-item--active");
        document.querySelector("." + evt.target.dataset.screen + "-img").classList.add("service-slider-item--active");
    });
});

document.querySelector(".catalog-button-open").addEventListener("click", function(evt){
    evt.preventDefault();
    document.querySelector(".catalog-sublist_container").classList.toggle("catalog-sublist--open");
});

document.querySelector(".navigation-user-cart").addEventListener("click", function(evt){
    evt.preventDefault();
    document.querySelector(".popover-cart").classList.toggle("popover-cart--open");
});