var connect = (emitter, config)=>{
    emitter.on("levelLoad", ()=>{
        emitter.emit("chatMessage",{
            text:`&1Loading mod &2${config["modname"]} v${config["readable-version"]} &1by &3${config["author"]}\n${config["onload-message"]}`
        });
    });
    emitter.on("commandExecuted", (cmd)=>{
        if(cmd=="version")
            emitter.emit("chatMessage",{
                text:`&1&2${config["modname"]} v${config["readable-version"]} &1by &3${config["author"]}`
            });
    });
};

export default connect;