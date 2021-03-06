let myData = JSON.parse([
  {
    country: "China",
    cases: 81008,
    deaths: 3255,
    recovered: 71740
  },
  {
    country: "Italy",
    cases: 53578,
    deaths: 4825,
    recovered: 6072
  },
  {
    country: "USA",
    cases: 25896,
    deaths: 316,
    recovered: 176
  },
  {
    country: "Spain",
    cases: 25496,
    deaths: 1378,
    recovered: 2125
  },
  {
    country: "Germany",
    cases: 22364,
    deaths: 84,
    recovered: 209
  },
  {
    country: "Iran",
    cases: 20610,
    deaths: 1556,
    recovered: 7635
  },
  {
    country: "France",
    cases: 14459,
    deaths: 562,
    recovered: 1587
  },
  {
    country: "S. Korea",
    cases: 8799,
    deaths: 102,
    recovered: 2612
  },
  {
    country: "Switzerland",
    cases: 6863,
    deaths: 80,
    recovered: 131
  },
  {
    country: "UK",
    cases: 5018,
    deaths: 233,
    recovered: 93
  },
  {
    country: "Netherlands",
    cases: 3631,
    deaths: 136,
    recovered: 2
  },
  {
    country: "Austria",
    cases: 2992,
    deaths: 8,
    recovered: 9
  },
  {
    country: "Belgium",
    cases: 2815,
    deaths: 67,
    recovered: 263
  },
  {
    country: "Norway",
    cases: 2164,
    deaths: 7,
    recovered: 6
  },
  {
    country: "Sweden",
    cases: 1770,
    deaths: 20,
    recovered: 16
  },
  {
    country: "Canada",
    cases: 1328,
    deaths: 19,
    recovered: 14
  },
  {
    country: "Denmark",
    cases: 1326,
    deaths: 13,
    recovered: 1
  },
  {
    country: "Portugal",
    cases: 1280,
    deaths: 12,
    recovered: 5
  },
  {
    country: "Malaysia",
    cases: 1183,
    deaths: 8,
    recovered: 114
  },
  {
    country: "Brazil",
    cases: 1178,
    deaths: 18,
    recovered: 2
  },
  {
    country: "Australia",
    cases: 1072,
    deaths: 7,
    recovered: 46
  },
  {
    country: "Japan",
    cases: 1054,
    deaths: 36,
    recovered: 215
  },
  {
    country: "Czechia",
    cases: 995,
    deaths: 0,
    recovered: 6
  },
  {
    country: "Turkey",
    cases: 947,
    deaths: 21,
    recovered: 0
  },
  {
    country: "Israel",
    cases: 883,
    deaths: 1,
    recovered: 36
  },
  {
    country: "Ireland",
    cases: 785,
    deaths: 3,
    recovered: 5
  },
  {
    country: "Diamond Princess",
    cases: 712,
    deaths: 8,
    recovered: 567
  },
  {
    country: "Luxembourg",
    cases: 670,
    deaths: 8,
    recovered: 6
  },
  {
    country: "Pakistan",
    cases: 645,
    deaths: 3,
    recovered: 13
  },
  {
    country: "Chile",
    cases: 537,
    deaths: 1,
    recovered: 8
  },
  {
    country: "Poland",
    cases: 536,
    deaths: 5,
    recovered: 13
  },
  {
    country: "Ecuador",
    cases: 532,
    deaths: 7,
    recovered: 3
  },
  {
    country: "Greece",
    cases: 530,
    deaths: 13,
    recovered: 19
  },
  {
    country: "Finland",
    cases: 523,
    deaths: 1,
    recovered: 10
  },
  {
    country: "Qatar",
    cases: 481,
    deaths: 0,
    recovered: 27
  },
  {
    country: "Iceland",
    cases: 473,
    deaths: 1,
    recovered: 5
  },
  {
    country: "Indonesia",
    cases: 450,
    deaths: 38,
    recovered: 20
  },
  {
    country: "Singapore",
    cases: 432,
    deaths: 2,
    recovered: 140
  },
  {
    country: "Thailand",
    cases: 411,
    deaths: 1,
    recovered: 44
  },
  {
    country: "Saudi Arabia",
    cases: 392,
    deaths: 0,
    recovered: 16
  },
  {
    country: "Slovenia",
    cases: 383,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Romania",
    cases: 367,
    deaths: 0,
    recovered: 52
  },
  {
    country: "India",
    cases: 332,
    deaths: 5,
    recovered: 23
  },
  {
    country: "Peru",
    cases: 318,
    deaths: 5,
    recovered: 1
  },
  {
    country: "Bahrain",
    cases: 310,
    deaths: 1,
    recovered: 125
  },
  {
    country: "Philippines",
    cases: 307,
    deaths: 19,
    recovered: 13
  },
  {
    country: "Russia",
    cases: 306,
    deaths: 1,
    recovered: 16
  },
  {
    country: "Estonia",
    cases: 306,
    deaths: 0,
    recovered: 2
  },
  {
    country: "Egypt",
    cases: 294,
    deaths: 10,
    recovered: 42
  },
  {
    country: "Hong Kong",
    cases: 273,
    deaths: 4,
    recovered: 98
  },
  {
    country: "Panama",
    cases: 245,
    deaths: 3,
    recovered: 1
  },
  {
    country: "South Africa",
    cases: 240,
    deaths: 0,
    recovered: 2
  },
  {
    country: "Lebanon",
    cases: 230,
    deaths: 4,
    recovered: 8
  },
  {
    country: "Iraq",
    cases: 214,
    deaths: 17,
    recovered: 51
  },
  {
    country: "Croatia",
    cases: 206,
    deaths: 1,
    recovered: 5
  },
  {
    country: "Mexico",
    cases: 203,
    deaths: 2,
    recovered: 4
  },
  {
    country: "Colombia",
    cases: 196,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Slovakia",
    cases: 178,
    deaths: 0,
    recovered: 7
  },
  {
    country: "Kuwait",
    cases: 176,
    deaths: 0,
    recovered: 27
  },
  {
    country: "Serbia",
    cases: 171,
    deaths: 1,
    recovered: 2
  },
  {
    country: "Bulgaria",
    cases: 163,
    deaths: 3,
    recovered: 3
  },
  {
    country: "San Marino",
    cases: 160,
    deaths: 20,
    recovered: 4
  },
  {
    country: "Armenia",
    cases: 160,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Argentina",
    cases: 158,
    deaths: 4,
    recovered: 3
  },
  {
    country: "Taiwan",
    cases: 153,
    deaths: 2,
    recovered: 28
  },
  {
    country: "UAE",
    cases: 153,
    deaths: 2,
    recovered: 38
  },
  {
    country: "Algeria",
    cases: 139,
    deaths: 15,
    recovered: 65
  },
  {
    country: "Latvia",
    cases: 124,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Costa Rica",
    cases: 117,
    deaths: 2,
    recovered: 2
  },
  {
    country: "Dominican Republic",
    cases: 112,
    deaths: 3,
    recovered: 0
  },
  {
    country: "Uruguay",
    cases: 110,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Hungary",
    cases: 103,
    deaths: 4,
    recovered: 7
  },
  {
    country: "Jordan",
    cases: 100,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Lithuania",
    cases: 99,
    deaths: 1,
    recovered: 1
  },
  {
    country: "Morocco",
    cases: 96,
    deaths: 3,
    recovered: 3
  },
  {
    country: "Vietnam",
    cases: 94,
    deaths: 0,
    recovered: 17
  },
  {
    country: "Bosnia and Herzegovina",
    cases: 93,
    deaths: 1,
    recovered: 2
  },
  {
    country: "Faeroe Islands",
    cases: 92,
    deaths: 0,
    recovered: 3
  },
  {
    country: "Andorra",
    cases: 88,
    deaths: 0,
    recovered: 1
  },
  {
    country: "North Macedonia",
    cases: 85,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Cyprus",
    cases: 84,
    deaths: 1,
    recovered: 3
  },
  {
    country: "Brunei",
    cases: 83,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Moldova",
    cases: 80,
    deaths: 1,
    recovered: 1
  },
  {
    country: "Sri Lanka",
    cases: 77,
    deaths: 0,
    recovered: 3
  },
  {
    country: "Albania",
    cases: 76,
    deaths: 2,
    recovered: 2
  },
  {
    country: "Belarus",
    cases: 76,
    deaths: 0,
    recovered: 15
  },
  {
    country: "Malta",
    cases: 73,
    deaths: 0,
    recovered: 2
  },
  {
    country: "Venezuela",
    cases: 70,
    deaths: 0,
    recovered: 15
  },
  {
    country: "Burkina Faso",
    cases: 64,
    deaths: 3,
    recovered: 5
  },
  {
    country: "Tunisia",
    cases: 60,
    deaths: 1,
    recovered: 1
  },
  {
    country: "Guadeloupe",
    cases: 56,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Senegal",
    cases: 56,
    deaths: 0,
    recovered: 5
  },
  {
    country: "Kazakhstan",
    cases: 54,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Azerbaijan",
    cases: 53,
    deaths: 1,
    recovered: 11
  },
  {
    country: "Cambodia",
    cases: 53,
    deaths: 0,
    recovered: 2
  },
  {
    country: "Palestine",
    cases: 53,
    deaths: 0,
    recovered: 17
  },
  {
    country: "New Zealand",
    cases: 52,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Oman",
    cases: 52,
    deaths: 0,
    recovered: 13
  },
  {
    country: "Georgia",
    cases: 49,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Trinidad and Tobago",
    cases: 49,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Ukraine",
    cases: 47,
    deaths: 3,
    recovered: 1
  },
  {
    country: "Réunion",
    cases: 47,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Uzbekistan",
    cases: 41,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Cameroon",
    cases: 40,
    deaths: 0,
    recovered: 2
  },
  {
    country: "Martinique",
    cases: 37,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Liechtenstein",
    cases: 37,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Channel Islands",
    cases: 32,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Bangladesh",
    cases: 24,
    deaths: 2,
    recovered: 3
  },
  {
    country: "Afghanistan",
    cases: 24,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Honduras",
    cases: 24,
    deaths: 0,
    recovered: 0
  },
  {
    country: "DRC",
    cases: 23,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Paraguay",
    cases: 22,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Nigeria",
    cases: 22,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Cuba",
    cases: 21,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Ghana",
    cases: 21,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Puerto Rico",
    cases: 21,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Jamaica",
    cases: 19,
    deaths: 1,
    recovered: 2
  },
  {
    country: "Bolivia",
    cases: 19,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Guyana",
    cases: 18,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Macao",
    cases: 18,
    deaths: 0,
    recovered: 10
  },
  {
    country: "Monaco",
    cases: 18,
    deaths: 0,
    recovered: 1
  },
  {
    country: "French Guiana",
    cases: 18,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Guatemala",
    cases: 17,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Rwanda",
    cases: 17,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Montenegro",
    cases: 16,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Togo",
    cases: 16,
    deaths: 0,
    recovered: 0
  },
  {
    country: "French Polynesia",
    cases: 15,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Guam",
    cases: 15,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Mauritius",
    cases: 14,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Barbados",
    cases: 14,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Ivory Coast",
    cases: 14,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Kyrgyzstan",
    cases: 14,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Maldives",
    cases: 13,
    deaths: 0,
    recovered: 3
  },
  {
    country: "Mayotte",
    cases: 11,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Gibraltar",
    cases: 10,
    deaths: 0,
    recovered: 2
  },
  {
    country: "Mongolia",
    cases: 10,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Ethiopia",
    cases: 9,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Kenya",
    cases: 7,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Seychelles",
    cases: 7,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Equatorial Guinea",
    cases: 6,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Tanzania",
    cases: 6,
    deaths: 0,
    recovered: 0
  },
  {
    country: "U.S. Virgin Islands",
    cases: 6,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Gabon",
    cases: 5,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Aruba",
    cases: 5,
    deaths: 0,
    recovered: 1
  },
  {
    country: "Saint Martin",
    cases: 5,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Suriname",
    cases: 5,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Bahamas",
    cases: 4,
    deaths: 0,
    recovered: 0
  },
  {
    country: "New Caledonia",
    cases: 4,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Cayman Islands",
    cases: 3,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Curaçao",
    cases: 3,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Cabo Verde",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "CAR",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Congo",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "El Salvador",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Liberia",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Madagascar",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Namibia",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "St. Barth",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Zimbabwe",
    cases: 3,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Sudan",
    cases: 2,
    deaths: 1,
    recovered: 0
  },
  {
    country: "Angola",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Benin",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Bermuda",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Bhutan",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Fiji",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Greenland",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Guinea",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Haiti",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Isle of Man",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Mauritania",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Nicaragua",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Saint Lucia",
    cases: 2,
    deaths: 0,
    recovered: 0
  },
  {
    country: "Zambia",
    cases: 2,
    deaths: 0,
    recovered: 0
  }
])

console.log(myData)
