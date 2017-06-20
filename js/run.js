$(document).ready(function () {
	$("#search_window").click(function () {
		searchResult($("#enter_city_window"));
	});

	$("#search_mobile").click(function () {
		searchResult($("#enter_city_mobile"));
	});
});