

var Request = require("request");
 var getData = {
    method: 'GET',
    url : 'https://developers.zomato.com/api/v2.1/categories',
    headers : {
        'Accept': 'application/json',
        'user-key': '50e04a04eb9529e4fde00d84b39f764a',     
    }, 
    body :{
     lang : 'en',
    },
    json:true,
    
}

module.exports = {

  makeRequest: function(Response){
  var Response=  Request(getData, (error, response, body) => {
        if(error) {
            return console.log(error);
        }
        else {
            console.log(response);
        }
        console.log(JSON.stringify(body));
    });
return Response;
}
}
