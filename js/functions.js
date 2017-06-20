// Function used to set color on box depending on temperature.
// The span used is between -30 to 30 degres celsius but it can
// be changed on the functions numberOfGrades parameter.
colorTemperature = function colorOfTemperature(arrRGBColor1, arrRGBColor2, numberOfGrades, temperature) {
	var checkAllowedTemperature;

	// Block to make span of colors restricted to numberOfGrades parameter.
	// If a city has temperature 33 and numberOfGrades are declared to 30,
	// temperature will be changed to 30 so the color range will be intact.
	if (temperature > numberOfGrades) {
		checkAllowedTemperature = numberOfGrades;
	} else if (temperature < -numberOfGrades) {
		checkAllowedTemperature = -numberOfGrades;
	} else {
		checkAllowedTemperature = temperature;
	}

	var r1, g1, b1, r2, g2, b2;

	// RGB color for start of range
	r1 = arrRGBColor1[0];
	g1 = arrRGBColor1[1];
	b1 = arrRGBColor1[2];

	// RGB color for end of range
	r2 = arrRGBColor2[0];
	g2 = arrRGBColor2[1];
	b2 = arrRGBColor2[2];

	var stepR, stepG, stepB;

	// Block to get the difference between starting
	// RGB color and ending RGB color even if the
	// starting color has a lower or higher value.
	if (r1 < r2) {
		stepR = (r2 - r1) / numberOfGrades;
	} else if (r1 > r2) {
		stepR = -(r1 - r2) / numberOfGrades;
	} else {
		stepR = 0;
	}

	if (g1 < g2) {
		stepG = (g2 - g1) / numberOfGrades;
	} else if (g1 > g2) {
		stepG = -(g1 - g2) / numberOfGrades;
	} else {
		stepG = 0;
	}

	if (b1 < b2) {
		stepB = (b2 - b1) / numberOfGrades;
	} else if (b1 > b2) {
		stepB = -(b1 - b2) / numberOfGrades;
	} else {
		stepB = 0;
	}

	// Change a negative value to a positive value
	if (checkAllowedTemperature < 0) {
		checkAllowedTemperature = -checkAllowedTemperature;
	}

	// Sets the RGB color to be used for the specific temperature
	tempR = r1 + Math.floor(stepR * checkAllowedTemperature);
	tempG = g1 + Math.floor(stepG * checkAllowedTemperature);
	tempB = b1 + Math.floor(stepB * checkAllowedTemperature);

	return [tempR, tempG, tempB];
};

function listBoxes() {
	// Removes all boxes of city country temperature
	// for both window and mobile view
	$("#insert_html_window").empty();
	$("#insert_html_mobile").empty();

	var used_icon, city_name, country_name;

	// Loops out all boxes of city country temperature
	// for both window and mobile view
	for (var k = 0; k < arrsearchList.length; k++) {

		// This block checks if the icon are available for the weather type
		var checkCodeNotAvailable = true;
		for (var i = 0; i < weathers.types.length; i++) {
			if (weathers.types[i].code === arrsearchList[k].code) {
				checkCodeNotAvailable = false;
				used_icon = weathers.types[i].night_or_day_icon[arrsearchList[k].is_day];
				break;
			}
		}

		// Uses N/A icon if the weather type is not available
		if (checkCodeNotAvailable) {
			used_icon = ")";
		}

		city_name = arrsearchList[k].name;
		country_name = arrsearchList[k].country;

		whole_string_of_city_country_together = city_name + ", " + country_name;
		length_of_city_country_together = whole_string_of_city_country_together.length;

		if (length_of_city_country_together > 15) {
			whole_string_of_city_country_together = whole_string_of_city_country_together.substring(0, 15).trim() + "...";
		}

		var gradeC = arrsearchList[k].temp_c;

		// Selects here which color range to use depending on if
		// the temperature are positive or negative in celsius
		if (gradeC >= 0) {
			temperatureRGBColor = colorTemperature([0, 158, 229], [191, 64, 0], 30, gradeC);
		} else {
			temperatureRGBColor = colorTemperature([0, 158, 229], [40, 0, 102], 30, gradeC);
		}

		// Here the html used for the temperature of the city country
		// are appended for the window view
		$("#insert_html_window").append('<div class="col-xs-offset-1 col-sm-offset-0 col-xs-10 col-sm-6 col-md-4 col-lg-3 padding-all-sides-box">' +
			'<div class="height-on-block position-relative" style="background:rgb(' + temperatureRGBColor[0] + ', ' + temperatureRGBColor[1] + ', ' + temperatureRGBColor[2] + ');">' +
			'<span class="icon position-absolute position-weather-icon" data-icon="' + used_icon + '"></span>' +
			'<span class="position-absolute position-city-country-text">' + whole_string_of_city_country_together + '</span>' +
			'<span class="position-absolute position-temperature-text font-size-temperature">' +
			gradeC + '<img class="position-celsius-icon" src="img/c.svg">' +
			'</span>' +
			'<div class="position-remove-icon">' +
			'<span onClick="removeBox(' + k + ')" class="glyphicon glyphicon-remove-sign font-size-remove-icon padding-remove-icon"></span>' +
			'</div>' +
			'</div>' +
			'</div>');

		// Here the html used for the temperature of the city country
		// are appended for the mobile view
		$("#insert_html_mobile").append('<div class="col-xs-offset-1 col-sm-offset-0 col-xs-10 col-sm-6 col-md-4 col-lg-3 padding-all-sides-box">' +
			'<div class="height-on-block position-relative" style="background:rgb(' + temperatureRGBColor[0] + ', ' + temperatureRGBColor[1] + ', ' + temperatureRGBColor[2] + ');">' +
			'<span class="icon-mobile position-absolute position-weather-icon-mobile" data-icon="' + used_icon + '"></span>' +
			'<span class="position-absolute position-city-country-text-mobile">' + whole_string_of_city_country_together + '</span>' +
			'<span class="position-absolute position-temperature-text-mobile font-size-temperature-mobile">' +
			gradeC + '<img class="position-celsius-icon-mobile" src="img/c_mobile.svg">' +
			'</span>' +
			'<div class="position-remove-icon">' +
			'<span onClick="removeBox(' + k + ')" class="glyphicon glyphicon-remove-sign font-size-remove-icon padding-remove-icon"></span>' +
			'</div>' +
			'</div>' +
			'</div>');
	}
}

// Function that deletes a specific position in the array
function removeBox(boxId) {
	arrsearchList.splice(boxId, 1);
	listBoxes();
}

// Function that gets the json values for the searched city
function searchResult(enterCityText) {
	var search_city = enterCityText.val();

	// Check here if the textfield are empty
	if (search_city.length > 0) {
		// Getting the json string from my account of apixu
		// depending on searched city in the textfield
		$.getJSON("http://api.apixu.com/v1/current.json?key=1d55151ca7f44a42921103846171406&q=" + search_city, function (json) {
			$("#enter_city_window").val("");
			$("#enter_city_mobile").val("");
			$("#error_message").hide();
			$("#error_message_mobile").hide();

			var obj = {
				name: json.location.name,
				country: json.location.country,
				temp_c: json.current.temp_c,
				is_day: json.current.is_day,
				code: json.current.condition.code
			};

			var checkNotSearched = true;

			// Adds object if array is empty
			if (arrsearchList.length === 0) {
				arrsearchList.push(obj);
				checkNotSearched = false;
			} else {
				for (var j = 0; j < arrsearchList.length; j++) {
					// Changes specific object in array on already searched for city earlier,
					// so you get new values to that box without changing its position.
					if (arrsearchList[j].name === obj.name) {
						arrsearchList[j] = obj;
						checkNotSearched = false;
						break;
					}
				}
			}

			// Inserts new object that have not been seached for
			if (checkNotSearched && arrsearchList.length > 0) {
				arrsearchList.push(obj);
			}

			listBoxes();
		}).fail(function (jqXHR) {
			// Goes to this block if the search criteria failed
			$("#enter_city_window").val("");
			$("#enter_city_mobile").val("");
			$("#error_message").show();
			$("#error_message_mobile").show();
			$("#error_message").text("Search criteria not found...");
			$("#error_message_mobile").text("Search criteria not found...");
		});
	} else {
		// Goes here if no text were entered in the textfield
		$("#error_message").show();
		$("#error_message_mobile").show();
		$("#error_message").text("You haven\'t entered any city yet...");
		$("#error_message_mobile").text("You haven\'t entered any city yet...");
	}
}