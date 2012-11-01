// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jstween.js


$(document).ready(function() {
	
	
	$('.learn_more_button').on('mouseenter', function() {
		$('.learn_more_button').tween({
		   backgroundColor:{
		      start: '#5E5E5E',
		      stop: '#D74340',
		      time: 0,
		      duration: 0.3,
		      effect:'easeInOut'
		   }
		}).play();
		
	});
	
	$('.learn_more_button').on('mouseleave', function() {
		$('.learn_more_button').tween({
		   backgroundColor:{
		      start: '#D74340',
		      stop: '#5E5E5E',
		      time: 0,
		      duration: 0.3,
		      effect:'easeInOut'
		   }
		}).play();
		
	});

	
	
	$('#navigation a').on('mouseenter', function() {
		$(this).tween({
		   backgroundColor:{
		      start: '#fff',
		      stop: '#D74340',
		      time: 0,
		      duration: 0.3,
		      effect:'easeInOut'
		   }
		}).play();
		
	});
	
	$('#navigation a').on('mouseleave', function() {
		$(this).tween({
		   backgroundColor:{
		      start: '#D74340',
		      stop: '#fff',
		      time: 0,
		      duration: 0.3,
		      effect:'easeInOut'
		   }
		}).play();
		
	});
	
	
	
	
	
	
	
}); // End document.ready




