import Vue from "vue";
import moment from "moment";

/* ====Global filter START =========================*/

Vue.filter("activeInactive", function (value) {
  if (value === 1) {
    return "Active";
  } else {
    return "Inactive";
  }
});
Vue.filter("yesNo", function (value) {
  if (value === 1) {
    return "Yes";
  } else {
    return "No";
  }
});
let lang = document.documentElement.lang.substr(0, 2);
moment.locale(lang);

Vue.filter("formatTime", function (value) {
  if (value) {
    return moment(String(value), ["HH:mm"]).format("hh:mm A");
  }
});

Vue.filter("formatTimeSec", function (value) {
  if (value) {
    return moment(String(value), ["HH:mm:ss"]).format("hh:mm:ss A");
  }
  return "";
});
Vue.filter("formatDateTime", function (value) {
  if (value) {
    return moment(value, "DD MMMM YYYY hh:mm A").format();
  }
});
Vue.filter("formatDayMonth", function (value) {
  if (value) {
    return moment(String(value), ["dd:mm"]).format("dd:mm");
  }
});
Vue.filter("formatMinDiff", function (stTime, enTime) {
  if (stTime && enTime) {
    var startTime = moment(stTime, "hh:mm:ss");
    var endTime = moment(enTime, "hh:mm:ss");
    console.log(startTime + " " + endTime);
    var mins = moment
      .utc(moment(endTime, "hh:mm:ss").diff(moment(startTime, "hh:mm:ss")))
      .format("mm");
    return mins + " mins";
  }
});
Vue.filter("formatHourDiff", function (stTime, enTime) {
  if (stTime && enTime) {
    // start time and end time
    var startTime = moment(stTime, "HH:mm:ss a");
    var endTime = moment(enTime, "HH:mm:ss a");

    // calculate total duration
    var duration = moment.duration(endTime.diff(startTime));

    // duration in hours
    var hours = parseInt(duration.asHours());

    // duration in minutes
    var minutes = parseInt(duration.asMinutes()) % 60;
    return hours + " hour " + minutes + " mins.";
  }
});
Vue.filter("formatDate", function (value) {
  //console.log(value);
  if (value) {
    return moment(String(value)).format("DD MMMM YYYY");
  }
});
Vue.filter("formatDate1", function (value) {
  //console.log(value);
  if (value) {
    return moment(String(value)).format("DD MMM YY");
  }
});
Vue.filter("formatDay", function (value) {
  //console.log(value);
  if (value) {
    return moment(String(value)).format("DD");
  }
});
Vue.filter("formatMonth", function (value) {
  //console.log(value);
  if (value) {
    return moment(String(value)).format("MMMM");
  }
});
//capitalize --- apple->Apple
Vue.filter("capitalize", function (value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
});

//remove html tags
Vue.filter("striphtml", function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

Vue.filter("currency", function (value) {
  return "৳ " + parseFloat(value).toFixed(2);
});
Vue.filter("round", function (value) {
  return parseFloat(value).toFixed(0);
});
Vue.filter("floor", function (value) {
  return Math.floor(value);
});
