const callBack = function (type){
    let element = document.getElementById(type);
    element.style.color = 'red';
    console.log(element);
}

const elemCreator = function (type) {
callBack(type);
}

elemCreator('div');