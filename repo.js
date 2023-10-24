'use strict';

function check(){
    const integer = core_random_integer({
      'max': 100000,
      'todo': 'ceil',
    });
    let result = integer + ' was generated. You ';

    result += Number.parseInt(document.getElementById('answer').value, 10) === integer
      ? 'might have ESP!'
      : 'probably don\'t have ESP.';

    document.getElementById('result').textContent = result;
}

function repo_init(){
    core_repo_init({
      'events': {
        'check': {
          'onclick': check,
        },
      },
      'keybinds': {
        'Enter': {
          'todo': check,
        },
      },
      'title': 'ESP-Test.htm',
    });
}
