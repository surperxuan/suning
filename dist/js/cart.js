$(function(){
	$.get(
	"http://47.104.244.134:8080/cartlist.do",
	{"token":$.cookie("token")},
	function(data){
		console.log(data);
		var str="";
		var prIce=0
		for(var i=0;i<data.length;i++){
			str+=`<ul>
	
		<img src='${data[i].goods.picurl}'/>
		<li>名称:${data[i].goods.name}</li>
		<li class="count">数量:<input type="button" value="+" class="addBtn"/>
		<span class="boxn">${data[i].count}</span>
		<input type="button" value="-" class="minBtn"/></li>
		<li>单号:<span class="fiNum">${data[i].gid}</span></li>
		<li>编号:<span class="twNum">${data[i].id}</span></li>
		<li>单价:<span class="onePri">${data[i].goods.price}</span></li>
		<li >价格:<span class="price">${data[i].goods.price*data[i].count}</span></li>
		<input type="button" value="不想要了" class="delet"/>
		</ul>`;
		prIce+=parseInt(`${data[i].goods.price*data[i].count}`)
	$("#buylist").html(str);
	
	}$("#pRice").html(prIce);
		
		
		var count=0
		$(".addBtn").on("click",function(){
			count=$(this).parent().find("span").html()
			count++
 			$(this).parent().find("span").html(count)
			var onepri=parseInt($(this).parent().parent().find(".onePri").html())
			prIce=$(this).parent().parent().find(".onePri").html()*count;
			$(this).parent().parent().find(".price").html(prIce);
			
			var tolPri=parseInt($("#pRice").html());
			
			tolPri=parseInt(tolPri+onepri)
			$("#pRice").html(tolPri);
			var id=$(this).parent().parent().find(".fiNum").html()
			var gid=$(this).parent().parent().find(".twNum").html()
			
			$.get(
			"http://47.104.244.134:8080/cartupdate.do",
			{"id":gid,
			"gid":id,
			"num":1,
			"token":$.cookie("token")}
			)
	})
		$(".minBtn").on("click",function(){
				count=$(this).parent().find("span").html()
				if(count>0){
					count--
				}else{
					count=0
				}
				$(this).parent().find("span").html(count)
				var onepri=parseInt($(this).parent().parent().find(".onePri").html())
				prIce=$(this).parent().parent().find(".onePri").html()*count;
				$(this).parent().parent().find(".price").html(prIce);
				var tolPri=parseInt($("#pRice").html());
				tolPri=tolPri-onepri;
				$("#pRice").html(tolPri);
				var id=$(this).parent().parent().find(".fiNum").html()
				var gid=$(this).parent().parent().find(".twNum").html()
				
				$.get(
				"http://47.104.244.134:8080/cartupdate.do",
				{"id":gid,
				"gid":id,
				"num":-1,
				"token":$.cookie("token")}
				)
		});
		$(".delet").on("click",function(){
			$(this).parent().remove();
			var id=$(this).parent().find(".fiNum").html()
			var gid=$(this).parent().find(".twNum").html()
			var tolPRi=$(this).parent().find(".price").html()
			var tolPri=parseInt($("#pRice").html());
			$.get(
			"http://47.104.244.134:8080/cartupdate.do",
			{"id":gid,
			"gid":id,
			"num":0,
			"token":$.cookie("token")},
			function(data){
			console.log("aa")
			tolPri=tolPri-tolPRi;
			$("#pRice").html(tolPri);	
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
})