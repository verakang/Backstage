"use strict";

$(document).ready(function () {
  $('.admin-reply').click(function () {
    $('.card-admin').addClass('d-none');
    $('.admin-btn').addClass('d-none');
    $('.pages').addClass('d-none');
    $('.edit').removeClass('d-none');
  });
  $('.edit-cancel').click(function () {
    $('.card-admin').removeClass('d-none');
    $('.admin-btn').removeClass('d-none');
    $('.pages').removeClass('d-none');
    $('.edit').addClass('d-none');
  });
});
//# sourceMappingURL=all.js.map
