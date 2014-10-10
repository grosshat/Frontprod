/* affix the navbar after scroll below header */
Mirai.query('#hotel-menu').affix({
      offset: {
        top: Mirai.query(".header-page").height() + Mirai.query("#hotel-menu").height()
      }
});	


/* smooth scrolling for scroll to top */
//Mirai.query('.scroll-top').click(function(evt){
//  evt.preventDefault();
//  Mirai.query('body,html').animate({scrollTop:0},1000);
//});
	
/* smooth scrolling for nav sections */
Mirai.query('.menu-anchor').click(function(evt){
  evt.preventDefault();
  var link = Mirai.query(this).attr('href');
  var pos = Mirai.query(link).offset().top;
  Mirai.query('html,body').animate({scrollTop:pos+20},700);
});	