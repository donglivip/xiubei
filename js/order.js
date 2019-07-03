"use strict";

mui.init();
var cell = document.getElementsByClassName("cell");
var btn = document.getElementsByTagName("button");
var ri_come = document.getElementsByClassName("me-active-a");
var me = document.getElementsByClassName("me-active-a");
$('iframe').hide();
$('#mya').hide();

function myajax(type, index) {
	$('.ri_come a').removeClass('me-active-a');
	$('.ri_come a').eq(index).addClass('me-active-a');
	$.ajax({
		type: "get",
		url: localStorage.getItem('register_url') + "/order/OrderList",
		async: true,
		dataType: 'json',
		data: {
			userId: localStorage.getItem("data_id"),
			page: 1,
			getType: type
		},
		success: function success(data) {
			console.log(JSON.stringify(data));
			$('#list').html('');
			for(var i = 0; i < data.data.length; i += 1) {
				$('#list').append("\n\t\t\t\t\t\t\t<div class=\"Order_ca\">\n\t\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u7C7B\u578B</span>\n\t\t\t\t\t\t\t\t\t<span>" + data.data[i].pb_skill_type_one_title + " - " + data.data[i].pb_skill_type_title + "</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t\t<span>\u4E0A\u95E8\u65F6\u95F4:</span>\n\t\t\t\t\t\t\t\t\t<span>" + data.data[i].sm_time + "</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u5730\u5740:</span>\n\t\t\t\t\t\t\t\t\t<span>" + data.data[i].pb_region_text + data.data[i].pb_order_detailed + "</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u62BC\u91D1:</span>\n\t\t\t\t\t\t\t\t\t<span>" + data.data[i].pb_order_deposit + "\u5143</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t<div class=\"Ord\" style='display:flex;margin-bottom:.2rem;'>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" onclick=\"gomap('" + data.data[i].pb_order_details_x + "','" + data.data[i].pb_order_details_y + "','" + data.data[i].pb_order_detailed + "')\">\u5BFC\u822A\u8FC7\u53BB</a>\n\t\t\t\t\t\t\t\t<span style='flex:1'></span>\n\t\t\t\t\t\t\t\t<a class=\"Orderbada\" style=\"margin-left: 0.1rem;background: #0062CC;color: #FFFFFF;\" onclick='opennew(" + data.data[i].pb_order_id + ")'>\u5DE5\u4F5C\u6D41\u7A0B</a>\n\t\t\t\t\t\t\t\t<a class=\"Orderbada\" href='tel:" + data.data[i].pb_order_phone + "'>\u62E8\u6253\u7535\u8BDD</a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t");
				if(index == 2 || index == 1) {
					$('.Ord').hide();
				}
			}
		}
	});
}
myajax('unfinished', 0);
document.addEventListener("haveOrder", function() {
	myajax('unfinished', 0);
});

function opennew(id) {
	localStorage.setItem('orderid', id);
	mui.openWindow({
		url: './fulfillment_Order.html',
		id: 'fulfillment_Order'
	});
}

function gomap(lat, lng, name) {
	plus.geolocation.getCurrentPosition(function(p) {
		plus.maps.openSysMap(new plus.maps.Point(p.coords.longitude, p.coords.latitude),name,new plus.maps.Point(lat, lng));
	});
}

function ihide() {
	$('iframe').hide();
	$('#mya').hide();
	$('.mui-content').show();
}