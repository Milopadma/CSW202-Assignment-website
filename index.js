
function buttonStartHere(){
    window.location.href = "roomlist.html";
}

//toggle show and hide of the dropdown content
function dropdownOpen(){
    document.getElementById("dropdownContent").classList.toggle("show");
}

//if user clicks outside of it, close the dropdown
window.onclick = function(event){
    if (!event.target.matches('#buttonIcon')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}


//check the current page
function checkPage(){
    if (window.location.href.indexOf("index") > -1){
        document.getElementById("homeNavButton").classList.add("activePage");
        console.log("home");
        setSlideshowScroll();
    }
    else if (window.location.href.indexOf("about") > -1){
        document.getElementById("aboutNavButton").classList.add("activePage");
        console.log("about");
    }
    else if (window.location.href.indexOf("roomlist") > -1){
        document.getElementById("roomlistNavButton").classList.add("activePage");
        console.log("roomlist");
    }
}

//sets the slideshow to scroll to the middle 
function setSlideshowScroll(){
    var slideshows = document.getElementsByClassName("slideshow-container"); //getElementsByClassName returns an array-like object
    for (var i = 0; i < slideshows.length; i++){ //iterate over all elements with the class "slideshow-container"
        var slideshow = slideshows[i];
        var middle = slideshow.children[Math.floor((slideshow.children.length - 1) / 2 )]; //find the middle section of the slideshow
        slideshow.scrollLeft = middle.offsetLeft + middle.offsetWidth / 2 - slideshow.offsetWidth / 2; //set the scroll to the middle section
    }

}

window.onload = function(){
    checkPage();
}

