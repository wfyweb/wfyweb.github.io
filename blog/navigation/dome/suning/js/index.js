window.onload = function(){
	//���ֲ�
	var mySwiper1 = new Swiper('.swiper-container1',{
		autoplay:2000,//��ѡѡ��Զ�����
		speed:500, // slide �˶����ٶ�
		pagination : '.swiper-pagination',//��ҳ-СԲ��
		//paginationElement : 'li', // ��ҳ��Ԫ��
		autoplayDisableOnInteraction : false,//�������Ϊfalse���û�����swiper֮���Զ��л�����ֹͣ��ÿ�ζ�����������autoplay��
		touchAngle : 20, // ���������϶��ĽǶ�ֵ��Ĭ��45�ȣ���ʹ������������ȫˮƽҲ���϶�slide��
		loop:true,//�޷��ֲ�
	})
	//С�ֲ� 1,2
	var mySwiper2 = new Swiper('.swiper-container2',{
		autoplay:2000,//��ѡѡ��Զ�����
		speed:500, // slide �˶����ٶ�
		pagination : '.swiper-pagination',//��ҳ-СԲ��
		//paginationElement : 'li', // ��ҳ��Ԫ��
		autoplayDisableOnInteraction : false,//�������Ϊfalse���û�����swiper֮���Զ��л�����ֹͣ��ÿ�ζ�����������autoplay��
		touchAngle : 20, // ���������϶��ĽǶ�ֵ��Ĭ��45�ȣ���ʹ������������ȫˮƽҲ���϶�slide��
		loop:true,//�޷��ֲ�
	})
	//ͷ��
	var mySwiper3 = new Swiper('.swiper-container3',{
		direction : 'vertical',//��ֱ����
		autoplay:1000,//��ѡѡ��Զ�����
		loop:true,//�޷��ֲ�
		onlyExternal : true,//ֵΪtrueʱ��slide�޷��϶���
	})
	
	//������
	var mySwiper4 = new Swiper('.swiper-container4',{

		resistanceRatio : 0.5,
		slidesPerView : 3, //����slider�����ܹ�ͬʱ��ʾ��slides����(carouselģʽ)
		spaceBetween : 10, //slide֮��ľ��루��λpx��
		resistance : true, //�����϶�Swiper���뿪�߽磬�ͷź󵯻ء�
		preloadImages:true,//Ĭ��Ϊtrue��Swiper��ǿ�Ƽ�������ͼƬ
		updateOnImagesReady : true,
	});
	//�õ��Ƽ�
	var mySwiper5 = new Swiper('.swiper-container5',{
		speed:500, // slide �˶����ٶ�
		pagination : '.swiper-pagination',//��ҳ-СԲ��
		//paginationElement : 'li', // ��ҳ��Ԫ��
		autoplayDisableOnInteraction : false,//�������Ϊfalse���û�����swiper֮���Զ��л�����ֹͣ��ÿ�ζ�����������autoplay��
		touchAngle : 20, // ���������϶��ĽǶ�ֵ��Ĭ��45�ȣ���ʹ������������ȫˮƽҲ���϶�slide��
		loop:true,//�޷��ֲ�
	});

};

 // ����ʱ
    //���ý�����ʱ��
    var timer;
    var endTime = new Date();
    endTime.setFullYear(2017);
    endTime.setMonth(1); // ��Ȼ����2017��2��23�գ���������Ǵ�0�¿�ʼ������д1��
    endTime.setDate(25);
    endTime.setHours(15);
    endTime.setMinutes(0);
    endTime.setSeconds(0);

    // ��ȡ������ʱ��ĺ�����
    var endTimer = endTime.getTime();  //������
    var iHour = document.querySelector('#hour');
    var iMin = document.querySelector('#min');
    var iSec = document.querySelector('#sec');

    changeTime();
    function changeTime(){
        var nowTime = new Date();
        var sec = ( endTimer - nowTime.getTime() )/1000;  // ����ʱ�� - ��ǰʱ��  ת��������
        //console.log(sec/60);
        if( sec>0 ){
            var hour = Math.floor(sec/60/60);  //ʱ
            sec = sec%3600; // ��ʣ�¶�����
            var min = Math.floor(sec/60);  //��
            sec = Math.floor(sec%60); // ��

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
    // ����
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
	