function setSeat(e, handler) {
  e.preventDefault();
  $('.selected').removeClass('selected').click(handler);
  $(e.target).addClass('selected').unbind('click', handler);
  $('#seatSelected').text($(e.target).data('seat'));
}

function selectFirstClass(e) {
  setSeat(e, selectFirstClass);
  var resulting_html = fetchFirstClassConfirm();
  $('#confirm-first-class').html(resulting_html); 
  $('#confirm-first-class').show();

}

function selectSeat(e) {
  setSeat(e, selectSeat);
  $('#confirm-seat').show();
  $('#confirm-first-class').hide();
}

function fetchFirstClassConfirm() {
  // AJAX is called here, but we haven't learned that yet
  // This returns the a.confirm-upgrade link (trust me)
}

function confirmUpgrade(e) {
  e.preventDefault();
  $('#confirm-first-class').hide();
  $('#confirm-seat').show();
}