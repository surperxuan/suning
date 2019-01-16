$(function(){
	$("#writeway").on("click",function(){
		$("#writeway").css("border-bottom","3px solid orange");
		$("#lookway").css("border-bottom","0");
		$(".wayo").css("display","none");
		$(".wayt").css("display","block");
	});
	$("#lookway").on("click",function(){
		$("#writeway").css("border-bottom","0");
		$("#lookway").css("border-bottom","3px solid orange");
		$(".wayo").css("display","block");
		$(".wayt").css("display","none");
	});
	$("#dknow").mousemove(function(){
		$("#sknow").css("display","block");
	});
	$("#dknow").mouseleave(function(){
		$("#sknow").css("display","none");
		$("#dknow").css("translateX","72px");
		$("#dknow").css("transition","1s all");
	});
	$("#phone").on("change",function(){
		$(".delet1").css("display","block").click(function(){
			$("#phone").val("");
			$(".delet1").css("display","none");
		})
	});
	$("#faltu").on("change",function(){
		$(".delet2").css("display","block").click(function(){
			$("#faltu").val("");
			$(".delet2").css("display","none");
		});
	});
	$("#inline").on("click",function(){
		$.post("http://47.104.244.134:8080/userlogin.do",
		{"name":$("#phone").val(),
		 "password":$("#faltu").val(),
		},
		function(data){
			console.log(data)
			if(data.code==0){
				location.href = "index.html";
				$.cookie("token",data.data.token);
			}
		}
		)
	});
});