var gamesList = [];

var jsr = new JavaServerReader();
jsr.initialize();

var makeNewElements = function (title, genre, release_date, price, platform, rating, favourite, picture_url){
    var titleElement = document.createElement("p");
    var textnode = document.createTextNode(title);
    titleElement.appendChild(textnode);
    
    
    var image = document.createElement("img");
    if(title === "Fallout New Vegas"){
        image.setAttribute("height", "207");
        image.setAttribute("width", "309");
    }else{
        image.setAttribute("height", "326");
        image.setAttribute("width", "231");
    }
    
    image.setAttribute("alt", title);
    image.src = picture_url;
    
    document.getElementById("placehere").appendChild(titleElement);
    document.getElementById("placehere").appendChild(image);
    
};

