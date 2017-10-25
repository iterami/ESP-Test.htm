'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'check': {
          'onclick': check,
        },
      },
      'keybinds': {
        13: {
          'todo': check,
        },
      },
      'title': 'ESP-Test.htm',
    });
}
