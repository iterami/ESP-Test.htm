'use strict';

function check(){
    let integer = core_random_integer({
      'max': 100000,
      'todo': 'ceil',
    });
    let result = integer + ' was generated. You ';

    result += Number.parseInt(document.getElementById('answer').value, 10) === integer
      ? 'might have ESP!'
      : 'probably don\'t have ESP.';

    document.getElementById('result').innerHTML = result;
}
