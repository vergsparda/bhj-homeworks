`use strict`

const interestList = document.querySelector('.interests_main');

interestList.addEventListener('change', function(e) {
  if (e.target.closest('.interest').querySelector('.interests')) {
    const arr = Array.from(e.target.closest('.interest').querySelectorAll('.interest__check'));
    arr.forEach(i => {
      i.checked = e.target.checked;
    });

  };

  if (!e.target.closest('.interest').querySelector('.interests')) {
    const allChecks = Array.from(e.target.closest('.interests').querySelectorAll('.interest__check'));
    const isAllChecked = allChecks.every((check) => check.checked);
    if (isAllChecked) {
      e.target
        .closest('.interests')
        .closest('.interest')
        .querySelector('.interest__check').checked = true;

    } else {
      e.target
        .closest('.interests')
        .closest('.interest')
        .querySelector('.interest__check').checked = false;

    };
  };

});
