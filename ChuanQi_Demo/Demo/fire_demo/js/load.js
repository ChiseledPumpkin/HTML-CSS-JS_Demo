
$(document).ready(function(){
	$("#more .btnmore").mouseenter(function(){
		$(this).parent().find(".morebox").fadeIn(300)
	})
	$("#more").mouseleave(function(){	$(this).find(".morebox").fadeOut(300)});
	$(".Tab").floatlines();
	if ($("#playbanner").length>0)
	{
			$("#playbanner").ZHYslider({
					fullscreen	:false,
					arrow		:false,		
					speed: 1200, 
					space: 6000,
					auto: true, //自动滚动
					affect:'scrollx',
					ctag: '.Slide_'
			})
		
		
	}
	$("#news").scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
	setTimeout(function(){
		$('#news .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})
	},200)
	$.fn.hovers();
	$.fn.wowanimate_list();
	$.fn.openintr();
})


$.fn.wowanimate_list=function(){
	
	if (typeof(WOW)=='undefined') {return;}
	if ((/msie [6|7|8|9]/i.test(navigator.userAgent))){return;}

	var m1	=	$("#m1");
	if (m1.length>0)
	{
		m1.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":0+"ms"})
		
	}

	var GameVer	=	$("#GameVer");
	if (GameVer.length>0)
	{
		GameVer.find(".gametitle").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":210+"ms"})
		GameVer.find(".ver:even").each(function(index, element) {
				$(this).css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.4+"s","data-wow-delay":140*(index+1)+"ms"})
        });
		GameVer.find(".ver:odd").each(function(index, element) {
				$(this).css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.4+"s","data-wow-delay":140*(index+1)+"ms"})
        });
	}

	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		if (typeof(WOW)!='undefined')
		{new WOW().init();}
	};	
	
}
//悬停效果
$.fn.hovers=function(){
	
	//关于我们
	$(".btn_aboutus").hover_animate(
				{
				  aniobj:
				  [
					  
					  [
						  ".btn_readmore",					//应用对象
						  "display:block;opacity:0;",//初始CSS
						  "opacity:1;",		//mouseenter动画CSS
						  "opacity:0;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					    [
						  ".btn_readmore span",					//应用对象
						  "",//初始CSS
						  "top:50%;",		//mouseenter动画CSS
						  "top:150%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
	
	
	
	
	$(".ver").append('<span class="border_bottom"></span>')
	$(".ver").hover_animate(
				{
				  aniobj:
				  [
					 [
						  "._verbg",					//应用对象
						  "opacity:0;",//初始CSS
						  "width:100%;opacity:1;",		//mouseenter动画CSS
						  "width:0%;opacity:0;",			//mouseleave动画css
						  "{duration:600,easing:'easeOutCirc'}",					//mouseenter 时间
						  "700"						//mouseleave 时间
					  ], 
					  [
						  ".pic",					//应用对象
						  "",//初始CSS
						  "height:120%;",		//mouseenter动画CSS
						  "height:100%;",			//mouseleave动画css
						  "1200",					//mouseenter 时间
						  "700"						//mouseleave 时间
					  ],
					  [
						  ".border_bottom",					//应用对象
						  "",//初始CSS
						  "width:100%;left:0;",		//mouseenter动画CSS
						  "width:0px;left:50%;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
	
}
$.fn.wowanimate_list=function(){
	
	if (typeof(WOW)=='undefined') {return;}
	if ((/msie [6|7|8|9]/i.test(navigator.userAgent))){return;}

	var download	=	$("#download");
	if (download.length>0)
	{
		download.find(".btn_down").css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":0+"ms"})
		download.find(".btn_payment").css("visibility","hidden").addClass("wow fadeInDown").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":0+"ms"})
		download.find(".btn_pay").css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":0.9+"s","data-wow-delay":0+"ms"})
		download.find(".list li").each(function(index, element) {

				$(this).css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":(index+1)*0.1+"s","data-wow-delay":100*(index+1)+"ms"})
      });
		
	}

	var news	=	$("#news");
	if (news.length>0)
	{
		news.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	var zhuangbeis	=	$("#zhuangbeis");
	if (zhuangbeis.length>0)
	{
		zhuangbeis.css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	var zhuangbeia	=	$("#zhuangbeia");
	if (zhuangbeia.length>0)
	{
		zhuangbeia.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	var main	=	$("#main");
	if (main.length>0)
	{
		main.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}

	var playbanner	=	$("#playbanner");
	if (playbanner.length>0)
	{
		playbanner.css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	var ImagePlay1	=	$("#ImagePlay1");
	if (ImagePlay1.length>0)
	{
		ImagePlay1.css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}
	var gonggao	=	$("#gonggao");
	if (gonggao.length>0)
	{
		gonggao.css("visibility","hidden").addClass("wow fadeInDown").attr({"data-wow-offset":0,"data-wow-duration":0.5+"s","data-wow-delay":200+"ms"})
	}

	var boxleft	=	$("#boxleft");
	if (boxleft.length>0)
	{
		boxleft.css("visibility","hidden").addClass("wow fadeInRight").attr({"data-wow-offset":0,"data-wow-duration":0.8+"s","data-wow-delay":200+"ms"})
	}

	var boxright	=	$("#boxright");
	if (boxright.length>0)
	{
		boxright.css("visibility","hidden").addClass("wow fadeInLeft").attr({"data-wow-offset":0,"data-wow-duration":0.8+"s","data-wow-delay":200+"ms"})
	}


	
	var Game_show	=	$("#Game_show");
	if (Game_show.length>0)
	{
		Game_show.find("h3").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":400+"ms"})
		Game_show.find(".PicList2").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":500+"ms"})
		Game_show.find(".PicList3").css("visibility","hidden").addClass("wow fadeInUp").attr({"data-wow-offset":0,"data-wow-duration":1.5+"s","data-wow-delay":500+"ms"})
	}



		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			if (typeof(WOW)!='undefined')
			{new WOW().init();}
		};	
	
}
//弹出简介
$.fn.openintr=function(){
	
	var intr	=	$("#intr_kefu"),
		intr_zz	=	$("#intr_kefu_zz");
		
	intr.find(".btn_close").bind("click",function(){
		
		intr.fadeOut();
		intr_zz.fadeOut();
		
	});
		
	$("body").on("click","#btn_gameintr",function(){
		
		intr.fadeIn();
		intr_zz.fadeIn();
		if (intr.find(".container1").length==0){
				$("#intr_kefu").scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
		};
		return false;
		
	});
};



//滚动条
$.fn.scroll_=function(config){
	var self		=	$(this),
		scrollobj	=	'';
	if (self.length===0){
		
		scrollobj=$("[data-scroll]");
	}else {
		scrollobj=self.find("[data-scroll]");
	}
	
	if (scrollobj.length==0) {return;}
	scrollobj.each(function(index, element) {
			var self		=	$(this),
				parentobj	=	self.parent(),
				parent_h	=	0,
				parent_w	=	0;
			if (self.length==0){return;}
			
			var h		=	self.attr("data-scroll-height"),
				w		=	self.attr("data-scroll-width"),
				bfb		=		0,
				color=self.attr("data-scroll-color");
				
				if (h.indexOf("%")!=-1){
					h	=	parseInt(h);
					parent_h	=	parentobj.outerHeight();
					h			=	parent_h*(h/100);
				} else {
					h	=	parseInt(h);
				}
				
				
				if (w.indexOf("%")!=-1){
					w	=	parseInt(w);
					
					parent_w	=	parentobj.outerWidth();
					w			=	parent_w*(w/100)-30;
				} else {
					w	=	parseInt(w);
				}
				
				self.css({"width":"100%"}).wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');
				self.parents('.div_scroll').css({height:h}).scroll_absolute(config)	;
				self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
			
			if (typeof(color)!="undefined")
			{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}
	});
};



//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
								
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
								
							}
							
							
						}


            });

		}

//浮动线条
	$.fn.floatlines=function(){
		var obj			=	$(this),
			times		=	300,
			delaytime	=	null;
		if (obj.length===0){return;}
			obj.css("position","relative");
			
			
		obj.each(function(index, element) {
			var tab_obj		=	$(this),
			 	li			=	tab_obj.find("li.change");
				
			if (li.length>0)
			{
				tab_obj.find("li:last-child").after("<span class='lines'></span>");
				
				var width	=	li.outerWidth(),
					lileft	=	li.position().left+parseInt(li.css("margin-left")),
					lineobj	=	tab_obj.find(".lines");
					
					lineobj.css({"width":width,"left":lileft});
				
					tab_obj.find("li")
					.bind("mouseenter",function(){
						
							clearTimeout(delaytime)
							var myself		=	$(this),
								thiswidth	=	myself.outerWidth(),
								left		=	myself.position().left+parseInt(myself.css("margin-left"));
								lineobj.stop(true,false).animate({"width":thiswidth,"left":left},times);
					})
					.bind("mouseleave",function(){
						var myself		=	$(this);
							delaytime=setTimeout(function(){
									if (!myself.is(".change"))
									{
									var changeobj	=	myself.siblings(".change"),
										 left		=	changeobj.css("position","static").position().left+parseInt(changeobj.css("margin-left")),
										 width		=	changeobj.outerWidth();
										 lineobj.stop(true,false).animate({"width":width,"left":left},times);
									}
									
							
							},200)
					})
					
				
			}
		});	
	}
	
	
	
$.fn.hover_animate=function(obj){var time_delay=null,runlist=[],runlist_end=[],create_var=[],set_var=[],self=$(this);if(self.length===0||obj.aniobj.length===0){return}if(obj.set_class===""||typeof(obj.set_class)==="undefined"){$.extend(obj,{set_class:"hover"})}if(typeof(obj.delaytime)!=="number"||typeof(obj.delaytime)==="undefined"){$.extend(obj,{delaytime:100})}var fn={csschange:function(val){val=$.trim(val);if(val===""){return""}if(val.indexOf("{")<0||val.indexOf("}")<0){val=$.trim(val);var last_fh=val.lastIndexOf(";");if(last_fh+1===val.length){val=val.substring(0,last_fh);val="{'"+val.replace(/\:/g,"':'").replace(/\;/g,"','")+"'}"}else{val="{'"+val.replace(/\:/g,"':'").replace(/\;/g,"','")+"'}"}}return $.trim(val)}};$.each(obj.aniobj,function(index,val){if(val.length<6){return}var setobj=val[0],setobj_=setobj.replace(/\.|\ |\>/g,""),animate_css=fn.csschange(val[1]),animate_start=fn.csschange(val[2]),animate_end=fn.csschange(val[3]),animate_easing=val[4],animate_easing2=val[5],animate_delay=val[6],animate_delay2=val[7],run="",run_end="";if(typeof(animate_delay)==="undefined"){animate_delay=0}if(typeof(animate_delay2)==="undefined"){animate_delay2=0}if(animate_css!==""){animate_css_=".css("+animate_css+")"}else{animate_css_=""}if(setobj===""){return}create_var.push("var _"+setobj_+"");if(setobj==="self"){set_var.push("_"+setobj_+"=[self]")}else{set_var.push("_"+setobj_+'=[self].find("'+setobj+'")')}if(animate_start!==""){run="_"+setobj_+animate_css_+".stop(true,false).delay("+animate_delay+").animate("+animate_start+","+animate_easing+")"}else{run="_"+setobj_+animate_css}if(animate_css_!==""||animate_start!==""){runlist.push(run)}if(animate_end!==""){run_end="_"+setobj_+".stop(true,false).delay("+animate_delay2+").animate("+animate_end+","+animate_easing2+")";runlist_end.push(run_end)}});var selfobj=null;self.off(".s");$.each(create_var,function(index,val){eval(val)});self.on("mouseenter.s",function(){selfobj=$(this);$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"))});clearTimeout(time_delay);time_delay=setTimeout(function(){if(!selfobj.is(":animated")){selfobj.addClass(obj.set_class);$.each(runlist,function(index,val){eval(val)})}},obj.delaytime)}).on("mouseleave.s",function(){clearTimeout(time_delay);if(selfobj.is("."+obj.set_class)){$.each(runlist_end,function(index,val){eval(val)});selfobj.removeClass(obj.set_class)}})};



	
	
//弹窗口
function show(file,width,height)
{	
	$("#window").empty().remove();
	$("body").append('<div id="window"><div id="float_window"><iframe src="'+file+'" style="width:'+width+';height:'+height+';background-color:transparent;overflow:hidden;" scrolling="no" frameborder="0" allowtransparency="true" id="popupFrame" name="popupFrame" width="100%" height="100%"></iframe><span class="closewindow"></span></div></div>')
	$("#window").css("height",$(window).height()).show()
	$("#float_window").css({"width":width,"height":height,"margin-left":"-"+parseInt(width/2)+"px","margin-top":"-"+parseInt(height/2)+"px"})
	$(".closewindow").unbind("click");
	$(".closewindow").bind("click",function(){$("#window").empty().remove();})
}

//关闭窗口
function closewindow(){$("#window").empty().remove();}					
					
	
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});