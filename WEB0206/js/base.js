/*公共js*/
/* **************** 头部nav ************************/
function hoverDelay(that){
	that.addClass('active');
	if(that.find('div')){
		that.find('div').slideDown('fast');
	}
};
function outDelay(that){
	that.removeClass('active');
	if(that.find('div')){
		that.find('div').slideUp('fast');
	}
};
function _hoverDelay(that){
	return function(){
		hoverDelay(that);
	}
}
function _outDelay(that){
	return function(){
		outDelay(that);
	}
}	
	
	$(function(){
		var head=$('.nav>li');
		var box=$('.nav-body');
		var hovertimer,outtimer;
		head.hover(function(){
			var that=$(this);
			clearTimeout(that.timer);
			that.timer=setTimeout(_hoverDelay(that),300);
		},function(){
			var that=$(this);
			clearTimeout(that.timer)
			that.timer=setTimeout(_outDelay(that),300)
		})
		$('.nav-main li a').hover(function(){
			$(this).css('color','#bd0707');
		},function(){
			$(this).css('color','#5f5f5f');
		});
	});

/* nav结束 */