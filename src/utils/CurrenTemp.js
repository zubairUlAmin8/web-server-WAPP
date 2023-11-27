
const request = require('postman-request');



const currentTemp=(address, callback)=>{
    
    const link="https://api.weatherstack.com/current?access_key=809e71a697d8ba7ac0532b2ccdb4dd5f&query="+address+"&units=f";

    request({uri:link, json:true}, function (error, response, body) {
        if(error){
            callback(error, undefined, undefined);
        }else if (response.statusCode!==200){
            callback(error, undefined, undefined);

        }
        else{
            callback(undefined, response, body);
        }

    });
}

module.exports ={
    currentTemp:currentTemp
}