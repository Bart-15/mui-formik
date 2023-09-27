const error = (store:any, next:any, action:any) => {

    if(action.type === "SHOW_ERROR") {
        return console.log(action.payload.error);
    } else {
        next(action);
    }
    
}