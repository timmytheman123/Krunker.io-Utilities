public action onKeyPress(str key, num code) {
 if (code == 39) {  #right arrow
 GAME.NETWORK.send("move","+z");
 } else if (code == 37) { #left arrow
 GAME.NETWORK.send("move","-z");
 } else if (code == 38) { #up arrow
 GAME.NETWORK.send("move","+x");
 } else if (code == 40) { #down arrow
 GAME.NETWORK.send("move","-x");
 } else if (code == 189) { #minus sign
 GAME.NETWORK.send("move","-y");
 } else if (code == 187) { #plus sign
 GAME.NETWORK.send("move","+y");
 };
}
