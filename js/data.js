'use strict';

function check(){
    var integer = core_random_integer({
      'max': 100000,
      'todo': 'ceil',
    });
    var result = integer + ' was generated. You ';

    result += parseInt(document.getElementById('answer').value, 10) === integer
      ? 'might have ESP!'
      : 'probably don\'t have ESP.';

    document.getElementById('result').innerHTML = result;
}