
//Common logic
import EventEmitter from "events";

//Common
import autoUpdater from "./ext/autoupdate.js";
import config from "./src/config.json";

//Mod
import mod from "./src/mod.js";

//Common logic
var game=new EventEmitter();

//Base hooks
global._newLevel=()=>{
    game.emit("levelLoad");
};
global._procCmd=cmd=>{
    game.emit("commandExecuted",cmd);    
};

//Processing logic
{outEM}

//Common start
autoUpdater(game,config);

//Mod start
mod(game,config);

//...
game.emit("modLoaded");
