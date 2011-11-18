function selectFirstClass(e) {
  e.preventDefault();
  $('.selected').removeClass('selected').click(selectSeat);
  $(this).addClass('selected').unbind('click', selectSeat);
  $('#seatSelected').text($(this).data('seat'));

  var resulting_html = fetchFirstClassConfirm();
  $('#confirm-first-class').html(resulting_html); 
  $('#confirm-first-class').show();
  $('#confirm-seat').hide();
}

function fetchFirstClassConfirm() {
  // This function content should not be revealed to the student
  return "<h2>Please Confirm</h2> You've selected a first class seat which will be $120 more.  Are you sure? <a href='#' class='confirm-upgrade'>Yes, Confirm Upgrade</a>"
}

function selectSeat(e) {
  e.preventDefault();
  $('.selected').removeClass('selected').click(selectSeat);
  $(this).addClass('selected').unbind('click', selectSeat);
  $('#seatSelected').text($(this).data('seat'));
  
  $('#confirm-seat').show();
  $('#confirm-first-class').hide();
}