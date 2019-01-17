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
						<li>${data.data[i].price}</li>
						<input type='button' value='添加到购物车' class='buy' id='${data.data[i].id}'/>
					</ul>`;
				}
				$("#buylist").html(str);
				$(".buy").click(function(){
					var id=this.id;
					var token=$.cookie("token");
					console.log(token);
					$.get(
					"http://47.104.244.134:8080/cartsave.do",{
					gid:id,
					token:token
			},
				function(data){
					console.log(id)
					if(data.code==0){
						console.log("aa");
						$("#buy").click(function(){
							location.href="cart.html";
						})
						
					}
				}
				)
				})
				
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
	
});
