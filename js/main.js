'use strict';

function repo_init(){
    core_repo_init({
      'keybinds': {
        13: {
          'todo': check,
        },
      },
      'title': 'ESP-Test.htm',
    });

    document.getElementById('answer').focus();
    document.getElementById('check').onclick = check;
}
