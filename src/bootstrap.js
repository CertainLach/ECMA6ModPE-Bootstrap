var _debug={isDebug};
var _debugger={isDebugger};

var global={
    constants:[]
};
var internal={};

function debugPrint(string){
    if(_debug&&!_debugger){
        print(string);
    }
    if(_debug&&_debugger){
        console.log(string);
    }
}

{outBS}