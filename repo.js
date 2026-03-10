'use strict';

function check(){
    const integer = core_random_integer(1e6) + 1;
    let result = core_number_format({
        'number': integer,
      }) + ' was generated.<br>You ';

    result += Number.parseInt(core_elements.answer.value, 10) === integer
      ? 'might have ESP!'
      : 'probably don\'t have ESP.';

    core_elements.result.innerHTML = result;
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
          'down': check,
        },
      },
      'title': 'ESP-Test.htm',
      'ui_elements': [
        'answer',
        'result',
      ],
    });
}
