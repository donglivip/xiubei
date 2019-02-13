"use strict";

mui.init();var Orderbada = document.getElementsByClassName("Orderbada"),
    url_url = localStorage.getItem("register_url"),
    imgid = null,
    imglist = [];function go() {
	mui.openWindow({ url: './Order_details02.html', id: 'Order_details02', createNew: true });
}function go02() {
	mui.openWindow({ url: './cancel.html', id: 'cancel', createNew: true });
}function xiugai() {
	var price = Math.abs(parseInt(prompt('请输入价格！')));if (price == '' || price < 10) {
		alert('请输入正确的价格');return;
	}$.ajax({ type: "post", url: url_url + "/order/OrderPrice", async: true, dataType: 'json', data: { orderId: localStorage.getItem('orderid'), prices: Math.abs(parseInt(price)), userId: localStorage.getItem('data_id') }, success: function success(res) {
			if (res.code == 200) {
				plus.nativeUI.toast('修改成功!');
			} else {
				plus.nativeUI.toast('修改失败!');
			}
		} });
}function myajax() {
	$('.Order_ca').html('');$('.fulfi').html('');$.ajax({ type: "GET", url: url_url + "/order/Infor", dataType: 'json', async: true, data: { order_id: localStorage.getItem('orderid') }, success: function success(data) {
			localStorage.setItem('ordernumber', data.data.pb_order_number);$('.Order_ca').append("\t\n\t\t\t\t\t\t\t<div class=\"Ord myorder\" onclick='go()'>\n\t\t\t\t\t\t\t\t<span style='margin-left:.1rem'>\u67E5\u770B\u8BE6\u60C5</span>\n\t\t\t\t\t\t\t\t<span class='mui-icon mui-icon-forward'></span>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u7C7B\u578B</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_skill_type_one_title + " - " + data.data.pb_skill_type_title + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u4E0A\u95E8\u65F6\u95F4:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.sm_time + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u5730\u5740:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_region_text + data.data.pb_order_detailed + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t<div class=\"Order_span\">\n\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u62BC\u91D1:</span>\n\t\t\t\t\t\t\t\t<span style=\"float: right;\">" + data.data.pb_order_deposit + "\u5143</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t");$('.fulfi').append("\n\t\t\t\t\t\t\t\t<block style=\"display:" + (data.data.pb_order_details_state == 0 ? 'block' : 'none') + "\">\n\t\t\t\t\t\t\t\t\t<a style='margin-top:.1rem'>1</a>\n\t\t\t\t\t\t\t\t\t<h1 style='width:80%;line-height:.35rem;'>\u8BF7\u8FDB\u884C\u7B7E\u5230\uFF1A<span style='color:red'>\u8BF7\u8DDF\u7528\u6237\u786E\u8BA4\u597D\u4EF7\u683C\u540E\u518D\u7B7E\u5230,\u7B7E\u5230\u4E4B\u540E\u5C06\u65E0\u6CD5\u53D6\u6D88\u8BA2\u5355,\u8BF7\u8C28\u614E\u7B7E\u5230!!</span></h1>\n\t\t\t\t\t\t\t\t\t<button onclick=\"change('SignIn')\">\u672A\u7B7E\u5230</button>\n\t\t\t\t\t\t\t\t</block>\n\t\t\t\t\t\t\t\t<block style=\"display:" + (data.data.pb_order_details_state == 1 ? 'block' : 'none') + "\">\n\t\t\t\t\t\t\t\t\t<a>2</a>\n\t\t\t\t\t\t\t\t\t<h1 style=\"width: 80%;\">\u5DE5\u4F5C\u5185\u5BB9\u8BE6\u60C5\uFF1A</h1>\n\t\t\t\t\t\t\t\t\t<div class=\"img-da\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"img/da.png\" />\n\t\t\t\t\t\t\t\t\t\t<textarea id='mytext'></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</block>\n\t\t\t\t\t\t\t\t<block style=\"display:" + (data.data.pb_order_details_state == 2 ? 'block' : 'none') + "\">\n\t\t\t\t\t\t\t\t\t<a>3</a>\n\t\t\t\t\t\t\t\t\t<h1 style=\"width: 80%;\">\u4E0A\u4F20\u5DE5\u4F5C\u7167\uFF1A</h1>\n\t\t\t\t\t\t\t\t\t<div class=\"ful_img\">\n\t\t\t\t\t\t\t\t\t\t<img style=\"width:10px;height: 1.3rem;;margin-left: 3.5%;\" src=\"img/da.png\" />\n\t\t\t\t\t\t\t\t\t\t<img class=\"img_a\" id='img01' src=\"img/44.png\" onclick=\"imgclick('img01')\"/>\n\t\t\t\t\t\t\t\t\t\t<img class=\"img_a\" id='img02' src=\"img/44.png\" onclick=\"imgclick('img02')\"/>\n\t\t\t\t\t\t\t\t\t\t<img class=\"img_a\" id='img03' src=\"img/44.png\" onclick=\"imgclick('img03')\"/>\n\t\t\t\t\t\t\t\t\t\t<img class=\"img_a\" id='img04' src=\"img/44.png\" onclick=\"imgclick('img04')\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</block>\n\t\t\t\t\t\t\t\t<block style=\"display:" + (data.data.pb_order_details_state == 3 ? 'block' : 'none') + "\">\n\t\t\t\t\t\t\t\t\t<a>4</a>\n\t\t\t\t\t\t\t\t\t<h1 style=\"width: 80%;\">\u8BF7\u8F93\u5165\u5B9E\u9645\u8BA2\u5355\u8D39\u7528(\u6700\u5C0F10\u5143)\uFF1A</h1>\n\t\t\t\t\t\t\t\t\t<div class=\"ful_img\">\n\t\t\t\t\t\t\t\t\t\t<img style=\"width:10px; height: 1.3rem;margin-left: 3.5%;\" src=\"img/da.png\" />\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"class_input\" placeholder=\"\u8BF7\u5E08\u5085\u8F93\u5165\u8BA2\u5355\u4EF7\u683C(\u5143)\" id='FillInCost' min=\"10\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</block>\n\t\t\t\t\t\t\t\t<block style=\"display:" + (data.data.pb_order_details_state == 4 ? 'block' : 'none') + "\">\n\t\t\t\t\t\t\t\t\t<a style=\"background: #FFFFFF;border: 1px solid #DDD;color: #000000;\">5</a>\n\t\t\t\t\t\t\t\t\t<h1 style=\"width: 80%;\">\u5907\u6CE8\u4FE1\u606F\uFF1A</h1>\n\t\t\t\t\t\t\t\t\t<div class=\"ful_img\">\n\t\t\t\t\t\t\t\t\t\t<img style=\"width:10px; height:65px;margin-left: 3.5%;\" src=\"img/da.png\" />\n\t\t\t\t\t\t\t\t\t\t<textarea id='Remark'></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</block>\n\t\t\t\t\t\t\t\t<button onclick=\"change02(" + data.data.pb_order_details_state + ")\" style=\"display:" + (data.data.pb_order_details_state == 6 ? 'none' : 'block') + "\">\n\t\t\t\t\t\t\t\t" + (data.data.pb_order_details_state != 5 ? '下一步' : '支付订单') + "\n\t\t\t\t\t\t\t\t</button>\n\t\n\t\t\t\t\t\t");if (data.data.pb_order_details_state != 0) {
				$('#quxiao').hide();
			}if (data.data.pb_order_details_state == 5) {
				$('#xiugai').show();
			} else {
				$('#xiugai').hide();
			}function plusReady() {
				plus.nativeUI.closeWaiting();
			}if (window.plus) {
				plusReady();
			} else {
				document.addEventListener("plusready", plusReady, false);
			}
		}, error: function error(data) {
			function plusReady() {
				plus.nativeUI.closeWaiting();
			}if (window.plus) {
				plusReady();
			} else {
				document.addEventListener("plusready", plusReady, false);
			}console.log(JSON.stringify(data));
		} });
}function change(type) {
	var datajson = { order_id: localStorage.getItem('orderid'), order_state: type };$.ajax({ type: "post", url: url_url + "/order/SetOrderDetailsState", async: true, dataType: 'json', data: datajson, success: function success(res) {
			if (res.status == 'ok') {
				myajax();
			} else {
				alert('请求失败！请联系管理员');
			}
		}, error: function error(err) {
			alert('请求失败！请联系管理员');
		} });
}function change02(type) {
	var datajson;if (type == 5) {
		$.ajax({ type: "post", url: url_url + "/order/PayOrder", async: true, data: { order_id: localStorage.getItem('orderid'), user_id: localStorage.getItem('data_id') }, dataType: 'json', success: function success(res) {
				if (res.status == 'ok') {
					plus.webview.getWebviewById('Order').reload();plus.nativeUI.toast('支付成功 ');var order = plus.webview.getWebviewById('Order');mui.fire(order, 'haveOrder', {});mui.back();
				} else if (res.status == 'lowMoney') {
					var order = plus.webview.getWebviewById('Order');mui.fire(order, 'haveOrder', {});plus.nativeUI.toast('资金不足 ');mui.openWindow({ url: './Recharge.html', id: 'Recharge' });plus.nativeUI.closeWaiting();
				} else if (res.code == 301) {
					plus.nativeUI.toast('用户已取消 ');
				} else {
					plus.nativeUI.toast('操作失败,请稍后再试或联系管理员！ ');
				}
			}, error: function error(err) {
				alert(JSON.stringify(err));
			} });
	} else {
		if (type == 0) {
			datajson = { order_id: localStorage.getItem('orderid'), order_state: 'SignIn', userId: localStorage.getItem('data_id') };
		} else if (type == 1) {
			datajson = { order_id: localStorage.getItem('orderid'), order_state: 'FillInBody', infor: $('#mytext').val(), userId: localStorage.getItem('data_id') };
		} else if (type == 2) {
			datajson = { order_id: localStorage.getItem('orderid'), order_state: 'UploadPhoto', infor: JSON.stringify(imglist), userId: localStorage.getItem('data_id') };
		} else if (type == 3) {
			if ($('#FillInCost').val() < 10) {
				alert('金额最小为10元！');return;
			}$('#FillInCost').val(parseInt($('#FillInCost').val()));datajson = { order_id: localStorage.getItem('orderid'), order_state: 'FillInCost', infor: $('#FillInCost').val(), userId: localStorage.getItem('data_id') };
		} else if (type == 4) {
			datajson = { order_id: localStorage.getItem('orderid'), order_state: 'Remark', infor: $('#Remark').val(), userId: localStorage.getItem('data_id') };
		}if (($('#FillInCost').val() == '' || $('#FillInCost').val() <= 0) && type == 3) {
			return false;return;
		}console.log(JSON.stringify(datajson));$.ajax({ type: "post", url: url_url + "/order/SetOrderDetailsState", async: true, data: datajson, dataType: 'json', success: function success(res) {
				if (res.status == 'ok') {
					myajax();
				} else {
					alert('接单失败！');
				}
			}, error: function error(err) {
				alert(JSON.stringify(datajson));
			} });
	}
}myajax();function imgclick(id) {
	imgid = id;var btnArray = [{ title: "照相机" }, { title: "相册" }];plus.nativeUI.actionSheet({ title: "请选择", cancel: "取消", buttons: btnArray }, function (e) {
		var index = e.index;switch (index) {case 1:
				camera();break;case 2:
				album();break;}
	});
}function camera() {
	var cmr = plus.camera.getCamera();cmr.captureImage(function (p) {
		plus.io.resolveLocalFileSystemURL(p, function (entry) {
			var img_name = entry.name;var img_path = entry.toLocalURL();$("#" + imgid + "").attr('src', img_path);upload_img(img_path);
		}, function (e) {
			alert("读取拍照文件错误：" + e.message);
		});
	}, function (e) {
		alert("失败：" + e.message);
	}, { filename: '_doc/camera/', index: 1 });
}function album() {
	plus.gallery.pick(function (path) {
		upload_img(path);$("#" + imgid + "").attr('src', path);
	}, function (e) {
		alert("取消选择图片");
	}, { filter: "image" });
}var server = url_url + "/public_upload/Upload";var files = [];function upload_img(p) {
	var n = p.substr(p.lastIndexOf('/') + 1);files.push({ name: "file", path: p });start_upload();
}function start_upload() {
	if (files.length <= 0) {
		plus.nativeUI.alert("没有添加上传文件！");return;
	}var wt = plus.nativeUI.showWaiting();var task = plus.uploader.createUpload(server, { method: "POST" }, function (t, status) {
		if (status == 200) {
			var responseText = t.responseText;imglist.push(responseText);wt.close();
		} else {
			alert("上传失败：" + status);wt.close();
		}
	});task.addData("uid", getUid());for (var i = 0; i < files.length; i += 1) {
		var f = files[i];task.addFile(f.path, { key: f.name });
	}task.start();
}function getUid() {
	return Math.floor(Math.random() * 100000000 + 10000000).toString();
}