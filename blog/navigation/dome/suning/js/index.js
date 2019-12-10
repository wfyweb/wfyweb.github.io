window.onload = function(){
	//大轮播
	var mySwiper1 = new Swiper('.swiper-container1',{
		autoplay:2000,//可选选项，自动滑动
		speed:500, // slide 运动的速度
		pagination : '.swiper-pagination',//分页-小圆点
		//paginationElement : 'li', // 分页器元素
		autoplayDisableOnInteraction : false,//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
		touchAngle : 20, // 允许触发拖动的角度值。默认45度，即使触摸方向不是完全水平也能拖动slide。
		loop:true,//无缝轮播
	})
	//小轮播 1,2
	var mySwiper2 = new Swiper('.swiper-container2',{
		autoplay:2000,//可选选项，自动滑动
		speed:500, // slide 运动的速度
		pagination : '.swiper-pagination',//分页-小圆点
		//paginationElement : 'li', // 分页器元素
		autoplayDisableOnInteraction : false,//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
		touchAngle : 20, // 允许触发拖动的角度值。默认45度，即使触摸方向不是完全水平也能拖动slide。
		loop:true,//无缝轮播
	})
	//头条
	var mySwiper3 = new Swiper('.swiper-container3',{
		direction : 'vertical',//垂直方向
		autoplay:1000,//可选选项，自动滑动
		loop:true,//无缝轮播
		onlyExternal : true,//值为true时，slide无法拖动，
	})
	
	//掌上抢
	var mySwiper4 = new Swiper('.swiper-container4',{

		resistanceRatio : 0.5,
		slidesPerView : 3, //设置slider容器能够同时显示的slides数量(carousel模式)
		spaceBetween : 10, //slide之间的距离（单位px）
		resistance : true, //继续拖动Swiper会离开边界，释放后弹回。
		preloadImages:true,//默认为true，Swiper会强制加载所有图片
		updateOnImagesReady : true,
	});
	//好店推荐
	var mySwiper5 = new Swiper('.swiper-container5',{
		speed:500, // slide 运动的速度
		pagination : '.swiper-pagination',//分页-小圆点
		//paginationElement : 'li', // 分页器元素
		autoplayDisableOnInteraction : false,//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
		touchAngle : 20, // 允许触发拖动的角度值。默认45度，即使触摸方向不是完全水平也能拖动slide。
		loop:true,//无缝轮播
	});

};

 // 倒计时
    //设置结束的时间
    var timer;
    var endTime = new Date();
    endTime.setFullYear(2017);
    endTime.setMonth(1); // 虽然现是2017年2月23日，但计算机是从0月开始，所以写1月
    endTime.setDate(25);
    endTime.setHours(15);
    endTime.setMinutes(0);
    endTime.setSeconds(0);

    // 获取结束的时间的毫秒数
    var endTimer = endTime.getTime();  //毫秒数
    var iHour = document.querySelector('#hour');
    var iMin = document.querySelector('#min');
    var iSec = document.querySelector('#sec');

    changeTime();
    function changeTime(){
        var nowTime = new Date();
        var sec = ( endTimer - nowTime.getTime() )/1000;  // 结束时间 - 当前时间  转换成秒数
        //console.log(sec/60);
        if( sec>0 ){
            var hour = Math.floor(sec/60/60);  //时
            sec = sec%3600; // 还剩下多少秒
            var min = Math.floor(sec/60);  //分
            sec = Math.floor(sec%60); // 秒

            iHour.innerHTML = zero(hour,2);
            iMin.innerHTML = zero(min,2);
            iSec.innerHTML = zero(sec,2);
        }else{
            clearInterval(timer);
        };
    };
    var timer = setInterval(function () {
        changeTime();
    },1000);
    // 补零
    function zero( time , n ){
        var str = ''+time;
        while ( str.length < n ){
            str = '0' + time;
        }
        return str;
    };

	
		var Input = document.querySelector('#return');
		window.onscroll = function(){
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			Input.style.display=scrollTop>500?"block":"none";
			Input.onclick = function(){
				var timer = setInterval(function(){
					scrollTop -= 1000;
					if (scrollTop<=0)
					{
						clearInterval(timer)
					}
					document.body.scrollTop = scrollTop;
					document.documentElement.scrollTop = scrollTop;
				},13); 
			};
		};
	