$('div.seating-chart .economy-class li a.available').click(selectSeat);
$('div.seating-chart .first-class li a.available').click(selectFirstClass);

// $('a.confirm-upgrade').live('click', confirmUpgrade);
// better with delegate (it permit method chaining and is more performant)
$('#confirm-first-class').delegate('a.confirm-upgrade', 'click', confirmUpgrade);