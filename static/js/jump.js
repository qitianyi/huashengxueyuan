  $(function(){
  		
        $('.jump2').click(function(event) {
  			/* Act on the event */
  			location.href="children_"+$('.jump1 input').val()+".html";
  		});          
  })