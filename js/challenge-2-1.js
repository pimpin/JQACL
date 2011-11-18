function setSeat(e, handler) {
  e.preventDefault();
  $('.selected').removeClass('selected').click(handler);
  $(e.target).addClass('selected').unbind('click', handler);
  $('#seatSelected').text($(e.target).data('seat'));
}

function selectFirstClass(e) {
  setSeat(e, selectFirstClass);
  fetchFirstClassConfirm();
}

function selectSeat(e) {
  setSeat(e, selectSeat);
  $('#confirm-seat').show();
  $('#confirm-first-class').hide();
}

function confirmUpgrade(e) {
  e.preventDefault();
  $('#confirm-first-class').hide();
  $('#confirm-seat').show();
}

$('div.seating-chart ol.first-class li a.available').click(selectFirstClass);
$('div.seating-chart ol.economy-class li a.available').click(selectSeat);
$('#confirm-first-class').delegate('a.confirm-upgrade', 'click', confirmUpgrade);