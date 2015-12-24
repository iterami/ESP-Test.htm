'use strict';

function check(){
    var integer = Math.floor(Math.random() * 100000) + 1;
    var result = ' was generated. You ';

    result += parseInt(document.getElementById('answer').value) === integer
      ? 'might have ESP!'
      : 'probably don\'t have ESP.';

    document.getElementById('integer').innerHTML = integer;
    document.getElementById('result').innerHTML = result;
}

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    if(key === 13){
        check();
    }
};

window.onload = function(e){
    document.getElementById('answer').focus();
};
