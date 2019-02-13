"use strict";

var url_url = localStorage.getItem("register_url");
var data_id = localStorage.getItem("data_id");
function havepro(type, index) {
	$('.Detai_one').removeClass('active');
	$('.Detai_one').eq(index).addClass('active');
	$.ajax({
		type: "get",
		url: url_url + "/bookkeeping/List",
		dataType: 'json',
		data: {
			userId: data_id,
			type: type,
			page: 1
		},
		async: true,
		success: function success(data) {
			$('.Order_ca').html('');
			for (var i = 0; i < data.data.length; i++) {
				$('.Order_ca').append("\n\t\t\t\t\t\t\t\t<div class=\"Order_span\" style='border-top:1px solid #f4f4f4'>\n\t\t\t\t\t\t\t\t\t<span>" + data.data[i].us_bookkeeping_title + "</span>\n\t\t\t\t\t\t\t\t\t<span style=\"float: right;\">\uFFE5" + data.data[i].us_bookkeeping_money + "</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t\t<span>\u4F59\u989D</span>\n\t\t\t\t\t\t\t\t\t<span style=\"float: right;\">\uFFE5" + data.data[i].us_balance + "</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t\t<span>\u65F6\u95F4</span>\n\t\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data[i].time_show + "</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t");
			}
		},
		error: function error(data) {
			console.log(JSON.stringify(data));
		}
	});
}

havepro('NowDay', 0);

mui.init();
var list = document.getElementById("list");
var class_p = document.getElementsByTagName("p");
var Detai = document.getElementsByClassName("Detai_one");
for (var i = 0; i < Detai.length; i++) {
	Detaittp(Detai[i]);
}
function Detaittp(i) {
	i.addEventListener("tap", function () {});
}
//获取今日收入
Get_today();
function Get_today() {
	$.ajax({
		type: "get",
		url: url_url + "/bookkeeping/Count",
		dataType: 'json',
		data: {
			userId: data_id
		},
		async: true,
		success: function success(data) {
			//今日收入
			if (data.data.NowDay == 'null' || data.data.NowDay == null) {
				class_p[0].innerHTML = '￥' + 0;
				return;
			} else {
				class_p[0].innerHTML = data.data.NowDay;
			}
			//当月收入
			if (data.data.SameMonth == 'null' || data.data.SameMonth == null) {
				class_p[1].innerHTML = '￥' + 0;
				return;
			} else {
				class_p[1].innerHTML = data.data.SameMonth;
			}
			//当季收入
			if (data.data.Quarter == 'null' || data.data.Quarter == null) {
				class_p[2].innerHTML = '￥' + 0;
				return;
			} else {
				class_p[2].innerHTML = data.data.Quarter;
			}
		},
		error: function error(data) {
			console.log(JSON.stringify(data));
		}
	});
};