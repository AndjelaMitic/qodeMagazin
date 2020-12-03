console.log('Hello world!');
function fixedHeader(){
  if ($(window).scrollTop() >= 77) {
      $('header').addClass('fixed-header');
  }
  else {
      $('header').removeClass('fixed-header');
  }
}
$(window).scroll(function(){
  fixedHeader();
});
$(document).ready(function(){
  fixedHeader();
  $( ".navigation" ).click(function() {

    $('.navBtn').toggleClass('active');
    $('.mainMenu').toggleClass('active');
  });
});
$(document).mouseup(function(e)
{
    var container = $(".navigation");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      $(".navBtn").removeClass('active');
      $('.mainMenu').removeClass('active');
    }
});
