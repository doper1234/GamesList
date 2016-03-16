function JavaServerReader(){
    this.socket;
    
    this.initialize = function(){
        var ep = "/GamesList/";
            var whereToConnect;
            var where = "linode";//prompt("Where do you want to connect?", "linode");
            if(where === "linod")
            {
                whereToConnect = "85.159.209.9:8181";
            }
            else{
                whereToConnect = window.location.host;
            }
            console.log("Connecting to " + whereToConnect);
            if(window.location.protocol == "http:"){
                this.connect("ws://" + whereToConnect + ep);
            } 
            else{
                this.connect("wss://" + whereToConnect + ep);
            }
            
    }
    this.connect = function(host){
        if("WebSocket" in window)
        {
            socket = new WebSocket(host);
        } else if("MozWebSocket" in window){
            socket = new MozWebSocket(host);
        }
        else {
            console.log("Error: WebSocket is not supported by this browser");
            return;
        }
        
        socket.onopen = function(message){
            console.log("Info: connection opened");};
        socket.onclose = function(){
            console.log("Info: connection closed");
        };
        socket.onmessage = function(message){
            //console.log(message.data);
            var gameLength = 8;
            var result = message.data.split("game ");
            for(var i = 1; i < result.length; i++){
                var gameData = result[i].split("/ ");
                var title, genre, releaseDate, price, platform, rating, favourite, picURL;
                title = gameData[0];
                genre = gameData[1];
                releaseDate = gameData[2];
                price = gameData[3];
                platform = gameData[4];
                rating = gameData[5];
                favourite = gameData[6];
                picURL = gameData[7];
                gamesList.push(new Game(title, genre, releaseDate, price, platform, rating, favourite, picURL));
                makeNewElements(title, genre, releaseDate, price, platform, rating, favourite, picURL);
            }
            console.log(gamesList);
            
        };
    };
}
/*var Echo = Echo || {};

        Echo.sendMessage = function(){
            console.log("sending message");
            Echo.socket.send(playerXLoc + " " +  playerYLoc + " " + directionFacing);
//            var echo = $("#echo");
//            var message = echo.val();
//            if(message !=""){
//                Echo.socket.send(message);
//                echo.val("");
//            }
        };

        Echo.sendDirection = function(direction){
            Echo.socket.send(direction);
        };

        Echo.sendPlayerLocation = function(){
            Echo.socket.send(player.number + " " + player.x + " " + player.y);
        };

        Echo.connect = function(host){
            if("WebSocket" in window)
            {
                Echo.socket = new WebSocket(host);
                document.getElementById("bulletLocation").innerHTML =("connected");
                document.getElementById("bulletLocation").style.color = ("green");
                connected = true;
            } else if("MozWebSocket" in window) 
            
            {
                Echo.socket = new MozWebSocket(host);
                document.getElementById("bulletLocation").innerHTML =("connected");
                document.getElementById("bulletLocation").style.color = ("green");
                connected = true;
            }
            else {
                console.log("Error: WebSocket is not supported by this browser");
                return;
            }
            socketOpen = true;

            Echo.socket.onopen = function(message){
                console.log("Info: connection opened");
//                if(message.data === 1){
//                    host = true;
//                }
        //        player.number = message.data;
        //        console.log("player number is " + player.number);
                /*$("#echo")
                /*window.onkeydown = function (evt) {
                   var direction ="";
                   if(evt.keyCode ==  13){
                       //console.log("enter");
                        Echo.sendMessage();
                   }
                   if(evt.keyCode == 38){
                       //up
                       player.y--;
                       direction="up";
                   }
                   if(evt.keyCode == 40){
                       //down
                       player.y++;
                       direction="down"
                   }
                   if(evt.keyCode == 37){
                       //left
                       player.x--;
                       direction="left";
                   }
                   if(evt.keyCode == 39){
                       //right
                       player.x++;
                       direction="right";
                       //Echo.sendMessage()
                   }
                   if(direction !=""){
                    //Echo.sendDirection(direction);    
                    Echo.sendPlayerLocation();
                   }
                   //alert(evt.keyCode);
                   //ctx.clearRect(0,0,c.width,c,height);
                   $("#echoBack").text(player.x + " " + player.y + " 2" + 
                                       player2.x + " " + player2.y + " 3" + 
                                       player3.x + " " + player3.y + " 4" + 
                                       player4.x + " " + player4.y);
                   //player.drawPlayer();
                   //player2.drawPlayer();
                };
            };
            Echo.socket.onclose = function() */
        

