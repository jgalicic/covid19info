let countryNameFont = "sans-serif"
let countryDataFont = "verdana"

const vw = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 1000
)

const isSafari =
  navigator.vendor &&
  navigator.vendor.indexOf("Apple") > -1 &&
  navigator.userAgent &&
  navigator.userAgent.indexOf("CriOS") == -1 &&
  navigator.userAgent.indexOf("FxiOS") == -1

let data = [
  [
    {
      date: "March 12, 2020",
      country: "China",
      cases: 80796,
      todayCases: 18,
      deaths: 3169,
      todayDeaths: 11,
      recovered: 62826,
      critical: 4257
    },
    {
      country: "Italy",
      cases: 12462,
      todayCases: 0,
      deaths: 827,
      todayDeaths: 0,
      recovered: 1045,
      critical: 1028
    },
    {
      country: "Iran",
      cases: 10075,
      todayCases: 1075,
      deaths: 429,
      todayDeaths: 75,
      recovered: 3276,
      critical: 0
    },
    {
      country: "S. Korea",
      cases: 7869,
      todayCases: 114,
      deaths: 66,
      todayDeaths: 6,
      recovered: 333,
      critical: 54
    },
    {
      country: "Spain",
      cases: 3003,
      todayCases: 726,
      deaths: 84,
      todayDeaths: 29,
      recovered: 189,
      critical: 126
    },
    {
      country: "Germany",
      cases: 2355,
      todayCases: 389,
      deaths: 4,
      todayDeaths: 1,
      recovered: 25,
      critical: 9
    },
    {
      country: "France",
      cases: 2281,
      todayCases: 0,
      deaths: 48,
      todayDeaths: 0,
      recovered: 12,
      critical: 105
    },
    {
      country: "USA",
      cases: 1375,
      todayCases: 74,
      deaths: 38,
      todayDeaths: 0,
      recovered: 15,
      critical: 10
    },
    {
      country: "Switzerland",
      cases: 867,
      todayCases: 215,
      deaths: 6,
      todayDeaths: 2,
      recovered: 4,
      critical: 0
    },
    {
      country: "Norway",
      cases: 713,
      todayCases: 84,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Diamond Princess",
      cases: 696,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      recovered: 325,
      critical: 32
    },
    {
      country: "Japan",
      cases: 643,
      todayCases: 4,
      deaths: 16,
      todayDeaths: 1,
      recovered: 118,
      critical: 26
    },
    {
      country: "Sweden",
      cases: 635,
      todayCases: 135,
      deaths: 1,
      todayDeaths: 0,
      recovered: 1,
      critical: 2
    },
    {
      country: "Denmark",
      cases: 615,
      todayCases: 101,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 2
    },
    {
      country: "Netherlands",
      cases: 614,
      todayCases: 111,
      deaths: 5,
      todayDeaths: 0,
      recovered: 2,
      critical: 1
    },
    {
      country: "UK",
      cases: 590,
      todayCases: 130,
      deaths: 10,
      todayDeaths: 2,
      recovered: 18,
      critical: 0
    },
    {
      country: "Belgium",
      cases: 399,
      todayCases: 85,
      deaths: 3,
      todayDeaths: 0,
      recovered: 1,
      critical: 2
    },
    {
      country: "Austria",
      cases: 302,
      todayCases: 56,
      deaths: 1,
      todayDeaths: 1,
      recovered: 4,
      critical: 1
    },
    {
      country: "Qatar",
      cases: 262,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bahrain",
      cases: 195,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 35,
      critical: 1
    },
    {
      country: "Singapore",
      cases: 178,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 96,
      critical: 12
    },
    {
      country: "Malaysia",
      cases: 158,
      todayCases: 9,
      deaths: 0,
      todayDeaths: 0,
      recovered: 26,
      critical: 2
    },
    {
      country: "Australia",
      cases: 156,
      todayCases: 28,
      deaths: 3,
      todayDeaths: 0,
      recovered: 26,
      critical: 1
    },
    {
      country: "Hong Kong",
      cases: 130,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      recovered: 77,
      critical: 6
    },
    {
      country: "Canada",
      cases: 118,
      todayCases: 8,
      deaths: 1,
      todayDeaths: 0,
      recovered: 9,
      critical: 1
    },
    {
      country: "Finland",
      cases: 109,
      todayCases: 44,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Iceland",
      cases: 103,
      todayCases: 18,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Israel",
      cases: 100,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 2
    },
    {
      country: "Greece",
      cases: 99,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 1,
      recovered: 0,
      critical: 2
    },
    {
      country: "Czechia",
      cases: 96,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Slovenia",
      cases: 89,
      todayCases: 32,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "UAE",
      cases: 85,
      todayCases: 11,
      deaths: 0,
      todayDeaths: 0,
      recovered: 17,
      critical: 2
    },
    {
      country: "Kuwait",
      cases: 80,
      todayCases: 8,
      deaths: 0,
      todayDeaths: 0,
      recovered: 5,
      critical: 4
    },
    {
      country: "Portugal",
      cases: 78,
      todayCases: 17,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "India",
      cases: 74,
      todayCases: 12,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 0
    },
    {
      country: "Iraq",
      cases: 71,
      todayCases: 0,
      deaths: 8,
      todayDeaths: 1,
      recovered: 15,
      critical: 0
    },
    {
      country: "Thailand",
      cases: 70,
      todayCases: 11,
      deaths: 1,
      todayDeaths: 0,
      recovered: 35,
      critical: 1
    },
    {
      country: "San Marino",
      cases: 69,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      recovered: 0,
      critical: 3
    },
    {
      country: "Brazil",
      cases: 69,
      todayCases: 17,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 2
    },
    {
      country: "Lebanon",
      cases: 68,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 1,
      recovered: 1,
      critical: 3
    },
    {
      country: "Egypt",
      cases: 67,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 27,
      critical: 0
    },
    {
      country: "Philippines",
      cases: 52,
      todayCases: 3,
      deaths: 2,
      todayDeaths: 0,
      recovered: 2,
      critical: 1
    },
    {
      country: "Poland",
      cases: 51,
      todayCases: 20,
      deaths: 1,
      todayDeaths: 1,
      recovered: 0,
      critical: 3
    },
    {
      country: "Taiwan",
      cases: 49,
      todayCases: 1,
      deaths: 1,
      todayDeaths: 0,
      recovered: 20,
      critical: 0
    },
    {
      country: "Romania",
      cases: 48,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 6,
      critical: 1
    },
    {
      country: "Saudi Arabia",
      cases: 45,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Ireland",
      cases: 43,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Vietnam",
      cases: 39,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 16,
      critical: 0
    },
    {
      country: "Indonesia",
      cases: 34,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Palestine",
      cases: 31,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Russia",
      cases: 28,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Georgia",
      cases: 25,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Brunei",
      cases: 25,
      todayCases: 14,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Algeria",
      cases: 24,
      todayCases: 4,
      deaths: 1,
      todayDeaths: 1,
      recovered: 8,
      critical: 0
    },
    {
      country: "Albania",
      cases: 23,
      todayCases: 8,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Chile",
      cases: 23,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Costa Rica",
      cases: 22,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Argentina",
      cases: 21,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Pakistan",
      cases: 21,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 0
    },
    {
      country: "Croatia",
      cases: 19,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Luxembourg",
      cases: 19,
      todayCases: 12,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Serbia",
      cases: 19,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Oman",
      cases: 18,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 9,
      critical: 0
    },
    {
      country: "Ecuador",
      cases: 17,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Estonia",
      cases: 17,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Peru",
      cases: 17,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "South Africa",
      cases: 17,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Latvia",
      cases: 16,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Hungary",
      cases: 16,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Slovakia",
      cases: 16,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Panama",
      cases: 14,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Belarus",
      cases: 12,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Mexico",
      cases: 12,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 1
    },
    {
      country: "Azerbaijan",
      cases: 11,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Bosnia and Herzegovina",
      cases: 11,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Macao",
      cases: 10,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 10,
      critical: 0
    },
    {
      country: "North Macedonia",
      cases: 9,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Colombia",
      cases: 9,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Malta",
      cases: 9,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Maldives",
      cases: 8,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bulgaria",
      cases: 7,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Afghanistan",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Tunisia",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Cyprus",
      cases: 7,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Morocco",
      cases: 6,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "French Guiana",
      cases: 6,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cambodia",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Dominican Republic",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "New Zealand",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Senegal",
      cases: 5,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Paraguay",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Armenia",
      cases: 4,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Liechtenstein",
      cases: 4,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Moldova",
      cases: 4,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Lithuania",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bangladesh",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Channel Islands",
      cases: 3,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cuba",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Martinique",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Nigeria",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Sri Lanka",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Bolivia",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Burkina Faso",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cameroon",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Faeroe Islands",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Honduras",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Jamaica",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Saint Martin",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Guyana",
      cases: 1,
      todayCases: 1,
      deaths: 1,
      todayDeaths: 1,
      recovered: 0,
      critical: 0
    },
    {
      country: "Andorra",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Jordan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Monaco",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Nepal",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Ukraine",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bhutan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Ivory Coast",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "DRC",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "French Polynesia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Gibraltar",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Vatican City",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Mongolia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Réunion",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "St. Barth",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "St. Vincent Grenadines",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Togo",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Turkey",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    }
  ],
  [
    {
      date: "March 11, 2020",
      country: "China",
      cases: 80790,
      todayCases: 36,
      deaths: 3158,
      todayDeaths: 22,
      recovered: 61611,
      critical: 4492
    },
    {
      country: "Italy",
      cases: 10149,
      todayCases: 0,
      deaths: 631,
      todayDeaths: 0,
      recovered: 1004,
      critical: 877
    },
    {
      country: "Iran",
      cases: 9000,
      todayCases: 958,
      deaths: 354,
      todayDeaths: 63,
      recovered: 2959,
      critical: 0
    },
    {
      country: "S. Korea",
      cases: 7755,
      todayCases: 242,
      deaths: 61,
      todayDeaths: 1,
      recovered: 288,
      critical: 54
    },
    {
      country: "Spain",
      cases: 2182,
      todayCases: 487,
      deaths: 49,
      todayDeaths: 13,
      recovered: 138,
      critical: 101
    },
    {
      country: "France",
      cases: 1784,
      todayCases: 0,
      deaths: 33,
      todayDeaths: 0,
      recovered: 12,
      critical: 86
    },
    {
      country: "Germany",
      cases: 1656,
      todayCases: 91,
      deaths: 3,
      todayDeaths: 1,
      recovered: 25,
      critical: 9
    },
    {
      country: "USA",
      cases: 1016,
      todayCases: 22,
      deaths: 31,
      todayDeaths: 1,
      recovered: 15,
      critical: 10
    },
    {
      country: "Diamond Princess",
      cases: 696,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      recovered: 325,
      critical: 32
    },
    {
      country: "Switzerland",
      cases: 652,
      todayCases: 155,
      deaths: 4,
      todayDeaths: 1,
      recovered: 3,
      critical: 0
    },
    {
      country: "Japan",
      cases: 587,
      todayCases: 0,
      deaths: 12,
      todayDeaths: 0,
      recovered: 102,
      critical: 31
    },
    {
      country: "Netherlands",
      cases: 503,
      todayCases: 121,
      deaths: 5,
      todayDeaths: 1,
      recovered: 0,
      critical: 1
    },
    {
      country: "Sweden",
      cases: 477,
      todayCases: 122,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 2
    },
    {
      country: "UK",
      cases: 456,
      todayCases: 73,
      deaths: 6,
      todayDeaths: 0,
      recovered: 18,
      critical: 0
    },
    {
      country: "Norway",
      cases: 443,
      todayCases: 43,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Denmark",
      cases: 340,
      todayCases: 78,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Belgium",
      cases: 314,
      todayCases: 47,
      deaths: 1,
      todayDeaths: 1,
      recovered: 1,
      critical: 2
    },
    {
      country: "Austria",
      cases: 206,
      todayCases: 24,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 1
    },
    {
      country: "Bahrain",
      cases: 189,
      todayCases: 79,
      deaths: 0,
      todayDeaths: 0,
      recovered: 30,
      critical: 1
    },
    {
      country: "Singapore",
      cases: 178,
      todayCases: 12,
      deaths: 0,
      todayDeaths: 0,
      recovered: 96,
      critical: 12
    },
    {
      country: "Malaysia",
      cases: 149,
      todayCases: 20,
      deaths: 0,
      todayDeaths: 0,
      recovered: 26,
      critical: 2
    },
    {
      country: "Australia",
      cases: 127,
      todayCases: 11,
      deaths: 3,
      todayDeaths: 0,
      recovered: 24,
      critical: 1
    },
    {
      country: "Hong Kong",
      cases: 126,
      todayCases: 5,
      deaths: 3,
      todayDeaths: 0,
      recovered: 60,
      critical: 6
    },
    {
      country: "Canada",
      cases: 97,
      todayCases: 2,
      deaths: 1,
      todayDeaths: 0,
      recovered: 9,
      critical: 1
    },
    {
      country: "Greece",
      cases: 90,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 3
    },
    {
      country: "Iceland",
      cases: 85,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Israel",
      cases: 76,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 1
    },
    {
      country: "UAE",
      cases: 74,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 17,
      critical: 2
    },
    {
      country: "Kuwait",
      cases: 72,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 3
    },
    {
      country: "Iraq",
      cases: 71,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      recovered: 15,
      critical: 0
    },
    {
      country: "Czechia",
      cases: 67,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "San Marino",
      cases: 62,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      recovered: 0,
      critical: 5
    },
    {
      country: "India",
      cases: 62,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 0
    },
    {
      country: "Lebanon",
      cases: 61,
      todayCases: 9,
      deaths: 2,
      todayDeaths: 1,
      recovered: 1,
      critical: 3
    },
    {
      country: "Egypt",
      cases: 60,
      todayCases: 1,
      deaths: 1,
      todayDeaths: 0,
      recovered: 27,
      critical: 0
    },
    {
      country: "Thailand",
      cases: 59,
      todayCases: 6,
      deaths: 1,
      todayDeaths: 0,
      recovered: 34,
      critical: 1
    },
    {
      country: "Finland",
      cases: 59,
      todayCases: 19,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Portugal",
      cases: 59,
      todayCases: 18,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Slovenia",
      cases: 57,
      todayCases: 23,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Philippines",
      cases: 49,
      todayCases: 16,
      deaths: 1,
      todayDeaths: 0,
      recovered: 2,
      critical: 1
    },
    {
      country: "Taiwan",
      cases: 48,
      todayCases: 1,
      deaths: 1,
      todayDeaths: 0,
      recovered: 17,
      critical: 0
    },
    {
      country: "Vietnam",
      cases: 38,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 16,
      critical: 0
    },
    {
      country: "Romania",
      cases: 36,
      todayCases: 7,
      deaths: 0,
      todayDeaths: 0,
      recovered: 6,
      critical: 0
    },
    {
      country: "Brazil",
      cases: 35,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Indonesia",
      cases: 34,
      todayCases: 7,
      deaths: 1,
      todayDeaths: 1,
      recovered: 2,
      critical: 0
    },
    {
      country: "Ireland",
      cases: 34,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Palestine",
      cases: 30,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Poland",
      cases: 27,
      todayCases: 5,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 3
    },
    {
      country: "Qatar",
      cases: 24,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Georgia",
      cases: 23,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Saudi Arabia",
      cases: 21,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Algeria",
      cases: 20,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Russia",
      cases: 20,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Argentina",
      cases: 19,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Pakistan",
      cases: 19,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 0
    },
    {
      country: "Oman",
      cases: 18,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 9,
      critical: 0
    },
    {
      country: "Ecuador",
      cases: 17,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Chile",
      cases: 17,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Croatia",
      cases: 16,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Estonia",
      cases: 13,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Costa Rica",
      cases: 13,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Hungary",
      cases: 13,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "South Africa",
      cases: 13,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Albania",
      cases: 12,
      todayCases: 2,
      deaths: 1,
      todayDeaths: 1,
      recovered: 0,
      critical: 0
    },
    {
      country: "Serbia",
      cases: 12,
      todayCases: 7,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Azerbaijan",
      cases: 11,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Brunei",
      cases: 11,
      todayCases: 5,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Peru",
      cases: 11,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Macao",
      cases: 10,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 10,
      critical: 0
    },
    {
      country: "Latvia",
      cases: 10,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Slovakia",
      cases: 10,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Belarus",
      cases: 9,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Colombia",
      cases: 9,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Panama",
      cases: 8,
      todayCases: 7,
      deaths: 1,
      todayDeaths: 1,
      recovered: 0,
      critical: 0
    },
    {
      country: "Mexico",
      cases: 8,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 1
    },
    {
      country: "Maldives",
      cases: 8,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Afghanistan",
      cases: 7,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Luxembourg",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "North Macedonia",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bosnia and Herzegovina",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Tunisia",
      cases: 6,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Bulgaria",
      cases: 6,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Malta",
      cases: 6,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Morocco",
      cases: 5,
      todayCases: 2,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Dominican Republic",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "New Zealand",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "French Guiana",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Paraguay",
      cases: 5,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Senegal",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Cambodia",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Lithuania",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bangladesh",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Martinique",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Moldova",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Nigeria",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Sri Lanka",
      cases: 2,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Bolivia",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Burkina Faso",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cameroon",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Channel Islands",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cyprus",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Faeroe Islands",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Honduras",
      cases: 2,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Saint Martin",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Andorra",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Armenia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Jordan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Monaco",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Nepal",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Ukraine",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bhutan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "DRC",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Gibraltar",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Vatican City",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Jamaica",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Liechtenstein",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Mongolia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Réunion",
      cases: 1,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "St. Barth",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Togo",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Turkey",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    }
  ],
  [
    {
      date: "March 10, 2020",
      country: "China",
      cases: 80924,
      todayCases: 26,
      deaths: 3140,
      todayDeaths: 17,
      recovered: 60115,
      critical: 4794
    },
    {
      country: "Italy",
      cases: 10149,
      todayCases: 977,
      deaths: 631,
      todayDeaths: 168,
      recovered: 1004,
      critical: 877
    },
    {
      country: "Iran",
      cases: 8042,
      todayCases: 881,
      deaths: 291,
      todayDeaths: 54,
      recovered: 2731,
      critical: 0
    },
    {
      country: "S. Korea",
      cases: 7513,
      todayCases: 35,
      deaths: 58,
      todayDeaths: 5,
      recovered: 247,
      critical: 54
    },
    {
      country: "France",
      cases: 1784,
      todayCases: 372,
      deaths: 33,
      todayDeaths: 3,
      recovered: 12,
      critical: 86
    },
    {
      country: "Spain",
      cases: 1690,
      todayCases: 459,
      deaths: 35,
      todayDeaths: 5,
      recovered: 135,
      critical: 101
    },
    {
      country: "Germany",
      cases: 1458,
      todayCases: 234,
      deaths: 2,
      todayDeaths: 0,
      recovered: 18,
      critical: 9
    },
    {
      country: "USA",
      cases: 886,
      todayCases: 182,
      deaths: 28,
      todayDeaths: 2,
      recovered: 15,
      critical: 8
    },
    {
      country: "Diamond Princess",
      cases: 696,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      recovered: 245,
      critical: 32
    },
    {
      country: "Japan",
      cases: 581,
      todayCases: 51,
      deaths: 10,
      todayDeaths: 1,
      recovered: 102,
      critical: 31
    },
    {
      country: "Switzerland",
      cases: 497,
      todayCases: 123,
      deaths: 3,
      todayDeaths: 1,
      recovered: 3,
      critical: 0
    },
    {
      country: "Netherlands",
      cases: 382,
      todayCases: 61,
      deaths: 4,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "UK",
      cases: 373,
      todayCases: 52,
      deaths: 6,
      todayDeaths: 1,
      recovered: 18,
      critical: 0
    },
    {
      country: "Sweden",
      cases: 355,
      todayCases: 95,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 2
    },
    {
      country: "Norway",
      cases: 343,
      todayCases: 116,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Belgium",
      cases: 267,
      todayCases: 28,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 2
    },
    {
      country: "Denmark",
      cases: 262,
      todayCases: 172,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Austria",
      cases: 182,
      todayCases: 51,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 1
    },
    {
      country: "Singapore",
      cases: 166,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 93,
      critical: 10
    },
    {
      country: "Malaysia",
      cases: 129,
      todayCases: 12,
      deaths: 0,
      todayDeaths: 0,
      recovered: 87,
      critical: 2
    },
    {
      country: "Hong Kong",
      cases: 121,
      todayCases: 5,
      deaths: 3,
      todayDeaths: 0,
      recovered: 59,
      critical: 6
    },
    {
      country: "Bahrain",
      cases: 110,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 30,
      critical: 1
    },
    {
      country: "Australia",
      cases: 103,
      todayCases: 10,
      deaths: 3,
      todayDeaths: 0,
      recovered: 22,
      critical: 1
    },
    {
      country: "Greece",
      cases: 89,
      todayCases: 5,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Canada",
      cases: 80,
      todayCases: 3,
      deaths: 1,
      todayDeaths: 0,
      recovered: 8,
      critical: 1
    },
    {
      country: "Iceland",
      cases: 76,
      todayCases: 11,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "UAE",
      cases: 74,
      todayCases: 15,
      deaths: 0,
      todayDeaths: 0,
      recovered: 12,
      critical: 2
    },
    {
      country: "Iraq",
      cases: 71,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      recovered: 15,
      critical: 0
    },
    {
      country: "Kuwait",
      cases: 69,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 3
    },
    {
      country: "Czechia",
      cases: 61,
      todayCases: 23,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Egypt",
      cases: 59,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Israel",
      cases: 58,
      todayCases: 8,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 1
    },
    {
      country: "India",
      cases: 56,
      todayCases: 9,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 0
    },
    {
      country: "Thailand",
      cases: 53,
      todayCases: 3,
      deaths: 1,
      todayDeaths: 0,
      recovered: 33,
      critical: 1
    },
    {
      country: "Lebanon",
      cases: 52,
      todayCases: 11,
      deaths: 1,
      todayDeaths: 1,
      recovered: 1,
      critical: 3
    },
    {
      country: "San Marino",
      cases: 51,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      recovered: 0,
      critical: 5
    },
    {
      country: "Taiwan",
      cases: 47,
      todayCases: 2,
      deaths: 1,
      todayDeaths: 0,
      recovered: 17,
      critical: 0
    },
    {
      country: "Portugal",
      cases: 41,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Finland",
      cases: 40,
      todayCases: 7,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Ireland",
      cases: 34,
      todayCases: 10,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Vietnam",
      cases: 34,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 16,
      critical: 0
    },
    {
      country: "Philippines",
      cases: 33,
      todayCases: 9,
      deaths: 1,
      todayDeaths: 0,
      recovered: 2,
      critical: 1
    },
    {
      country: "Brazil",
      cases: 31,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Slovenia",
      cases: 31,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Romania",
      cases: 29,
      todayCases: 12,
      deaths: 0,
      todayDeaths: 0,
      recovered: 5,
      critical: 0
    },
    {
      country: "Palestine",
      cases: 29,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Indonesia",
      cases: 27,
      todayCases: 8,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 0
    },
    {
      country: "Qatar",
      cases: 24,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Georgia",
      cases: 23,
      todayCases: 8,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Poland",
      cases: 22,
      todayCases: 5,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 2
    },
    {
      country: "Algeria",
      cases: 20,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Russia",
      cases: 20,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Saudi Arabia",
      cases: 20,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Pakistan",
      cases: 19,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 0
    },
    {
      country: "Oman",
      cases: 18,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 9,
      critical: 0
    },
    {
      country: "Argentina",
      cases: 17,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Chile",
      cases: 17,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Ecuador",
      cases: 15,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Croatia",
      cases: 14,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Estonia",
      cases: 13,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Costa Rica",
      cases: 13,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Hungary",
      cases: 12,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Azerbaijan",
      cases: 11,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Peru",
      cases: 11,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Macao",
      cases: 10,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 10,
      critical: 0
    },
    {
      country: "Albania",
      cases: 10,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Belarus",
      cases: 9,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Latvia",
      cases: 8,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Luxembourg",
      cases: 7,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "North Macedonia",
      cases: 7,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Mexico",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 1
    },
    {
      country: "Slovakia",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "South Africa",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Tunisia",
      cases: 6,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Brunei",
      cases: 6,
      todayCases: 5,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Maldives",
      cases: 6,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Afghanistan",
      cases: 5,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Dominican Republic",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "New Zealand",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bosnia and Herzegovina",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "French Guiana",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Malta",
      cases: 5,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Serbia",
      cases: 5,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Senegal",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Bulgaria",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Morocco",
      cases: 3,
      todayCases: 1,
      deaths: 1,
      todayDeaths: 1,
      recovered: 0,
      critical: 1
    },
    {
      country: "Cambodia",
      cases: 3,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Bangladesh",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Colombia",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Moldova",
      cases: 3,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Nigeria",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Burkina Faso",
      cases: 2,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cameroon",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Channel Islands",
      cases: 2,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cyprus",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Faeroe Islands",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Martinique",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Paraguay",
      cases: 2,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Saint Martin",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Andorra",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Armenia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Jordan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Lithuania",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Monaco",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Nepal",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Sri Lanka",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Ukraine",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bhutan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "DRC",
      cases: 1,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Gibraltar",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Vatican City",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Jamaica",
      cases: 1,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Liechtenstein",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Mongolia",
      cases: 1,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Panama",
      cases: 1,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "St. Barth",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Togo",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    }
  ],
  [
    {
      date: "March 9, 2020",
      country: "China",
      cases: 80904,
      todayCases: 44,
      deaths: 3123,
      todayDeaths: 23,
      recovered: 58742,
      critical: 5111
    },
    {
      country: "Italy",
      cases: 9172,
      todayCases: 1797,
      deaths: 463,
      todayDeaths: 97,
      recovered: 724,
      critical: 733
    },
    {
      country: "S. Korea",
      cases: 7478,
      todayCases: 165,
      deaths: 53,
      todayDeaths: 3,
      recovered: 166,
      critical: 36
    },
    {
      country: "Iran",
      cases: 7161,
      todayCases: 595,
      deaths: 237,
      todayDeaths: 43,
      recovered: 2394,
      critical: 0
    },
    {
      country: "France",
      cases: 1412,
      todayCases: 203,
      deaths: 30,
      todayDeaths: 11,
      recovered: 12,
      critical: 21
    },
    {
      country: "Spain",
      cases: 1229,
      todayCases: 555,
      deaths: 30,
      todayDeaths: 13,
      recovered: 32,
      critical: 11
    },
    {
      country: "Germany",
      cases: 1191,
      todayCases: 151,
      deaths: 2,
      todayDeaths: 2,
      recovered: 18,
      critical: 9
    },
    {
      country: "Diamond Princess",
      cases: 696,
      todayCases: 0,
      deaths: 7,
      todayDeaths: 0,
      recovered: 245,
      critical: 32
    },
    {
      country: "USA",
      cases: 624,
      todayCases: 83,
      deaths: 22,
      todayDeaths: 0,
      recovered: 15,
      critical: 8
    },
    {
      country: "Japan",
      cases: 530,
      todayCases: 28,
      deaths: 9,
      todayDeaths: 2,
      recovered: 101,
      critical: 33
    },
    {
      country: "Switzerland",
      cases: 374,
      todayCases: 42,
      deaths: 2,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "UK",
      cases: 321,
      todayCases: 43,
      deaths: 5,
      todayDeaths: 2,
      recovered: 18,
      critical: 0
    },
    {
      country: "Netherlands",
      cases: 321,
      todayCases: 56,
      deaths: 4,
      todayDeaths: 1,
      recovered: 0,
      critical: 1
    },
    {
      country: "Sweden",
      cases: 260,
      todayCases: 57,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Belgium",
      cases: 239,
      todayCases: 39,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 1
    },
    {
      country: "Norway",
      cases: 224,
      todayCases: 48,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Singapore",
      cases: 160,
      todayCases: 10,
      deaths: 0,
      todayDeaths: 0,
      recovered: 93,
      critical: 10
    },
    {
      country: "Austria",
      cases: 131,
      todayCases: 27,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 1
    },
    {
      country: "Malaysia",
      cases: 117,
      todayCases: 18,
      deaths: 0,
      todayDeaths: 0,
      recovered: 24,
      critical: 2
    },
    {
      country: "Hong Kong",
      cases: 115,
      todayCases: 0,
      deaths: 3,
      todayDeaths: 0,
      recovered: 59,
      critical: 6
    },
    {
      country: "Bahrain",
      cases: 109,
      todayCases: 24,
      deaths: 0,
      todayDeaths: 0,
      recovered: 22,
      critical: 0
    },
    {
      country: "Australia",
      cases: 93,
      todayCases: 10,
      deaths: 3,
      todayDeaths: 0,
      recovered: 22,
      critical: 1
    },
    {
      country: "Denmark",
      cases: 90,
      todayCases: 55,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Greece",
      cases: 84,
      todayCases: 11,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Canada",
      cases: 77,
      todayCases: 11,
      deaths: 1,
      todayDeaths: 1,
      recovered: 8,
      critical: 1
    },
    {
      country: "Iraq",
      cases: 71,
      todayCases: 6,
      deaths: 7,
      todayDeaths: 1,
      recovered: 3,
      critical: 0
    },
    {
      country: "Iceland",
      cases: 65,
      todayCases: 7,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Kuwait",
      cases: 65,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 3
    },
    {
      country: "UAE",
      cases: 59,
      todayCases: 14,
      deaths: 0,
      todayDeaths: 0,
      recovered: 12,
      critical: 2
    },
    {
      country: "Egypt",
      cases: 55,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "San Marino",
      cases: 51,
      todayCases: 14,
      deaths: 2,
      todayDeaths: 1,
      recovered: 0,
      critical: 5
    },
    {
      country: "Thailand",
      cases: 50,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 33,
      critical: 1
    },
    {
      country: "Israel",
      cases: 50,
      todayCases: 11,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 1
    },
    {
      country: "India",
      cases: 47,
      todayCases: 7,
      deaths: 0,
      todayDeaths: 0,
      recovered: 4,
      critical: 0
    },
    {
      country: "Taiwan",
      cases: 45,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 15,
      critical: 0
    },
    {
      country: "Lebanon",
      cases: 41,
      todayCases: 9,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 3
    },
    {
      country: "Portugal",
      cases: 39,
      todayCases: 9,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Czechia",
      cases: 38,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Finland",
      cases: 33,
      todayCases: 8,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Vietnam",
      cases: 31,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 16,
      critical: 0
    },
    {
      country: "Brazil",
      cases: 25,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Palestine",
      cases: 25,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Philippines",
      cases: 24,
      todayCases: 14,
      deaths: 1,
      todayDeaths: 0,
      recovered: 2,
      critical: 1
    },
    {
      country: "Ireland",
      cases: 24,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Slovenia",
      cases: 23,
      todayCases: 7,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Algeria",
      cases: 20,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Russia",
      cases: 20,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Indonesia",
      cases: 19,
      todayCases: 13,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Oman",
      cases: 18,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 9,
      critical: 0
    },
    {
      country: "Qatar",
      cases: 18,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Romania",
      cases: 17,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 5,
      critical: 0
    },
    {
      country: "Poland",
      cases: 17,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 2
    },
    {
      country: "Pakistan",
      cases: 16,
      todayCases: 9,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Ecuador",
      cases: 15,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Georgia",
      cases: 15,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Saudi Arabia",
      cases: 15,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Croatia",
      cases: 13,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Chile",
      cases: 13,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Argentina",
      cases: 12,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Macao",
      cases: 10,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 10,
      critical: 0
    },
    {
      country: "Estonia",
      cases: 10,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Azerbaijan",
      cases: 9,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Costa Rica",
      cases: 9,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Hungary",
      cases: 9,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Peru",
      cases: 9,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Mexico",
      cases: 7,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 1
    },
    {
      country: "Slovakia",
      cases: 7,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "South Africa",
      cases: 7,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Belarus",
      cases: 6,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Latvia",
      cases: 6,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Dominican Republic",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Luxembourg",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "New Zealand",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Tunisia",
      cases: 5,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bosnia and Herzegovina",
      cases: 5,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "French Guiana",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Afghanistan",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "North Macedonia",
      cases: 4,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Senegal",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Bulgaria",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Maldives",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Malta",
      cases: 4,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bangladesh",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Colombia",
      cases: 3,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cambodia",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Morocco",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Nigeria",
      cases: 2,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Albania",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cameroon",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cyprus",
      cases: 2,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Faeroe Islands",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Martinique",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Saint Martin",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Serbia",
      cases: 2,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Andorra",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Armenia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Jordan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Lithuania",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Monaco",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Nepal",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Sri Lanka",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Ukraine",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bhutan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Brunei",
      cases: 1,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Channel Islands",
      cases: 1,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Gibraltar",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Vatican City",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Liechtenstein",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Moldova",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Paraguay",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "St. Barth",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Togo",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    }
  ],
  [
    {
      date: "March 8, 2020",
      country: "China",
      cases: 80652,
      todayCases: 100,
      deaths: 3078,
      todayDeaths: 28,
      recovered: 55521,
      critical: 5489
    },
    {
      country: "S. Korea",
      cases: 7041,
      todayCases: 448,
      deaths: 48,
      todayDeaths: 5,
      recovered: 118,
      critical: 36
    },
    {
      country: "Italy",
      cases: 5883,
      todayCases: 1247,
      deaths: 233,
      todayDeaths: 36,
      recovered: 589,
      critical: 567
    },
    {
      country: "Iran",
      cases: 5823,
      todayCases: 1076,
      deaths: 145,
      todayDeaths: 21,
      recovered: 1669,
      critical: 0
    },
    {
      country: "France",
      cases: 949,
      todayCases: 296,
      deaths: 16,
      todayDeaths: 7,
      recovered: 12,
      critical: 21
    },
    {
      country: "Germany",
      cases: 800,
      todayCases: 130,
      deaths: 0,
      todayDeaths: 0,
      recovered: 18,
      critical: 9
    },
    {
      country: "Spain",
      cases: 503,
      todayCases: 102,
      deaths: 10,
      todayDeaths: 2,
      recovered: 30,
      critical: 9
    },
    {
      country: "Japan",
      cases: 461,
      todayCases: 41,
      deaths: 6,
      todayDeaths: 0,
      recovered: 76,
      critical: 28
    },
    {
      country: "USA",
      cases: 395,
      todayCases: 76,
      deaths: 19,
      todayDeaths: 4,
      recovered: 15,
      critical: 8
    },
    {
      country: "Switzerland",
      cases: 268,
      todayCases: 54,
      deaths: 1,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "UK",
      cases: 209,
      todayCases: 45,
      deaths: 2,
      todayDeaths: 0,
      recovered: 18,
      critical: 0
    },
    {
      country: "Netherlands",
      cases: 188,
      todayCases: 60,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Belgium",
      cases: 169,
      todayCases: 60,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 1
    },
    {
      country: "Sweden",
      cases: 161,
      todayCases: 24,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Norway",
      cases: 156,
      todayCases: 29,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Singapore",
      cases: 138,
      todayCases: 8,
      deaths: 0,
      todayDeaths: 0,
      recovered: 90,
      critical: 8
    },
    {
      country: "Hong Kong",
      cases: 108,
      todayCases: 0,
      deaths: 2,
      todayDeaths: 0,
      recovered: 51,
      critical: 6
    },
    {
      country: "Malaysia",
      cases: 93,
      todayCases: 10,
      deaths: 0,
      todayDeaths: 0,
      recovered: 23,
      critical: 0
    },
    {
      country: "Bahrain",
      cases: 85,
      todayCases: 25,
      deaths: 0,
      todayDeaths: 0,
      recovered: 6,
      critical: 0
    },
    {
      country: "Austria",
      cases: 81,
      todayCases: 15,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 1
    },
    {
      country: "Greece",
      cases: 66,
      todayCases: 21,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Australia",
      cases: 64,
      todayCases: 1,
      deaths: 2,
      todayDeaths: 0,
      recovered: 22,
      critical: 1
    },
    {
      country: "Kuwait",
      cases: 61,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Canada",
      cases: 60,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 8,
      critical: 1
    },
    {
      country: "Iraq",
      cases: 54,
      todayCases: 8,
      deaths: 4,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Thailand",
      cases: 50,
      todayCases: 2,
      deaths: 1,
      todayDeaths: 0,
      recovered: 31,
      critical: 1
    },
    {
      country: "Iceland",
      cases: 50,
      todayCases: 5,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Egypt",
      cases: 48,
      todayCases: 33,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Taiwan",
      cases: 45,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 15,
      critical: 0
    },
    {
      country: "UAE",
      cases: 45,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 7,
      critical: 2
    },
    {
      country: "India",
      cases: 34,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Lebanon",
      cases: 28,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 3
    },
    {
      country: "Denmark",
      cases: 27,
      todayCases: 6,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "San Marino",
      cases: 23,
      todayCases: 0,
      deaths: 1,
      todayDeaths: 0,
      recovered: 0,
      critical: 4
    },
    {
      country: "Czechia",
      cases: 21,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Israel",
      cases: 21,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 0
    },
    {
      country: "Portugal",
      cases: 20,
      todayCases: 7,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Vietnam",
      cases: 20,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 16,
      critical: 0
    },
    {
      country: "Algeria",
      cases: 19,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Finland",
      cases: 19,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Ireland",
      cases: 19,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Palestine",
      cases: 19,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Oman",
      cases: 16,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 0
    },
    {
      country: "Brazil",
      cases: 14,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Ecuador",
      cases: 14,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Russia",
      cases: 14,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 2,
      critical: 0
    },
    {
      country: "Georgia",
      cases: 13,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Romania",
      cases: 13,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 3,
      critical: 0
    },
    {
      country: "Croatia",
      cases: 12,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Qatar",
      cases: 12,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Slovenia",
      cases: 12,
      todayCases: 4,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Macao",
      cases: 10,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 10,
      critical: 0
    },
    {
      country: "Estonia",
      cases: 10,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Azerbaijan",
      cases: 9,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Argentina",
      cases: 8,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Saudi Arabia",
      cases: 7,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Philippines",
      cases: 6,
      todayCases: 1,
      deaths: 1,
      todayDeaths: 0,
      recovered: 2,
      critical: 1
    },
    {
      country: "Belarus",
      cases: 6,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Mexico",
      cases: 6,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Pakistan",
      cases: 6,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Poland",
      cases: 6,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "New Zealand",
      cases: 5,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Chile",
      cases: 5,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Hungary",
      cases: 5,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Afghanistan",
      cases: 4,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Indonesia",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Senegal",
      cases: 4,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Luxembourg",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "North Macedonia",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bosnia and Herzegovina",
      cases: 3,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Malta",
      cases: 3,
      todayCases: 3,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Slovakia",
      cases: 3,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Cambodia",
      cases: 2,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Dominican Republic",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Morocco",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Cameroon",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Faeroe Islands",
      cases: 2,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Maldives",
      cases: 2,
      todayCases: 2,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "South Africa",
      cases: 2,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Andorra",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Armenia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Jordan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Latvia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Lithuania",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Monaco",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Nepal",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Nigeria",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Sri Lanka",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 1,
      critical: 0
    },
    {
      country: "Tunisia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Ukraine",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Bhutan",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Colombia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Costa Rica",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Gibraltar",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 1
    },
    {
      country: "Vatican City",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Liechtenstein",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Paraguay",
      cases: 1,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Peru",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    {
      country: "Serbia",
      cases: 1,
      todayCases: 0,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    }
  ],
  [
    {
      date: "March 7, 2020",
      country: "China",
      cases: 80813,
      deaths: 3073,
      recovered: 54480
    },
    {
      country: "S. Korea",
      cases: 6767,
      deaths: 44,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 4747,
      deaths: 124,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 4636,
      deaths: 197,
      recovered: 0
    },
    {
      country: "Germany",
      cases: 639,
      deaths: 0,
      recovered: 0
    },
    {
      country: "France",
      cases: 613,
      deaths: 9,
      recovered: 0
    },
    {
      country: "Japan",
      cases: 408,
      deaths: 6,
      recovered: 0
    },
    {
      country: "USA",
      cases: 213,
      deaths: 11,
      recovered: 0
    }
  ],
  [
    {
      date: "March 6, 2020",
      country: "China",
      cases: 80500,
      deaths: 3045,
      recovered: 53950
    },
    {
      country: "S. Korea",
      cases: 6284,
      deaths: 42,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 3858,
      deaths: 148,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 3513,
      deaths: 107,
      recovered: 0
    },
    {
      country: "Germany",
      cases: 534,
      deaths: 0,
      recovered: 0
    },
    {
      country: "France",
      cases: 420,
      deaths: 6,
      recovered: 0
    },
    {
      country: "USA",
      cases: 148,
      deaths: 10,
      recovered: 0
    }
  ],
  [
    {
      date: "March 5, 2020",
      country: "China",
      cases: 80400,
      deaths: 3015,
      recovered: 53440
    },
    {
      country: "S. Korea",
      cases: 5766,
      deaths: 35,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 3089,
      deaths: 107,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 2922,
      deaths: 92,
      recovered: 0
    },
    {
      country: "Germany",
      cases: 262,
      deaths: 0,
      recovered: 0
    },
    {
      country: "France",
      cases: 282,
      deaths: 6,
      recovered: 0
    },
    {
      country: "USA",
      cases: 129,
      deaths: 9,
      recovered: 0
    }
  ],
  [
    {
      date: "March 4, 2020",
      country: "China",
      cases: 80300,
      deaths: 2984,
      recovered: 52985
    },
    {
      country: "S. Korea",
      cases: 5328,
      deaths: 32,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 2502,
      deaths: 80,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 2336,
      deaths: 77,
      recovered: 0
    }
  ],
  [
    {
      date: "March 3, 2020",
      country: "China",
      cases: 80200,
      deaths: 2946,
      recovered: 50944
    },
    {
      country: "S. Korea",
      cases: 4812,
      deaths: 28,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 2036,
      deaths: 52,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 1501,
      deaths: 66,
      recovered: 0
    }
  ],
  [
    {
      date: "March 2, 2020",
      country: "China",
      cases: 80000,
      deaths: 2915,
      recovered: 48108
    },
    {
      country: "S. Korea",
      cases: 4212,
      deaths: 22,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 1689,
      deaths: 35,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 978,
      deaths: 54,
      recovered: 0
    }
  ],
  [
    {
      date: "March 1, 2020",
      country: "China",
      cases: 79800,
      deaths: 2873,
      recovered: 45122
    },
    {
      country: "S. Korea",
      cases: 3736,
      deaths: 18,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 1128,
      deaths: 29,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 593,
      deaths: 43,
      recovered: 0
    }
  ],
  [
    {
      date: "February 29, 2020",
      country: "China",
      cases: 79300,
      deaths: 2838,
      recovered: 42330
    },
    {
      country: "S. Korea",
      cases: 3150,
      deaths: 17,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 888,
      deaths: 21,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 388,
      deaths: 34,
      recovered: 0
    }
  ],
  [
    {
      date: "February 28, 2020",
      country: "China",
      cases: 78800,
      deaths: 2791,
      recovered: 39430
    },
    {
      country: "S. Korea",
      cases: 2337,
      deaths: 13,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 650,
      deaths: 17,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 245,
      deaths: 26,
      recovered: 0
    }
  ],
  [
    {
      date: "February 27, 2020",
      country: "China",
      cases: 78500,
      deaths: 2747,
      recovered: 36520
    },
    {
      country: "S. Korea",
      cases: 1766,
      deaths: 13,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 400,
      deaths: 12,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 141,
      deaths: 22,
      recovered: 0
    }
  ],
  [
    {
      date: "February 26, 2020",
      country: "China",
      cases: 78100,
      deaths: 2718,
      recovered: 32805
    },
    {
      country: "S. Korea",
      cases: 1261,
      deaths: 12,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 322,
      deaths: 11,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 95,
      deaths: 15,
      recovered: 0
    }
  ],
  [
    {
      date: "February 25, 2020",
      country: "China",
      cases: 77700,
      deaths: 2666,
      recovered: 30051
    },
    {
      country: "S. Korea",
      cases: 977,
      deaths: 10,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 229,
      deaths: 6,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 61,
      deaths: 12,
      recovered: 0
    }
  ],
  [
    {
      date: "February 24, 2020",
      country: "China",
      cases: 77200,
      deaths: 2595,
      recovered: 27446
    },
    {
      country: "S. Korea",
      cases: 763,
      deaths: 7,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 124,
      deaths: 2,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 43,
      deaths: 8,
      recovered: 0
    }
  ],
  [
    {
      date: "February 23, 2020",
      country: "China",
      cases: 76900,
      deaths: 2445,
      recovered: 24991
    },
    {
      country: "S. Korea",
      cases: 602,
      deaths: 5,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 76,
      deaths: 2,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 28,
      deaths: 8,
      recovered: 0
    }
  ],
  [
    {
      date: "February 22, 2020",
      country: "China",
      cases: 76900,
      deaths: 2348,
      recovered: 22650
    },
    {
      country: "S. Korea",
      cases: 346,
      deaths: 2,
      recovered: 0
    },
    {
      country: "Italy",
      cases: 9,
      deaths: 0,
      recovered: 0
    },
    {
      country: "Iran",
      cases: 18,
      deaths: 4,
      recovered: 0
    }
  ],
  [
    {
      date: "February 21, 2020",
      country: "China",
      cases: 75500,
      deaths: 2239,
      recovered: 20895
    }
  ],
  [
    {
      date: "February 20, 2020",
      country: "China",
      cases: 75000,
      deaths: 2121,
      recovered: 18524
    }
  ],
  [
    {
      date: "February 19, 2020",
      country: "China",
      cases: 74500,
      deaths: 2006,
      recovered: 16357
    }
  ],
  [
    {
      date: "February 18, 2020",
      country: "China",
      cases: 74100,
      deaths: 1870,
      recovered: 14553
    }
  ],
  [
    {
      date: "February 17, 2020",
      country: "China",
      cases: 72400,
      deaths: 1772,
      recovered: 12712
    }
  ],
  [
    {
      date: "February 16, 2020",
      country: "China",
      cases: 70400,
      deaths: 1666,
      recovered: 10973
    }
  ],
  [
    {
      date: "February 15, 2020",
      country: "China",
      cases: 68300,
      deaths: 1524,
      recovered: 9538
    }
  ],
  [
    {
      date: "February 14, 2020",
      country: "China",
      cases: 66300,
      deaths: 1381,
      recovered: 8916
    }
  ],
  [
    {
      date: "February 13, 2020",
      country: "China",
      cases: 59800,
      deaths: 1368,
      recovered: 6808
    }
  ],
  [
    {
      date: "February 12, 2020",
      country: "China",
      cases: 44700,
      deaths: 1114,
      recovered: 5987
    }
  ],
  [
    {
      date: "February 11, 2020",
      country: "China",
      cases: 44300,
      deaths: 1017,
      recovered: 4803
    }
  ],
  [
    {
      date: "February 10, 2020",
      country: "China",
      cases: 42000,
      deaths: 909,
      recovered: 4043
    }
  ],
  [
    {
      date: "February 9, 2020",
      country: "China",
      cases: 39800,
      deaths: 812,
      recovered: 3323
    }
  ],
  [
    {
      date: "February 8, 2020",
      country: "China",
      cases: 36800,
      deaths: 723,
      recovered: 2684
    }
  ],
  [
    {
      date: "February 7, 2020",
      country: "China",
      cases: 34100,
      deaths: 637,
      recovered: 2083
    }
  ],
  [
    {
      date: "February 6, 2020",
      country: "China",
      cases: 30600,
      deaths: 564,
      recovered: 1562
    }
  ],
  [
    {
      date: "February 5, 2020",
      country: "China",
      cases: 27400,
      deaths: 491,
      recovered: 1173
    }
  ],
  [
    {
      date: "February 4, 2020",
      country: "China",
      cases: 23700,
      deaths: 425,
      recovered: 907
    }
  ],
  [
    {
      date: "February 3, 2020",
      country: "China",
      cases: 19700,
      deaths: 361,
      recovered: 643
    }
  ],
  [
    {
      date: "February 2, 2020",
      country: "China",
      cases: 17200,
      deaths: 304,
      recovered: 504
    }
  ],
  [
    {
      date: "February 1, 2020",
      country: "China",
      cases: 14300,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "January 31, 2020",
      country: "China",
      cases: 11200,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "January 30, 2020",
      country: "China",
      cases: 9700,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "January 29, 2020",
      country: "China",
      cases: 7700,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "January 28, 2020",
      country: "China",
      cases: 6000,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "January 27, 2020",
      country: "China",
      cases: 4400,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "January 26, 2020",
      country: "China",
      cases: 2700,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "January 25, 2020",
      country: "China",
      cases: 2000,
      deaths: 56,
      recovered: 0
    }
  ],
  [
    {
      date: "January 24, 2020",
      country: "China",
      cases: 916,
      deaths: 41,
      recovered: 0
    }
  ],
  [
    {
      date: "January 23, 2020",
      country: "China",
      cases: 239,
      deaths: 25,
      recovered: 0
    }
  ],
  [
    {
      date: "January 22, 2020",
      country: "China",
      cases: 0,
      deaths: 17,
      recovered: 0
    }
  ],
  [
    {
      date: "January 21, 2020",
      country: "China",
      cases: 0,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "January 20, 2020",
      country: "China",
      cases: 0,
      deaths: 0,
      recovered: 0
    }
  ],
  [
    {
      date: "December 31, 2019",
      country: "China",
      cases: 0,
      deaths: 0,
      recovered: 0
    }
  ]
]
let currentDataSet = data[0]

let totalCases = 0
let totalRecoveries = 0
let totalDeaths = 0

currentDataSet.forEach(x => {
  totalCases += x.cases
  totalRecoveries += x.recovered
  totalDeaths += x.deaths
})

const date = new Date()
const month = date.toLocaleString("default", { month: "long" })

const viewDate = document.createElement("p")
viewDate.innerText = `${month} ${date.getDate()}, ${date.getFullYear()}`
document.getElementById("date").appendChild(viewDate)

const worldwidecases = document.createElement("span")
worldwidecases.innerText = `Worldwide cases: ${totalCases}`
document.getElementById("totalCases").appendChild(worldwidecases)

const worldwideRecoveries = document.createElement("span")
worldwideRecoveries.innerText = `Recoveries: ${totalRecoveries}`
document.getElementById("totalRecoveries").appendChild(worldwideRecoveries)

const worldwideDeaths = document.createElement("span")
worldwideDeaths.innerText = `Deaths: ${totalDeaths}`
document.getElementById("totalDeaths").appendChild(worldwideDeaths)

let zoomSlider = document.getElementById("zoomSlider")
let dateSlider = document.getElementById("dateSlider")

// slider
let actuator = Math.floor((1 / (zoomSlider.value * 5)) * totalCases)

let svgHeight = (1 / actuator) * 260000

drawVisualization()

// Zoom Slider
zoomSlider.oninput = function() {
  console.log("Z", zoomSlider.value)
  console.log("D", dateSlider.value)
  console.log("T", this.value)
  console.log("!", 1 / actuator)

  actuator = Math.floor((1 / (this.value * 5)) * totalCases) + 0.1

  d3.select("svg").remove()

  svgHeight = (1 / actuator) * totalCases * 2
  drawVisualization()
  window.scrollTo(0, document.body.scrollHeight)
}

// Date Slider
dateSlider.oninput = function() {
  console.log("Z", zoomSlider.value)
  console.log("D", dateSlider.value)
  let maxRangeValue = 150 // (from line 83 in index.html)
  let divisor = (maxRangeValue + 1) / data.length
  let actuatedIndex = Math.floor(this.value / divisor)

  currentDataSet = data[actuatedIndex]

  viewDate.innerText = data[actuatedIndex][0].date
  document.getElementById("date").appendChild(viewDate)

  totalCases = 0
  totalRecoveries = 0
  totalDeaths = 0

  currentDataSet.forEach(x => {
    totalCases += x.cases
    totalRecoveries += x.recovered
    totalDeaths += x.deaths
  })

  worldwidecases.innerText = `Worldwide cases: ${totalCases}`
  document.getElementById("totalCases").appendChild(worldwidecases)

  worldwideRecoveries.innerText = `Recoveries: ${totalRecoveries}`
  document.getElementById("totalRecoveries").appendChild(worldwideRecoveries)

  worldwideDeaths.innerText = `Deaths: ${totalDeaths}`
  document.getElementById("totalDeaths").appendChild(worldwideDeaths)

  document.getElementById("date").appendChild(viewDate)

  d3.select("svg").remove()
  svgHeight = (1 / actuator) * totalCases * 2.1
  drawVisualization()
  window.scrollTo(0, document.body.scrollHeight)
}

function drawVisualization() {
  if (svgHeight < 400) {
    svgHeight = 400
  }
  let svg = d3
    .select("#chart-area")
    .append("svg")
    .attr("width", vw)
    .attr("height", svgHeight)

  let deathData = currentDataSet.map(x => x.deaths / actuator)
  let casesData = currentDataSet.map(x => x.cases / actuator)
  let recoveredData = currentDataSet.map(x => x.recovered / actuator)
  let nameData = currentDataSet.map(x => x.country)

  let deathCircles = svg.selectAll("circle").data(deathData)
  let casesCircles = svg.selectAll("circle").data(casesData)
  let recoveredCircles = svg.selectAll("circle").data(recoveredData)
  let nameLabels = svg.selectAll("text").data(nameData)

  let cum = 0
  let casesCumData = []
  let radData = []
  casesCircles
    .enter()
    .append("circle")
    .attr("cx", 0)
    .attr("cy", (d, i) => {
      cum += d + d
      casesCumData.push(cum - d)
      radData.push(d)
      return cum - d
    })
    .attr("r", function(d) {
      return d
    })
    .attr("fill", "steelblue")

  recoveredCircles
    .enter()
    .append("circle")
    .attr("cx", 0)
    .attr("cy", (d, i) => {
      return casesCumData[i]
    })
    .attr("r", function(d) {
      return d
    })
    .attr("fill", "rgb(255, 196, 0)")

  deathCircles
    .enter()
    .append("circle")
    .attr("cx", 0)
    .attr("cy", (d, i) => {
      return casesCumData[i]
    })
    .attr("r", function(d) {
      return d
    })
    .attr("fill", "tomato")

  // Country labels
  nameLabels
    .enter()
    .append("text")
    .attr("x", (d, i) => {
      return radData[i] + 2
    })
    .attr("y", (d, i) => {
      if (i < 4) {
        return casesCumData[i] + radData[i] / (16 - i)
      } else {
        return casesCumData[i] + radData[i] / 2
      }
    })
    .text(function(d, i) {
      return d
    })
    .attr("font-family", countryNameFont)
    .attr("font-size", (d, i) => {
      if (i === 0) {
        return radData[i] / 4.2
      } else if (i < 4) {
        return radData[i] / 2.5
      } else {
        return radData[i] * 1.3
      }
    })
    .attr("dominant-baseline", "ideographic")
    .attr("dy", (d, i) => {
      if (isSafari) {
        if (i === 0) {
          return radData[i] * -0.05
        } else if (i < 4) {
          return radData[i] * -0.05
        } else {
          return radData[i] * -0.6
        }
      }
    })

  // Cases, recoveries and deaths
  nameLabels
    .enter()
    .append("text")
    .text(function(d, i) {
      return (
        currentDataSet[i].cases +
        " cases, " +
        currentDataSet[i].recovered +
        " recoveries, " +
        currentDataSet[i].deaths +
        " deaths"
      )
    })
    .attr("font-family", countryDataFont)
    .attr("font-size", (d, i) => {
      if (i === 0) {
        return radData[i] / 24
      } else if (i < 4) {
        return radData[i] / 4
      } else {
        return radData[i] / 1.5
      }
    })
    .attr("x", (d, i) => {
      if (i === 0) {
        return radData[i] + 4
      } else {
        return radData[i] + 2
      }
    })
    .attr("y", (d, i) => {
      if (i === 0) {
        return casesCumData[i] + 5
      } else if (i < 4) {
        return casesCumData[i] + 4
      } else {
        return casesCumData[i] + radData[i] / 4
      }
    })
    .attr("dominant-baseline", "hanging")
    .attr("dy", (d, i) => {
      if (isSafari && i === 0) {
        return radData[i] * 0.1
      } else if (i < 4) {
        return radData[i] * 0.1
      } else {
        return radData[i] * 0.05
      }
    })
}
