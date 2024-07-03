function __highlight(n, t) {
    var i = new RegExp("(" + $.ui.autocomplete.escapeRegex(t) + ")", "ig");
    return n.replace(i, "<u>$1<\/u>")
}

function Throttle(n, t) {
    var i = null;
    return function() {
        var r = this,
            u = arguments;
        clearTimeout(i);
        i = window.setTimeout(function() {
            n.apply(r, u)
        }, t || 500)
    }
}

function getPlaceInfo(n, t, i) {
    var u, f;
    $("html, body").animate({
        scrollTop: $("#Book_Now_" + i).offset().top - 10
    }, 1e3);
    u = n;
    f = t;
    $("#_listFromCity").val(n);
    $("#_listToCity").val(t);
    $("#instant-deals").hide();
    $("#enquiry-deals").hide();
    $("#view-deals").hide();
    $("#view-deals").css({
        position: "absolute",
        left: $("#Book_Now_" + i + "").position().left - 205,
        top: $("#Book_Now_" + i + "").offset().top + $("#Book_Now_" + i + "").height() + 5
    }).toggle("slow");
    var e = $("#_start_date_" + i + "").val(),
        o = $("#_return_date_" + i + "").val(),
        r = $("#_preffered_airline_" + i + "").val();
    $("#txtDepartingDateDeals").val(e.trim());
    $("#txtReturnDateDeals").val(o.trim());
    $("#txtReturnDateDeals").datepicker("option", "minDate", $("#txtDepartingDateDeals").val());
    r != "" && $("#txtPreferredAirlines_deals").val(r.trim())
}

function getPlaceInfoDynamic(n, t, i, r, u) {
    var o = n,
        s = t,
        f = i,
        e = r;
    $("#_listFromCityDynamic").val(n);
    $("#_listToCityDynamic").val(t);
    $("#_listDepartFromDynamic").val(f);
    $("#_listDepartToDynamic").val(e);
    u != "" ? ($("#view-deals").hide(), $("#view-deals").css({
        position: "absolute",
        left: $("#Book_Now_" + u + "").position().left - 175,
        top: $("#Book_Now_" + u + "").offset().top + $("#Book_Now_" + u + "").height() + 5
    }).toggle("slow")) : ($("#openPopup_multicity").hide(), $("#openPopup_searchflight").show(), $("#spn_flyfrom_popup").html(n.split(",")[1].trim()), $("#spn_flyfrom_popup_1").html(n.split(",")[1].trim()), $("#spn_flyto_popup").html(t.split(",")[1].trim()), $("#spn_flyto_popup_1").html(t.split(",")[1].trim()), $("#spn_depart_date_popup").html(f), $("#spn_depart_date_popup_1").html(f), $("#spn_return_date_popup").html(e), e == "" && ($(".mid-roundway").hide(), $(".mid-oneway").show(), $("#spn_depart_date_popup").html("")), $("#searchModal").show())
}

function getLastMindeals(n, t, i, r) {
    var e = n,
        o = t,
        u = i,
        f = r;
    $("#_listFromCityDynamic").val(n);
    $("#_listToCityDynamic").val(t);
    $("#_listDepartFromDynamic").val(u);
    $("#_listDepartToDynamic").val(f);
    $("#openPopup_multicity").hide();
    $("#openPopup_searchflight").show();
    $("#spn_flyfrom_popup").html(n.split(",")[1].trim());
    $("#spn_flyfrom_popup_1").html(n.split(",")[1].trim());
    $("#spn_flyto_popup").html(t.split(",")[1].trim());
    $("#spn_flyto_popup_1").html(t.split(",")[1].trim());
    $("#spn_depart_date_popup").html(u);
    $("#spn_depart_date_popup_1").html(u);
    $("#spn_return_date_popup").html(f);
    f == "" && ($(".mid-roundway").hide(), $(".mid-oneway").show(), $("#spn_depart_date_popup").html(""));
    $("#searchModal").show()
}

function AddNewDivforMultiCity() {
    parseInt(cntAddDiv) < 5 && ($("#addmulticity").before('<div class="clearfix"><\/div><div class="multicity_new" id="multicity_' + cntAddDiv + '" style="width:100%;margin-bottom: 3px;">   <div class="clearfix"><\/div>  <div class="clearfix"><\/div><div class="form-group input-group w150" style="width:28%;float:left">  <span class="input-group-addon" style="padding-right:5px"><i class="fas fa-map-marker-alt"></i><\/span> <span class="has-float-label"><input type="text" value="" placeholder="City/Airport"  id="txtFlyFrom_' + cntAddDiv + '" name="fromcity[]"   class="auto ui-autocomplete-input search-boxs" autocomplete="off" tabindex="' + tabindexx + '" />	<div class="suggesstion-boxss"></div><span class="field-validation-valid text-danger" data-valmsg-replace="true" data-valmsg-for="FlyingFrom_' + cntAddDiv + '"><\/span><\/span><\/div> <div class="form-group input-group" style="width: 3%;  float: left;"> <span class="input-group-addon" style="padding-right:5px"><i class="fas fa-exchange-alt" style="margin-right: 10px;"></i><\/span>   <\/div><div class="form-group input-group w150" style="width:28%;float:left">  <span class="input-group-addon" style="padding-right:5px"><i class="fas fa-map-marker-alt"></i><\/span>             <span class="has-float-label">  <input type="text" value="" placeholder="City/Airport" onclick="this.focus(); this.setSelectionRange(0, 9999);"name="tocity[]" maxlength="250" id="txtFlyTo_' + cntAddDiv + '" data-val-required="The Flying To field is required."data-val="true" class="auto ui-autocomplete-input search-boxs" autocomplete="off" tabindex="' + (tabindexx + 1) + '" /></span><span class="field-validation-valid text-danger" data-valmsg-replace="true" data-valmsg-for="FlyingTo_' + cntAddDiv + '"><\/span><\/div><div class="form-group input-group w150" style="width:28%;float:left"><div id="dvDepartDate_' + cntAddDiv + '"><input type="date" value="" placeholder="mm/dd/yyyy" onclick="this.focus(); this.setSelectionRange(0, 9999);" name="depart[]" maxlength="0"id="txtDepartingDate_' + cntAddDiv + '" data-val-required="Please Select Depart Date" data-val="true" class="form-control cal depart" tabindex="' + (tabindexx + 2) + '" /><\/div>   <span data-valmsg-replace="true" data-valmsg-for="TravelDateDepart_' + cntAddDiv + '" class="field-validation-valid text-danger"><\/span>          <\/div><div class="form-group middlewidth" id="dv_add_remove_' + cntAddDiv + '"><div class="multicity-add"><a href="javascript:void(0)" id="add_' + cntAddDiv + '" onclick="AddNewDivforMultiCity(' + cntAddDiv + ')"><i class="fa fa-plus-square-o" aria-hidden="true"><\/i>  Add /<\/a>  <a href="javascript:void(0)" id="remove_' + cntAddDiv + '" onclick="RemoveDivforMultiCity(' + cntAddDiv + ')"><i class="fa fa-minus-square-o" aria-hidden="true"><\/i> Remove<\/a><\/div><\/div><\/div>'), $(window).width() < 767 && ($("#txtFlyFrom_" + cntAddDiv).attr("placeholder", "City/Airport"), $("#txtFlyTo_" + cntAddDiv).attr("placeholder", "City/Airport")), $("#dv_add_remove_" + (parseInt(cntAddDiv) - 1) + "").hide(), parseInt(cntAddDiv) == 4 && $("#add_" + cntAddDiv + "").hide(), IsMultiCity = !0, totalMultiCity++, BindAutoFill(cntAddDiv), cntAddDiv++, tabindexx++)
}

function RemoveDivforMultiCity(n) {
    $("#multicity_" + n + "").remove();
    $("#dv_add_remove_" + (parseInt(n) - 1) + "").show();
    cntAddDiv--;
    totalMultiCity--
}
function BindAutoFill(n) {
    $("#txtFlyFrom_" + n + "").focus(0);
    $("#txtFlyFrom_" + n + "").autocomplete({
       
       source: "autocom.php",
                    minLength: 1,
                   
			
            create: function (event,ui){
                
               $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                 return $('<li class="inline-item">')
                    .append("<div class='col-xs-2  select-icon' style='display:inline'><i class='fa fa-map-marker fa-2x fa-fw' aria-hidden='true' style='font-size: 16px;'></i></div><div class='col-xs-10 ' style='display:inline'><div class='select-airport'>"   +item.title +"<span style='float:right'>"   + item.label  + "</span></div><div class='select-city'>"   +item.country +"</div></div>")
                    .appendTo(ul);
            };
        }
			
    });
    $("#txtFlyTo_" + n + "").autocomplete({
        source: "autocom.php",
                    minLength: 1,
                   
			
            create: function (event,ui){
                
               $(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                 return $('<li class="inline-item">')
                    .append("<div class='col-xs-2  select-icon' style='display:inline'><i class='fa fa-map-marker fa-2x fa-fw' aria-hidden='true' style='font-size: 16px;'></i></div><div class='col-xs-10 ' style='display:inline'><div class='select-airport'>"   +item.title +"<span style='float:right'>"   + item.label  + "</span></div><div class='select-city'>"   +item.country +"</div></div>")
                    .appendTo(ul);
            };
        }
			
    });
    var t = 0;
    t = $(window).width() > 767 ? 2 : 1;
    $("#txtDepartingDate_" + n + "").datepicker({
        numberOfMonths: t,
        dateFormat: "M dd, yy",
        minDate: 0,
        maxDate: "+11M +26D",
        beforeShow: function(t, i) {
            var r = $("#txtDepartingDate_" + (parseInt(n) - 1) + "").datepicker("getDate");
            r.setDate(r.getDate() + 1);
            $("#txtDepartingDate_" + n + "").datepicker("option", "minDate", $("#txtDepartingDate_" + (parseInt(n) - 1) + "").val());
            $("#txtDepartingDate_" + n + "").datepicker().datepicker("setDate", r);
            var u = i.dpDiv,
                f = $(this).offset().top + $(this).outerHeight(),
                e = $(this).offset().left;
            setTimeout(function() {
                u.css({
                    top: f,
                    left: e
                })
            }, 10);
            $("html, body").animate({
                scrollTop: $("#txtDepartingDate_" + n + "").offset().top - 10
            }, 1e3)
        },
        onSelect: function() {
            var t = $("#txtDepartingDate_" + parseInt(n) + "").datepicker("getDate");
            t.setDate(t.getDate() + 1);
            $("#txtDepartingDate_" + (parseInt(n) + 1) + "").datepicker("option", "minDate", $("#txtDepartingDate_" + parseInt(n) + "").datepicker("getDate"));
            $("#txtDepartingDate_" + (parseInt(n) + 1) + "").datepicker().datepicker("setDate", t)
        }
    });
    $("#txtDepartingDate_" + n + "").datepicker("widget").wrap('<div class="datepicker-custom"/>');
    $("#txtDepartingDate_" + n + "").datepicker("option", "monthNames", ["Depart (Jan)", "Depart (Feb)", "Depart (Mar)", "Depart (Apr)", "Depart (May)", "Depart (Jun)", "Depart (Jul)", "Depart (Aug)", "Depart (Sep)", "Depart (Oct)", "Depart (Nov)", "Depart (Dec)"]);
    $("#dvDepartDate_" + n + "").click(Throttle(function() {
        $("#txtDepartingDate_" + n + "").focus()
    }))
}

function checkCookiesLocalStorageSubs() {
    $.cookie("isClosedSubs") || localStorage.setItem("isClosedSubs", "false")
}

function checkSubsPopupLocalStorage() {
    $.cookie("isClosedSubs") || localStorage.setItem("isClosedSubs", "false")
}

function checkCookLocalStorage() {
    $.cookie("isClosed") || localStorage.setItem("isClosed", "false")
}

function checkappPopupLocalStorage() {
    $.cookie("isClosedApp") || localStorage.setItem("isClosedApp", "false")
}

function GetFormatedDate(n) {
    var i = new Date(n.replace("-", "/").replace("-", "/")),
        t = i.getDate(),
        r = MonthName(i.getMonth()),
        u = WeekDay(i.getDay());
    return t = t < 10 ? "0" + t : t, u + ", " + r + " " + t
}

function BestPriceFormatedDate(n) {
    var i = new Date(n),
        r = i.getDate(),
        o = MonthName(i.getMonth()),
        s = WeekDay(i.getDay()),
        f = i.getHours(),
        u = i.getMinutes(),
        e = "am",
        t = f;
    return t >= 12 && (t = f - 12, e = "pm"), t == 0 && (t = 12), r = r < 10 ? "0" + r : r, t = t.toString().length < 2 ? "0" + t : t, u = u.toString().length < 2 ? "0" + u : u, o + " " + r + ", " + t + ":" + u + e
}

function WeekDay(n) {
    var t = new Array(7);
    return t[0] = "Sun", t[1] = "Mon", t[2] = "Tue", t[3] = "Wed", t[4] = "Thu", t[5] = "Fri", t[6] = "Sat", t[n]
}

function MonthName(n) {
    var t = [];
    return t[0] = "Jan", t[1] = "Feb", t[2] = "Mar", t[3] = "Apr", t[4] = "May", t[5] = "Jun", t[6] = "Jul", t[7] = "Aug", t[8] = "Sep", t[9] = "Oct", t[10] = "Nov", t[11] = "Dec", t[n]
}

function MonthNumber(n) {
    switch (n) {
        case 0:
            month = "1";
            break;
        case 1:
            month = "2";
            break;
        case 2:
            month = "3";
            break;
        case 3:
            month = "4";
            break;
        case 4:
            month = "5";
            break;
        case 5:
            month = "6";
            break;
        case 6:
            month = "7";
            break;
        case 7:
            month = "8";
            break;
        case 8:
            month = "9";
            break;
        case 9:
            month = "10";
            break;
        case 10:
            month = "11";
            break;
        case 11:
            month = "12"
    }
    return month
}

function IsSearchTimeExpire(n) {
    return new Date > new Date(n) ? !0 : !1
}

function setLocalStoragevalue(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
    var g = !1,
        d, b, k;
    for (storage = window.localStorage, d = InitilizeSearchData(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w), b = recentSearchKey, k = 1; k <= 3; k++)
        if (localStorage.getItem(b + k) === null) {
            localStorage.setItem(b + k, JSON.stringify(d));
            localStorage.setItem("res_search_key", b + k);
            g = !0;
            break
        } else if (ReplaceIfDuplicateValue(k, d, n, t) === !0) {
        g = !0;
        break
    }
    g === !1 && (localStorage.removeItem(b + 1), localStorage.setItem(b + 1, localStorage.getItem(b + 2)), localStorage.removeItem(b + 2), localStorage.setItem(b + 2, localStorage.getItem(b + 3)), localStorage.removeItem(b + 3), localStorage.setItem(b + 3, JSON.stringify(d)))
}

function ReplaceIfDuplicateValue(n, t, i, r) {
    var u = JSON.parse(localStorage.getItem("rs_" + n));
    return u.JourneyFrom === i && u.JourneyTo === r ? (localStorage.setItem("rs_" + n, JSON.stringify(t)), localStorage.setItem("res_search_key", "rs_" + n), !0) : !1
}

function InitilizeSearchData(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
    var b = {
            JourneyFrom: 0,
            JourneyTo: 0,
            DDate: 0,
            RDate: 0,
            Adults: 1,
            Childs: 0,
            Infants: 0,
            Class: "Y",
            JourneyType: s,
            prefAir: "",
            flightType: c,
            MaxLayOver: l,
            MaxRadius: a,
            AirliNeName: v,
            CheapFare: y,
            DD_display: 0,
            RD_display: 0
        },
        k = n,
        d = t,
        g = i,
        nt = r,
        tt = u,
        it = f,
        rt = e,
        ut = o,
        ft = s,
        et = h,
        ot = c,
        st = l,
        ht = a,
        ct = v,
        lt = y;
    return b.JourneyFrom = k, b.JourneyTo = d, b.DDate = g, b.RDate = nt, b.Adults = tt, b.Childs = it, b.Infants = rt, b.Class = ut, b.JourneyType = ft, b.prefAir = et, b.flightType = ot, b.MaxLayOver = st, b.MaxRadius = ht, b.AirliNeName = ct, b.CheapFare = lt, b.DD_display = p, b.RD_display = w, b
}

function Throttle(n, t) {
    var i = null;
    return function() {
        var r = this,
            u = arguments;
        clearTimeout(i);
        i = window.setTimeout(function() {
            n.apply(r, u)
        }, t || 500)
    }
}
var rurl, root, varInterestedinFlight, storagecount, i, tryit, resSearch, Journeytypr, getUrlParameter, tech, country, date, minutes, BOTGtmTracking;
if (typeof jQuery == "undefined") throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || t[0] == 1 && t[1] == 9 && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (i.style[t] !== undefined) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        (n.support.transition = t(), n.support.transition) && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        (u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, "")), r = n(u), i && i.preventDefault(), r.length || (r = f.closest(".alert")), r.trigger(i = n.Event("close.bs.alert")), i.isDefaultPrevented()) || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = typeof i == "object" && i;
            r || u.data("bs.button", r = new t(this, f));
            i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.5";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var r = "disabled",
            i = this.$element,
            f = i.is("input") ? "val" : "html",
            u = i.data();
        t += "Text";
        u.resetText == null && i.data("resetText", i[f]());
        setTimeout(n.proxy(function() {
            i[f](u[t] == null ? this.options[t] : u[t]);
            t == "loadingText" ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), n.prop("type") == "radio" ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : n.prop("type") == "checkbox" && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target);
        r.hasClass("btn") || (r = r.closest(".btn"));
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i),
                e = typeof i == "string" ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            typeof i == "number" ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            this.options.pause != "hover" || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
            f = n == "prev" && i === 0 || n == "next" && i == this.$items.length - 1,
            r, u;
        return f && !this.options.wrap ? t : (r = n == "prev" ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = i == "next" ? "left" : "right",
            a = this,
            o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), this.$element.trigger(s), s.isDefaultPrevented()) ? void 0 : (this.sliding = !0, l && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !r || !r.length || (f = r.data("bs.collapse"), !f || !f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented())) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) {
            if (i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }, !n.support.transition) return u.call(this);
            this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
        }
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && t.which === 3 || (n(e).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && t.type == "click" && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented()) || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function o(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var e = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.5";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u);
                if (e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger("shown.bs.dropdown", e)
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && t.which != 27 || s && t.which == 27) return t.which == 27 && o.find(i).trigger("focus"), e.trigger("click");
            (h = " li:not(.disabled):visible a", f = o.find(".dropdown-menu" + h), f.length) && (u = f.index(t.target), t.which == 38 && u > 0 && u--, t.which == 40 && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = o;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
            u || f.data("bs.modal", u = new t(this, e));
            typeof i == "string" ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        if (this.$element.trigger(u), !this.isShown && !u.isDefaultPrevented()) {
            this.isShown = !0;
            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass("modal-open");
            this.escape();
            this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this));
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            });
            this.backdrop(function() {
                var f = n.support.transition && r.$element.hasClass("fade"),
                    u;
                r.$element.parent().length || r.$element.appendTo(r.$body);
                r.$element.show().scrollTop(0);
                r.adjustDialog();
                f && r.$element[0].offsetWidth;
                r.$element.addClass("in");
                r.enforceFocus();
                u = n.Event("shown.bs.modal", {
                    relatedTarget: i
                });
                f ? r.$dialog.one("bsTransitionEnd", function() {
                    r.$element.trigger("focus").trigger(u)
                }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
            })
        }
    };
    t.prototype.hide = function(i) {
        (i && i.preventDefault(), i = n.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented()) && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            n.which == 27 && this.hide()
        }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        if (this.isShown) n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this));
        else n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            r = n.support.transition && f;
            this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = !1;
                    return
                }
                n.target === n.currentTarget && (this.options.backdrop == "static" ? this.$element[0].focus() : this.hide())
            }, this));
            if (r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            if (!n.isDefaultPrevented()) u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else if (u != "manual") {
            o = u == "hover" ? "mouseenter" : "focusin";
            s = u == "hover" ? "mouseleave" : "focusout";
            this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
            this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
        }
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusin" ? "focus" : "hover"] = !0), i.tip().hasClass("in") || i.hoverState == "in") {
            i.hoverState = "in";
            return
        }
        if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout(function() {
            i.hoverState == "in" && i.show()
        }, i.options.delay.show)
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusout" ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        }
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = i == "bottom" && f.bottom + s > e.bottom ? "top" : i == "top" && f.top - s < e.top ? "bottom" : i == "right" && f.right + o > e.width ? "left" : i == "left" && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                n == "out" && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        i == "top" && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? u.left * 2 - l + h : u.top * 2 - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function e() {
            u.hoverState != "in" && r.detach();
            u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
            i && i()
        }
        var u = this,
            r = n(this.$tip),
            f = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(f), !f.isDefaultPrevented()) return r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(), this.hoverState = null, this
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var u = t[0],
            r = u.tagName == "BODY",
            i = u.getBoundingClientRect();
        i.width == null && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            e = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            o = r ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, e, o, f)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return n == "bottom" ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : n == "top" ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : n == "left" ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(Math.random() * 1e6); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), this.$tip.length != 1)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.5";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? typeof t == "string" ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(i).is(document.body) ? n(window) : n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    t.VERSION = "3.3.5";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget,
            n;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (t[n + 1] === undefined || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.5";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function o() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            e ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            e = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && e ? f.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = typeof i == "object" && i;
            r || u.data("bs.affix", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.3.5";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (i != null && this.affixed == "top") return u < i ? "top" : !1;
        if (this.affixed == "bottom") return i != null ? u + this.unpin <= f.top ? !1 : "bottom" : u + e <= n - r ? !1 : "bottom";
        var o = this.affixed == null,
            s = o ? u : f.top,
            h = o ? e : t;
        return i != null && u <= i ? "top" : r != null && s + h >= n - r ? "bottom" : !1
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if (typeof r != "object" && (u = f = r), typeof f == "function" && (f = r.top(this.$element)), typeof u == "function" && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (this.unpin != null && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = i == "bottom" ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            i == "bottom" && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            t.offsetBottom != null && (t.offset.bottom = t.offsetBottom);
            t.offsetTop != null && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery),
function(n) {
    n.fn.extend({
        easyResponsiveTabs: function(t) {
            var f = {
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    tabidentify: "",
                    activetab_bg: "white",
                    inactive_bg: "#F5F5F5",
                    active_border_color: "#c1c1c1",
                    active_content_border_color: "#c1c1c1",
                    activate: function() {}
                },
                t = n.extend(f, t),
                i = t,
                r = i.type,
                e = i.fit,
                o = i.width,
                s = "vertical",
                h = "accordion",
                u = window.location.hash,
                c = !!(window.history && history.replaceState);
            n(this).bind("tabactivate", function(n, i) {
                typeof t.activate == "function" && t.activate.call(i, n)
            });
            this.each(function() {
                function k() {
                    r == s && i.addClass("resp-vtabs").addClass(t.tabidentify);
                    e == !0 && i.css({
                        width: "100%",
                        margin: "0px"
                    });
                    r == h && (i.addClass("resp-easy-accordion").addClass(t.tabidentify), i.find(".resp-tabs-list").css("display", "none"))
                }
                var i = n(this),
                    y = i.find("ul.resp-tabs-list." + t.tabidentify),
                    p = i.attr("id"),
                    w, l, a, b, f, v;
                i.find("ul.resp-tabs-list." + t.tabidentify + " li").addClass("resp-tab-item").addClass(t.tabidentify);
                i.css({
                    display: "block",
                    width: o
                });
                t.type == "vertical" && y.css("margin-top", "3px");
                i.find(".resp-tabs-container." + t.tabidentify).css("border-color", t.active_content_border_color);
                i.find(".resp-tabs-container." + t.tabidentify + " > div").addClass("resp-tab-content").addClass(t.tabidentify);
                k();
                i.find(".resp-tab-content." + t.tabidentify).before("<h2 class='resp-accordion " + t.tabidentify + "' role='tab'><span class='resp-arrow'><\/span><\/h2>");
                i.find(".resp-tab-content." + t.tabidentify).prev("h2").css({
                    "background-color": t.inactive_bg,
                    "border-color": t.active_border_color
                });
                l = 0;
                i.find(".resp-accordion").each(function() {
                    w = n(this);
                    var r = i.find(".resp-tab-item:eq(" + l + ")"),
                        u = i.find(".resp-accordion:eq(" + l + ")");
                    u.append(r.html());
                    u.data(r.data());
                    w.attr("aria-controls", t.tabidentify + "_tab_item-" + l);
                    l++
                });
                a = 0;
                i.find(".resp-tab-item").each(function() {
                    $tabItem = n(this);
                    $tabItem.attr("aria-controls", t.tabidentify + "_tab_item-" + a);
                    $tabItem.attr("role", "tab");
                    $tabItem.css({
                        "background-color": t.inactive_bg,
                        "border-color": "none"
                    });
                    var r = 0;
                    i.find(".resp-tab-content." + t.tabidentify).each(function() {
                        b = n(this);
                        b.attr("aria-labelledby", t.tabidentify + "_tab_item-" + r).css({
                            "border-color": t.active_border_color
                        });
                        r++
                    });
                    a++
                });
                f = 0;
                u != "" && (v = u.match(new RegExp(p + "([0-9]+)")), v !== null && v.length === 2 && (f = parseInt(v[1], 10) - 1, f > a && (f = 0)));
                n(i.find(".resp-tab-item." + t.tabidentify)[f]).addClass("resp-tab-active").css({
                    "background-color": t.activetab_bg,
                    "border-color": t.active_border_color
                });
                t.closed === !0 || t.closed === "accordion" && !y.is(":visible") || t.closed === "tabs" && y.is(":visible") || (n(i.find(".resp-accordion." + t.tabidentify)[f]).addClass("resp-tab-active").css({
                    "background-color": t.activetab_bg + " !important",
                    "border-color": t.active_border_color,
                    background: "none"
                }), n(i.find(".resp-tab-content." + t.tabidentify)[f]).addClass("resp-tab-content-active").addClass(t.tabidentify).attr("style", "display:block"));
                i.find("[role=tab]").each(function() {
                    var r = n(this);
                    r.click(function() {
                        var r = n(this),
                            f = r.attr("aria-controls"),
                            o;
                        if (r.hasClass("resp-accordion") && r.hasClass("resp-tab-active")) return i.find(".resp-tab-content-active." + t.tabidentify).slideUp("", function() {
                            n(this).addClass("resp-accordion-closed")
                        }), r.removeClass("resp-tab-active").css({
                            "background-color": t.inactive_bg,
                            "border-color": "none"
                        }), !1;
                        if (!r.hasClass("resp-tab-active") && r.hasClass("resp-accordion") ? (i.find(".resp-tab-active." + t.tabidentify).removeClass("resp-tab-active").css({
                                "background-color": t.inactive_bg,
                                "border-color": "none"
                            }), i.find(".resp-tab-content-active." + t.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), i.find("[aria-controls=" + f + "]").addClass("resp-tab-active").css({
                                "background-color": t.activetab_bg,
                                "border-color": t.active_border_color
                            }), i.find(".resp-tab-content[aria-labelledby = " + f + "]." + t.tabidentify).slideDown().addClass("resp-tab-content-active")) : (console.log("here"), i.find(".resp-tab-active." + t.tabidentify).removeClass("resp-tab-active").css({
                                "background-color": t.inactive_bg,
                                "border-color": "none"
                            }), i.find(".resp-tab-content-active." + t.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), i.find("[aria-controls=" + f + "]").addClass("resp-tab-active").css({
                                "background-color": t.activetab_bg,
                                "border-color": t.active_border_color
                            }), i.find(".resp-tab-content[aria-labelledby = " + f + "]." + t.tabidentify).addClass("resp-tab-content-active").attr("style", "display:block")), r.trigger("tabactivate", r), c) {
                            var e = window.location.hash,
                                s = f.split("tab_item-"),
                                u = p + (parseInt(s[1], 10) + 1).toString();
                            e != "" ? (o = new RegExp(p + "[0-9]+"), u = e.match(o) != null ? e.replace(o, u) : e + "|" + u) : u = "#" + u;
                            history.replaceState(null, null, u)
                        }
                    })
                });
                n(window).resize(function() {
                    i.find(".resp-accordion-closed").removeAttr("style")
                })
            })
        }
    })
}(jQuery);
var intRegex = /^\d/,
    cntAddDiv = 2,
    IsMultiCity = !1,
    totalMultiCity = 0,
    tabindexx = 7,
    urlis = window.location.pathname.replace("/", ""),
    mobile_text_tollfree = "",
    focusNext = function() {
        if ($("#txtFlyFrom").val() == "" || $("#txtFlyFrom").val().length < 3) return !1;
        var n = $(this),
            t = parseInt(n.attr("tabindex"), 10),
            i = t + 1,
            r = $('[tabindex="' + i + '"]');
        r.get(0).focus()
    };
$("#txtFlyFrom").keyup(function(n) {
    n.keyCode == 8 && ($("#txtFlyFrom").val().length > 3 ? n.preventDefault() : $("#spn_flyfrom").html(""))
});
$("#txtFlyTo").keyup(function(n) {
    n.keyCode == 8 && ($("#txtFlyTo").val().length > 3 ? n.preventDefault() : $("#spn_flyto").html(""))
});
$("#txtFlyFrom").autocomplete({
    source: function(n, t) {
        var i = [];
        $.ajax({
            async: !1,
            cache: !1,
            type: "POST",
            url: "/Home/Autocomplete",
            data: {
                term: "/" + n.term
            },
            success: function(t) {
                if (t[0].AirportName == "Airport List Not Found") $("#spn_flyfrom").html(""), $("#spn_flyfrom").html("NO RESULT FOUND");
                else {
                    $("#spn_flyfrom").html("");
                    for (var r = 0; r < t.length; r++) i[r] = {
                        label: t[r].Code + " - " + t[r].AirportName + ", " + t[r].City,
                        Id: t[r].Code
                    }, $.ui.autocomplete.prototype._renderItem = function(t, i) {
                        var r = new RegExp("(" + n.term + ")", "gi"),
                            u = i.label.replace(r, "<u>$1<\/u>");
                        return $("<li><\/li>").data("item.autocomplete", i).append(u).appendTo(t)
                    }
                }
            },
            error: function() {}
        });
        t(i);
        $("#txtFlyTo").val("")
    },
    minLength: 3,
    close: focusNext
});
$("#txtFlyTo").autocomplete({
    source: function(n, t) {
        var i = [];
        $.ajax({
            async: !1,
            cache: !1,
            type: "POST",
            url: "/Home/Autocomplete",
            data: {
                term: "/" + n.term
            },
            success: function(t) {
                if (t[0].AirportName == "Airport List Not Found") $("#spn_flyto").html(""), $("#spn_flyto").html("NO RESULT FOUND");
                else {
                    $("#spn_flyto").html("");
                    for (var r = 0; r < t.length; r++) i[r] = {
                        label: t[r].Code + " - " + t[r].AirportName + ", " + t[r].City,
                        Id: t[r].Code
                    }, $.ui.autocomplete.prototype._renderItem = function(t, i) {
                        var r = new RegExp("(" + n.term + ")", "gi"),
                            u = i.label.replace(r, "<u>$1<\/u>");
                        return $("<li><\/li>").data("item.autocomplete", i).append(u).appendTo(t)
                    }
                }
            },
            error: function() {}
        });
        t(i)
    },
    minLength: 3,
    close: focusNext
});
$("#txtFlyFrom_1").autocomplete({
    source: function(n, t) {
        var i = [];
        $.ajax({
            async: !1,
            cache: !1,
            type: "POST",
            url: "/Home/Autocomplete",
            data: {
                term: "/" + n.term
            },
            success: function(t) {
                if (t[0].AirportName == "Airport List Not Found") i[0] = {
                    label: t[0].AirportName,
                    Id: t[0].Code
                };
                else
                    for (var r = 0; r < t.length; r++) i[r] = {
                        label: t[r].Code + " - " + t[r].AirportName + ", " + t[r].City,
                        Id: t[r].Code
                    }, $.ui.autocomplete.prototype._renderItem = function(t, i) {
                        var r = new RegExp("(" + n.term + ")", "gi"),
                            u = i.label.replace(r, "<u>$1<\/u>");
                        return $("<li><\/li>").data("item.autocomplete", i).append(u).appendTo(t)
                    }
            },
            error: function() {}
        });
        t(i)
    },
    minLength: 3,
    close: focusNext
});
$("#txtFlyTo_1").autocomplete({
    source: function(n, t) {
        var i = [];
        $.ajax({
            async: !1,
            cache: !1,
            type: "POST",
            url: "/Home/Autocomplete",
            data: {
                term: "/" + n.term
            },
            success: function(t) {
                if (t[0].AirportName == "Airport List Not Found") i[0] = {
                    label: t[0].AirportName,
                    Id: t[0].Code
                };
                else
                    for (var r = 0; r < t.length; r++) i[r] = {
                        label: t[r].Code + " - " + t[r].AirportName + ", " + t[r].City,
                        Id: t[r].Code
                    }, $.ui.autocomplete.prototype._renderItem = function(t, i) {
                        var r = new RegExp("(" + n.term + ")", "gi"),
                            u = i.label.replace(r, "<u>$1<\/u>");
                        return $("<li><\/li>").data("item.autocomplete", i).append(u).appendTo(t)
                    }
            },
            error: function() {}
        });
        t(i)
    },
    minLength: 3,
    close: focusNext
});
$("#txtPreferredAirlines").autocomplete({
    autoFocus: !0,
    source: function(n, t) {
        var i = [];
        $.ajax({
            async: !1,
            cache: !1,
            type: "POST",
            url: "/Home/AutoAirlineList",
            data: {
                term: "/" + n.term
            },
            success: function(n) {
                if (n[0].AirLineName == "AirLine does not exists") i[0] = {
                    label: n[0].AirLineName,
                    Id: n[0].AirCode
                };
                else
                    for (var t = 0; t < n.length; t++) i[t] = {
                        label: n[t].AirCode + " - " + n[t].AirLineName,
                        Id: n[t].AirCode
                    }
            },
            error: function() {}
        });
        t(i)
    },
    close: focusNext
});
$(document).ready(function() {
    var n = 0;
    $(window).width() > 767 ? (n = 2, $(".flight-heading-text").hide()) : (n = 1, $(".flight-heading-text").show(), $("#lbl_fromcity").hide(), $("#lbl_tocity").hide(), $("#lbl_departdate").hide(), $("#lbl_returndate").hide(), $("#txtFlyFrom").attr("placeholder", "City/Airport"), $("#txtFlyTo").attr("placeholder", "City/Airport"), $(window).width() < 767 && ($("#txtFlyFrom_1").attr("placeholder", "City/Airport"), $("#txtFlyTo_1").attr("placeholder", "City/Airport")));
    $("#myModal").addClass({
        "padding-right": "17px"
    });
    $(".modal-backdrop fade in").addClass({
        height: "657px"
    });
    $(".flights-advanced-options").click(function() {
        $(".flights-advanced-options-content").toggle("slow");
        $(".flights-advanced-options").toggleClass("chevron-up chevron-down")
    });
    $(".multicity_new").hide();
    $(".rndtrp").click(function() {
        var n, t;
        IsMultiCity = !1;
        $(".multicity").hide();
        $(".multicity_new").hide();
        $("#dvReturnDate").show();
        $(".rndtrpopt").show(500);
        $("#txtReturnDate").prop("disabled", !1);
        $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly");
        $(".rndtrp").addClass("trpact");
        $(".onwtrp").removeClass("trpact");
        $(".multitrip").removeClass("trpact");
        $("#radio1").attr("checked", !0);
        $("#radio2").attr("checked", !1);
        $("#radio3").attr("checked", !1);
        $("#lbl_flight1").hide();
        $("#lbl_flight2").hide();
        $("#lbl_fromcity").show();
        $("#lbl_tocity").show();
        $("#lbl_departdate").show();
        $("#dv_return").show();
        $(window).width() < 767 && ($("#lbl_fromcity").hide(), $("#lbl_tocity").hide(), $("#lbl_departdate").hide(), $("#lbl_returndate").hide(), $("#txtFlyFrom").attr("placeholder", "City/Airport"), $("#txtFlyTo").attr("placeholder", "City/Airport"));
        n = $("#txtDepartingDate").datepicker("getDate");
        n.setDate(n.getDate() + 1);
        t = $("#txtDepartingDate").datepicker("getDate");
        t.setDate(t.getDate());
        $("#txtReturnDate").datepicker("option", "minDate", t);
        $("#txtReturnDate").datepicker().datepicker("setDate", n)
    });
    $(".onwtrp").click(function() {
        IsMultiCity = !1;
        $(".multicity").hide();
        $(".multicity_new").hide();
        $("#dvReturnDate").show();
        $("#txtReturnDate").prop("disabled", !0);
        $("#txtReturnDate").prev("input[type='text']").attr("readonly", !0);
        $(".rndtrp").removeClass("trpact");
        $(".multitrip").removeClass("trpact");
        $(".onwtrp").addClass("trpact");
        $("#radio2").attr("checked", !0);
        $("#radio1").attr("checked", !1);
        $("#radio3").attr("checked", !1);
        $("#txtReturnDate").val("");
        $("#lbl_flight1").hide();
        $("#lbl_flight2").hide();
        $("#lbl_fromcity").show();
        $("#lbl_tocity").show();
        $("#lbl_departdate").show();
        $("#dv_return").hide();
        $(window).width() < 767 && ($("#lbl_fromcity").hide(), $("#lbl_tocity").hide(), $("#lbl_departdate").hide(), $("#lbl_returndate").hide(), $("#txtFlyFrom").attr("placeholder", "City/Airport"), $("#txtFlyTo").attr("placeholder", "City/Airport"))
    });
    $(".multitrip").click(function() {
        var n, t;
        IsMultiCity = !0;
        $(".multicity").show();
        $(".multicity_new").show();
        $("#dvReturnDate").hide();
        $("#txtReturnDate").prop("disabled", !1);
        $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly");
        $(".onwtrp").removeClass("trpact");
        $(".rndtrp").removeClass("trpact");
        $(".multitrip").addClass("trpact");
        $("#radio1").attr("checked", !1);
        $("#radio2").attr("checked", !1);
        $("#radio3").attr("checked", !0);
        $("#lbl_flight1").show();
        $("#lbl_flight2").show();
        $("#lbl_fromcity").hide();
        $("#lbl_tocity").hide();
        $("#lbl_departdate").hide();
        $("#dv_return").hide();
        $(window).width() < 767 && ($("#lbl_fromcity").hide(), $("#lbl_tocity").hide(), $("#lbl_departdate").hide(), $("#lbl_returndate").hide(), $("#txtFlyFrom").attr("placeholder", "City/Airport"), $("#txtFlyTo").attr("placeholder", "City/Airport"));
        n = $("#txtDepartingDate").datepicker("getDate");
        n.setDate(n.getDate() + 1);
        t = $("#txtDepartingDate").datepicker("getDate");
        t.setDate(t.getDate());
        $("#txtDepartingDate_1").datepicker("option", "minDate", t);
        $("#txtDepartingDate_1").datepicker().datepicker("setDate", n)
    });
    $(".complement").click(function() {
        $(".complement").addClass("trpact");
        $(".complaint").removeClass("trpact");
        $(".suggestion").removeClass("trpact");
        $("#radio1").attr("checked", !0);
        $("#radio2").attr("checked", !1);
        $("#radio3").attr("checked", !1)
    });
    $(".complaint").click(function() {
        $(".complement").removeClass("trpact");
        $(".complaint").addClass("trpact");
        $(".suggestion").removeClass("trpact");
        $("#radio2").attr("checked", !0);
        $("#radio1").attr("checked", !1);
        $("#radio3").attr("checked", !1)
    });
    $(".suggestion").click(function() {
        $(".complement").removeClass("trpact");
        $(".complaint").removeClass("trpact");
        $(".suggestion").addClass("trpact");
        $("#radio3").attr("checked", !0);
        $("#radio2").attr("checked", !1);
        $("#radio1").attr("checked", !1)
    });
    $(".flight").click(function() {
        $("#dv_flight_group_booking").show();
        $("#dv_flight_travel_to").show();
        $(".vacation").removeClass("trpact");
        $(".flyhotel").removeClass("trpact");
        $(".hotel").removeClass("trpact");
        $(".flight").addClass("trpact");
        $("#rd_flight").attr("checked", !0);
        $("#rd_hotel").attr("checked", !1);
        $("#rd_flight_hotel").attr("checked", !1);
        $("#rd_vacation").attr("checked", !1);
        $("#txtDepartingDate").attr("placeholder", "Depart Date");
        $("#txtReturnDate").attr("placeholder", "Return Date");
        $("#txtFlyFrom").attr("placeholder", "Travel From")
    });
    $(".hotel").click(function() {
        $("#dv_flight_group_booking").hide();
        $("#dv_flight_travel_to").hide();
        $(".vacation").removeClass("trpact");
        $(".flyhotel").removeClass("trpact");
        $(".hotel").addClass("trpact");
        $(".flight").removeClass("trpact");
        $("#rd_flight").attr("checked", !1);
        $("#rd_hotel").attr("checked", !0);
        $("#rd_flight_hotel").attr("checked", !1);
        $("#rd_vacation").attr("checked", !1);
        $("#txtDepartingDate").attr("placeholder", "Check In");
        $("#txtReturnDate").attr("placeholder", "Check Out");
        $("#txtFlyFrom").attr("placeholder", "City");
        $("#txtReturnDate").prop("disabled", !1);
        $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly")
    });
    $(".flyhotel").click(function() {
        $("#dv_flight_group_booking").hide();
        $("#dv_flight_travel_to").show();
        $(".vacation").removeClass("trpact");
        $(".flyhotel").addClass("trpact");
        $(".hotel").removeClass("trpact");
        $(".flight").removeClass("trpact");
        $("#rd_flight").attr("checked", !1);
        $("#rd_hotel").attr("checked", !1);
        $("#rd_flight_hotel").attr("checked", !0);
        $("#rd_vacation").attr("checked", !1);
        $("#txtDepartingDate").attr("placeholder", "Depart Date");
        $("#txtReturnDate").attr("placeholder", "Return Date");
        $("#txtFlyFrom").attr("placeholder", "Travel From");
        $("#txtReturnDate").prop("disabled", !1);
        $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly")
    });
    $(".vacation").click(function() {
        $("#dv_flight_group_booking").hide();
        $("#dv_flight_travel_to").hide();
        $(".vacation").addClass("trpact");
        $(".flyhotel").removeClass("trpact");
        $(".hotel").removeClass("trpact");
        $(".flight").removeClass("trpact");
        $("#rd_flight").attr("checked", !1);
        $("#rd_hotel").attr("checked", !1);
        $("#rd_flight_hotel").attr("checked", !1);
        $("#rd_vacation").attr("checked", !0);
        $("#txtFlyFrom").attr("placeholder", "City");
        $("#txtDepartingDate").attr("placeholder", "Check In");
        $("#txtReturnDate").attr("placeholder", "Check Out");
        $("#txtReturnDate").prop("disabled", !1);
        $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly")
    });
    $(".roundtrip").click(function() {
        $("#txtReturnDate").prop("disabled", !1);
        $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly");
        $(".roundtrip").addClass("trpact");
        $(".oneway").removeClass("trpact");
        $("#rd_oneway").attr("checked", !1);
        $("#rd_roundtrip").attr("checked", !0)
    });
    $(".oneway").click(function() {
        $("#txtReturnDate").prop("disabled", !0);
        $("#txtReturnDate").prev("input[type='text']").attr("readonly", !0);
        $(".roundtrip").removeClass("trpact");
        $(".oneway").addClass("trpact");
        $("#rd_oneway").attr("checked", !0);
        $("#rd_roundtrip").attr("checked", !1);
        $("#txtReturnDate").val("")
    });
    $("#txtDepartingDate").datepicker({
        numberOfMonths: n,
        dateFormat: "M dd, yy",
        minDate: 0,
        maxDate: "+11M +26D",
        beforeShow: function(n, t) {
            if ($(window).width() < 767) {
                var i = t.dpDiv,
                    r = $(this).offset().top + $(this).outerHeight(),
                    u = $(this).offset().left;
                setTimeout(function() {
                    i.css({
                        top: r,
                        left: u
                    })
                }, 10);
                $("html, body").animate({
                    scrollTop: $("#txtDepartingDate").offset().top - 10
                }, 1e3)
            }
        },
        onSelect: function() {
            var t, i, n, r;
            for ($(this).valid(), t = $("#txtDepartingDate").datepicker("getDate"), t.setDate(t.getDate() + 1), i = $("#txtDepartingDate").datepicker("getDate"), i.setDate(i.getDate()), $("#txtReturnDate").datepicker("option", "minDate", i), $("#txtReturnDate").datepicker().datepicker("setDate", t), $("#txtReturnDate").val(""), $("#txtDepartingDate_1").datepicker("option", "minDate", i), $("#txtDepartingDate_1").datepicker().datepicker("setDate", t), $("#txtFlyFrom_1").focus(0), n = 2, n = 2; n < parseInt(cntAddDiv); n++) r = $("#txtDepartingDate_" + (parseInt(n) - 1) + "").datepicker("getDate"), r.setDate(r.getDate() + 1), $("#txtDepartingDate_" + n + "").datepicker("option", "minDate", $("#txtDepartingDate_" + (parseInt(n) - 1) + "").val()), $("#txtDepartingDate_" + n + "").datepicker().datepicker("setDate", r);
            $("#txtReturnDate").focus(0)
        }
    });
    $("#txtDepartingDate").datepicker("option", "monthNames", ["Depart (Jan)", "Depart (Feb)", "Depart (Mar)", "Depart (Apr)", "Depart (May)", "Depart (Jun)", "Depart (Jul)", "Depart (Aug)", "Depart (Sep)", "Depart (Oct)", "Depart (Nov)", "Depart (Dec)"]);
    $("#txtDepartingDate").datepicker().datepicker("setDate", new Date);
    $("#txtDepartingDate").datepicker("widget").wrap('<div class="datepicker-custom"/>');
    $("#txtReturnDate").datepicker({
        numberOfMonths: n,
        minDate: 0,
        maxDate: "+11M +26D",
        dateFormat: "M dd, yy",
        beforeShow: function(n, t) {
            if ($(window).width() < 767) {
                var i = t.dpDiv,
                    r = $(this).offset().top + $(this).outerHeight(),
                    u = $(this).offset().right;
                setTimeout(function() {
                    i.css({
                        top: r,
                        right: u
                    })
                }, 10);
                $("html, body").animate({
                    scrollTop: $("#txtReturnDate").offset().top - 10
                }, 1e3)
            }
        },
        onSelect: function() {
            $(this).valid()
        }
    });
    $("#txtReturnDate").datepicker("option", "monthNames", ["Return (Jan)", "Return (Feb)", "Return (Mar)", "Return (Apr)", "Return (May)", "Return (Jun)", "Return (Jul)", "Return (Aug)", "Return (Sep)", "Return (Oct)", "Return (Nov)", "Return (Dec)"]);
    $("#txtDepartingDate_1").datepicker({
        numberOfMonths: n,
        minDate: 0,
        maxDate: "+11M +26D",
        dateFormat: "M dd, yy",
        beforeShow: function(n, t) {
            if ($(window).width() < 767) {
                var i = t.dpDiv,
                    r = $(this).offset().top + $(this).outerHeight(),
                    u = $(this).offset().left;
                setTimeout(function() {
                    i.css({
                        top: r,
                        left: u
                    })
                }, 10);
                $("html, body").animate({
                    scrollTop: $("#txtDepartingDate_1").offset().top - 10
                }, 1e3)
            }
        },
        onSelect: function() {
            for (var n = 2, t, n = 2; n < parseInt(cntAddDiv); n++) t = $("#txtDepartingDate_" + (parseInt(n) - 1) + "").datepicker("getDate"), t.setDate(t.getDate() + 1), $("#txtDepartingDate_" + n + "").datepicker("option", "minDate", $("#txtDepartingDate_" + (parseInt(n) - 1) + "").val()), $("#txtDepartingDate_" + n + "").datepicker().datepicker("setDate", t)
        }
    });
    $("#txtDepartingDate_1").datepicker("option", "monthNames", ["Depart (Jan)", "Depart (Feb)", "Depart (Mar)", "Depart (Apr)", "Depart (May)", "Depart (Jun)", "Depart (Jul)", "Depart (Aug)", "Depart (Sep)", "Depart (Oct)", "Depart (Nov)", "Depart (Dec)"]);
    $("#dvDepartDate").click(Throttle(function() {
        $("#txtDepartingDate").focus()
    }));
    $("#dvReturnDate").click(Throttle(function() {
        $("#txtReturnDate").focus()
    }));
    $("#dvDepartDate_1").click(Throttle(function() {
        $("#txtDepartingDate_1").focus()
    }));
    $("#txtDepartingDateDeals").datepicker({
        numberOfMonths: n,
        dateFormat: "M dd, yy",
        minDate: 0,
        maxDate: "+11M +26D",
        beforeShow: function(n, t) {
            if ($(window).width() < 767) {
                var i = t.dpDiv,
                    r = $(this).offset().top + $(this).outerHeight(),
                    u = $(this).offset().left;
                setTimeout(function() {
                    i.css({
                        top: r,
                        left: u
                    })
                }, 10);
                $("html, body").animate({
                    scrollTop: $("#txtDepartingDateDeals").offset().top - 10
                }, 1e3)
            }
        },
        onSelect: function(n) {
            $("#txtReturnDateDeals").datepicker("option", "minDate", n);
            $("#txtReturnDateDeals").focus(0)
        }
    });
    $("#txtDepartingDateDeals").datepicker().datepicker("setDate", new Date);
    $("#txtDepartingDateDeals").datepicker("widget").wrap('<div class="datepicker-custom"/>');
    $("#txtDepartingDateDeals").datepicker("option", "monthNames", ["Depart (Jan)", "Depart (Feb)", "Depart (Mar)", "Depart (Apr)", "Depart (May)", "Depart (Jun)", "Depart (Jul)", "Depart (Aug)", "Depart (Sep)", "Depart (Oct)", "Depart (Nov)", "Depart (Dec)"]);
    $("#txtReturnDateDeals").datepicker({
        numberOfMonths: n,
        minDate: 0,
        maxDate: "+11M +26D",
        dateFormat: "M dd, yy",
        beforeShow: function(n, t) {
            if ($(window).width() < 767) {
                var i = t.dpDiv,
                    r = $(this).offset().top + $(this).outerHeight(),
                    u = $(this).offset().right;
                setTimeout(function() {
                    i.css({
                        top: r,
                        right: u
                    })
                }, 10);
                $("html, body").animate({
                    scrollTop: $("#txtReturnDateDeals").offset().top - 10
                }, 1e3)
            }
        }
    });
    $("#txtReturnDateDeals").datepicker("option", "monthNames", ["Return (Jan)", "Return (Feb)", "Return (Mar)", "Return (Apr)", "Return (May)", "Return (Jun)", "Return (Jul)", "Return (Aug)", "Return (Sep)", "Return (Oct)", "Return (Nov)", "Return (Dec)"]);
    $("#dvDepartDateDeals").click(Throttle(function() {
        $("#txtDepartingDateDeals").focus()
    }));
    $("#dvReturnDateDeals").click(Throttle(function() {
        $("#txtReturnDateDeals").focus()
    }));
    $(".advance-btn").click(function() {
        $(".advance").toggle("slow")
    })
});
$(window).load(function() {
    $(window).width() < 767 ? ($("#hdn_multicity").val() == "false" && ($("#radio3").hide(), $("#lbl_mtrp").hide(), IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide()), $("#_listTripType").val() == "1" ? (IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide(), $("#dv_return").hide(), $(".rndtrp").removeClass("trpact"), $(".multitrip").removeClass("trpact"), $(".onwtrp").addClass("trpact"), $("#txtReturnDate").val(""), $("#radio2").prop("checked", !0), $("#radio1").prop("checked", !1), $("#radio3").prop("checked", !1)) : $("#_listTripType").val() == "2" && (IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide(), $(".rndtrpopt").show(500), $("#txtReturnDate").prop("disabled", !1), $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly"), $(".rndtrp").addClass("trpact"), $(".onwtrp").removeClass("trpact"), $(".multitrip").removeClass("trpact"), $("#dv_return").show(), $("#radio1").prop("checked", !0), $("#radio2").prop("checked", !1), $("#radio3").prop("checked", !1)), $("#radio1").prop("checked") && (IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide(), $(".rndtrpopt").show(500), $("#txtReturnDate").prop("disabled", !1), $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly"), $(".rndtrp").addClass("trpact"), $(".onwtrp").removeClass("trpact"), $(".multitrip").removeClass("trpact"), $("#radio1").attr("checked", !0), $("#radio2").attr("checked", !1), $("#radio3").attr("checked", !1), $("#dv_return").show(), $("#txtReturnDate").datepicker("option", "minDate", $("#txtDepartingDate").val()), $("#_listFromCity").val() != "" && $("#_listFromCity").val() != null && $("#_listFromCity").val() != undefined && ($("#txtFlyFrom").val($("#_listFromCity").val()), $("#txtFlyTo").val($("#_listToCity").val()), $("#txtDepartingDate").val($("#_listDepartDate").val()), $("#txtReturnDate").val($("#_listReturnDate").val()))), $("#radio2").prop("checked") && (IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide(), $("#txtReturnDate").val(""), $("#dv_return").hide(), $(".rndtrp").removeClass("trpact"), $(".multitrip").removeClass("trpact"), $(".onwtrp").addClass("trpact"), $("#radio2").attr("checked", !0), $("#radio1").attr("checked", !1), $("#radio3").attr("checked", !1), $("#_listFromCity").val() != "" && $("#_listFromCity").val() != null && $("#_listFromCity").val() != undefined && ($("#txtFlyFrom").val($("#_listFromCity").val()), $("#txtFlyTo").val($("#_listToCity").val()), $("#txtDepartingDate").val($("#_listDepartDate").val()))), $("#dv_duration_control").hide(), $("#dv_departure_control").hide(), $("#dv_arrival_control").hide()) : ($("#hdn_multicity").val() == "false" && ($("#radio3").hide(), $("#lbl_mtrp").hide(), IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide()), $("#_listTripType").val() == "1" ? (IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide(), $("#dv_return").hide(), $(".rndtrp").removeClass("trpact"), $(".multitrip").removeClass("trpact"), $(".onwtrp").addClass("trpact"), $("#txtReturnDate").val(""), $("#radio2").prop("checked", !0), $("#radio1").prop("checked", !1), $("#radio3").prop("checked", !1)) : $("#_listTripType").val() == "2" && (IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide(), $(".rndtrpopt").show(500), $("#txtReturnDate").prop("disabled", !1), $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly"), $(".rndtrp").addClass("trpact"), $(".onwtrp").removeClass("trpact"), $(".multitrip").removeClass("trpact"), $("#dv_return").show(), $("#radio1").prop("checked", !0), $("#radio2").prop("checked", !1), $("#radio3").prop("checked", !1)), $("#radio1").prop("checked") && (IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide(), $(".rndtrpopt").show(500), $("#txtReturnDate").prop("disabled", !1), $("#txtReturnDate").prev("input[type='text']").removeAttr("readonly"), $(".rndtrp").addClass("trpact"), $(".onwtrp").removeClass("trpact"), $(".multitrip").removeClass("trpact"), $("#radio1").attr("checked", !0), $("#radio2").attr("checked", !1), $("#radio3").attr("checked", !1), $("#dv_return").show(), $("#txtReturnDate").datepicker("option", "minDate", $("#txtDepartingDate").val()), $("#_listFromCity").val() != "" && $("#_listFromCity").val() != null && $("#_listFromCity").val() != undefined && ($("#txtFlyFrom").val($("#_listFromCity").val()), $("#txtFlyTo").val($("#_listToCity").val()), $("#txtDepartingDate").val($("#_listDepartDate").val()), $("#txtReturnDate").val($("#_listReturnDate").val()))), $("#radio2").prop("checked") && (IsMultiCity = !1, $(".multicity").hide(), $(".multicity_new").hide(), $("#txtReturnDate").val(""), $("#dv_return").hide(), $(".rndtrp").removeClass("trpact"), $(".multitrip").removeClass("trpact"), $(".onwtrp").addClass("trpact"), $("#radio2").attr("checked", !0), $("#radio1").attr("checked", !1), $("#radio3").attr("checked", !1), $("#_listFromCity").val() != "" && $("#_listFromCity").val() != null && $("#_listFromCity").val() != undefined && ($("#txtFlyFrom").val($("#_listFromCity").val()), $("#txtFlyTo").val($("#_listToCity").val()), $("#txtDepartingDate").val($("#_listDepartDate").val()))), $("#dv_duration_control").hide(), $("#dv_departure_control").hide(), $("#dv_arrival_control").hide())
});
$("#btn_search").click(function() {
        if (($("#ui-datepicker-div").hide(), $("#spn_flyfrom").html() != "") || $("#spn_flyto").html() != "") return !1;
        if (intRegex.test($("#txtFlyFrom").val())) return jAlert("Do not fill numeric value in Flying From.", "Validation Message"), $("#txtFlyFrom").focus(), !1;
        if (intRegex.test($("#txtFlyTo").val())) return jAlert("Do not fill numeric value in Flying To.", "Validation Message"), $("#txtFlyTo").focus(), !1;
        if ($("#hdn_ClassTypeName").val($("#ddl_class option:selected").text()), parseInt($("#ddlAdult").val()) < parseInt($("#ddlInfant").val())) return jAlert("Number of Infant should not be greater than Adult.", "Validation Message"), !1;
        if (parseInt($("#ddlAdult").val()) + parseInt($("#ddlChild").val()) + parseInt($("#ddlInfant").val()) > 9) return jAlert("Number of Traveller should not be greater than 9.", "Validation Message"), !1;
        if (IsMultiCity) {
            if (intRegex.test($("#txtFlyFrom_1").val())) return jAlert("Do not fill numeric value in Flying From 2.", "Validation Message"), $("#txtFlyFrom_1").focus(), !1;
            if (intRegex.test($("#txtFlyTo_1").val())) return jAlert("Do not fill numeric value in Flying To 2.", "Validation Message"), $("#txtFlyTo_1").focus(), !1;
            if ($("#txtFlyFrom").val() == "") return jAlert("The Flying From 1 field is required.", "Validation Message"), !1;
            if ($("#txtFlyTo").val() == "") return jAlert("The Flying To 1 field is required.", "Validation Message"), !1;
            if ($("#txtDepartingDate").val() == "") return jAlert("The Departing Date 1 field is required.", "Validation Message"), !1;
            if ($("#txtFlyFrom_1").val() == "") return jAlert("The Flying From 2 field is required.", "Validation Message"), !1;
            if ($("#txtFlyTo_1").val() == "") return jAlert("The Flying To 2 field is required.", "Validation Message"), !1;
            if ($("#txtDepartingDate_1").val() == "") return jAlert("The Departing Date 2 field is required.", "Validation Message"), !1;
            for (var n = 0, t = 2, i = $("#txtFlyFrom").val() + "|~|" + $("#txtFlyFrom_1").val(), r = $("#txtFlyTo").val() + "|~|" + $("#txtFlyTo_1").val(), u = $("#txtDepartingDate").val() + "|~|" + $("#txtDepartingDate_1").val(), n = 0; n < totalMultiCity; n++) {
                if (intRegex.test($("#txtFlyFrom_" + (parseInt(t) + n) + "").val())) return jAlert("Do not fill numeric value in Flying From " + (parseInt(t) + n + 1) + ".", "Validation Message"), $("#txtFlyFrom_" + (parseInt(t) + n) + "").focus(), !1;
                if (intRegex.test($("#txtFlyTo_" + (parseInt(t) + n) + "").val())) return jAlert("Do not fill numeric value in Flying To " + (parseInt(t) + n + 1) + ".", "Validation Message"), $("#txtFlyTo_" + (parseInt(t) + n) + "").focus(), !1;
                if ($("#txtFlyFrom_" + (parseInt(t) + n) + "").val() == "" && $("#txtFlyFrom").val() != "" && $("#txtFlyFrom_1").val() != "") return jAlert("The Flying From field " + (parseInt(t) + n + 1) + " is required.", "Validation Message"), !1;
                if ($("#txtFlyTo_" + (parseInt(t) + n) + "").val() == "" && $("#txtFlyTo").val() != "" && $("#txtFlyTo_1").val() != "") return jAlert("The Flying To field " + (parseInt(t) + n + 1) + " is required.", "Validation Message"), !1;
                if ($("#txtDepartingDate_" + (parseInt(t) + n) + "").val() == "" && $("#txtDepartingDate").val() != "" && $("#txtDepartingDate_1").val() != "") return jAlert("The Departing Date " + (parseInt(t) + n + 1) + " is required.", "Validation Message"), !1;
                i = i + "|~|" + $("#txtFlyFrom_" + (parseInt(t) + n) + "").val();
                r = r + "|~|" + $("#txtFlyTo_" + (parseInt(t) + n) + "").val();
                u = u + "|~|" + $("#txtDepartingDate_" + (parseInt(t) + n) + "").val()
            }
            $("#hdn_MultiCityFrom").val(i);
            $("#hdn_MultiCityTo").val(r);
            $("#hdn_MultiCityDepartDate").val(u)
        }
        if ($("#radio2").is(":checked") && ($("#txtReturnDate").prop("disabled", !0), $("#txtReturnDate").prev("input[type='text']").attr("readonly", !0), $("#txtReturnDate").val() == ""), $("#txtFlyFrom").val() == "Airport List Not Found") return jAlert("Please Fill City Flying From", "Validation Message"), $("#txtFlyFrom").val(""), !1;
        if ($("#txtFlyTo").val() == "Airport List Not Found") return jAlert("Please Fill City Flying To", "Validation Message"), $("#txtFlyTo").val(""), !1;
        if ($("#txtPreferredAirlines").val() == "AirLine does not exists") return jAlert("Please Fill Preferred Airlines", "Validation Message"), $("#txtPreferredAirlines").val(""), !1;
        if ($("#txtFlyFrom").val() != "" && $("#txtFlyTo").val() != "") {
            if ($("#txtFlyFrom").val() == $("#txtFlyTo").val()) return jAlert("You are filling same source and destination, please fill again City / Airport.", "Validation Message"), $("#txtFlyFrom").val(""), $("#txtFlyTo").val(""), !1;
            ($("#radio1").is(":checked") && $("#txtReturnDate").val() != "" || $("#radio2").is(":checked") && $("#txtDepartingDate").val() != "" || $("#radio3").is(":checked") && $("#txtDepartingDate").val() != "") && ($("#txtFlyFrom").val().length > 3 && $("#txtFlyTo").val().length > 3 ? $("#txtFlyFrom_1").val() != "" && $("#txtFlyFrom_1").val() != undefined ? ($("#openPopup_multicity").show(), $("#openPopup_searchflight").hide(), $("#spn_flyfrom_popup_m").html($("#txtFlyFrom").val().split(",")[1].trim()), $("#spn_flyfrom_popup_m_1").html($("#txtFlyFrom_1").val().split(",")[1].trim()), $("#spn_flyto_popup_m").html($("#txtFlyTo").val().split(",")[1].trim()), $("#spn_flyto_popup_m_1").html($("#txtFlyTo_1").val().split(",")[1].trim()), $("#spn_depart_date_popup_m").html($("#txtDepartingDate").val()), $("#spn_depart_date_popup_m_1").html($("#txtDepartingDate_1").val()), $(".mid-oneway").show(), $("#searchModal").show()) : ($("#openPopup_multicity").hide(), $("#openPopup_searchflight").show(), $("#spn_flyfrom_popup").html($("#txtFlyFrom").val().split(",")[1].trim()), $("#spn_flyfrom_popup_1").html($("#txtFlyFrom").val().split(",")[1].trim()), $("#spn_flyto_popup").html($("#txtFlyTo").val().split(",")[1].trim()), $("#spn_flyto_popup_1").html($("#txtFlyTo").val().split(",")[1].trim()), $("#spn_depart_date_popup").html($("#txtDepartingDate").val()), $("#spn_depart_date_popup_1").html($("#txtDepartingDate").val()), $("#spn_return_date_popup").html($("#txtReturnDate").val()), $("#txtReturnDate").val() == "" && ($(".mid-roundway").hide(), $(".mid-oneway").show(), $("#spn_depart_date_popup").html("")), $("#searchModal").show()) : ($("#openPopup_multicity").hide(), $("#openPopup_searchflight").show(), $("#spn_flyfrom_popup").html($("#txtFlyFrom").val()), $("#spn_flyfrom_popup_1").html($("#txtFlyFrom").val()), $("#spn_flyto_popup").html($("#txtFlyTo").val()), $("#spn_flyto_popup_1").html($("#txtFlyTo").val()), $("#spn_depart_date_popup").html($("#txtDepartingDate").val()), $("#spn_depart_date_popup_1").html($("#txtDepartingDate").val()), $("#spn_return_date_popup").html($("#txtReturnDate").val()), $("#txtReturnDate").val() == "" && ($(".mid-roundway").hide(), $(".mid-oneway").show(), $("#spn_depart_date_popup").html("")), $("#searchModal").show()))
        }
    }),
    function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n(require("jquery")) : n(jQuery)
    }(function(n) {
        function i(n) {
            return t.raw ? n : encodeURIComponent(n)
        }

        function f(n) {
            return t.raw ? n : decodeURIComponent(n)
        }

        function e(n) {
            return i(t.json ? JSON.stringify(n) : String(n))
        }

        function o(n) {
            n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return n = decodeURIComponent(n.replace(u, " ")), t.json ? JSON.parse(n) : n
            } catch (i) {}
        }

        function r(i, r) {
            var u = t.raw ? i : o(i);
            return n.isFunction(r) ? r(u) : u
        }
        var u = /\+/g,
            t = n.cookie = function(u, o, s) {
                var v, c;
                if (arguments.length > 1 && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (v = s.expires, c = s.expires = new Date, c.setMilliseconds(c.getMilliseconds() + v * 864e5)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
                for (var l = u ? undefined : {}, y = document.cookie ? document.cookie.split("; ") : [], a = 0, b = y.length; a < b; a++) {
                    var p = y[a].split("="),
                        w = f(p.shift()),
                        h = p.join("=");
                    if (u === w) {
                        l = r(h, o);
                        break
                    }
                    u || (h = r(h)) === undefined || (l[w] = h)
                }
                return l
            };
        t.defaults = {};
        n.removeCookie = function(t, i) {
            return n.cookie(t, "", n.extend({}, i, {
                expires: -1
            })), !n.cookie(t)
        }
    });
$(document).ready(function() {
    var i = 250,
        t = 1e3,
        n;
    jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > i ? jQuery(".back-to-top").fadeIn(t) : jQuery(".back-to-top").fadeOut(t)
    });
    jQuery(".back-to-top").click(function(n) {
        return n.preventDefault(), jQuery("html, body").animate({
            scrollTop: 0
        }, t), !1
    });
    $("ul.nav li.dropdown").hover(function() {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeIn(100)
    }, function() {
        $(this).find(".dropdown-menu").stop(!0, !0).delay(100).fadeOut(100)
    });
    n = window.location.pathname.replace("/", "");
    n == "flights" ? ($("#li-home").removeClass("active"), $("#li-flights").addClass("active"), $("#li-vacations").removeClass("active"), $("#li-contact-us").removeClass("active"), $("#li-about-us").removeClass("active"), $("#li-more").removeClass("active"), $("#li-supports").removeClass("active")) : n == "vacations" ? ($("#li-home").removeClass("active"), $("#li-flights").removeClass("active"), $("#li-vacations").addClass("active"), $("#li-contact-us").removeClass("active"), $("#li-about-us").removeClass("active"), $("#li-more").removeClass("active"), $("#li-supports").removeClass("active")) : n == "contact-us" ? ($("#li-home").removeClass("active"), $("#li-flights").removeClass("active"), $("#li-vacations").removeClass("active"), $("#li-contact-us").addClass("active"), $("#li-about-us").removeClass("active"), $("#li-more").removeClass("active"), $("#li-supports").removeClass("active")) : n == "about-us" ? ($("#li-home").removeClass("active"), $("#li-flights").removeClass("active"), $("#li-vacations").removeClass("active"), $("#li-contact-us").removeClass("active"), $("#li-about-us").addClass("active"), $("#li-more").removeClass("active"), $("#li-supports").removeClass("active")) : n == "" ? ($("#li-home").addClass("active"), $("#li-flights").removeClass("active"), $("#li-vacations").removeClass("active"), $("#li-contact-us").removeClass("active"), $("#li-about-us").removeClass("active"), $("#li-more").removeClass("active"), $("#li-supports").removeClass("active")) : ($("#li-home").removeClass("active"), $("#li-flights").removeClass("active"), $("#li-vacations").removeClass("active"), $("#li-contact-us").removeClass("active"), $("#li-about-us").removeClass("active"), $("#li-more").removeClass("active"), $("#li-supports").addClass("active"));
    n.toLowerCase().indexOf("flights/") == 0 && ($("#li-home").removeClass("active"), $("#li-flights").addClass("active"), $("#li-vacations").removeClass("active"), $("#li-contact-us").removeClass("active"), $("#li-about-us").removeClass("active"), $("#li-more").removeClass("active"), $("#li-supports").removeClass("active"));
    n.toLowerCase().indexOf("offers/") == 0 && ($("#li-home").removeClass("active"), $("#li-flights").removeClass("active"), $("#li-vacations").removeClass("active"), $("#li-contact-us").removeClass("active"), $("#li-about-us").removeClass("active"), $("#li-more").addClass("active"), $("#li-supports").removeClass("active"));
    n.toLowerCase().indexOf("vacations/") == 0 && ($("#li-home").removeClass("active"), $("#li-flights").removeClass("active"), $("#li-vacations").addClass("active"), $("#li-contact-us").removeClass("active"), $("#li-about-us").removeClass("active"), $("#li-more").removeClass("active"), $("#li-supports").removeClass("active"))
});
var recentSearchKey = "rs_",
    currency = "$",
    monthn = "";
if (($.cookie("isMobile") == "" || $.cookie("isMobile") === undefined) && ($(window).width() > 767 ? $.cookie("isMobile", "false") : $.cookie("isMobile", "true"), $.cookie("clientScreenWidth", $(window).width()), $.cookie("clientScreenHeight", $(window).height())), $(window).width() > 767) {
    localStorage = window.localStorage;
    rurl = window.location.href;
    root = window.location.protocol + "//" + window.location.host + "/";
    try {
        checkCookLocalStorage()
    } catch (e) {}
    if (resSearch = "rs_", typeof Storage != "undefined") {
        varInterestedinFlight = "";
        storagecount = "";
        try {
            if ($.cookie("isClosed") != "true") {
                if (localStorage.getItem("rs_1") != null)
                    if (varInterestedinFlight = " <div class='srch-head'><\/div>", localStorage.length > 0) {
                        for (i = 3; i >= 1; i--)
                            if (tryit = "", localStorage.getItem("rs_" + i) != null) {
                                resSearch = JSON.parse(localStorage.getItem("rs_" + i));
                                Journeytypr = "";
                                storagecount++;
                                resSearch.JourneyType === "R" ? Journeytypr = "(Round Trip)" : resSearch.JourneyType === "O" && (Journeytypr = "(One Way)");
                                try {
                                    tryit = "<div class='srch-area' id='rs_" + i + "'><div class='departs'>" + resSearch.JourneyFrom.split("-")[0] + "<br /><span class='span'>" + GetFormatedDate(resSearch.DDate) + "<\/span><\/div><div class='arrows'><i class='fa fa-exchange'><\/i><\/div><div class='arrivals'>" + resSearch.JourneyTo.split("-")[0] + "<br /><span class='span'>";
                                    tryit = resSearch.RDate != "" ? tryit + GetFormatedDate(resSearch.RDate) : tryit + Journeytypr;
                                    tryit = tryit + "<\/span><\/div><div class='fares'>" + currency + resSearch.CheapFare + "<\/div><\/div>"
                                } catch (e) {
                                    tryit = "";
                                    $("#recdd").hide()
                                }
                                varInterestedinFlight = varInterestedinFlight + tryit;
                                $("#recdd").show()
                            }
                    } else varInterestedinFlight = "", $("#recdd").hide();
                else $("#recdd").hide();
                $("#recentsearches").prepend(varInterestedinFlight);
                $("#recentcount").append(storagecount)
            }
        } catch (e) {
            $("#recdd").hide()
        }
    }
}
$(".news_close_btn").click(function() {
    localStorage.setItem("isClosedSubs", "true");
    var n = new Date;
    n.setTime(n.getTime() + 576e5);
    $.cookie("isClosedSubs", "true", {
        expires: n
    })
});
$(".close_btn").click(function() {
    localStorage.setItem("isClosedApp", "true");
    var n = new Date;
    n.setTime(n.getTime() + 72e5);
    $.cookie("isClosedApp", "true", {
        expires: n
    })
});
$(".redirect_toplace").click(function() {
    localStorage.setItem("isClosedApp", "true");
    var n = new Date;
    n.setTime(n.getTime() + 72e5);
    $.cookie("isClosedApp", "true", {
        expires: n
    })
});
$(".close_recent_search").click(function() {
    $(".recent_search").hide();
    localStorage.setItem("isClosed", "true");
    var n = new Date;
    n.setTime(n.getTime() + 6e5);
    $.cookie("isClosed", "true", {
        expires: n
    })
});
$("div.srch-area").click(function() {
    var n = "",
        s = "",
        o = "",
        c = window.location.protocol + "//" + window.location.host + "/",
        i = "",
        r = "";
    if (n = JSON.parse(localStorage.getItem(this.id)), IsSearchTimeExpire(n.DDate.replace("-", "/").replace("-", "/"))) {
        var u = new Date,
            f = u.getDate() + 7,
            e = u.getDate() + 15,
            t = MonthNumber(u.getMonth()),
            h = u.getFullYear();
        f < 10 && (f = "0" + f);
        e < 10 && (e = "0" + e);
        t = t < 10 ? "0" + t : t;
        i = t + "-" + f + "-" + h;
        r = t + "-" + e + "-" + h
    } else i = n.DDate, r = n.RDate;
    o = n.Class == "Economy" ? "Y" : n.Class == "Premium Economy" ? "W" : n.Class == "Business" ? "C" : "Y";
    s = n.JourneyType == "R" ? "flights/air-listing/" + n.JourneyType + "/" + n.JourneyFrom.split("-")[0].trim() + "/" + n.JourneyTo.split("-")[0].trim() + "/" + i + "/" + r + "/" + n.Adults + "/0/0/" + o : "flights/air-listing/" + n.JourneyType + "/" + n.JourneyFrom.split("-")[0].trim() + "/" + n.JourneyTo.split("-")[0].trim() + "/" + i + "/-/" + n.Adults + "/0/0/" + o;
    window.open(c + s, "_self");
    $("#openPopup_multicity").hide();
    $("#openPopup_searchflight").show();
    $("#spn_flyfrom_popup").html(n.JourneyFrom.split(",")[1].trim());
    $("#spn_flyfrom_popup_1").html(n.JourneyFrom.split(",")[1].trim());
    $("#spn_flyto_popup").html(n.JourneyTo.split(",")[1].trim());
    $("#spn_flyto_popup_1").html(n.JourneyTo.split(",")[1].trim());
    $("#spn_depart_date_popup").html(n.DD_display);
    $("#spn_depart_date_popup_1").html(n.DD_display);
    $("#spn_return_date_popup").html(n.RD_display);
    r == "" && ($(".mid-roundway").hide(), $(".mid-oneway").show(), $("#spn_depart_date_popup").html(""));
    $("#searchModal").show()
});
getUrlParameter = function(n) {
    for (var u = decodeURIComponent(window.location.search.substring(1)), r = u.split("&"), t, i = 0; i < r.length; i++)
        if (t = r[i].split("="), t[0] === n) return t[1] === undefined ? !0 : t[1]
};
($.cookie("isClosedRed") != "true" || $.cookie("isClosedRed") === undefined) && (tech = getUrlParameter("ref"), tech !== undefined && tech !== "" && (country = "", tech.toLowerCase() == "farekingdom.in" ? country = "India" : tech.toLowerCase() == "farekingdom.ca" ? country = "CANADA" : tech.toLowerCase() == "farekingdom.com" && (country = "USA"), $("#redirect").attr("href", "https://www." + tech + "/"), $("#redirect").text("Continue to our " + country + " site " + tech), setTimeout(function() {
    $(".top-alert").slideToggle("slow")
}, 1500), $(".altclose a").click(function() {
    $(".top-alert").slideToggle("slow")
})), date = new Date, minutes = 10, date.setTime(date.getTime() + minutes * 6e4), $.cookie("isClosedRed", "true", {
    expires: date
}));
$(document).ready(function() {
        function i(n) {
            n.JourneyType == "O" ? ($("input:radio[name=\"RoundTrip\"][value='R']").prop("checked", !1), $("input:radio[name=\"MultiCity\"][value='M']").prop("checked", !1), $('input:radio[name="OneWay"][value=' + n.JourneyType + "]").prop("checked", !0), $("#txtFlyFrom").val(n.JourneyFrom), $("#txtFlyTo").val(n.JourneyTo), $("#txtDepartingDate").val(n.DD_display), $("#dv_return").hide(), $("#ddlAdult").val(n.Adults), $("#ddlChild").val(n.Childs), $("#ddlInfant").val(n.Infants)) : n.JourneyType == "R" && ($("input:radio[name=\"MultiCity\"][value='M']").prop("checked", !1), $("input:radio[name=\"OneWay\"][value='O']").prop("checked", !1), $('input:radio[name="RoundTrip"][value=' + n.JourneyType + "]").prop("checked", !0), $("#txtFlyFrom").val(n.JourneyFrom), $("#txtFlyTo").val(n.JourneyTo), $("#txtDepartingDate").val(n.DD_display), $("#dv_return").show(!0), $("#txtReturnDate").val(n.RD_display), $("#ddlAdult").val(n.Adults), $("#ddlChild").val(n.Childs), $("#ddlInfant").val(n.Infants))
        }
        var t = "rs_",
            n;
        if (typeof Storage != "undefined")
            for (n = 3; n >= 1; n--)
                if (localStorage.getItem("rs_" + n) != null) {
                    t = JSON.parse(localStorage.getItem("rs_" + n));
                    i(t);
                    break
                }
    }),
    function(n, t) {
        "use strict";
        var r, i;
        n.uaMatch = function(n) {
            n = n.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        };
        n.browser || (r = n.uaMatch(t.navigator.userAgent), i = {}, r.browser && (i[r.browser] = !0, i.version = r.version), i.chrome ? i.webkit = !0 : i.webkit && (i.safari = !0), n.browser = i)
    }(jQuery, window),
    function(n) {
        n.alerts = {
            verticalOffset: -75,
            horizontalOffset: 0,
            repositionOnResize: !0,
            overlayOpacity: .01,
            overlayColor: "#FFF",
            draggable: !0,
            okButton: "&nbsp;OK&nbsp;",
            cancelButton: "&nbsp;Cancel&nbsp;",
            dialogClass: null,
            alert: function(t, i, r) {
                i == null && (i = "Alert");
                n.alerts._show(i, t, null, "alert", function(n) {
                    r && r(n)
                })
            },
            confirm: function(t, i, r) {
                i == null && (i = "Confirm");
                n.alerts._show(i, t, null, "confirm", function(n) {
                    r && r(n)
                })
            },
            prompt: function(t, i, r, u) {
                r == null && (r = "Prompt");
                n.alerts._show(r, t, i, "prompt", function(n) {
                    u && u(n)
                })
            },
            _show: function(t, i, r, u, f) {
                n.alerts._hide();
                n.alerts._overlay("show");
                n("BODY").append('<div id="popup_container"><h1 id="popup_title"><\/h1><div id="popup_content"><div id="popup_message"><\/div><\/div><\/div>');
                n.alerts.dialogClass && n("#popup_container").addClass(n.alerts.dialogClass);
                var e = n.browser.msie && parseInt(n.browser.version) <= 6 ? "absolute" : "fixed";
                n("#popup_container").css({
                    position: e,
                    zIndex: 99999,
                    padding: 0,
                    margin: 0
                });
                n("#popup_title").text(t);
                n("#popup_content").addClass(u);
                n("#popup_message").text(i);
                n("#popup_message").html(n("#popup_message").text().replace(/\n/g, "<br />"));
                n("#popup_container").css({
                    minWidth: n("#popup_container").outerWidth(),
                    maxWidth: n("#popup_container").outerWidth()
                });
                n.alerts._reposition();
                n.alerts._maintainPosition(!0);
                switch (u) {
                    case "alert":
                        n("#popup_message").after('<div id="popup_panel"><input type="button" value="' + n.alerts.okButton + '" id="popup_ok" /><\/div>');
                        n("#popup_ok").click(function() {
                            n.alerts._hide();
                            f(!0)
                        });
                        n("#popup_ok").focus().keypress(function(t) {
                            (t.keyCode == 13 || t.keyCode == 27) && n("#popup_ok").trigger("click")
                        });
                        break;
                    case "confirm":
                        n("#popup_message").after('<div id="popup_panel"><input type="button" value="' + n.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + n.alerts.cancelButton + '" id="popup_cancel" /><\/div>');
                        n("#popup_ok").click(function() {
                            n.alerts._hide();
                            f && f(!0)
                        });
                        n("#popup_cancel").click(function() {
                            n.alerts._hide();
                            f && f(!1)
                        });
                        n("#popup_ok").focus();
                        n("#popup_ok, #popup_cancel").keypress(function(t) {
                            t.keyCode == 13 && n("#popup_ok").trigger("click");
                            t.keyCode == 27 && n("#popup_cancel").trigger("click")
                        });
                        break;
                    case "prompt":
                        n("#popup_message").append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + n.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + n.alerts.cancelButton + '" id="popup_cancel" /><\/div>');
                        n("#popup_prompt").width(n("#popup_message").width());
                        n("#popup_ok").click(function() {
                            var t = n("#popup_prompt").val();
                            n.alerts._hide();
                            f && f(t)
                        });
                        n("#popup_cancel").click(function() {
                            n.alerts._hide();
                            f && f(null)
                        });
                        n("#popup_prompt, #popup_ok, #popup_cancel").keypress(function(t) {
                            t.keyCode == 13 && n("#popup_ok").trigger("click");
                            t.keyCode == 27 && n("#popup_cancel").trigger("click")
                        });
                        r && n("#popup_prompt").val(r);
                        n("#popup_prompt").focus().select()
                }
                if (n.alerts.draggable) try {
                    n("#popup_container").draggable({
                        handle: n("#popup_title")
                    });
                    n("#popup_title").css({
                        cursor: "move"
                    })
                } catch (o) {}
            },
            _hide: function() {
                n("#popup_container").remove();
                n.alerts._overlay("hide");
                n.alerts._maintainPosition(!1)
            },
            _overlay: function(t) {
                switch (t) {
                    case "show":
                        n.alerts._overlay("hide");
                        n("BODY").append('<div id="popup_overlay"><\/div>');
                        n("#popup_overlay").css({
                            position: "absolute",
                            zIndex: 99998,
                            top: "0px",
                            left: "0px",
                            width: "100%",
                            height: n(document).height(),
                            background: n.alerts.overlayColor,
                            opacity: n.alerts.overlayOpacity
                        });
                        break;
                    case "hide":
                        n("#popup_overlay").remove()
                }
            },
            _reposition: function() {
                var t = n(window).height() / 2 - n("#popup_container").outerHeight() / 2 + n.alerts.verticalOffset,
                    i = n(window).width() / 2 - n("#popup_container").outerWidth() / 2 + n.alerts.horizontalOffset;
                t < 0 && (t = 0);
                i < 0 && (i = 0);
                n.browser.msie && parseInt(n.browser.version) <= 6 && (t = t + n(window).scrollTop());
                n("#popup_container").css({
                    top: t + "px",
                    left: i + "px"
                });
                n("#popup_overlay").height(n(document).height())
            },
            _maintainPosition: function(t) {
                if (n.alerts.repositionOnResize) switch (t) {
                    case !0:
                        n(window).bind("resize", n.alerts._reposition);
                        break;
                    case !1:
                        n(window).unbind("resize", n.alerts._reposition)
                }
            }
        };
        jAlert = function(t, i, r) {
            n.alerts.alert(t, i, r)
        };
        jConfirm = function(t, i, r) {
            n.alerts.confirm(t, i, r)
        };
        jPrompt = function(t, i, r, u) {
            n.alerts.prompt(t, i, r, u)
        }
    }(jQuery);
BOTGtmTracking = {
    Param: {
        Origin: "",
        Destination: "",
        DepartureDate: "",
        ReturnDate: "",
        TripAmount: "",
        TripType: "",
        FlightClass: "",
        Airline: "",
        Stops: "0",
        NoPassenger: "0",
        NoAdults: "0",
        NoChildren: "0",
        NoSeniors: "0",
        NoInfantsInLap: "0",
        NoInfantsOnSeat: "0",
        PageType: "",
        FlowType: "",
        PortalId: "",
        IP: "",
        Provider: "",
        google_conversion_id: ""
    },
    Page: {
        HomePage: "home",
        FlightPage: "flights",
        ListingPage: "flight-listing",
        FlightDetail: "flight-detail",
        TicketPage: "flight-ticket"
    },
    populateAirSearch: function() {
        try {
            dataLayer = [{
                google_tag_params: {
                    travel_originid: this.Param.Origin,
                    travel_destid: this.Param.Destination,
                    travel_startdate: this.Param.DepartureDate,
                    travel_enddate: this.Param.ReturnDate,
                    travel_pagetype: this.Param.PageType,
                    travel_totalvalue: this.Param.TripAmount
                }
            }]
        } catch (n) {}
    },
    populateAirBook: function() {
        try {} catch (n) {}
    }
}