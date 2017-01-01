'use strict';

function check(){
    var integer = random_integer({
      'max': 100000,
      'todo': 'ceil',
    });
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
    document.getElementById('check').onclick = check;
};
