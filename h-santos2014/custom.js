/*
 * Smooth scrolling for nav sections.
 */
Mirai.query('.menu-anchor, .header-photos, .header-reviews a, .nav-main a').click(function(evt){
  evt.preventDefault();
  var link = Mirai.query(this).attr('href');
  var pos = Mirai.query(link).offset().top;
  Mirai.query('html,body').animate({scrollTop:pos-100},700);
}); 

/*
 * Custom options for film-gallery.
 */
Mirai.query('#gallery-film').galleryView({
    panel_animation: 'crossfade',
    transition_speed: 2000,
    transition_interval: 5000,
    frame_width: 125,
    frame_height: 100,
    frame_gap: 0,
    pan_images: true,
    show_filmstrip_nav: false,
    show_infobar: false
});