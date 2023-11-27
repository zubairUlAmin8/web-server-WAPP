const request = require('postman-request');



const currentLocation= (address, calback)=>{
const locationIQUrl="https://us1.locationiq.com/v1/search?key=pk.5d001b92d89340ede42749e1f394a420&q=221b%2C%20Baker%20St%2C%20London%20&format=json&"

    request ({uri:locationIQUrl, json:true}, function(error, response, body){
      if(error){
        console.log('Unable to connect:', error); // Print the error if one occurred

      }
      else if(body.error){
        
        console.log('error:', body.error); // Print the error if one occurred
    }
      else{
        calback(error, response, body);
      }
    })
};

module.exports={
        currentLocation:currentLocation
}