// funzione middlewares
function checkApi(req, res, next){
    const currentTime = new Date().toLocaleTimeString();
    console.log("sei passato alle:", currentTime);

    next();
    
}


// export della funzione middlewares
module.exports = checkApi;