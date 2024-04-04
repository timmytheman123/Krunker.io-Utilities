#//change all instances of coasterm77 or timmytheman123 to whatever your username is    this is the whitelist system

obj cube = {};
bool healenabled = false;
obj playerbackup = {};
public action onNetworkMessage(str id, obj data, str playerID) {
  str message = toStr data;
  obj playerName = GAME.PLAYERS.findByID(playerID);
  str playerNameStr = toStr playerName.username;
  if (playerNameStr == "timmytheman123"){
     if (message == "-z") {
       (num) playerName.position.z -= 30;
     } else if (message == "-x"){
       (num) playerName.position.x -= 30;
     } else if (message == "+z"){
       (num) playerName.position.z += 30;
     } else if (message == "+x"){
       (num) playerName.position.x += 30;
     } else if (message == "+y"){
       (num) playerName.position.y += 60;
     } else if (message == "-y"){
       (num) playerName.position.y -= 10;
     };
  }
  if (playerNameStr == "coasterm77"){
     if (message == "-z") {
       (num) playerName.position.z -= 30;
     } else if (message == "-x"){
       (num) playerName.position.x -= 30;
     } else if (message == "+z"){
       (num) playerName.position.z += 30;
     } else if (message == "+x"){
       (num) playerName.position.x += 30;
     } else if (message == "+y"){
       (num) playerName.position.y += 60;
     } else if (message == "-y"){
       (num) playerName.position.y -= 10;
     };
  }
}
public action onChatMessage(str msg, str playerID){
    obj player = GAME.PLAYERS.findByID(playerID);
if(toStr player.username == "timmytheman123"){
        if(msg == "/score"){
player.score = 9999999;
        };
if (msg == "/admin"){
if((bool) player.onTerrain == false){
player.position.x = 279;
player.position.y = 345;
player.position.z = 3881;
}else if((bool) player.onTerrain == true){
GAME.CHAT.send(playerID, "Get off terrain", "#8fbabc");
}
        };
if (msg == "/freeze"){
GAME.TIME.freeze();
};
if (msg == "/unfreeze"){
GAME.TIME.unfreeze();
        };
if (msg == "/help"){
GAME.CHAT.send(playerID, "Use slash then put /score, /admin, /freeze, /unfreeze, /help,", "#8fbabc");
GAME.CHAT.send(playerID, "/heal, /invisible, /visible, /human, or /zombie.", "#8fbabc");
        };
if (msg == "/heal"){
while (true) {
if ((num) player.health != 100){
player.health = 100;
}
}
        };
if (msg == "/invisible"){
player.visible = false;
        };
if (msg == "/visible"){
player.visible = true;
        };
if (msg == "/human"){
player.team = 1;
        };
if (msg == "/zombie"){
player.team = 2;
        };
if (msg == "/test"){
player.class = "Triggerman";
        };
}
if(toStr player.username == "coasterm77"){
if(msg == "/score"){
player.score = 9999999;
        };
if (msg == "/admin"){
if((bool) player.onTerrain == false){
player.position.x = 279;
player.position.y = 345;
player.position.z = 3881;
}else if((bool) player.onTerrain == true){
GAME.CHAT.send(playerID, "Get off terrain", "#8fbabc");
}
        };
if (msg == "/freeze"){
GAME.TIME.freeze();
};
if (msg == "/unfreeze"){
GAME.TIME.unfreeze();
        };
if (msg == "/help"){
GAME.CHAT.send(playerID, "Use slash then put /score, /admin, /freeze, /unfreeze, /help,", "#8fbabc");
GAME.CHAT.send(playerID, "/heal, /invisible, /visible, /human, or /zombie.", "#8fbabc");
        };
if (msg == "/heal"){
while (true) {
if ((num) player.health != 100){
player.health = 100;
}
}
        };
if (msg == "/invisible"){
player.visible = false;
        };
if (msg == "/visible"){
player.visible = true;
        };
if (msg == "/human"){
player.team = 1;
        };
if (msg == "/zombie"){
player.team = 2;
        };
if (msg == "/test"){
player.class = "Triggerman";
        };
if (msg == "/block"){
cube = GAME.SCENE.addCube("", "#8fbabc", 0, -100, 0, 1, 1, 1);
cube.position.x = player.position.x;
cube.position.y = player.position.y;
cube.position.z = player.position.z;
        };

#//GAME.SCENE.addAsset("", player.position.x, player.position.y, player.position.z, 1, "#f8fbabc", data, onLoadCallBack)

}
}
