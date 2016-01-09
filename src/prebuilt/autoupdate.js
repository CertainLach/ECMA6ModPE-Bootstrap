var connect = (emitter, config)=>{
    emitter.on("level.load.end", ()=>{
        //TODO: use alternative processing
        //emitter.emit("chat",{
            //text:`&1Loading mod &2${config["modname"]} v${config["readable-version"]} &1by &3${config["author"]}\n${config["onload-message"]}`
        //});
        internal.chatMessage(`&1Loading mod &2${config["modname"]} v${config["readable-version"]} &1by &3${config["author"]}\n${config["onload-message"]}`)
    });
    
    //IDK in what namespace put procCmd, but in fact that is local server.
    emitter.on("server.command", (cmd)=>{
        if(cmd=="version")
            //TODO: use alternative processing
            //emitter.emit("chatMessage",{
                //text:`&1&2${config["modname"]} v${config["readable-version"]} &1by &3${config["author"]}`
            //});
            internal.chatMessage(`&1&2${config["modname"]} v${config["readable-version"]} &1by &3${config["author"]}`);
    });
};

export default connect;