var fs = require("fs");
var path = require("path");

var deleteFolderRecursive = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

var copyRecursiveSync = function(src, dest) {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (exists && isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.linkSync(src, dest);
  }
};

var parsed={};

var altNames={
    modTick: "tick",
    chatHook: "local.anonymous.chat",
    newLevel: "level.load.end",
    selectLevelHook: "level.load.start",
    useItem: "use",
    redstoneUpdateHook: "level.redstone",
    deathHook: "entity.death",
    leaveGame: "level.unload.start",
    chatReceiveHook: "server.named.chat",
    serverMessageReceiveHook: "server.anonymous.chat",
    explodeHook: "level.explode",
    attackHook: "entity.attack",
    destroyBlock: "block.destroy",
    eatHook: "player.eat",
    projectileHitBlockHook: "projectile.hit.block",
    startDestroyBlock: "level.destroy.start",
    entityRemovedHook: "entity.remove",
    entityAddedHook: "entity.add",
    projectileHitEntityHook: "projectile.hit.entity",
    procCmd: "server.command"
};

var outBSG="";
var outEMG="";

deleteFolderRecursive("out")
fs.mkdirSync("out");
fs.mkdirSync("out/src");
fs.mkdirSync("out/src/src");

copyRecursiveSync("src/prebuilt","out/src/ext")

fs.readFile("src/modpescript_dump.txt", (err, content)=>{
    if(err){
        throw err;
    }
    var content=content.toString();
    //console.log(content);
    content.split("\n").forEach((str)=>{
        if(str=="")
            return;
        if(/^[a-zA-Z_]+\(.*\);$/.test(str)){
            
            
            //Bootstrap use
            var outBS=`internal.${str.split("(")[0]}=function(${str.split("(")[1].split(")")[0]}){${str}};`
            outBSG+=outBS;  
            //console.log(outBS);
            
            
        }else if(/^[a-zA-Z]+\.[a-zA-Z_1-9]+;$/.test(str)){
            
            
            //Bootstrap use
            var outBS=`global.constants.${str.split(";")[0]}=${str}`;
            outBSG+=outBS;  
            //console.log(outBS);
            
            
        }else if(/^function [a-zA-Z]+\(.*\)$/.test(str)){
            
            
            //Bootstrap use
            var outBS=`${str}{if(global._${str.replace(/function /g,"").split("(")[0]}){global._${str.replace(/function /g,"")};}else{debugPrint("${str.replace(/function /g,"").split("(")[0]} is not hooked!")}}`;
            outBSG+=outBS;  
            //console.log(outBS);
            
            
            //Emitter use, ECMASCRIPT6 allowed
            //console.log(str);
            var outEM=`
                global._${str.replace(/function /g,"")}{
                    game.emit("${
                        function(){
                            var hookName=str.replace(/function /g,"").split("(")[0]
                            var altName=altNames[hookName];
                            if(!altName){
                                console.log("No alt name for "+str+"!");
                                return hookName;
                            }else{
                                return altName;
        
                            }
                        }()
                     }"${
                        function(){
                            var hookparams=str.split("(")[1].split(")")[0];
                            return hookparams?", "+hookparams:"";
                        }()
                     });
                }
            
            `;
            outEMG+=outEM;  
            //console.log(outEM);
            
            
        }else if(/[a-zA-Z]+\.[a-zA-Z]+\(.*\)/.test(str)){
            var outEM=`
            game.on("${str.split("(")[0]}",(${str.split("(")[1].replace(/;/g,"")}=>{
                ${str}
            })`
            outEMG+=outEM;  
            //console.log(outEM);
            
        }else {
            console.log("Unparsed: "+str);
        }
    })
    fs.readFile("src/bootstrap.js",(err,out)=>{
        if(err){
            throw err;
        }
        var out=out.toString();
        var out=out.replace(/{outBS}/,outBSG);
        
        var out=out.replace(/{isDebug}/,false);
        var out=out.replace(/{isDebugger}/,false);
        fs.writeFile("out/bootstrap.js",out);
        
    });
    fs.readFile("src/index.js",(err,out)=>{
        if(err){
            throw err;
        }
        out=out.toString();
        out=out.replace(/{outEM}/,outEMG);
        //console.log(out);
        fs.writeFile("out/src/index.js",out);
    });

});