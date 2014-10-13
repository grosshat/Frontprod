/*
 * Smooth scrolling for nav sections.
 */
Mirai.query('.menu-anchor, .header-photos').click(function(evt){
  evt.preventDefault();
  var link = Mirai.query(this).attr('href');
  var pos = Mirai.query(link).offset().top;
  Mirai.query('html,body').animate({scrollTop:pos-50},700);
});	


Mirai.query('#ngg-gallery-4-19_container').galleryView({
    frame_width: 100,
    frame_height: 75,
    frame_gap: 0,
    pan_images: true,
    show_filmstrip_nav: false,
    show_infobar: false
});