"use strict";

$(function () {
	var url_url = localStorage.getItem("register_url");
	//			var  data_id=localStorage.getItem("data_id")
	$.ajax({
		type: "GET",
		url: url_url + "/order/Infor",
		dataType: 'json',
		async: true,
		data: {
			order_id: localStorage.getItem('orderid')
		},
		success: function success(data) {
			$('.Order_ca').append("\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u7F16\u53F7</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_order_number + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u7C7B\u578B</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_skill_type_one_title + "-" + data.data.pb_skill_type_title + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u4E0B\u5355\u65F6\u95F4:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.create_time_show + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u4E0A\u95E8\u65F6\u95F4:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.sm_time + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8054\u7CFB\u4EBA:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_order_name + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u4E0B\u5355\u7C7B\u578B:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + (data.data.pb_order_type == 0 ? '派单' : '抢单') + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span style=\"color: #FF0000;\">\u8BA2\u5355\u62BC\u91D1:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;color: #FF0000;\">" + data.data.pb_order_deposit + "\u5143</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"details_a\">\n\t\t\t\t\t\t\t\t<a>\u5907\u6CE8\u5185\u5BB9:</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t<div class=\"details_textarea\">\n\t\t\t\t\t\t\t\t<textarea disabled=\"disabled\" readonly=\"readonly\">" + data.data.pb_order_details_note + "</textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"details_a\">\n\t\t\t\t\t\t\t\t<a>\u8BA2\u5355\u7167\u7247:</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"details_textarea\" id='details_textarea'>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t");
			var myimg = JSON.parse(data.data.pb_order_details_img);
			for (var i = 0; i < myimg.length; i++) {
				$('#details_textarea').append("\n\t\t\t\t\t\t\t<img src=\"" + (url_url + myimg[i]) + "\"/>\n\t\t\t\t\t\t");
			}
			if (data.data.pb_order_type == 0) {
				//获取状态值
				//拒绝订单
				$('.bu1').click(function () {
					$.ajax({
						type: "post",
						url: url_url + "/task/assignment_do",
						async: true,
						dataType: "json",
						data: {
							order_number: data.data.pb_order_number,
							send_orders_state: 2
						},
						success: function success(data) {
							if (data.status == 1) {
								var order = plus.webview.getWebviewById('Order');
								mui.file(order, 'haveOrder', {});
								plus.nativeUI.toast("拒绝成功");
								mui.back();
							}
						},
						error: function error(err) {
							plus.nativeUI.toast("拒绝失败");
						}
					});
				});
				//判断是否接单
				$('.bu').click(function () {
					$.ajax({
						type: "post",
						url: url_url + "/task/assignment_do",
						async: true,
						dataType: 'json',
						data: {
							order_number: data.data.pb_order_number,
							send_orders_state: 1
						},
						success: function success(data) {
							if (data.status == 1) {
								var music = new Audio();
								music.src = "./img/jiedanchenggong.wav";
								music.play();
								var order = plus.webview.getWebviewById('Order');
								mui.fire(order, 'haveOrder', {});
								var sy = plus.webview.getWebviewById('sy');
								mui.fire(sy, 'haveOrder', {});
								plus.nativeUI.toast("接单成功,请到订单中查看");
								setTimeout(function () {
									mui.back();
								}, 800);
							} else {
								alert(data.msg);
							}
						},
						error: function error(err) {
							plus.nativeUI.toast(err.responseJSON.msg);
						}
					});
				});
			} else {
				//获取状态值
				//拒绝订单
				$('.bu1').hide();
				//判断是否接单
				$('.bu').click(function () {
					$.ajax({
						type: "post",
						url: url_url + "/task/preemption_do",
						async: true,
						dataType: 'json',
						data: {
							order_id: data.data.pb_order_id,
							user_id: localStorage.getItem('data_id')
						},
						success: function success(data) {
							if (data.status == 1) {
								var music = new Audio();
								music.src = "./img/jiedanchenggong.wav";
								music.play();
								var sy = plus.webview.getWebviewById('sy');
								mui.fire(sy, 'haveOrder', {});
								var order = plus.webview.getWebviewById('Order');
								mui.fire(order, 'haveOrder', {});
								plus.nativeUI.toast("接单成功，请到订单中查看");
								setTimeout(function () {
									mui.back();
								}, 800);
							} else {
								plus.nativeUI.toast("该订单已被抢啦，下次记得早点来呦~");
							}
						},
						error: function error(err) {
							plus.nativeUI.toast(err.responseJSON.msg);
						}
					});
				});
			}
		},
		error: function error(data) {
			console.log(JSON.stringify(data));
		}
	});
	$('.Order_ca').on('click', 'img', function () {
		plus.nativeUI.previewImage([$(this).attr('src')]);
	});
});