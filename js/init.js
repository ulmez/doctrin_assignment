var colorTemperature, used_icon, city_name, country_name;
var weatherArray = [];
var temperatureRGBColor = [];
var arrsearchList = [];
var weathers = {
	"types": [{
		"code": 1000,
		"night_or_day_icon": ["C", "B"]
	}, {
		"code": 1003,
		"night_or_day_icon": ["I", "H"]
	}, {
		"code": 1006,
		"night_or_day_icon": ["N", "N"]
	}, {
		"code": 1009,
		"night_or_day_icon": ["L", "L"]
	}, {
		"code": 1030,
		"night_or_day_icon": ["M", "M"]
	}, {
		"code": 1063,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1066,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1072,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1087,
		"night_or_day_icon": ["O", "O"]
	}, {
		"code": 1114,
		"night_or_day_icon": ["T", "T"]
	}, {
		"code": 1117,
		"night_or_day_icon": ["T", "T"]
	}, {
		"code": 1135,
		"night_or_day_icon": ["M", "M"]
	}, {
		"code": 1147,
		"night_or_day_icon": ["M", "M"]
	}, {
		"code": 1150,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1153,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1168,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1171,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1180,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1183,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1186,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1189,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1192,
		"night_or_day_icon": ["R", "R"]
	}, {
		"code": 1195,
		"night_or_day_icon": ["R", "R"]
	}, {
		"code": 1198,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1201,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1210,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1213,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1216,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1219,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1222,
		"night_or_day_icon": ["X", "X"]
	}, {
		"code": 1225,
		"night_or_day_icon": ["X", "X"]
	}, {
		"code": 1237,
		"night_or_day_icon": ["Y", "Y"]
	}, {
		"code": 1240,
		"night_or_day_icon": ["Q", "Q"]
	}, {
		"code": 1243,
		"night_or_day_icon": ["R", "R"]
	}, {
		"code": 1246,
		"night_or_day_icon": ["R", "R"]
	}, {
		"code": 1255,
		"night_or_day_icon": ["U", "U"]
	}, {
		"code": 1258,
		"night_or_day_icon": ["X", "X"]
	}, {
		"code": 1261,
		"night_or_day_icon": ["Y", "Y"]
	}, {
		"code": 1264,
		"night_or_day_icon": ["Y", "Y"]
	}, {
		"code": 1273,
		"night_or_day_icon": ["O", "O"]
	}, {
		"code": 1276,
		"night_or_day_icon": ["O", "O"]
	}]
};