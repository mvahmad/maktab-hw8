const genereat= function(genereator){
    const obj ={};
    return function(name){
        obj[genereator] = name;
        console.log(obj); 
    }
    
}

