$(function(){
	$.get(
		"http://47.104.244.134:8080/goodsbytid.do",{
			"tid":"13",
			"page":"4",
			"limit":"10",
		},function(data){
			console.log(data)	
				var str="";
				for(var i=0;i<data.data.length;i++){
					str+=`<ul>
						<li>${data.data[i].id}</li>
						<img src='${data.data[i].picurl}'/>
						<li>${data.data[i].name}</li>
						<li>$${data.data[i].price}</li>
						<li><input type='button' value='添加到购物车' id="buy" class="${data.data[i].data}"/></li>
					</ul>`;
				}
				$("#buylist").html(str);
		});
	$(".cknav,.daoha").on("mouseover",function(){
		$(".cknav").css("display","block");
		$(".daoha").css("background","white");
		});
	$(".cknav,.daoha").mouseout(function(){
			$(".cknav").css("display","none")
			$(".daoha").css("background","none");
	});
	$(".buyer,.workfu").on("mouseover",function(){
		$(".workfu").css("display","block");
		$(".buyer").css("background","white");
		});
	$(".buyer,.workfu").mouseout(function(){
			$(".workfu").css("display","none")
			$(".buyer").css("background","none");
	});
	$("#buy").click(function(){
		console.log("aa");
	});
});
