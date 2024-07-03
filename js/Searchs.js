var intRegex = /^\d/;
var cntAddDiv = 2;
var IsMultiCity = false;
var totalMultiCity = 0;
var tabindexx = 7;
var urlis = window.location.pathname.replace('/', '');

$(document).ready(function () {
    $('#Origins').focus();
    var totMonthToShow = 1;

    $('.multicity_news').hide();
 
    $(".rndtrp").click(function () {

        IsMultiCity = false;
        $('.multicity_news').hide();
        $("#arrivalSpans").show();
 $("#arrivalSpans").show();
        $(".rndtrpopt").show(500);
        $("#txtArrivals").prop('disabled', false);
        $("#txtArrivals").prev("input[type='text']").removeAttr("readonly");
  $("#txtArrivals").prop('disabled', false);
        $("#txtArrivals").prev("input[type='text']").removeAttr("readonly");
        $("#lbl_flight1").hide();
        $(".rndtrp").addClass('trpact');
        $(".onwtrp").removeClass('trpact');
        $(".multitrip").removeClass('trpact');

        var dtret = $('#txtDepartuals').datepicker('getDate');
        dtret.setDate(dtret.getDate() + 1);
        var dtret_min = $('#txtDepartuals').datepicker('getDate');
        dtret_min.setDate(dtret_min.getDate());
        $("#txtArrivals").datepicker("option", "minDate", dtret_min);
        $("#txtArrivals").datepicker().datepicker("setDate", dtret);

    });
    $(".onwtrp").click(function () {

        IsMultiCity = false;
        $('.multicity_news').hide();
        $("#arrivalSpans").show();
        $("#txtArrivals").prop('disabled', true);
        $("#txtArrivals").prev("input[type='text']").attr("readonly", true);
        $("#txtArrivals").val("");
        $("#lbl_flight1").hide();
        $(".rndtrp").removeClass('trpact');
        $(".multitrip").removeClass('trpact');
        $(".onwtrp").addClass('trpact');
        $("#arrivalSpans").hide();
    });
    $(".multitrip").click(function () {
        IsMultiCity = true;

        $('.multicity_news').show();
        $("#arrivalSpans").hide();
        $("#txtReturn").prop('disabled', false);
        $("#txtReturn").prev("input[type='text']").removeAttr("readonly");
        $("#txtArrivals").val("");
        $(".onwtrp").removeClass('trpact');
        $(".rndtrp").removeClass('trpact');
        $(".multitrip").addClass('trpact');

        $("#lbl_flight1").show();
        $("#lbl_flight2").show();

        $("#lbl_departdate").hide();
        $("#arrivalSpans").hide();
        $("#mainErrorCover").html('');

        var dtret = $('#txtDepartuals').datepicker('getDate');
        dtret.setDate(dtret.getDate() + 1);
        var dtret_min = $('#txtDepartuals').datepicker('getDate');
        dtret_min.setDate(dtret_min.getDate());

        $("#txtDepartingDates_1").datepicker("option", "minDate", dtret_min);
        $("#txtDepartingDates_1").datepicker().datepicker("setDate", dtret);

    });
    $(".qtyplus,.qtyplus1,.qtyplus2").click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        var totaltravelers = parseInt($("#adulttravelerss").val()) + parseInt($("#minortravelerss").val()) + parseInt($("#infanttravelerss").val());

        if (totaltravelers < 9) {
            // If is not undefined

            if (!isNaN(currentVal)) {
                // Increment
                $('input[name=' + fieldName + ']').val(currentVal + 1);
                updateTravelerValue();
            }

            else {
                // Otherwise put a 0 there
                $('input[name=' + fieldName + ']').val(0);
            }
        }
        else {
            $('#myModal').modal('show');
        }
    });
    $(".qtyminus,.qtyminus1,.qtyminus2").click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        var totaltravelers = parseInt($("#adulttravelerss").val()) + parseInt($("#minortravelerss").val()) + parseInt($("#infanttravelerss").val());
        if ((fieldName != "quantity2") && (fieldName != "quantity1") && (parseInt($("#adulttravelers").val()) == 0 || parseInt($("#adulttravelers").val()) == 1)) {
        } else {
            if (!isNaN(currentVal) && currentVal > 1) {
                // Decrement one
                $('input[name=' + fieldName + ']').val(currentVal - 1);
                updateTravelerValue();
            }
            else if (!isNaN(currentVal) && currentVal >= 1 && (fieldName == "quantity2" || fieldName == "quantity1")) {
                // Decrement one
                $('input[name=' + fieldName + ']').val(currentVal - 1);
                updateTravelerValue();
            }
            else {
                // Otherwise put a 0 there
                $('input[name=' + fieldName + ']').val(0);
            }
        }

        // If it isn't undefined or its greater than 0

    });

    $("#txtDepartuals").datepicker({
        numberOfMonths: totMonthToShow,
        dateFormat: 'M dd, yy',
        minDate: 0,
        onClose: function (selectedDate) {
            if (IsMultiCity = true) {
                $("#txtDepartingDates_1").datepicker("option", "minDate", selectedDate);
            }
            else {
                  $("#txtArrivals").datepicker("option", "minDate", selectedDate);
                $("#txtArrivals").focus();

            }
            return false;
        }
    });
    $("#txtArrivals").datepicker({
        numberOfMonths: totMonthToShow,
        dateFormat: 'M dd, yy',
        minDate: 0,
        maxDate: "+12m",
        onClose: function (selectedDate) {
            //$("#txtArrivals").datepicker("option", "minDate", selectedDate);
            $(".NumberofTraveler").focus();
            return false;
        }
    });
    $("#txtDepartingDates_1").datepicker({
        numberOfMonths: totMonthToShow,
        dateFormat: 'M dd, yy',
        minDate: 0,
        maxDate: "+12m",
        monthNames: ["Depart (Jan)", "Depart (Feb)", "Depart (Mar)", "Depart (Apr)", "Depart (May)", "Depart (Jun)", "Depart (Jul)", "Depart (Aug)", "Depart (Sep)", "Depart (Oct)", "Depart (Nov)", "Depart (Dec)"],
        onClose: function (selectedDate) {
            //$("#txtArrivals").datepicker("option", "minDate", selectedDate);
            $(".NumberofTraveler").focus();
            return false;
        },
        onSelect: function (selectedDate) {
            var icnt_dt = 2;
            for (icnt_dt = 2; icnt_dt < parseInt(cntAddDiv) ; icnt_dt++) {
                var date_before = $('#txtDepartingDates_' + (parseInt(icnt_dt) - 1) + '').datepicker('getDate');
                date_before.setDate(date_before.getDate() + 1);
                $('#txtDepartingDates_' + icnt_dt + '').datepicker("option", "minDate", $('#txtDepartingDates_' + (parseInt(icnt_dt) - 1) + '').val());
                $('#txtDepartingDates_' + icnt_dt + '').datepicker().datepicker("setDate", date_before);
            }
        }
    });
    // $('#txtDepartingDates_1').datepicker("option", "monthNames", ["Depart (Jan)", "Depart (Feb)", "Depart (Mar)", "Depart (Apr)", "Depart (May)", "Depart (Jun)", "Depart (Jul)", "Depart (Aug)", "Depart (Sep)", "Depart (Oct)", "Depart (Nov)", "Depart (Dec)"]);


    if ('@TempData["IsError"]' != null) {
        if ('@TempData["IsError"]' == "True") {
            document.getElementById("mainErrorCover").style.display = "block";
        }
    }
});
$(document).ready(function () {
    //$(".slidingDiv").hide();
    //$(".show_hide").show();
    //$('.plus').click(function () {
    //    $(this).hide();
    //    $('.minus').show();
    //    $('.slidingDiv').show(500);
    //});
    //$('.minus').click(function () {
    //    $(this).hide();
    //    $('.plus').show();
    //    $('.slidingDiv').hide(500);

    //});
    $('#Origins').autocomplete({
        autoFocus: true,
        minLength: 1,
        source: function (request, response) {
            var searchText = document.getElementById('Origins').value;
            $.ajax({
                type: "POST",
                contentType: "application/json;",
                url: "/Flight/GetAutoSuggestionForUser",
                data: "{search_:'" + $.trim(searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    //var jsonData = JSON.parse(result);
                    //response(jsonData);
                    response(result);
                },
                error: function (result) {
                    console.log(result);
                }
            });
        },
        focus: function (event, ui) {

            $("#Origins").val(document.getElementById('Origins').value);
			
            $(".OriginCode").val(ui.item.AirportCode);
            $(".OriginCityCode").val(ui.item.CityCode);
            $(".OriginCityName").val(ui.item.CityName);
            lastOrigin = ui.item.autosuggest;
            lastOriginCode = ui.item.AirportCode;
            lastOriginCityCode = ui.item.CityCode;
            lastOriginCityName = ui.item.CityName;
            return false;
        },
        blur: function (event, ui) {

            $("#Origins").val(ui.item.autosuggest);
            $(".OriginCode").val(ui.item.AirportCode);
            $(".OriginCityCode").val(ui.item.CityCode);
            $(".OriginCityName").val(ui.item.CityName);
            lastOrigin = ui.item.autosuggest;
            lastOriginCode = ui.item.AirportCode;
            lastOriginCityCode = ui.item.CityCode;
            lastOriginCityName = ui.item.CityName;
            $('#Destinations').focus();
            return false;
        },
        select: function (event, ui) {
            $("#Origins").val(ui.item.autosuggest);
            $(".OriginCode").val(ui.item.AirportCode);
            $(".OriginCityCode").val(ui.item.CityCode);
            $(".OriginCityName").val(ui.item.CityName);
            lastOrigin = ui.item.autosuggest;
            lastOriginCode = ui.item.AirportCode;
            lastOriginCityCode = ui.item.CityCode;
            lastOriginCityName = ui.item.CityName;
            $('#Destinations').focus();
            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, response) {
            return $("<li>")
                .append(response.autosuggest)
                .appendTo(ul);
        };

    $('#Destinations').autocomplete({
        autoFocus: true,
        minLength: 1,
        source: function (request, response) {
            var searchText = document.getElementById('Destinations').value;
            $.ajax({
                type: "POST",
                contentType: "application/json;",
                async: false,
                url: "/Flight/GetAutoSuggestionForUser",
                data: "{search_:'" + $.trim(searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    //var jsonData = JSON.parse(result);
                    //response(jsonData);
                    response(result);
                },
                error: function (result) {
                    console.log(result);
                }
            });
        },
        focus: function (event, ui) {
            $("#Destinations").val(document.getElementById('Destinations').value);
            $(".DestinationCode").val(ui.item.AirportCode);
            $(".DestinationCityCode").val(ui.item.CityCode);
            $(".DestinationCityName").val(ui.item.CityName);
            lastDestination = ui.item.autosuggest;
            lastDestinationCode = ui.item.AirportCode;
            lastDestinationCityCode = ui.item.CityCode;
            lastDestinationCityName = ui.item.CityName;
            // $('#txtDepartuals').focus();
            return false;
        },
        blur: function (event, ui) {
            $("#Destinations").val(ui.item.autosuggest);
            $(".DestinationCode").val(ui.item.AirportCode);
            $(".DestinationCityCode").val(ui.item.CityCode);
            $(".DestinationCityName").val(ui.item.CityName);
            lastDestination = ui.item.autosuggest;
            lastDestinationCode = ui.item.AirportCode;
            lastDestinationCityCode = ui.item.CityCode;
            lastDestinationCityName = ui.item.CityName;
            //$('#txtDepartuals').focus();
            return false;
        },
        select: function (event, ui) {
            $("#Destinations").val(ui.item.autosuggest);
            $(".DestinationCode").val(ui.item.AirportCode);
            $(".DestinationCityCode").val(ui.item.CityCode);
            $(".DestinationCityName").val(ui.item.CityName);

            lastDestination = ui.item.autosuggest;
            lastDestinationCode = ui.item.AirportCode;
            lastDestinationCityCode = ui.item.CityCode;
            lastDestinationCityName = ui.item.CityName;
            $('#txtDepartuals').focus();
            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, response) {
            return $("<li>")
                .append(response.autosuggest)
                .appendTo(ul);
        };
    $('#Origins_1').autocomplete({
        autoFocus: true,
        minLength: 1,
        source: function (request, response) {
            var searchText = document.getElementById('Origins_1').value;
            $.ajax({
                type: "POST",
                contentType: "application/json;",
                url: "/Flight/GetAutoSuggestionForUser",
                data: "{search_:'" + $.trim(searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    //var jsonData = JSON.parse(result);
                    //response(jsonData);
                    response(result);
                },
                error: function (result) {
                    console.log(result);
                }
            });
        },
        focus: function (event, ui) {

            $("#Origins_1").val(document.getElementById('Origins_1').value);
            //$("#OriginCode").val(ui.item.AirportCode);
            //$("#OriginCityCode").val(ui.item.CityCode);
            //$("#OriginCityName").val(ui.item.CityName);
            //lastOrigin = ui.item.autosuggest;
            //lastOriginCode = ui.item.AirportCode;
            //lastOriginCityCode = ui.item.CityCode;
            //lastOriginCityName = ui.item.CityName;
            return false;
        },
        blur: function (event, ui) {

            $("#Origins_1").val(ui.item.autosuggest);
            //$("#OriginCode").val(ui.item.AirportCode);
            //$("#OriginCityCode").val(ui.item.CityCode);
            //$("#OriginCityName").val(ui.item.CityName);
            //lastOrigin = ui.item.autosuggest;
            //lastOriginCode = ui.item.AirportCode;
            //lastOriginCityCode = ui.item.CityCode;
            //lastOriginCityName = ui.item.CityName;
            $('#Destinations_1').focus();
            return false;
        },
        select: function (event, ui) {
            $("#Origins_1").val(ui.item.autosuggest);
            //$("#OriginCode").val(ui.item.AirportCode);
            //$("#OriginCityCode").val(ui.item.CityCode);
            //$("#OriginCityName").val(ui.item.CityName);
            //lastOrigin = ui.item.autosuggest;
            //lastOriginCode = ui.item.AirportCode;
            //lastOriginCityCode = ui.item.CityCode;
            //lastOriginCityName = ui.item.CityName;
            $('#Destinations_1').focus();
            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, response) {
            return $("<li>")
                .append(response.autosuggest)
                .appendTo(ul);
        };
    $('#Destinations_1').autocomplete({
        autoFocus: true,
        minLength: 1,
        source: function (request, response) {
            var searchText = document.getElementById('Destinations_1').value;
            $.ajax({
                type: "POST",
                contentType: "application/json;",
                url: "/Flight/GetAutoSuggestionForUser",
                data: "{search_:'" + $.trim(searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    //var jsonData = JSON.parse(result);
                    //response(jsonData);
                    response(result);
                },
                error: function (result) {
                    console.log(result);
                }
            });
        },
        focus: function (event, ui) {

            $("#Destinations_1").val(document.getElementById('Destinations_1').value);
            //$("#OriginCode").val(ui.item.AirportCode);
            //$("#OriginCityCode").val(ui.item.CityCode);
            //$("#OriginCityName").val(ui.item.CityName);
            //lastOrigin = ui.item.autosuggest;
            //lastOriginCode = ui.item.AirportCode;
            //lastOriginCityCode = ui.item.CityCode;
            //lastOriginCityName = ui.item.CityName;
            return false;
        },
        blur: function (event, ui) {

            $("#Destinations_1").val(ui.item.autosuggest);
            //$("#OriginCode").val(ui.item.AirportCode);
            //$("#OriginCityCode").val(ui.item.CityCode);
            //$("#OriginCityName").val(ui.item.CityName);
            //lastOrigin = ui.item.autosuggest;
            //lastOriginCode = ui.item.AirportCode;
            //lastOriginCityCode = ui.item.CityCode;
            //lastOriginCityName = ui.item.CityName;
            $('#Destinations_1').focus();
            return false;
        },
        select: function (event, ui) {
            $("#Destinations_1").val(ui.item.autosuggest);
            //$("#OriginCode").val(ui.item.AirportCode);
            //$("#OriginCityCode").val(ui.item.CityCode);
            //$("#OriginCityName").val(ui.item.CityName);
            //lastOrigin = ui.item.autosuggest;
            //lastOriginCode = ui.item.AirportCode;
            //lastOriginCityCode = ui.item.CityCode;
            //lastOriginCityName = ui.item.CityName;
            $('#txtDepartingDates_1').focus();
            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, response) {
            return $("<li>")
                .append(response.autosuggest)
                .appendTo(ul);
        };
    $('#BindPreferedairlines').autocomplete({
        autoFocus: true,
        minLength: 1,
        source: function (request, response) {
            var searchText = document.getElementById('BindPreferedairlines').value;
            $.ajax({
                type: "POST",
                contentType: "application/json;",
                async: false,
                url: "/Flight/GetFlightPrafranceForUser",
                data: "{search_:'" + searchText + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result) {

                    var jsonData = JSON.parse(result);
                    response(jsonData);
                },
                error: function (result) {
                    console.log(result);
                }
            });
        },
        //focus: function (event, ui) {
        //    $("#BindPreferedairlines").val(ui.item.AirlineName);
        //    $("#PreferedairlinesCode").val(ui.item.AirlineCode);

        //    lastPreferredAirline = ui.item.AirlineName;
        //    lastPreferredAirlineCode = ui.item.AirlineCode;
        //    return false;
        //},
        blur: function (event, ui) {
            $("#BindPreferedairlines").val(ui.item.AirlineName);
            $("#PreferedairlinesCode").val(ui.item.AirlineCode);
            lastPreferredAirline = ui.item.AirlineName;
            lastPreferredAirlineCode = ui.item.AirlineCode;
            return false;
        },
        select: function (event, ui) {
            $("#BindPreferedairlines").val(ui.item.AirlineName);
            $("#PreferedairlinesCode").val(ui.item.AirlineCode);
            lastPreferredAirline = ui.item.AirlineName;
            lastPreferredAirlineCode = ui.item.AirlineCode;
            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, response) {
            return $("<li>")
                .append(response.AirlineName)
                .appendTo(ul);
        };

    var lastOrigin = '';
    var lastOriginCode = '';
    var lastOriginCityCode = '';
    var lastOriginCityName = '';
    var lastDestination = '';
    var lastDestinationCode = '';
    var lastDestinationCityCode = '';
    var lastDestinationCityName = '';
    var lastPreferredAirline = '';
    var lastPreferredAirlineCode = '';
    $("#Origins").change(function () {
        if (lastOrigin == $("#Origins").val()) {
            $("#OriginCode").val(lastOriginCode);
            $("#OriginCityCode").val(lastOriginCityCode);
            $("#OriginCityName").val(lastOriginCityName);

        } else {
            $("#OriginCode").val("");
            $("#OriginCityCode").val("");
            $("#OriginCityName").val("");
        }
        // $('#Destinations').focus();
    });
    $("#Destinations").change(function () {
        if (lastDestination == $("#Destinations").val()) {
            $("#DestinationCode").val(lastDestinationCode);
            $("#DestinationCityCode").val(lastDestinationCityCode);
            $("#DestinationCityName").val(lastDestinationCityName);
        } else {
            $("#DestinationCode").val("");
            $("#DestinationCityCode").val("");
            $("#DestinationCityName").val("");
        }
    });
    $("#BindPreferedairlines").change(function () {
        if (lastPreferredAirline == $("#BindPreferedairlines").val()) {
            $("#PreferedairlinesCode").val(lastPreferredAirlineCode);
        } else {
            $("#PreferedairlinesCode").val("");
        }
    });
    $(document).on('touchstart click', function (e) {
        if (!$(e.target).is('.NumberofTraveler *') && !$(e.target).is('#adults *'))
            $('#adults').hide();
    });

    $('.NumberofTraveler').on('click', function () {
        $(this).toggleClass('Traveller_but');
        $('#adults').toggle();
        return false;
    });

});
$(document).ready(function () {
    $('#btnSearchsubmit').click(function () {
        //  debugger;
        var isValid = true;
        if (!IsMultiCity) {
            if ($("#Origins").val() == "" || $("#Origins").val() == "Airport List Not Found") {
                jAlert('Flying From City Could\'t Left Blank', 'Validation Message');
                $("#Origins").val('');
                return false;
            }
            if ($("#Destinations").val() == "" || $("#Destinations").val() == "Airport List Not Found") {
                jAlert('Flying To City Could\'t Left Blank', 'Validation Message');
                $("#Destinations").val('');
                return false;
            }

            if ($("#Origins").val().length < 3) {
                jAlert('Invalid Flying From City Code.', 'Validation Message');
                // $('#Origins').focus();
                return false;
            }
            if ($("#Destinations").val().length < 3) {
                jAlert('Invalid Flying To City Code.', 'Validation Message');
                // $('#Destinations').focus();
                return false;
            }

            if (($('#Destinations').val() != '')) {
                var origincode = ($('#Origins').val()).split("-");
                var Destinationcode = ($('#Destinations').val()).split("-");
                var origin = origincode[0];
                var destination = Destinationcode[0];
                if (origin.trim() == destination.trim()) {
                    jAlert('Source and destination could\'t be same.', 'Validation Message');
                    $('#Destinations').focus();
                    return false;
                }
            }
            //else {

            //    $("#destinat").css("display", "None");
            //}

            if (intRegex.test($('#Origins').val())) {
                jAlert('Do not fill numeric value in Flying From City.', 'Validation Message');
                // $('#Origins').focus();
                return false;
            }
            if (intRegex.test($('#Destinations').val())) {
                jAlert('Do not fill numeric value in Flying To City.', 'Validation Message');
                //$('#Destinations').focus();
                return false;
            }
            var adtcount = parseInt($("#adulttravelers").val());
            var chdcount = parseInt($("#minortravelers").val());
            var infcount = parseInt($("#infanttravelers").val());
            var totaltraveler = parseInt($("#adulttravelers").val()) + parseInt($("#minortravelers").val()) + parseInt($("#infanttravelers").val());
            if (totaltraveler > 9) {
                // $("#nmbrTrv").html("Maximum 9 passengers are allowed");
                jAlert('Maximum 9 passengers are allowed', 'Validation Message');
                isValid = false;
                return false;
            }
            else if (adtcount < infcount) {
                $("#nmbrTrv").html("No of Infant should be less then or equal to Adults");
                jAlert('Number of Infant should be less then or equal to Adults', 'Validation Message');
                isValid = false;
                return false;
            }
            debugger;
            if ($("#Origins").val() != "" && $("#Destinations").val() != "") {
                var data = { OriginText: $("#Origins").val(), destinText: $("#Destinations").val() };
                $.ajax({
                    url: '/Flight/ValidateOriginAndDestination', type: 'POST', data: JSON.stringify(data), contentType: 'application/json', async: false,
                    success: function (result) {
                        if (result.Success == false) {
                            debugger;
                            jAlert(result.msg, 'Validation Message');
                            isValid = false;
                            return false;
                            //$("#spnOriginDestination").css("display", "block");
                            //$("#spnOriginDestination").html(result.msg);
                            //isValid = false;
                        }
                    }
                });
            }

            if (isValid)
                return true;
            else
                return false;
        }
        if (IsMultiCity) {
            if (intRegex.test($('#Origins_1').val())) {
                jAlert('Do not fill numeric value in Flying From 2.', 'Validation Message');
                $('#Origins_1').focus();
                return false;
            }
            if (intRegex.test($('#Destinations_1').val())) {
                jAlert('Do not fill numeric value in Flying To 2.', 'Validation Message');
                $('#Destinations_1').focus();
                return false;
            }

            if ($('#Origins').val() == "" || $('#Origins').val() == "Airport List Not Found") {
                jAlert('The Flying From 1 field is required.', 'Validation Message');

                return false;
            }
            if ($('#Destinations').val() == "" || $('#Destinations').val() == "Airport List Not Found") {
                jAlert('The Flying To 1 field is required.', 'Validation Message');
                return false;
            }
            if ($('#txtDepartuals').val() == "") {
                jAlert('The Departing Date 1 field is required.', 'Validation Message');
                return false;
            }
            if ($('#Origins_1').val() == "" || $('#Origins_1').val() == "Airport List Not Found") {
                jAlert('The Flying From 2 field is required.', 'Validation Message');
                return false;
            }
            if ($('#Destinations_1').val() == "" || $('#Destinations_1').val() == "Airport List Not Found") {
                jAlert('The Flying To 2 field is required.', 'Validation Message');
                return false;
            }
            if ($('#txtDepartingDates_1').val() == "") {
                jAlert('The Departing Date 2 field is required.', 'Validation Message');
                return false;
            }

            if ($('#Origins').val() != "" && $('#Destinations').val() != "") {
                var data = { OriginText: $("#Origins").val(), destinText: $("#Destinations").val() };
                $.ajax({
                    url: '/Flight/ValidateOriginAndDestination', type: 'POST', data: JSON.stringify(data), contentType: 'application/json', async: false,
                    success: function (result) {

                        if (result.Success == false) {
                            jAlert(result.msg + " For Flight 1", 'Validation Message');
                            isValid = false;
                        }
                    },
                    error: function () {

                    }
                });
            }
            if ($('#Origins_1').val() != "" && $('#Destinations_1').val() != "") {
                var data = { OriginText: $("#Origins_1").val(), destinText: $("#Origins_1").val() };
                $.ajax({
                    url: '/Flight/ValidateOriginAndDestination', type: 'POST', data: JSON.stringify(data), contentType: 'application/json', async: false,
                    success: function (result) {

                        if (result.Success == false) {
                            jAlert(result.msg + " For Flight 1", 'Validation Message');
                            isValid = false;
                        }
                    },
                    error: function () {

                    }
                });
            }
            var iCount = 0;
            var multiFrom = 2;
            var AddMultiCity_From = $('#Origins').val() + '|~|' + $('#Origins_1').val();
            var AddMultiCity_To = $('#Destinations').val() + '|~|' + $('#Destinations_1').val();
            var AddMultiCity_DepartDate = $('#txtDepartuals').val() + '|~|' + $('#txtDepartingDates_1').val();

            for (iCount = 0; iCount < totalMultiCity; iCount++) {
                if (intRegex.test($('#Origins_' + (parseInt(multiFrom) + iCount) + '').val())) {
                    jAlert('Do not fill numeric value in Flying From ' + (parseInt(multiFrom) + iCount + 1) + '.', 'Validation Message');
                    $('#Origins_' + (parseInt(multiFrom) + iCount) + '').focus();
                    return false;
                }
                if (intRegex.test($('#Destinations_' + (parseInt(multiFrom) + iCount) + '').val())) {
                    jAlert('Do not fill numeric value in Flying To ' + (parseInt(multiFrom) + iCount + 1) + '.', 'Validation Message');
                    $('#Destinations_' + (parseInt(multiFrom) + iCount) + '').focus();
                    return false;
                }

                if ($('#Origins_' + (parseInt(multiFrom) + iCount) + '').val() == "" && $('#Origins').val() != "" && $('#Origins_1').val() != "") {
                    jAlert('The Flying From field ' + (parseInt(multiFrom) + iCount + 1) + ' is required.', 'Validation Message');
                    return false;
                }
                if ($('#Destinations_' + (parseInt(multiFrom) + iCount) + '').val() == "" && $('#Destinations').val() != "" && $('#Destinations_1').val() != "") {
                    jAlert('The Flying To field ' + (parseInt(multiFrom) + iCount + 1) + ' is required.', 'Validation Message');
                    return false;
                }
                if ($('#txtDepartingDates_' + (parseInt(multiFrom) + iCount) + '').val() == "" && $('#txtDepartingDates').val() != "" && $('#txtDepartingDates_1').val() != "") {
                    jAlert('The Departing Date ' + (parseInt(multiFrom) + iCount + 1) + ' is required.', 'Validation Message');
                    return false;
                }
                if ($('#Origins_' + (parseInt(multiFrom) + iCount) + '').val() != "" && $('#Destinations_' + (parseInt(multiFrom) + iCount) + '').val() != "") {
                    $.ajax({
                        url: '/Flight/ValidateOriginAndDestination', type: 'POST', data: JSON.stringify(data), contentType: 'application/json', async: false,
                        success: function (result) {

                            if (result.Success == false) {
                                jAlert(result.msg + " For Flight " + multiFrom, 'Validation Message');
                                isValid = false;
                            }
                        },
                        error: function () {

                        }
                    });
                }
                AddMultiCity_From = AddMultiCity_From + '|~|' + $('#Origins_' + (parseInt(multiFrom) + iCount) + '').val();
                AddMultiCity_To = AddMultiCity_To + '|~|' + $('#Destinations_' + (parseInt(multiFrom) + iCount) + '').val();
                AddMultiCity_DepartDate = AddMultiCity_DepartDate + '|~|' + $('#txtDepartingDates_' + (parseInt(multiFrom) + iCount) + '').val();
            }

            $("#hdn_MultiCityFrom").val(AddMultiCity_From);
            $("#hdn_MultiCityTo").val(AddMultiCity_To);
            $("#hdn_MultiCityDepartDate").val(AddMultiCity_DepartDate);
        }

        if (isValid)
            return true;
        else
            return false;
    })
});
function updateTravelerValue() {
    var totaltraveler = parseInt($("#adulttravelers").val()) + parseInt($("#minortravelers").val()) + parseInt($("#infanttravelers").val());
    if (totaltraveler > 1) {
        $('#AdultCount').val(parseInt($("#adulttravelers").val()));
        $('#ChildCount').val(parseInt($("#minortravelers").val()));
        $('#InfantCount').val(parseInt($("#infanttravelers").val()));
        $('.NumberofTraveler').val(totaltraveler + ' ' + 'Travelers');
    } else {
        $('#AdultCount').val(parseInt($("#adulttravelers").val()));
        $('#ChildCount').val(parseInt($("#minortravelers").val()));
        $('#InfantCount').val(parseInt($("#infanttravelers").val()));
        $('.NumberofTraveler').val('1 Traveler');
    }

};
function SendNewsLetterEmail() {

    var emailID = $("#txtsubemail").val();
    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailID == "") {
        $('#subcribe-msg').html('Please provide <b>Email Address for subscription.</b>');
        return false;
    }

    if (!regExp.test(emailID)) {
        $('#subcribe-msg').html('Please provide valid <b>Email Address.</b>');
        return false;
    }

    $('#subscribeBtn').text('Registering...');

    jQuery.getJSON("/Flight/NewsLetterSubscription", { emailId: emailID }, function (data) {
        $("#txtsubemail").attr("readonly", "readonly");
        $("#txtsubemail").val('');
        if (data.Success == true) {
            $('#subscribeBtn').text('Subscribe');
            $('#subcribe-msg').html('<b>Congratulations!!!</b> You are subscribed for our secret deals.');
            return false;
        }
    });
}
function AddNewDivforMultiCitys(add_cntdv) {
    //debugger;
    if (parseInt(cntAddDiv) < 5) {
        $("#addmulticitys").before('<div class="clr"></div><div class="multicity_news" id="multicitys_' + cntAddDiv + '"> ' +
            '<h5 style="color:#fff" id="lbl_flight' + (parseInt(cntAddDiv) + 1) + '"><span class="fa fa-plane"></span> Flight ' + (parseInt(cntAddDiv) + 1) + '</h5>' +
            '<div class="clr"></div>' +
            '<div class="row" style="display:flex;"><div class="form-group" style="width:40%">' +
              '<label>Airport</label>' +
            '<input placeholder="Flying From" onclick="this.focus(); this.setSelectionRange(0, 9999);" ' +
            'name="Origin_' + cntAddDiv + '" id="Origins_' + cntAddDiv + '" class="form-control autosuggest" tabindex="' + tabindexx + '" />' +
            '<span class="field-validation-valid text-danger" data-valmsg-replace="true" data-valmsg-for="Origin_' + cntAddDiv + '"></span>' +
            '<label style="border-bottom:1px solid #fff">City Name</label> </div> <div class="form-group" style="margin-right:25px;width:40px"><img src="https://www.travelo1.com/dev1/assets/images/air.png" width="40px"></div>' +
            '<div class="form-group" style="width:40%">' +
              '<label>Airport</label>' +
            '<input placeholder="Flying To" onclick="this.focus(); this.setSelectionRange(0, 9999);"' +
            'name="Destination_' + cntAddDiv + '" id="Destinations_' + cntAddDiv + '" class="form-control autosuggest" tabindex="' + (tabindexx + 1) + '" />' +
            '<span class="field-validation-valid text-danger" data-valmsg-replace="true" data-valmsg-for="Destination_' + cntAddDiv + '"></span>' +
            '<label style="border-bottom:1px solid #fff">City Name</label> </div></div>' +
            ' <div class="row" style="display:flex;"><div id="dvDepartDates_' + cntAddDiv + '" class="form-group" style="width:40%">' +
            ' <label> Departure</label> <span style="display:flex">  <i class="fa fa-calendar" style="font-size:1.6em;margin-left:0px;margin-top: 10px;"></i> &nbsp;  <input style="min-height: 42px !important;"  placeholder="Select" onclick="this.focus(); this.setSelectionRange(0, 9999);" name="TravelDateDepart_' + cntAddDiv + '" id="txtDepartingDates_' + cntAddDiv + '" class="txtDepartuals form-control" readonly="readonly" tabindex="' + (tabindexx + 2) + '" />' +
            '<span data-valmsg-replace="true" data-valmsg-for="TravelDateDepart_' + cntAddDiv + '" class="field-validation-valid text-danger"></span>          ' +
            ' </span> <label style="border-bottom:1px solid #fff;padding-left:22px;margin-top:-10px">Date</label> </div></div>' +
            '<div class="clr"></div><div class="row add-remove-btn" id="dv_add_removes_' + cntAddDiv + '">' +
            '<div class="col-xs-6"><a href="javascript:void(0)" id="adds_' + cntAddDiv + '" onclick="AddNewDivforMultiCitys(' + cntAddDiv + ')"><i class="fa fa-plus-square-o" aria-hidden="true"></i>  Add Flight</a></div>' +
            '<div class="col-xs-6"><a href="javascript:void(0)" id="removes_' + cntAddDiv + '" onclick="RemoveDivforMultiCitys(' + cntAddDiv + ')"><i class="fa fa-minus-square-o" aria-hidden="true"></i> Remove Flight</a></div>' +
            '</div>' +
            '<div class="clr"></div>' +
            '</div>');

        if ($(window).width() < 767) {
            $("#Origins_" + cntAddDiv).attr("placeholder", "Flying From");
            $("#Destinations_" + cntAddDiv).attr("placeholder", "Flying To");
        }

        $('#dv_add_removes_' + (parseInt(cntAddDiv) - 1) + '').hide();
        if (parseInt(cntAddDiv) == 4) {
            $('#adds_' + cntAddDiv + '').hide();
        }


        IsMultiCity = true;
        totalMultiCity++;
        BindAutoFill(cntAddDiv);
        cntAddDiv++;
        tabindexx++;
    }
}
function RemoveDivforMultiCitys(remove_cntdv) {
    $('#multicitys_' + remove_cntdv + '').remove();
    $('#dv_add_removes_' + (parseInt(remove_cntdv) - 1) + '').show();
    cntAddDiv--;
    totalMultiCity--;
};
function BindAutoFill(countFill) {
    //debugger;
    $('#Origins_' + countFill + '').focus(0);
    $('#Origins_' + countFill + '').autocomplete({
        autoFocus: true,
        minLength: 1,
        source: function (request, response) {
            var searchText = request.term; //this.value;// document.getElementById('#Origins_' + countFill).value;
            $.ajax({
                type: "POST",
                contentType: "application/json;",
                url: "/Flight/GetAutoSuggestionForUser",
                data: "{search_:'" + $.trim(searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    response(result);
                },
                error: function (result) {
                    console.log(result);
                }
            });
        },
        //focus: function (event, ui) {
        //    $('#Origins_' + countFill + '').val(ui.item.autosuggest);
        //    //$("#OriginsCode").val(ui.item.AirportCode);
        //    //$("#OriginsCityCode").val(ui.item.CityCode);
        //    //$("#OriginsCityName").val(ui.item.CityName);
        //    //lastOrigin = ui.item.autosuggest;
        //    //lastOriginCode = ui.item.AirportCode;
        //    //lastOriginCityCode = ui.item.CityCode;
        //    //lastOriginCityName = ui.item.CityName;
        //    return false;
        //},
        blur: function (event, ui) {

            $('#Origins_' + countFill + '').val(ui.item.autosuggest);
            //$("#OriginsCode").val(ui.item.AirportCode);
            //$("#OriginsCityCode").val(ui.item.CityCode);
            //$("#OriginsCityName").val(ui.item.CityName);
            //lastOrigin = ui.item.autosuggest;
            //lastOriginCode = ui.item.AirportCode;
            //lastOriginCityCode = ui.item.CityCode;
            //lastOriginCityName = ui.item.CityName;
            $('#Destinations_' + countFill + '').focus();
            return false;
        },
        select: function (event, ui) {
            $('#Origins_' + countFill + '').val(ui.item.autosuggest);
            //$("#OriginsCode").val(ui.item.AirportCode);
            //$("#OriginsCityCode").val(ui.item.CityCode);
            //$("#OriginsCityName").val(ui.item.CityName);
            //lastOrigin = ui.item.autosuggest;
            //lastOriginCode = ui.item.AirportCode;
            //lastOriginCityCode = ui.item.CityCode;
            //lastOriginCityName = ui.item.CityName;
            $('#Destinations_' + countFill + '').focus();
            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, response) {
            return $("<li>")
                .append(response.autosuggest)
                .appendTo(ul);
        };

    $('#Destinations_' + countFill + '').autocomplete({
        autoFocus: true,
        minLength: 1,
        source: function (request, response) {
            var searchText = request.term;//document.getElementById('#Destinations_' + countFill + '').value;
            $.ajax({
                type: "POST",
                contentType: "application/json;",
                async: false,
                url: "/Flight/GetAutoSuggestionForUser",
                data: "{search_:'" + $.trim(searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    response(result);
                },
                error: function (result) {
                    console.log(result);
                }
            });
        },
        //focus: function (event, ui) {
        //    $('#Destinations_' + countFill + '').val(ui.item.autosuggest);
        //    //$("#DestinationsCode").val(ui.item.AirportCode);
        //    //$("#DestinationsCityCode").val(ui.item.CityCode);
        //    //$("#DestinationsCityName").val(ui.item.CityName);
        //    //lastDestination = ui.item.autosuggest;
        //    //lastDestinationCode = ui.item.AirportCode;
        //    //lastDestinationCityCode = ui.item.CityCode;
        //    //lastDestinationCityName = ui.item.CityName;
        //    // $('#Destinations_' + countFill + '').focus();
        //    return false;
        //},
        blur: function (event, ui) {
            $('#Destinations_' + countFill + '').val(ui.item.autosuggest);
            //$("#DestinationsCode").val(ui.item.AirportCode);
            //$("#DestinationsCityCode").val(ui.item.CityCode);
            //$("#DestinationsCityName").val(ui.item.CityName);
            //lastDestination = ui.item.autosuggest;
            //lastDestinationCode = ui.item.AirportCode;
            //lastDestinationCityCode = ui.item.CityCode;
            //lastDestinationCityName = ui.item.CityName;
            // $('#Destinations_' + countFill + '').focus();
            return false;
        },
        select: function (event, ui) {
            $('#Destinations_' + countFill + '').val(ui.item.autosuggest);
            // $("#DestinationsCode").val(ui.item.AirportCode);
            // $("#DestinationsCityCode").val(ui.item.CityCode);
            // $("#DestinationsCityName").val(ui.item.CityName);
            $('#txtDepartingDates_' + countFill + '').focus();
            // lastDestination = ui.item.autosuggest;
            // lastDestinationCode = ui.item.AirportCode;
            // lastDestinationCityCode = ui.item.CityCode;
            // lastDestinationCityName = ui.item.CityName;
            return false;
        }
    })
        .autocomplete("instance")._renderItem = function (ul, response) {
            return $("<li>")
                .append(response.autosuggest)
                .appendTo(ul);
        };

    var totMonthToShow = 1;
    //if ($(window).width() > 767) {
    //    totMonthToShow = 2;
    //}
    //else {
    //    totMonthToShow = 1;
    //}
    $('#txtDepartingDates_' + countFill + '').datepicker({

        numberOfMonths: totMonthToShow,
        dateFormat: 'M dd, yy',
        minDate: 0,
        maxDate: "+12m",
        beforeShow: function (input, inst) {

            var date_before = $('#txtDepartingDates_' + (parseInt(countFill) - 1) + '').datepicker('getDate');
            date_before.setDate(date_before.getDate() + 1);
            $('#txtDepartingDates_' + countFill + '').datepicker("option", "minDate", $('#txtDepartingDates_' + (parseInt(countFill) - 1) + '').val());
            $('#txtDepartingDates_' + countFill + '').datepicker().datepicker("setDate", date_before);

            //setTimeout(function () {
            //    $('.ui-datepicker').css('z-index', 99999999999999);
            //}, 0);
            //var cal = inst.dpDiv;
            //var top = $(this).offset().top + $(this).outerHeight();
            //var left = $(this).offset().left;
            //setTimeout(function () {
            //    cal.css({
            //        'top': top,
            //        'left': left
            //    });
            //}, 10);
            $("html, body").animate({ scrollTop: $('#txtDepartingDates_' + countFill + '').offset().top - 10 }, 1000);
        },
        onSelect: function (selectedDate) {

            var date_select = $('#txtDepartingDates_' + parseInt(countFill) + '').datepicker('getDate');
            date_select.setDate(date_select.getDate() + 1);
            $('#txtDepartingDates_' + (parseInt(countFill) + 1) + '').datepicker("option", "minDate", $('#txtDepartingDates_' + parseInt(countFill) + '').datepicker('getDate'));
            $('#txtDepartingDates_' + (parseInt(countFill) + 1) + '').datepicker().datepicker("setDate", date_select);
        }
    });


    $('#txtDepartingDates_' + countFill + '').datepicker('widget').wrap('<div class="datepicker-custom"/>');
    $('#txtDepartingDates_' + countFill + '').datepicker("option", "monthNames", ["Depart (Jan)", "Depart (Feb)", "Depart (Mar)", "Depart (Apr)", "Depart (May)", "Depart (Jun)", "Depart (Jul)", "Depart (Aug)", "Depart (Sep)", "Depart (Oct)", "Depart (Nov)", "Depart (Dec)"]);


    //$('#dvDepartDate_' + countFill + '').click(Throttle(function () {
    //    $('#txtDepartingDates_' + countFill + '').focus();
    //}));

}