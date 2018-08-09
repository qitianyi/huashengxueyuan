$(function(){
	$(window).scroll(function() {
			/* Act on the event */
			if($(window).scrollTop()>=150){
				$('.guide').css({
					'position':'fixed',
					'top':'0'
				})
			}
			else{
				//alert("aa");
				$('.guide').css({
					'position':'absolute',
					'bottom':'1%',
					'top':'auto'

				})
			}
		});
	if($('.guide').children().length==10){
		//alert("!!");
		if($(document).width()>1435){
			$('.dropdown1').css('left', '9.5%');
			$('.dropdown2').css('left', '19.2%');
			$('.dropdown3').css('left', '28.8%');
			$('.dropdown4').css('left', '38.4%');
			$('.dropdown5').css('left', '48%');
			$('.dropdown6').css('left', '57.7%');
			$('.dropdown7').css('left', '67.3%');
			$('.dropdown8').css('left', '76.8%');
			$('.dropdown9').css('left', '86.5%');
		}
		else{
			$('.guide').css('bottom','3%');
			$('.guide div a').css('font-size','16px');
			$('.dropdown5').css('left', '47.8%');
			$('.dropdown6').css('left', '57.7%');
			$('.dropdown7').css('left', '67.4%');
			$('.dropdown8').css('left', '76.9%');
			$('.dropdown9').css('left', '86.7%');
		}
	}
	else if($('.guide').children().length==11){
		$('.guide').children().css('padding','0 1.3%');
		if($(document).width()>1435){
			$('.dropdown1').css({
				left:'8.9%',
				width: '9%'
			});
			$('.dropdown2').css({
				left: '17.8%',
				width: '9%'
			});
			$('.dropdown3').css({
				left: '26.8%',
				width: '9%'
			});
			$('.dropdown4').css({
				left: '35.7%',
				width: '9%'
			});
			$('.dropdown5').css({
				left: '44.8%',
				width: '9%'
			});
			$('.dropdown6').css({
				left: '53.8%',
				width: '9%'
			});
			$('.dropdown7').css({
				left: '62.8%',
				width: '9%'
			});
			$('.dropdown8').css({
				left: '71.8%',
				width: '9%'
			});
			$('.dropdown9').css({
				left: '80.8%',
				width: '9%'
			});
			$('.dropdown10').css({
				left: '89.8%',
				width: '9%'
			});
		}
	}
	
})