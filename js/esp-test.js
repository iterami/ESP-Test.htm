'use strict';

function check(){
    var integer = Math.floor(Math.random() * 100000) + 1;
    var result = ' was generated. You ';

    result += parseInt(document.getElementById('answer').value, 10) === integer
      ? 'might have ESP!'
      : 'probably don\'t have ESP.';

    document.getElementById('integer').innerHTML = integer;
    document.getElementById('result').innerHTML = result;
}

window.onload = function(e){
    input_init(
      {
        13: {
          'todo': check,
        },
      }
    );

    document.getElementById('answer').focus();
};
