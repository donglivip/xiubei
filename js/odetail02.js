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
			$('.Order_ca').append("\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u7F16\u53F7</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_order_number + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u7C7B\u578B</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_skill_type_one_title + "-" + data.data.pb_skill_type_title + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u4E0A\u95E8\u65F6\u95F4:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.sm_time + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8054\u7CFB\u4EBA:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_order_name + "</span>\n\t\t\t\t\t\t\t</div><div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8054\u7CFB\u65B9\u5F0F:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_order_phone + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u4E0B\u5355\u5730\u5740:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_region_text + data.data.pb_order_detailed + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u4E0B\u5355\u7C7B\u578B:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + (data.data.pb_order_type == 0 ? '派单' : '抢单') + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span style=\"color: #FF0000;\">\u8BA2\u5355\u62BC\u91D1:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;color: #FF0000;\">" + data.data.pb_order_deposit + "\u5143</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"details_a\">\n\t\t\t\t\t\t\t\t<a>\u5907\u6CE8\u5185\u5BB9:</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t<div class=\"details_textarea\">\n\t\t\t\t\t\t\t\t<textarea disabled=\"disabled\" readonly=\"readonly\">" + data.data.pb_order_details_note + "</textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<div class=\"details_a\">\n\t\t\t\t\t\t\t\t<a>\u8BA2\u5355\u7167\u7247:</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"details_textarea\" id='details_textarea'>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t");
			var myimg = JSON.parse(data.data.pb_order_details_img);
			for (var i = 0; i < myimg.length; i++) {
				$('#details_textarea').append("\n\t\t\t\t\t\t\t<img src=\"" + (url_url + myimg[i]) + "\" />\n\t\t\t\t\t\t");
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