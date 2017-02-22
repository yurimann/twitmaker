// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $('#new_tweet').on('submit', function(event){
    event.preventDefault();
    console.log('prevented default');

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(responseData){
      console.log("Success");
      console.log(responseData);
      $('.tweets').prepend(responseData);
    }).fail(function(){
      console.log('failed');
    }).always(function(){
      console.log('this always comes back');
    });

  });
});
