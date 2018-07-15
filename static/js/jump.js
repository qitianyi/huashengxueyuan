  $(function(){
  		$('.jump1 input').keyup(
  				function(){
  					location.href="children_"+$('.jump1 input').val()+".html";
  				}
  			)
                        
  })