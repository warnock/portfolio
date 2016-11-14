$(window).load(function(){
  $("#sticker").sticky({ topSpacing: 0, center:true, className:"hey" });
});

$('.mainArrowButton').click(function() {
  $('html, body').animate({
    scrollTop: $('#navContainer').offset().top}, 'slow');

  })

$('.home').click(function() {
  $('html, body').animate({
    scrollTop: $('html').offset().top}, 'slow');

  })

$('.about').click(function() {
  $('html, body').animate({
    scrollTop: $('#navContainer').offset().top}, 'slow');

  })

$('.work').click(function() {
  $('html, body').animate({
    scrollTop: $('#workAnchor').offset().top}, 'slow');
  })

  $('.contact').click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top}, 'slow');
    })
