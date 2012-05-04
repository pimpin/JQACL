function viewAlternateFlight(){
  var url = $(this).attr('href');

  $.ajax(url, {
    type: 'GET',
    success: function(result){
      $('.seating-chart').html(result);
    }
  });
}