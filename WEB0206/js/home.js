
$(document).ready(function(){
/*city*/	

/* video */	
	var btn=$('.play-button');
	var oVideo=$('video')
	oVideo.click(function(){
		oVideo.get(0).pause();
	})
	btn.on('click',function(){
		$('video').get(0).play();
		$('.video-mask').css('display','none');
		$('.video-mask2').css('display','none');
		$(this).fadeOut();
		$('.video-tit,.formore').fadeOut();
		$('video').attr('controls',true);
	});
	setInterval(isPaused,300)
	function isPaused(){
		if (oVideo.get(0).paused) {
			btn.fadeIn();
			//$('.video-mask').css('display','block');
			$('.video-mask2').fadeIn();
			$('.video-tit,.formore').fadeIn();
			$('video').attr('controls',false);
		}
	};
/* news */
	var news=$('.news');
	news.on('mouseover','div',function(){
		$(this).find('a').find('img').attr('src','../images/home/new0'+$(this).index()+'.jpg');
		$(this).find('a').find('img').css('transform','scale(1.2)')
	});
	news.on('mouseout','div',function(){
		$(this).find('a').find('img').attr('src','../images/home/new00'+$(this).index()+'.jpg');
		$(this).find('a').find('img').css('transform','scale(1)')
	});
});