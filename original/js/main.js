$(document).ready(function(){
  var navButtonHeight = $('.button-nav-text').height();
  var navPic = $('.nav-pic');
  var navPicBlog = $('.nav-pic-blog');
  navPic.css('height', navButtonHeight*2.51);
  navPic.attr('src', 'assets/blue_bottle_square.jpg');
  navPicBlog.css('height', navButtonHeight*2.51);
  navPicBlog.attr('src', '../assets/blue_bottle_square.jpg');
});