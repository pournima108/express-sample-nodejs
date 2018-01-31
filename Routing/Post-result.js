module.exports ={
    /*callback :function(name){
        return name;
    },*/
   
    Concatenation: function(req){
    var result= req.body.firstname + req.body.lastname;
    var response = {
        "firstname" : req.body.firstname,
        "lastname" : req.body.lastname,
        "error" : false,
        "status_code": 200,
        "active" : true
    };
    console.log(response);
    return response;
    }

}