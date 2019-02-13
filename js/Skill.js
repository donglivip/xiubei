"use strict";

$.ajax({
	type: "get",
	url: localStorage.getItem('register_url') + "/setskill/Onelist",
	async: true,
	dataType: 'json',
	success: function success(res) {
		for (var i = 0; i < res.data.length; i++) {
			$('#segmentedControls').append("\n\t\t\t\t\t\t\t<div class=\"item\" onclick='havetwo(" + res.data[i].pb_skill_type_one_id + ")'>" + res.data[i].pb_skill_type_one_title + "</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t");
		}
		havetwo(res.data[0].pb_skill_type_one_id);
	},
	error: function error(err) {
		alert(JSON.stringify(datajson));
	}
});
function havetwo(id) {
	$.ajax({
		type: "get",
		url: localStorage.getItem('register_url') + "/setskill/TwoList",
		async: true,
		data: {
			one_id: id,
			user_id: localStorage.getItem('data_id')
		},
		dataType: 'json',
		success: function success(res) {
			$('#segmentedControlContents').html('');
			for (var i = 0; i < res.data.length; i++) {
				$('#segmentedControlContents').append("\n\t\t\t\t\t\t\t\t<li class=\"mui-table-view-cell\" style='list-style-type:none;background: #FFFFFF;line-height:28px;' onclick=\"changestate('" + res.data[i].pb_skill_type_two_id + "','" + res.data[i].pb_skill_type_one_id + "')\">\n\t\t\t\t\t\t\t\t\t" + res.data[i].pb_skill_type_title + "\n\t\t\t\t\t\t\t\t\t<img src='./img/y.png' style=\"display:" + (res.data[i].checked == true ? 'block' : 'none') + "\"/>\n\t\t\t\t\t\t\t\t\t<img src='./img/n.png' style=\"display:" + (res.data[i].checked == true ? 'none' : 'block') + "\"/>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t");
			}
		},
		error: function error(err) {
			alert(JSON.stringify(datajson));
		}
	});
}
$('#back').click(function () {
	dui.jump('My.html', 'My');
});

$('#skill').click(function () {
	dui.jump('Setting_skills.html', 'Setting_skills');
});
function changestate(id, id02) {
	$.ajax({
		type: "post",
		url: localStorage.getItem('register_url') + "/setskill/Set2",
		async: true,
		data: {
			userId: localStorage.getItem('data_id'),
			targetId: id
		},
		dataType: 'json',
		success: function success(res) {
			havetwo(id02);
		},
		error: function error(err) {
			console.log(JSON.stringify(err));
		}
	});
}
mui.init();
var url_url = localStorage.getItem('register_url');
var skill = document.getElementById("skill");