'use strict';

function repo_init(){
    core_repo_init({
      'info-events': {
        'check': {
          'todo': check,
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
