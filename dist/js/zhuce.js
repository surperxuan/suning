$(function(){
	$("document").ready(function(){
		$("article").css("display","block");
		$("#xieyi").click(function(){
			$("article").css("display","none");
			});
	});
	var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	var reg1=/\d{6}$/;
	var reg2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
	
	$("#phone").change(function(){//手机号验证
	if(reg.test(document.getElementById("phone").value)){//js与jquery无法同行混用
		$("#without1").css("display","none");
		$("#fals").css("background","url('../img/zhuce/sprite.png') no-repeat -120px -79px");
	}else{
		$("#without1").css("display","block");
	}
	});
	$("#trin").change(function(){//验证码
	if(reg1.test(document.getElementById("trin").value)){
		$("#without2").css("display","none");
	}else{
		$("#without2").css("display","block");
	}
	});
	$("#pwor").change(function(){//密码验证进度条
	
	});
	$("#eye").click(function(){
			$("#eye").css("background-positionX","-50px");
			$("#pwor").attr("type","text");
		});
	$("#online").click(function(){
		var val = $("#phone").val();
		var pw = $("#pwor").val();
		var or=$("#trin").val();
		console.log(val,pw);
		$.post("http://47.104.244.134:8080/usersave.do",{
		"username":val,
		"password":pw,
		"email":or,
		"sex":"0"
		},function(data){
			console.log(data,data.code)
			if(data.code==0){
				location.href = "index.html";
			}
		});
	});
	});

