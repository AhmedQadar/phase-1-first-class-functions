function receivesAFunction (callBackFunction){
    callBackFunction();
}
function returnsANamedFunction (){
    return returnsANamedFunction;
}
function returnsAnAnonymousFunction () {
    return () => console.log();
}