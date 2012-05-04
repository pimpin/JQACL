function selectFirstClass(e) {
	setSeat(e, selectFirstClass);
  var resulting_html = fetchFirstClassConfirm();
  $('#confirm-first-class').html(resulting_html); 
  $('#confirm-first-class').show();
  $('#confirm-seat').hide();
}

function fetchFirstClassConfirm() {
  // This function should deals with AJAX call... I only can make a fake return now
  return "<h2>Please Confirm</h2> You've selected a first class seat which will be $120 more.  Are you sure? <a href='#' class='confirm-upgrade'>Yes, Confirm Upgrade</a>";
}

function selectSeat(e) {
  setSeat(e, selectSeat);
  $('#confirm-seat').show();
  $('#confirm-first-class').hide();
}

// refactoring first and second class selection
function setSeat (e, handler) {
	e.preventDefault();
  $('.selected').removeClass('selected').click(handler);
  $(e.target).addClass('selected').unbind('click', handler);
  $('#seatSelected').text($(e.target).data('seat'));
}

function confirmUpgrade(e) {
  e.preventDefault();
  $('#confirm-first-class').hide();
  $('#confirm-seat').show();
}