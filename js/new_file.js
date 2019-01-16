//上啦刷新下来加载

mui.init({
	pullRefresh: {
		container: "#pullrefresh", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等 	
		down: {
			contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容 
			contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容 
			contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容 
			callback: downFn, //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			auto: true
		},
		up: {
			contentrefresh: '正在加载....',
			//			callback:upFn//上啦执行函数
		}

	}
});

var lisst = document.getElementById("lisst");

var url_url = localStorage.getItem("register_url");

var id = localStorage.getItem("data_id")
var page = 0
//下拉函数
function downFn() {
	lisst.innerHTML == '';
	page++
	$.ajax({
		type: "get",
		url: url_url + "/deposit/list",
		dataType: 'json',
		data: {
			'id': id,
			'page': page,
			'limit': 5
		},
		async: true,
		success: function(data) {
			for(var a in data.data) {
				if(data.data[a].pb_deposit_target == 0) {
					var b = '<a class="Deled_span">支付宝</a>'
				}

				if(data.data[a].pb_deposit_state == 0) {
					var c = '<a class="Deled_span" style="color: #2484E8;">未审核</a>'
				} else if(data.data[a].pb_deposit_state == 1) {
					var c = '<a class="Deled_span" style="color: #2484E8;">提现成功</a>'
				} else if(data.data[a].pb_deposit_state == 2) {
					var c = '<a class="Deled_span" style="color: #2484E8;">拒绝提现</a>'
				}

				var tpml = '<div class="Detailed">' +
					'<div class="Detai">' +
					'<span class="Detailed_span">到账金额：</span>' +
					'<a class="Deled_span">' + '-' + data.data[a].pb_deposit_money + '</a>' +
					'</div>' +
					'<div class="Detai">' +
					'<span class="Detailed_span">提现类型：</span>' +
					b +
					'</div>' +
					'<div class="Detai">' +
					'<span class="Detailed_span">提现账户：</span>' +
					'<a class="Deled_span">' + data.data[a].us_user_money_pay_account + '</a>' +
					'</div>' +
					'<div class="Detai">' +
					'<span class="Detailed_span">提现时间：</span>' +
					'<a class="Deled_span">' + data.data[a].pb_deposit_create_time + '</a>' +
					'</div>' +
					'<div class="Detai">' +
					'<span class="Detailed_span cell">审核状态：</span>' +
					c +
					'</div>' +
					'</div>';
				lisst.innerHTML += tpml;
			}
			clee();
		},
		error: function(data) {
			console.log(JSON.stringify(data));
		}
	});
	//改变审核状态
	function clee() {
		var cell = document.getElementsByClassName("cell");

		for(var a = 0; a < cell.length; a++) {
			cell[a].addEventListener("tap", function() {

				var oid_id = this.getAttribute('cid');

				var title = this.getAttribute('title');

				var body = this.getAttribute('body');
			})
		}

	}
	mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //这行代码会隐藏掉 正在加载... 容器
}