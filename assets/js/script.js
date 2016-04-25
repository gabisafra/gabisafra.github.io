$( document ).ready(function() {
    console.log( "ready!" );

// $("#boxx").addClass("") 


	$(".phone").click(function() {
		console.log("DSFDS")
	})

	$(".phone").hover(function(){
		$(".phone").addClass("wigglephone");
	},function(){
		$(".phone").removeClass("wigglephone");
	})
		
	$(".mail").hover(function(){
		$(".mail").addClass("wigglemail");
	},function(){
		$(".mail").removeClass("wigglemail");
	})		


	$(".firstsection .subtitle").typed({
        strings: ["Find out more about our goals, processes and partners below..."],
        typeSpeed: 0,
        showCursor: false,
      });

	$("#boxx #title").typed({
        strings: ["Contact Us"],
        typeSpeed: 100,
        showCursor: false,
      });

	$("#menu .team, #menu #progress").click(function(){
		alert("Thanks for your interest! Unfortunately this webpage is not ready yet.")
	});

});

	