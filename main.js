const countryNameFont = "sans-serif"
const countryDataFont = "verdana"

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

const date = new Date()
const month = date.toLocaleString("default", { month: "long" })
const day = date.getDate()
const year = date.getFullYear()

const todaysDate = `${month} ${day}, ${year}`

let data = [
  [
    {
      dateInfo: { month: "March", day: 23, year: 2020 },
      date: "March 23, 2020",
      country: "China",
      cases: 81093,
      deaths: 3270,
      recovered: 72703
    },
    { country: "Italy", cases: 59138, deaths: 5476, recovered: 7024 },
    { country: "USA", cases: 40747, deaths: 479, recovered: 187 },
    { country: "Spain", cases: 33089, deaths: 2206, recovered: 3355 },
    { country: "Germany", cases: 27558, deaths: 115, recovered: 422 },
    { country: "Iran", cases: 23049, deaths: 1812, recovered: 8376 },
    { country: "France", cases: 16689, deaths: 674, recovered: 2200 },
    { country: "S. Korea", cases: 8961, deaths: 111, recovered: 3166 },
    { country: "Switzerland", cases: 8547, deaths: 118, recovered: 131 },
    { country: "UK", cases: 5837, deaths: 335, recovered: 135 },
    { country: "Netherlands", cases: 4749, deaths: 213, recovered: 2 },
    { country: "Austria", cases: 4306, deaths: 21, recovered: 9 },
    { country: "Belgium", cases: 3743, deaths: 88, recovered: 401 },
    { country: "Norway", cases: 2547, deaths: 10, recovered: 6 },
    { country: "Portugal", cases: 2060, deaths: 23, recovered: 14 },
    { country: "Sweden", cases: 2046, deaths: 25, recovered: 16 },
    { country: "Australia", cases: 1717, deaths: 7, recovered: 88 },
    { country: "Brazil", cases: 1620, deaths: 25, recovered: 2 },
    { country: "Canada", cases: 1563, deaths: 21, recovered: 18 },
    { country: "Malaysia", cases: 1518, deaths: 14, recovered: 159 },
    { country: "Denmark", cases: 1450, deaths: 24, recovered: 1 },
    { country: "Israel", cases: 1238, deaths: 1, recovered: 37 },
    { country: "Turkey", cases: 1236, deaths: 30, recovered: 0 },
    { country: "Czechia", cases: 1165, deaths: 1, recovered: 6 },
    { country: "Japan", cases: 1101, deaths: 41, recovered: 235 },
    { country: "Ecuador", cases: 981, deaths: 18, recovered: 3 },
    { country: "Ireland", cases: 906, deaths: 4, recovered: 5 },
    { country: "Pakistan", cases: 873, deaths: 6, recovered: 13 },
    { country: "Luxembourg", cases: 798, deaths: 8, recovered: 6 },
    { country: "Chile", cases: 746, deaths: 2, recovered: 11 },
    { country: "Thailand", cases: 721, deaths: 1, recovered: 52 },
    { country: "Diamond Princess", cases: 712, deaths: 8, recovered: 567 },
    { country: "Finland", cases: 700, deaths: 1, recovered: 10 },
    { country: "Greece", cases: 695, deaths: 17, recovered: 19 },
    { country: "Poland", cases: 692, deaths: 8, recovered: 13 },
    { country: "Iceland", cases: 588, deaths: 1, recovered: 51 },
    { country: "Indonesia", cases: 579, deaths: 49, recovered: 30 },
    { country: "Romania", cases: 576, deaths: 5, recovered: 73 },
    { country: "Saudi Arabia", cases: 562, deaths: 0, recovered: 19 },
    { country: "Singapore", cases: 509, deaths: 2, recovered: 152 },
    { country: "Qatar", cases: 494, deaths: 0, recovered: 33 },
    { country: "India", cases: 467, deaths: 9, recovered: 34 },
    { country: "Philippines", cases: 462, deaths: 33, recovered: 18 },
    { country: "Slovenia", cases: 442, deaths: 3, recovered: 0 },
    { country: "Russia", cases: 438, deaths: 1, recovered: 17 },
    { country: "South Africa", cases: 402, deaths: 0, recovered: 4 },
    { country: "Peru", cases: 363, deaths: 5, recovered: 1 },
    { country: "Hong Kong", cases: 356, deaths: 4, recovered: 100 },
    { country: "Estonia", cases: 352, deaths: 0, recovered: 4 },
    { country: "Bahrain", cases: 339, deaths: 2, recovered: 160 },
    { country: "Egypt", cases: 327, deaths: 14, recovered: 56 },
    { country: "Mexico", cases: 316, deaths: 2, recovered: 4 },
    { country: "Croatia", cases: 315, deaths: 1, recovered: 5 },
    { country: "Panama", cases: 313, deaths: 3, recovered: 1 },
    { country: "Lebanon", cases: 267, deaths: 4, recovered: 8 },
    { country: "Iraq", cases: 266, deaths: 23, recovered: 62 },
    { country: "Argentina", cases: 266, deaths: 4, recovered: 27 },
    { country: "Serbia", cases: 249, deaths: 2, recovered: 3 },
    { country: "Dominican Republic", cases: 245, deaths: 3, recovered: 0 },
    { country: "Colombia", cases: 235, deaths: 3, recovered: 3 },
    { country: "Algeria", cases: 230, deaths: 17, recovered: 65 },
    { country: "Bulgaria", cases: 201, deaths: 3, recovered: 3 },
    { country: "UAE", cases: 198, deaths: 2, recovered: 41 },
    { country: "Taiwan", cases: 195, deaths: 2, recovered: 28 },
    { country: "Armenia", cases: 194, deaths: 0, recovered: 2 },
    { country: "Kuwait", cases: 189, deaths: 0, recovered: 30 },
    { country: "San Marino", cases: 187, deaths: 20, recovered: 4 },
    { country: "Slovakia", cases: 186, deaths: 0, recovered: 7 },
    { country: "Latvia", cases: 180, deaths: 0, recovered: 1 },
    { country: "Hungary", cases: 167, deaths: 7, recovered: 16 },
    { country: "Lithuania", cases: 160, deaths: 1, recovered: 1 },
    { country: "Uruguay", cases: 158, deaths: 0, recovered: 0 },
    { country: "North Macedonia", cases: 136, deaths: 2, recovered: 1 },
    { country: "Morocco", cases: 134, deaths: 4, recovered: 3 },
    { country: "Costa Rica", cases: 134, deaths: 2, recovered: 2 },
    { country: "Andorra", cases: 133, deaths: 1, recovered: 1 },
    { country: "Bosnia and Herzegovina", cases: 130, deaths: 1, recovered: 2 },
    { country: "Vietnam", cases: 123, deaths: 0, recovered: 17 },
    { country: "Faeroe Islands", cases: 118, deaths: 0, recovered: 14 },
    { country: "Cyprus", cases: 116, deaths: 1, recovered: 3 },
    { country: "Jordan", cases: 112, deaths: 0, recovered: 1 },
    { country: "Moldova", cases: 109, deaths: 1, recovered: 2 },
    { country: "Malta", cases: 107, deaths: 0, recovered: 2 },
    { country: "Albania", cases: 104, deaths: 4, recovered: 2 },
    { country: "New Zealand", cases: 102, deaths: 0, recovered: 0 },
    { country: "Burkina Faso", cases: 99, deaths: 4, recovered: 5 },
    { country: "Sri Lanka", cases: 94, deaths: 0, recovered: 3 },
    { country: "Brunei", cases: 91, deaths: 0, recovered: 2 },
    { country: "Tunisia", cases: 89, deaths: 3, recovered: 1 },
    { country: "Cambodia", cases: 86, deaths: 0, recovered: 2 },
    { country: "Belarus", cases: 81, deaths: 0, recovered: 22 },
    { country: "Venezuela", cases: 77, deaths: 0, recovered: 15 },
    { country: "Ukraine", cases: 73, deaths: 3, recovered: 1 },
    { country: "Azerbaijan", cases: 72, deaths: 1, recovered: 10 },
    { country: "Réunion", cases: 71, deaths: 0, recovered: 1 },
    { country: "Senegal", cases: 67, deaths: 0, recovered: 5 },
    { country: "Oman", cases: 66, deaths: 0, recovered: 17 },
    { country: "Kazakhstan", cases: 62, deaths: 0, recovered: 0 },
    { country: "Georgia", cases: 61, deaths: 0, recovered: 8 },
    { country: "Palestine", cases: 59, deaths: 0, recovered: 17 },
    { country: "Guadeloupe", cases: 58, deaths: 1, recovered: 0 },
    { country: "Cameroon", cases: 56, deaths: 0, recovered: 2 },
    { country: "Trinidad and Tobago", cases: 51, deaths: 0, recovered: 0 },
    { country: "Liechtenstein", cases: 46, deaths: 0, recovered: 0 },
    { country: "Uzbekistan", cases: 46, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 44, deaths: 1, recovered: 0 },
    { country: "Afghanistan", cases: 40, deaths: 1, recovered: 1 },
    { country: "DRC", cases: 36, deaths: 1, recovered: 0 },
    { country: "Nigeria", cases: 36, deaths: 1, recovered: 2 },
    { country: "Channel Islands", cases: 36, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 35, deaths: 1, recovered: 0 },
    { country: "Bangladesh", cases: 33, deaths: 3, recovered: 5 },
    { country: "Puerto Rico", cases: 31, deaths: 2, recovered: 1 },
    { country: "Guam", cases: 29, deaths: 1, recovered: 0 },
    { country: "Mauritius", cases: 28, deaths: 2, recovered: 0 },
    { country: "Bolivia", cases: 27, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 27, deaths: 0, recovered: 0 },
    { country: "Ivory Coast", cases: 25, deaths: 0, recovered: 2 },
    { country: "Ghana", cases: 24, deaths: 1, recovered: 0 },
    { country: "Macao", cases: 24, deaths: 0, recovered: 10 },
    { country: "Monaco", cases: 23, deaths: 0, recovered: 1 },
    { country: "Montenegro", cases: 22, deaths: 1, recovered: 0 },
    { country: "Paraguay", cases: 22, deaths: 1, recovered: 0 },
    { country: "Mayotte", cases: 21, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 20, deaths: 0, recovered: 6 },
    { country: "Guatemala", cases: 19, deaths: 1, recovered: 0 },
    { country: "Guyana", cases: 19, deaths: 1, recovered: 0 },
    { country: "Jamaica", cases: 19, deaths: 1, recovered: 2 },
    { country: "Rwanda", cases: 19, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 18, deaths: 0, recovered: 0 },
    { country: "Togo", cases: 18, deaths: 0, recovered: 0 },
    { country: "Barbados", cases: 17, deaths: 0, recovered: 0 },
    { country: "U.S. Virgin Islands", cases: 17, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 16, deaths: 0, recovered: 0 },
    { country: "Kyrgyzstan", cases: 16, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 15, deaths: 0, recovered: 5 },
    { country: "Isle of Man", cases: 13, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 5 },
    { country: "Madagascar", cases: 12, deaths: 0, recovered: 0 },
    { country: "Tanzania", cases: 12, deaths: 0, recovered: 0 },
    { country: "Ethiopia", cases: 11, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 10, deaths: 0, recovered: 0 },
    { country: "Aruba", cases: 9, deaths: 0, recovered: 1 },
    { country: "Equatorial Guinea", cases: 9, deaths: 0, recovered: 0 },
    { country: "New Caledonia", cases: 8, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 7, deaths: 0, recovered: 0 },
    { country: "Bermuda", cases: 6, deaths: 0, recovered: 0 },
    { country: "Gabon", cases: 5, deaths: 1, recovered: 0 },
    { country: "Haiti", cases: 5, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 5, deaths: 0, recovered: 0 },
    { country: "Suriname", cases: 5, deaths: 0, recovered: 0 },
    { country: "Curaçao", cases: 4, deaths: 1, recovered: 0 },
    { country: "Bahamas", cases: 4, deaths: 0, recovered: 0 },
    { country: "Greenland", cases: 4, deaths: 0, recovered: 0 },
    { country: "Guinea", cases: 4, deaths: 0, recovered: 0 },
    { country: "Eswatini", cases: 4, deaths: 0, recovered: 0 },
    { country: "Cayman Islands", cases: 3, deaths: 1, recovered: 0 },
    { country: "Zimbabwe", cases: 3, deaths: 1, recovered: 0 },
    { country: "Cabo Verde", cases: 3, deaths: 0, recovered: 0 },
    { country: "CAR", cases: 3, deaths: 0, recovered: 0 },
    { country: "Congo", cases: 3, deaths: 0, recovered: 0 },
    { country: "El Salvador", cases: 3, deaths: 0, recovered: 0 },
    { country: "Fiji", cases: 3, deaths: 0, recovered: 0 },
    { country: "Liberia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 3, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "Zambia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Gambia", cases: 2, deaths: 1, recovered: 0 },
    { country: "Sudan", cases: 2, deaths: 1, recovered: 0 },
    { country: "Nepal", cases: 2, deaths: 0, recovered: 1 },
    { country: "Angola", cases: 2, deaths: 0, recovered: 0 },
    { country: "Benin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Bhutan", cases: 2, deaths: 0, recovered: 0 },
    { country: "Mauritania", cases: 2, deaths: 0, recovered: 0 },
    { country: "Nicaragua", cases: 2, deaths: 0, recovered: 0 },
    { country: "Niger", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: { month: "March", day: 22, year: 2020 },
      date: "March 22, 2020",
      country: "China",
      cases: 81054,
      deaths: 3261,
      recovered: 72440
    },
    { country: "Italy", cases: 59138, deaths: 5476, recovered: 7024 },
    { country: "USA", cases: 38167, deaths: 396, recovered: 178 },
    { country: "Spain", cases: 28603, deaths: 1756, recovered: 2125 },
    { country: "Germany", cases: 24806, deaths: 93, recovered: 266 },
    { country: "Iran", cases: 21638, deaths: 1685, recovered: 7635 },
    { country: "France", cases: 14459, deaths: 562, recovered: 1587 },
    { country: "S. Korea", cases: 8897, deaths: 104, recovered: 2909 },
    { country: "Switzerland", cases: 7474, deaths: 98, recovered: 131 },
    { country: "UK", cases: 5683, deaths: 281, recovered: 93 },
    { country: "Netherlands", cases: 4204, deaths: 179, recovered: 2 },
    { country: "Belgium", cases: 3401, deaths: 75, recovered: 263 },
    { country: "Austria", cases: 3302, deaths: 16, recovered: 9 },
    { country: "Norway", cases: 2263, deaths: 7, recovered: 6 },
    { country: "Sweden", cases: 1931, deaths: 21, recovered: 16 },
    { country: "Portugal", cases: 1600, deaths: 14, recovered: 5 },
    { country: "Denmark", cases: 1395, deaths: 13, recovered: 1 },
    { country: "Canada", cases: 1426, deaths: 20, recovered: 14 },
    { country: "Australia", cases: 1353, deaths: 7, recovered: 46 },
    { country: "Malaysia", cases: 1306, deaths: 10, recovered: 139 },
    { country: "Brazil", cases: 1209, deaths: 18, recovered: 2 },
    { country: "Japan", cases: 1086, deaths: 36, recovered: 235 },
    { country: "Czechia", cases: 1047, deaths: 0, recovered: 6 },
    { country: "Turkey", cases: 947, deaths: 21, recovered: 0 },
    { country: "Israel", cases: 945, deaths: 1, recovered: 37 },
    { country: "Luxembourg", cases: 798, deaths: 8, recovered: 6 },
    { country: "Ecuador", cases: 789, deaths: 14, recovered: 3 },
    { country: "Ireland", cases: 785, deaths: 3, recovered: 5 },
    { country: "Diamond Princess", cases: 712, deaths: 8, recovered: 567 },
    { country: "Pakistan", cases: 646, deaths: 3, recovered: 13 },
    { country: "Chile", cases: 632, deaths: 1, recovered: 8 },
    { country: "Finland", cases: 626, deaths: 1, recovered: 10 },
    { country: "Greece", cases: 624, deaths: 15, recovered: 19 },
    { country: "Thailand", cases: 599, deaths: 1, recovered: 44 },
    { country: "Iceland", cases: 568, deaths: 1, recovered: 5 },
    { country: "Poland", cases: 563, deaths: 7, recovered: 13 },
    { country: "Indonesia", cases: 514, deaths: 48, recovered: 29 },
    { country: "Saudi Arabia", cases: 511, deaths: 0, recovered: 17 },
    { country: "Qatar", cases: 481, deaths: 0, recovered: 27 },
    { country: "Singapore", cases: 455, deaths: 2, recovered: 144 },
    { country: "Romania", cases: 433, deaths: 2, recovered: 64 },
    { country: "Slovenia", cases: 414, deaths: 2, recovered: 0 },
    { country: "India", cases: 391, deaths: 7, recovered: 24 },
    { country: "Philippines", cases: 380, deaths: 25, recovered: 15 },
    { country: "Russia", cases: 367, deaths: 1, recovered: 16 },
    { country: "Bahrain", cases: 332, deaths: 2, recovered: 149 },
    { country: "Estonia", cases: 326, deaths: 0, recovered: 4 },
    { country: "Peru", cases: 318, deaths: 5, recovered: 1 },
    { country: "Hong Kong", cases: 317, deaths: 4, recovered: 100 },
    { country: "Egypt", cases: 294, deaths: 10, recovered: 42 },
    { country: "Croatia", cases: 254, deaths: 1, recovered: 5 },
    { country: "Mexico", cases: 251, deaths: 2, recovered: 4 },
    { country: "Lebanon", cases: 248, deaths: 4, recovered: 8 },
    { country: "Panama", cases: 245, deaths: 3, recovered: 1 },
    { country: "South Africa", cases: 240, deaths: 0, recovered: 2 },
    { country: "Iraq", cases: 233, deaths: 20, recovered: 57 },
    { country: "Colombia", cases: 231, deaths: 2, recovered: 3 },
    { country: "Argentina", cases: 225, deaths: 4, recovered: 27 },
    { country: "Serbia", cases: 222, deaths: 2, recovered: 2 },
    { country: "Dominican Republic", cases: 202, deaths: 3, recovered: 0 },
    { country: "Algeria", cases: 201, deaths: 17, recovered: 65 },
    { country: "Armenia", cases: 190, deaths: 0, recovered: 2 },
    { country: "Kuwait", cases: 188, deaths: 0, recovered: 27 },
    { country: "Bulgaria", cases: 185, deaths: 3, recovered: 3 },
    { country: "Slovakia", cases: 178, deaths: 0, recovered: 7 },
    { country: "San Marino", cases: 175, deaths: 20, recovered: 4 },
    { country: "Taiwan", cases: 169, deaths: 2, recovered: 28 },
    { country: "UAE", cases: 153, deaths: 2, recovered: 38 },
    { country: "Latvia", cases: 139, deaths: 0, recovered: 1 },
    { country: "Uruguay", cases: 135, deaths: 0, recovered: 0 },
    { country: "Hungary", cases: 131, deaths: 6, recovered: 16 },
    { country: "Lithuania", cases: 129, deaths: 1, recovered: 1 },
    { country: "Costa Rica", cases: 117, deaths: 2, recovered: 2 },
    { country: "North Macedonia", cases: 115, deaths: 1, recovered: 1 },
    { country: "Faeroe Islands", cases: 115, deaths: 0, recovered: 3 },
    { country: "Andorra", cases: 113, deaths: 1, recovered: 1 },
    { country: "Vietnam", cases: 113, deaths: 0, recovered: 17 },
    { country: "Morocco", cases: 109, deaths: 3, recovered: 3 },
    { country: "Jordan", cases: 100, deaths: 0, recovered: 1 },
    { country: "Cyprus", cases: 95, deaths: 1, recovered: 3 },
    { country: "Bosnia and Herzegovina", cases: 94, deaths: 1, recovered: 2 },
    { country: "Moldova", cases: 94, deaths: 1, recovered: 1 },
    { country: "Malta", cases: 90, deaths: 0, recovered: 2 },
    { country: "Albania", cases: 89, deaths: 2, recovered: 2 },
    { country: "Brunei", cases: 88, deaths: 0, recovered: 2 },
    { country: "Cambodia", cases: 84, deaths: 0, recovered: 2 },
    { country: "Sri Lanka", cases: 82, deaths: 0, recovered: 3 },
    { country: "Belarus", cases: 76, deaths: 0, recovered: 15 },
    { country: "Burkina Faso", cases: 75, deaths: 4, recovered: 5 },
    { country: "Tunisia", cases: 75, deaths: 3, recovered: 1 },
    { country: "Venezuela", cases: 70, deaths: 0, recovered: 15 },
    { country: "New Zealand", cases: 66, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 65, deaths: 1, recovered: 11 },
    { country: "Kazakhstan", cases: 59, deaths: 0, recovered: 0 },
    { country: "Palestine", cases: 59, deaths: 0, recovered: 17 },
    { country: "Guadeloupe", cases: 56, deaths: 1, recovered: 0 },
    { country: "Senegal", cases: 56, deaths: 0, recovered: 5 },
    { country: "Oman", cases: 55, deaths: 0, recovered: 17 },
    { country: "Georgia", cases: 54, deaths: 0, recovered: 1 },
    { country: "Trinidad and Tobago", cases: 50, deaths: 0, recovered: 0 },
    { country: "Ukraine", cases: 47, deaths: 3, recovered: 1 },
    { country: "Réunion", cases: 47, deaths: 0, recovered: 1 },
    { country: "Uzbekistan", cases: 43, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 40, deaths: 0, recovered: 2 },
    { country: "Martinique", cases: 37, deaths: 1, recovered: 0 },
    { country: "Liechtenstein", cases: 37, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 35, deaths: 1, recovered: 0 },
    { country: "Afghanistan", cases: 34, deaths: 1, recovered: 1 },
    { country: "Channel Islands", cases: 32, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 30, deaths: 1, recovered: 0 },
    { country: "Bangladesh", cases: 27, deaths: 2, recovered: 3 },
    { country: "Guam", cases: 27, deaths: 1, recovered: 0 },
    { country: "Nigeria", cases: 27, deaths: 0, recovered: 2 },
    { country: "Honduras", cases: 26, deaths: 0, recovered: 0 },
    { country: "Mauritius", cases: 24, deaths: 2, recovered: 0 },
    { country: "Bolivia", cases: 24, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 23, deaths: 1, recovered: 0 },
    { country: "Paraguay", cases: 22, deaths: 1, recovered: 0 },
    { country: "Macao", cases: 22, deaths: 0, recovered: 10 },
    { country: "Ghana", cases: 21, deaths: 1, recovered: 0 },
    { country: "Jamaica", cases: 19, deaths: 1, recovered: 2 },
    { country: "Guyana", cases: 18, deaths: 1, recovered: 0 },
    { country: "Monaco", cases: 18, deaths: 0, recovered: 1 },
    { country: "French Guiana", cases: 18, deaths: 0, recovered: 0 },
    { country: "Guatemala", cases: 17, deaths: 1, recovered: 0 },
    { country: "Rwanda", cases: 17, deaths: 0, recovered: 0 },
    { country: "Montenegro", cases: 16, deaths: 0, recovered: 0 },
    { country: "Togo", cases: 16, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 15, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 15, deaths: 0, recovered: 2 },
    { country: "Kenya", cases: 15, deaths: 0, recovered: 0 },
    { country: "Barbados", cases: 14, deaths: 0, recovered: 0 },
    { country: "Ivory Coast", cases: 14, deaths: 0, recovered: 1 },
    { country: "Kyrgyzstan", cases: 14, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 3 },
    { country: "Tanzania", cases: 12, deaths: 0, recovered: 0 },
    { country: "Ethiopia", cases: 11, deaths: 0, recovered: 0 },
    { country: "Mayotte", cases: 11, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 10, deaths: 0, recovered: 0 },
    { country: "Aruba", cases: 8, deaths: 0, recovered: 1 },
    { country: "Seychelles", cases: 7, deaths: 0, recovered: 0 },
    { country: "Equatorial Guinea", cases: 6, deaths: 0, recovered: 0 },
    { country: "U.S. Virgin Islands", cases: 6, deaths: 0, recovered: 0 },
    { country: "Gabon", cases: 5, deaths: 1, recovered: 0 },
    { country: "Isle of Man", cases: 5, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 5, deaths: 0, recovered: 0 },
    { country: "Suriname", cases: 5, deaths: 0, recovered: 0 },
    { country: "Bahamas", cases: 4, deaths: 0, recovered: 0 },
    { country: "New Caledonia", cases: 4, deaths: 0, recovered: 0 },
    { country: "Eswatini", cases: 4, deaths: 0, recovered: 0 },
    { country: "Cayman Islands", cases: 3, deaths: 1, recovered: 0 },
    { country: "Curaçao", cases: 3, deaths: 1, recovered: 0 },
    { country: "Cabo Verde", cases: 3, deaths: 0, recovered: 0 },
    { country: "CAR", cases: 3, deaths: 0, recovered: 0 },
    { country: "Congo", cases: 3, deaths: 0, recovered: 0 },
    { country: "El Salvador", cases: 3, deaths: 0, recovered: 0 },
    { country: "Liberia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Madagascar", cases: 3, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 3, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "Zambia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Zimbabwe", cases: 3, deaths: 0, recovered: 0 },
    { country: "Sudan", cases: 2, deaths: 1, recovered: 0 },
    { country: "Angola", cases: 2, deaths: 0, recovered: 0 },
    { country: "Benin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Bermuda", cases: 2, deaths: 0, recovered: 0 },
    { country: "Bhutan", cases: 2, deaths: 0, recovered: 0 },
    { country: "Fiji", cases: 2, deaths: 0, recovered: 0 },
    { country: "Greenland", cases: 2, deaths: 0, recovered: 0 },
    { country: "Guinea", cases: 2, deaths: 0, recovered: 0 },
    { country: "Haiti", cases: 2, deaths: 0, recovered: 0 },
    { country: "Mauritania", cases: 2, deaths: 0, recovered: 0 },
    { country: "Nicaragua", cases: 2, deaths: 0, recovered: 0 },
    { country: "Niger", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: { month: "March", day: 21, year: 2020 },
      date: "March 21, 2020",
      country: "China",
      cases: 81008,
      deaths: 3255,
      recovered: 71740
    },
    { country: "Italy", cases: 53578, deaths: 4825, recovered: 6072 },
    { country: "USA", cases: 25896, deaths: 316, recovered: 176 },
    { country: "Spain", cases: 25496, deaths: 1378, recovered: 2125 },
    { country: "Germany", cases: 22364, deaths: 84, recovered: 209 },
    { country: "Iran", cases: 20610, deaths: 1556, recovered: 7635 },
    { country: "France", cases: 14459, deaths: 562, recovered: 1587 },
    { country: "S. Korea", cases: 8799, deaths: 102, recovered: 2612 },
    { country: "Switzerland", cases: 6863, deaths: 80, recovered: 131 },
    { country: "UK", cases: 5018, deaths: 233, recovered: 93 },
    { country: "Netherlands", cases: 3631, deaths: 136, recovered: 2 },
    { country: "Austria", cases: 2992, deaths: 8, recovered: 9 },
    { country: "Belgium", cases: 2815, deaths: 67, recovered: 263 },
    { country: "Norway", cases: 2164, deaths: 7, recovered: 6 },
    { country: "Sweden", cases: 1770, deaths: 20, recovered: 16 },
    { country: "Canada", cases: 1328, deaths: 19, recovered: 14 },
    { country: "Denmark", cases: 1326, deaths: 13, recovered: 1 },
    { country: "Portugal", cases: 1280, deaths: 12, recovered: 5 },
    { country: "Malaysia", cases: 1183, deaths: 8, recovered: 114 },
    { country: "Brazil", cases: 1178, deaths: 18, recovered: 2 },
    { country: "Australia", cases: 1072, deaths: 7, recovered: 46 },
    { country: "Japan", cases: 1054, deaths: 36, recovered: 215 },
    { country: "Czechia", cases: 995, deaths: 0, recovered: 6 },
    { country: "Turkey", cases: 947, deaths: 21, recovered: 0 },
    { country: "Israel", cases: 883, deaths: 1, recovered: 36 },
    { country: "Ireland", cases: 785, deaths: 3, recovered: 5 },
    { country: "Diamond Princess", cases: 712, deaths: 8, recovered: 567 },
    { country: "Luxembourg", cases: 670, deaths: 8, recovered: 6 },
    { country: "Pakistan", cases: 645, deaths: 3, recovered: 13 },
    { country: "Chile", cases: 537, deaths: 1, recovered: 8 },
    { country: "Poland", cases: 536, deaths: 5, recovered: 13 },
    { country: "Ecuador", cases: 532, deaths: 7, recovered: 3 },
    { country: "Greece", cases: 530, deaths: 13, recovered: 19 },
    { country: "Finland", cases: 523, deaths: 1, recovered: 10 },
    { country: "Qatar", cases: 481, deaths: 0, recovered: 27 },
    { country: "Iceland", cases: 473, deaths: 1, recovered: 5 },
    { country: "Indonesia", cases: 450, deaths: 38, recovered: 20 },
    { country: "Singapore", cases: 432, deaths: 2, recovered: 140 },
    { country: "Thailand", cases: 411, deaths: 1, recovered: 44 },
    { country: "Saudi Arabia", cases: 392, deaths: 0, recovered: 16 },
    { country: "Slovenia", cases: 383, deaths: 1, recovered: 0 },
    { country: "Romania", cases: 367, deaths: 0, recovered: 52 },
    { country: "India", cases: 332, deaths: 5, recovered: 23 },
    { country: "Peru", cases: 318, deaths: 5, recovered: 1 },
    { country: "Bahrain", cases: 310, deaths: 1, recovered: 125 },
    { country: "Philippines", cases: 307, deaths: 19, recovered: 13 },
    { country: "Russia", cases: 306, deaths: 1, recovered: 16 },
    { country: "Estonia", cases: 306, deaths: 0, recovered: 2 },
    { country: "Egypt", cases: 294, deaths: 10, recovered: 42 },
    { country: "Hong Kong", cases: 273, deaths: 4, recovered: 98 },
    { country: "Panama", cases: 245, deaths: 3, recovered: 1 },
    { country: "South Africa", cases: 240, deaths: 0, recovered: 2 },
    { country: "Lebanon", cases: 230, deaths: 4, recovered: 8 },
    { country: "Iraq", cases: 214, deaths: 17, recovered: 51 },
    { country: "Croatia", cases: 206, deaths: 1, recovered: 5 },
    { country: "Mexico", cases: 203, deaths: 2, recovered: 4 },
    { country: "Colombia", cases: 196, deaths: 0, recovered: 1 },
    { country: "Slovakia", cases: 178, deaths: 0, recovered: 7 },
    { country: "Kuwait", cases: 176, deaths: 0, recovered: 27 },
    { country: "Serbia", cases: 171, deaths: 1, recovered: 2 },
    { country: "Bulgaria", cases: 163, deaths: 3, recovered: 3 },
    { country: "San Marino", cases: 160, deaths: 20, recovered: 4 },
    { country: "Armenia", cases: 160, deaths: 0, recovered: 1 },
    { country: "Argentina", cases: 158, deaths: 4, recovered: 3 },
    { country: "Taiwan", cases: 153, deaths: 2, recovered: 28 },
    { country: "UAE", cases: 153, deaths: 2, recovered: 38 },
    { country: "Algeria", cases: 139, deaths: 15, recovered: 65 },
    { country: "Latvia", cases: 124, deaths: 0, recovered: 1 },
    { country: "Costa Rica", cases: 117, deaths: 2, recovered: 2 },
    { country: "Dominican Republic", cases: 112, deaths: 3, recovered: 0 },
    { country: "Uruguay", cases: 110, deaths: 0, recovered: 0 },
    { country: "Hungary", cases: 103, deaths: 4, recovered: 7 },
    { country: "Jordan", cases: 100, deaths: 0, recovered: 1 },
    { country: "Lithuania", cases: 99, deaths: 1, recovered: 1 },
    { country: "Morocco", cases: 96, deaths: 3, recovered: 3 },
    { country: "Vietnam", cases: 94, deaths: 0, recovered: 17 },
    { country: "Bosnia and Herzegovina", cases: 93, deaths: 1, recovered: 2 },
    { country: "Faeroe Islands", cases: 92, deaths: 0, recovered: 3 },
    { country: "Andorra", cases: 88, deaths: 0, recovered: 1 },
    { country: "North Macedonia", cases: 85, deaths: 0, recovered: 1 },
    { country: "Cyprus", cases: 84, deaths: 1, recovered: 3 },
    { country: "Brunei", cases: 83, deaths: 0, recovered: 1 },
    { country: "Moldova", cases: 80, deaths: 1, recovered: 1 },
    { country: "Sri Lanka", cases: 77, deaths: 0, recovered: 3 },
    { country: "Albania", cases: 76, deaths: 2, recovered: 2 },
    { country: "Belarus", cases: 76, deaths: 0, recovered: 15 },
    { country: "Malta", cases: 73, deaths: 0, recovered: 2 },
    { country: "Venezuela", cases: 70, deaths: 0, recovered: 15 },
    { country: "Burkina Faso", cases: 64, deaths: 3, recovered: 5 },
    { country: "Tunisia", cases: 60, deaths: 1, recovered: 1 },
    { country: "Guadeloupe", cases: 56, deaths: 1, recovered: 0 },
    { country: "Senegal", cases: 56, deaths: 0, recovered: 5 },
    { country: "Kazakhstan", cases: 54, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 53, deaths: 1, recovered: 11 },
    { country: "Cambodia", cases: 53, deaths: 0, recovered: 2 },
    { country: "Palestine", cases: 53, deaths: 0, recovered: 17 },
    { country: "New Zealand", cases: 52, deaths: 0, recovered: 0 },
    { country: "Oman", cases: 52, deaths: 0, recovered: 13 },
    { country: "Georgia", cases: 49, deaths: 0, recovered: 1 },
    { country: "Trinidad and Tobago", cases: 49, deaths: 0, recovered: 0 },
    { country: "Ukraine", cases: 47, deaths: 3, recovered: 1 },
    { country: "Réunion", cases: 47, deaths: 0, recovered: 0 },
    { country: "Uzbekistan", cases: 41, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 40, deaths: 0, recovered: 2 },
    { country: "Martinique", cases: 37, deaths: 1, recovered: 0 },
    { country: "Liechtenstein", cases: 37, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 32, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 24, deaths: 2, recovered: 3 },
    { country: "Afghanistan", cases: 24, deaths: 0, recovered: 1 },
    { country: "Honduras", cases: 24, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 23, deaths: 1, recovered: 0 },
    { country: "Paraguay", cases: 22, deaths: 1, recovered: 0 },
    { country: "Nigeria", cases: 22, deaths: 0, recovered: 1 },
    { country: "Cuba", cases: 21, deaths: 1, recovered: 0 },
    { country: "Ghana", cases: 21, deaths: 1, recovered: 0 },
    { country: "Puerto Rico", cases: 21, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 19, deaths: 1, recovered: 2 },
    { country: "Bolivia", cases: 19, deaths: 0, recovered: 0 },
    { country: "Guyana", cases: 18, deaths: 1, recovered: 0 },
    { country: "Macao", cases: 18, deaths: 0, recovered: 10 },
    { country: "Monaco", cases: 18, deaths: 0, recovered: 1 },
    { country: "French Guiana", cases: 18, deaths: 0, recovered: 0 },
    { country: "Guatemala", cases: 17, deaths: 1, recovered: 0 },
    { country: "Rwanda", cases: 17, deaths: 0, recovered: 0 },
    { country: "Montenegro", cases: 16, deaths: 0, recovered: 0 },
    { country: "Togo", cases: 16, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 15, deaths: 0, recovered: 0 },
    { country: "Guam", cases: 15, deaths: 0, recovered: 0 },
    { country: "Mauritius", cases: 14, deaths: 1, recovered: 0 },
    { country: "Barbados", cases: 14, deaths: 0, recovered: 0 },
    { country: "Ivory Coast", cases: 14, deaths: 0, recovered: 1 },
    { country: "Kyrgyzstan", cases: 14, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 3 },
    { country: "Mayotte", cases: 11, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 10, deaths: 0, recovered: 2 },
    { country: "Mongolia", cases: 10, deaths: 0, recovered: 0 },
    { country: "Ethiopia", cases: 9, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 7, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 7, deaths: 0, recovered: 0 },
    { country: "Equatorial Guinea", cases: 6, deaths: 0, recovered: 0 },
    { country: "Tanzania", cases: 6, deaths: 0, recovered: 0 },
    { country: "U.S. Virgin Islands", cases: 6, deaths: 0, recovered: 0 },
    { country: "Gabon", cases: 5, deaths: 1, recovered: 0 },
    { country: "Aruba", cases: 5, deaths: 0, recovered: 1 },
    { country: "Saint Martin", cases: 5, deaths: 0, recovered: 0 },
    { country: "Suriname", cases: 5, deaths: 0, recovered: 0 },
    { country: "Bahamas", cases: 4, deaths: 0, recovered: 0 },
    { country: "New Caledonia", cases: 4, deaths: 0, recovered: 0 },
    { country: "Cayman Islands", cases: 3, deaths: 1, recovered: 0 },
    { country: "Curaçao", cases: 3, deaths: 1, recovered: 0 },
    { country: "Cabo Verde", cases: 3, deaths: 0, recovered: 0 },
    { country: "CAR", cases: 3, deaths: 0, recovered: 0 },
    { country: "Congo", cases: 3, deaths: 0, recovered: 0 },
    { country: "El Salvador", cases: 3, deaths: 0, recovered: 0 },
    { country: "Liberia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Madagascar", cases: 3, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 3, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "Zimbabwe", cases: 3, deaths: 0, recovered: 0 },
    { country: "Sudan", cases: 2, deaths: 1, recovered: 0 },
    { country: "Angola", cases: 2, deaths: 0, recovered: 0 },
    { country: "Benin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Bermuda", cases: 2, deaths: 0, recovered: 0 },
    { country: "Bhutan", cases: 2, deaths: 0, recovered: 0 },
    { country: "Fiji", cases: 2, deaths: 0, recovered: 0 },
    { country: "Greenland", cases: 2, deaths: 0, recovered: 0 },
    { country: "Guinea", cases: 2, deaths: 0, recovered: 0 },
    { country: "Haiti", cases: 2, deaths: 0, recovered: 0 },
    { country: "Isle of Man", cases: 2, deaths: 0, recovered: 0 },
    { country: "Mauritania", cases: 2, deaths: 0, recovered: 0 },
    { country: "Nicaragua", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Zambia", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: { month: "March", day: 20, year: 2020 },
      date: "March 20, 2020",
      country: "China",
      cases: 80967,
      deaths: 3248,
      recovered: 71150
    },
    { country: "Italy", cases: 41035, deaths: 3405, recovered: 4440 },
    { country: "Spain", cases: 20412, deaths: 1041, recovered: 1588 },
    { country: "Iran", cases: 19644, deaths: 1433, recovered: 6745 },
    { country: "Germany", cases: 18328, deaths: 52, recovered: 180 },
    { country: "USA", cases: 14556, deaths: 218, recovered: 125 },
    { country: "France", cases: 10995, deaths: 372, recovered: 1295 },
    { country: "S. Korea", cases: 8652, deaths: 94, recovered: 2233 },
    { country: "Switzerland", cases: 4906, deaths: 51, recovered: 15 },
    { country: "UK", cases: 3269, deaths: 184, recovered: 65 },
    { country: "Netherlands", cases: 2994, deaths: 106, recovered: 2 },
    { country: "Austria", cases: 2388, deaths: 6, recovered: 9 },
    { country: "Belgium", cases: 2257, deaths: 37, recovered: 204 },
    { country: "Norway", cases: 1895, deaths: 7, recovered: 1 },
    { country: "Sweden", cases: 1639, deaths: 16, recovered: 16 },
    { country: "Denmark", cases: 1226, deaths: 9, recovered: 1 },
    { country: "Malaysia", cases: 1030, deaths: 3, recovered: 87 },
    { country: "Portugal", cases: 1020, deaths: 6, recovered: 5 },
    { country: "Japan", cases: 963, deaths: 33, recovered: 215 },
    { country: "Canada", cases: 924, deaths: 12, recovered: 11 },
    { country: "Australia", cases: 876, deaths: 7, recovered: 46 },
    { country: "Czechia", cases: 774, deaths: 0, recovered: 4 },
    { country: "Diamond Princess", cases: 712, deaths: 7, recovered: 527 },
    { country: "Israel", cases: 705, deaths: 0, recovered: 15 },
    { country: "Brazil", cases: 651, deaths: 7, recovered: 2 },
    { country: "Ireland", cases: 557, deaths: 3, recovered: 5 },
    { country: "Luxembourg", cases: 484, deaths: 5, recovered: 6 },
    { country: "Pakistan", cases: 478, deaths: 3, recovered: 13 },
    { country: "Greece", cases: 464, deaths: 6, recovered: 19 },
    { country: "Qatar", cases: 460, deaths: 0, recovered: 10 },
    { country: "Finland", cases: 450, deaths: 0, recovered: 10 },
    { country: "Chile", cases: 434, deaths: 0, recovered: 6 },
    { country: "Poland", cases: 411, deaths: 5, recovered: 13 },
    { country: "Iceland", cases: 409, deaths: 0, recovered: 5 },
    { country: "Singapore", cases: 385, deaths: 0, recovered: 131 },
    { country: "Indonesia", cases: 369, deaths: 32, recovered: 17 },
    { country: "Ecuador", cases: 367, deaths: 5, recovered: 3 },
    { country: "Turkey", cases: 359, deaths: 4, recovered: 0 },
    { country: "Slovenia", cases: 341, deaths: 1, recovered: 0 },
    { country: "Thailand", cases: 322, deaths: 1, recovered: 42 },
    { country: "Romania", cases: 308, deaths: 0, recovered: 31 },
    { country: "Bahrain", cases: 284, deaths: 1, recovered: 110 },
    { country: "Estonia", cases: 283, deaths: 0, recovered: 1 },
    { country: "Saudi Arabia", cases: 274, deaths: 0, recovered: 8 },
    { country: "Egypt", cases: 256, deaths: 7, recovered: 42 },
    { country: "Hong Kong", cases: 256, deaths: 4, recovered: 98 },
    { country: "Russia", cases: 253, deaths: 1, recovered: 12 },
    { country: "Peru", cases: 234, deaths: 3, recovered: 1 },
    { country: "Philippines", cases: 230, deaths: 18, recovered: 8 },
    { country: "India", cases: 223, deaths: 5, recovered: 23 },
    { country: "South Africa", cases: 202, deaths: 0, recovered: 0 },
    { country: "Iraq", cases: 192, deaths: 13, recovered: 49 },
    { country: "Mexico", cases: 164, deaths: 1, recovered: 4 },
    { country: "Lebanon", cases: 163, deaths: 4, recovered: 4 },
    { country: "Kuwait", cases: 159, deaths: 0, recovered: 22 },
    { country: "San Marino", cases: 144, deaths: 14, recovered: 4 },
    { country: "UAE", cases: 140, deaths: 0, recovered: 31 },
    { country: "Panama", cases: 137, deaths: 1, recovered: 1 },
    { country: "Slovakia", cases: 137, deaths: 0, recovered: 0 },
    { country: "Armenia", cases: 136, deaths: 0, recovered: 1 },
    { country: "Taiwan", cases: 135, deaths: 2, recovered: 28 },
    { country: "Bulgaria", cases: 129, deaths: 3, recovered: 1 },
    { country: "Argentina", cases: 128, deaths: 3, recovered: 3 },
    { country: "Croatia", cases: 128, deaths: 1, recovered: 5 },
    { country: "Colombia", cases: 128, deaths: 0, recovered: 1 },
    { country: "Serbia", cases: 118, deaths: 0, recovered: 2 },
    { country: "Latvia", cases: 111, deaths: 0, recovered: 1 },
    { country: "Uruguay", cases: 94, deaths: 0, recovered: 0 },
    { country: "Vietnam", cases: 91, deaths: 0, recovered: 17 },
    { country: "Algeria", cases: 90, deaths: 11, recovered: 32 },
    { country: "Costa Rica", cases: 89, deaths: 2, recovered: 0 },
    { country: "Hungary", cases: 85, deaths: 3, recovered: 7 },
    { country: "Faeroe Islands", cases: 80, deaths: 0, recovered: 3 },
    { country: "Brunei", cases: 78, deaths: 0, recovered: 1 },
    { country: "Andorra", cases: 75, deaths: 0, recovered: 1 },
    { country: "Morocco", cases: 74, deaths: 3, recovered: 2 },
    { country: "Sri Lanka", cases: 73, deaths: 0, recovered: 3 },
    { country: "Dominican Republic", cases: 72, deaths: 2, recovered: 0 },
    { country: "Albania", cases: 70, deaths: 2, recovered: 0 },
    { country: "North Macedonia", cases: 70, deaths: 0, recovered: 1 },
    { country: "Belarus", cases: 69, deaths: 0, recovered: 15 },
    { country: "Jordan", cases: 69, deaths: 0, recovered: 1 },
    { country: "Bosnia and Herzegovina", cases: 69, deaths: 0, recovered: 2 },
    { country: "Cyprus", cases: 67, deaths: 0, recovered: 0 },
    { country: "Moldova", cases: 66, deaths: 1, recovered: 1 },
    { country: "Malta", cases: 64, deaths: 0, recovered: 2 },
    { country: "Tunisia", cases: 54, deaths: 1, recovered: 1 },
    { country: "Cambodia", cases: 51, deaths: 0, recovered: 1 },
    { country: "Kazakhstan", cases: 49, deaths: 0, recovered: 0 },
    { country: "Lithuania", cases: 49, deaths: 0, recovered: 1 },
    { country: "Oman", cases: 48, deaths: 0, recovered: 13 },
    { country: "Palestine", cases: 48, deaths: 0, recovered: 17 },
    { country: "Guadeloupe", cases: 45, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 44, deaths: 1, recovered: 7 },
    { country: "Georgia", cases: 44, deaths: 0, recovered: 1 },
    { country: "Venezuela", cases: 42, deaths: 0, recovered: 0 },
    { country: "Burkina Faso", cases: 40, deaths: 1, recovered: 4 },
    { country: "New Zealand", cases: 39, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 38, deaths: 0, recovered: 2 },
    { country: "Uzbekistan", cases: 33, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 32, deaths: 1, recovered: 0 },
    { country: "Liechtenstein", cases: 28, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 28, deaths: 0, recovered: 0 },
    { country: "Ukraine", cases: 26, deaths: 3, recovered: 1 },
    { country: "Afghanistan", cases: 24, deaths: 0, recovered: 1 },
    { country: "Honduras", cases: 24, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 20, deaths: 1, recovered: 3 },
    { country: "Cameroon", cases: 20, deaths: 0, recovered: 2 },
    { country: "DRC", cases: 18, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 17, deaths: 0, recovered: 10 },
    { country: "Cuba", cases: 16, deaths: 1, recovered: 0 },
    { country: "Jamaica", cases: 16, deaths: 1, recovered: 2 },
    { country: "Bolivia", cases: 16, deaths: 0, recovered: 0 },
    { country: "Ghana", cases: 16, deaths: 0, recovered: 8 },
    { country: "Guyana", cases: 15, deaths: 1, recovered: 0 },
    { country: "French Guiana", cases: 15, deaths: 0, recovered: 0 },
    { country: "Guam", cases: 14, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 0 },
    { country: "Montenegro", cases: 13, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 13, deaths: 0, recovered: 0 },
    { country: "Guatemala", cases: 12, deaths: 1, recovered: 0 },
    { country: "Nigeria", cases: 12, deaths: 0, recovered: 1 },
    { country: "Mauritius", cases: 12, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 11, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 11, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 11, deaths: 0, recovered: 0 },
    { country: "Rwanda", cases: 11, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 10, deaths: 0, recovered: 2 },
    { country: "Ivory Coast", cases: 9, deaths: 0, recovered: 1 },
    { country: "Ethiopia", cases: 9, deaths: 0, recovered: 0 },
    { country: "Togo", cases: 9, deaths: 0, recovered: 0 },
    { country: "Trinidad and Tobago", cases: 9, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 8, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 7, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 7, deaths: 0, recovered: 0 },
    { country: "Equatorial Guinea", cases: 6, deaths: 0, recovered: 0 },
    { country: "Kyrgyzstan", cases: 6, deaths: 0, recovered: 0 },
    { country: "Mayotte", cases: 6, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Tanzania", cases: 6, deaths: 0, recovered: 0 },
    { country: "Aruba", cases: 5, deaths: 0, recovered: 1 },
    { country: "Barbados", cases: 5, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 4, deaths: 0, recovered: 0 },
    { country: "Suriname", cases: 4, deaths: 0, recovered: 0 },
    { country: "Cayman Islands", cases: 3, deaths: 1, recovered: 0 },
    { country: "Curaçao", cases: 3, deaths: 1, recovered: 0 },
    { country: "Gabon", cases: 3, deaths: 1, recovered: 0 },
    { country: "Bahamas", cases: 3, deaths: 0, recovered: 0 },
    { country: "CAR", cases: 3, deaths: 0, recovered: 0 },
    { country: "Congo", cases: 3, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 3, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "U.S. Virgin Islands", cases: 3, deaths: 0, recovered: 0 },
    { country: "Sudan", cases: 2, deaths: 1, recovered: 0 },
    { country: "Benin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Bermuda", cases: 2, deaths: 0, recovered: 0 },
    { country: "Bhutan", cases: 2, deaths: 0, recovered: 0 },
    { country: "Greenland", cases: 2, deaths: 0, recovered: 0 },
    { country: "Guinea", cases: 2, deaths: 0, recovered: 0 },
    { country: "Haiti", cases: 2, deaths: 0, recovered: 0 },
    { country: "Liberia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Mauritania", cases: 2, deaths: 0, recovered: 0 },
    { country: "New Caledonia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Zambia", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: { month: "March", day: 19, year: 2020 },
      date: "March 19, 2020",
      country: "China",
      cases: 80928,
      deaths: 3245,
      recovered: 70420
    },
    { country: "Italy", cases: 41035, deaths: 3405, recovered: 4440 },
    { country: "Iran", cases: 18407, deaths: 1284, recovered: 5979 },
    { country: "Spain", cases: 17395, deaths: 803, recovered: 1107 },
    { country: "Germany", cases: 15309, deaths: 44, recovered: 114 },
    { country: "USA", cases: 11597, deaths: 171, recovered: 108 },
    { country: "France", cases: 10995, deaths: 372, recovered: 602 },
    { country: "S. Korea", cases: 8565, deaths: 91, recovered: 1947 },
    { country: "Switzerland", cases: 3944, deaths: 41, recovered: 15 },
    { country: "UK", cases: 3269, deaths: 144, recovered: 65 },
    { country: "Netherlands", cases: 2460, deaths: 76, recovered: 2 },
    { country: "Austria", cases: 2013, deaths: 6, recovered: 9 },
    { country: "Belgium", cases: 1795, deaths: 21, recovered: 165 },
    { country: "Norway", cases: 1758, deaths: 7, recovered: 1 },
    { country: "Sweden", cases: 1439, deaths: 11, recovered: 16 },
    { country: "Denmark", cases: 1151, deaths: 6, recovered: 1 },
    { country: "Japan", cases: 923, deaths: 32, recovered: 191 },
    { country: "Malaysia", cases: 900, deaths: 2, recovered: 75 },
    { country: "Canada", cases: 800, deaths: 10, recovered: 11 },
    { country: "Portugal", cases: 785, deaths: 3, recovered: 4 },
    { country: "Diamond Princess", cases: 712, deaths: 7, recovered: 527 },
    { country: "Australia", cases: 709, deaths: 6, recovered: 46 },
    { country: "Czechia", cases: 694, deaths: 0, recovered: 3 },
    { country: "Israel", cases: 573, deaths: 0, recovered: 13 },
    { country: "Ireland", cases: 557, deaths: 3, recovered: 5 },
    { country: "Brazil", cases: 534, deaths: 6, recovered: 2 },
    { country: "Greece", cases: 464, deaths: 6, recovered: 19 },
    { country: "Pakistan", cases: 453, deaths: 2, recovered: 13 },
    { country: "Qatar", cases: 452, deaths: 0, recovered: 4 },
    { country: "Finland", cases: 400, deaths: 0, recovered: 10 },
    { country: "Singapore", cases: 345, deaths: 0, recovered: 124 },
    { country: "Chile", cases: 342, deaths: 0, recovered: 0 },
    { country: "Luxembourg", cases: 335, deaths: 4, recovered: 0 },
    { country: "Iceland", cases: 330, deaths: 0, recovered: 5 },
    { country: "Poland", cases: 325, deaths: 5, recovered: 13 },
    { country: "Slovenia", cases: 319, deaths: 1, recovered: 0 },
    { country: "Indonesia", cases: 308, deaths: 25, recovered: 15 },
    { country: "Bahrain", cases: 277, deaths: 1, recovered: 100 },
    { country: "Romania", cases: 277, deaths: 0, recovered: 25 },
    { country: "Saudi Arabia", cases: 274, deaths: 0, recovered: 8 },
    { country: "Thailand", cases: 272, deaths: 1, recovered: 42 },
    { country: "Estonia", cases: 267, deaths: 0, recovered: 1 },
    { country: "Egypt", cases: 256, deaths: 7, recovered: 28 },
    { country: "Peru", cases: 234, deaths: 0, recovered: 1 },
    { country: "Philippines", cases: 217, deaths: 17, recovered: 8 },
    { country: "Hong Kong", cases: 208, deaths: 4, recovered: 98 },
    { country: "Ecuador", cases: 199, deaths: 3, recovered: 1 },
    { country: "Russia", cases: 199, deaths: 1, recovered: 8 },
    { country: "India", cases: 194, deaths: 4, recovered: 20 },
    { country: "Turkey", cases: 192, deaths: 3, recovered: 0 },
    { country: "Iraq", cases: 177, deaths: 12, recovered: 49 },
    { country: "Lebanon", cases: 157, deaths: 4, recovered: 4 },
    { country: "South Africa", cases: 150, deaths: 0, recovered: 0 },
    { country: "Kuwait", cases: 148, deaths: 0, recovered: 18 },
    { country: "San Marino", cases: 140, deaths: 14, recovered: 4 },
    { country: "UAE", cases: 140, deaths: 0, recovered: 31 },
    { country: "Slovakia", cases: 124, deaths: 0, recovered: 0 },
    { country: "Armenia", cases: 122, deaths: 0, recovered: 1 },
    { country: "Mexico", cases: 118, deaths: 1, recovered: 4 },
    { country: "Panama", cases: 109, deaths: 1, recovered: 0 },
    { country: "Taiwan", cases: 108, deaths: 1, recovered: 26 },
    { country: "Colombia", cases: 108, deaths: 0, recovered: 1 },
    { country: "Bulgaria", cases: 107, deaths: 3, recovered: 0 },
    { country: "Croatia", cases: 105, deaths: 1, recovered: 5 },
    { country: "Serbia", cases: 103, deaths: 0, recovered: 1 },
    { country: "Argentina", cases: 97, deaths: 3, recovered: 3 },
    { country: "Algeria", cases: 90, deaths: 9, recovered: 32 },
    { country: "Latvia", cases: 86, deaths: 0, recovered: 1 },
    { country: "Uruguay", cases: 79, deaths: 0, recovered: 0 },
    { country: "Vietnam", cases: 76, deaths: 0, recovered: 16 },
    { country: "Hungary", cases: 73, deaths: 1, recovered: 2 },
    { country: "Brunei", cases: 73, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 72, deaths: 0, recovered: 1 },
    { country: "Costa Rica", cases: 69, deaths: 1, recovered: 0 },
    { country: "Jordan", cases: 69, deaths: 0, recovered: 1 },
    { country: "Cyprus", cases: 67, deaths: 0, recovered: 0 },
    { country: "Albania", cases: 64, deaths: 2, recovered: 0 },
    { country: "Bosnia and Herzegovina", cases: 63, deaths: 0, recovered: 2 },
    { country: "Morocco", cases: 61, deaths: 2, recovered: 2 },
    { country: "Sri Lanka", cases: 60, deaths: 0, recovered: 3 },
    { country: "Andorra", cases: 53, deaths: 0, recovered: 1 },
    { country: "Malta", cases: 53, deaths: 0, recovered: 2 },
    { country: "Belarus", cases: 51, deaths: 0, recovered: 5 },
    { country: "Moldova", cases: 49, deaths: 1, recovered: 1 },
    { country: "North Macedonia", cases: 49, deaths: 0, recovered: 1 },
    { country: "Palestine", cases: 47, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 44, deaths: 1, recovered: 7 },
    { country: "Kazakhstan", cases: 44, deaths: 0, recovered: 0 },
    { country: "Venezuela", cases: 42, deaths: 0, recovered: 0 },
    { country: "Lithuania", cases: 41, deaths: 0, recovered: 1 },
    { country: "Georgia", cases: 40, deaths: 0, recovered: 1 },
    { country: "Tunisia", cases: 39, deaths: 1, recovered: 1 },
    { country: "Oman", cases: 39, deaths: 0, recovered: 13 },
    { country: "Cambodia", cases: 37, deaths: 0, recovered: 1 },
    { country: "Senegal", cases: 36, deaths: 0, recovered: 2 },
    { country: "Dominican Republic", cases: 34, deaths: 2, recovered: 0 },
    { country: "Burkina Faso", cases: 33, deaths: 1, recovered: 0 },
    { country: "Guadeloupe", cases: 33, deaths: 0, recovered: 0 },
    { country: "New Zealand", cases: 28, deaths: 0, recovered: 0 },
    { country: "Liechtenstein", cases: 28, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 23, deaths: 1, recovered: 0 },
    { country: "Uzbekistan", cases: 23, deaths: 0, recovered: 0 },
    { country: "Afghanistan", cases: 22, deaths: 0, recovered: 1 },
    { country: "Ukraine", cases: 21, deaths: 3, recovered: 0 },
    { country: "Réunion", cases: 19, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 18, deaths: 1, recovered: 3 },
    { country: "Macao", cases: 17, deaths: 0, recovered: 10 },
    { country: "Jamaica", cases: 15, deaths: 1, recovered: 2 },
    { country: "Bolivia", cases: 15, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 15, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 14, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 13, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 12, deaths: 0, recovered: 1 },
    { country: "Guam", cases: 12, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 12, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 11, deaths: 1, recovered: 0 },
    { country: "Ghana", cases: 11, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 11, deaths: 0, recovered: 0 },
    { country: "Rwanda", cases: 11, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 10, deaths: 0, recovered: 0 },
    { country: "Montenegro", cases: 10, deaths: 0, recovered: 0 },
    { country: "Guatemala", cases: 9, deaths: 1, recovered: 0 },
    { country: "Ivory Coast", cases: 9, deaths: 0, recovered: 1 },
    { country: "Trinidad and Tobago", cases: 9, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 8, deaths: 0, recovered: 2 },
    { country: "Channel Islands", cases: 7, deaths: 0, recovered: 0 },
    { country: "Ethiopia", cases: 7, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 7, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 6, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 6, deaths: 0, recovered: 0 },
    { country: "Tanzania", cases: 6, deaths: 0, recovered: 0 },
    { country: "Guyana", cases: 5, deaths: 1, recovered: 0 },
    { country: "Aruba", cases: 5, deaths: 0, recovered: 1 },
    { country: "Barbados", cases: 5, deaths: 0, recovered: 0 },
    { country: "Equatorial Guinea", cases: 4, deaths: 0, recovered: 0 },
    { country: "Curaçao", cases: 3, deaths: 1, recovered: 0 },
    { country: "Bahamas", cases: 3, deaths: 0, recovered: 0 },
    { country: "Gabon", cases: 3, deaths: 0, recovered: 0 },
    { country: "Kyrgyzstan", cases: 3, deaths: 0, recovered: 0 },
    { country: "Mauritius", cases: 3, deaths: 0, recovered: 0 },
    { country: "Mayotte", cases: 3, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 3, deaths: 0, recovered: 0 },
    { country: "U.S. Virgin Islands", cases: 3, deaths: 0, recovered: 0 },
    { country: "Sudan", cases: 2, deaths: 1, recovered: 0 },
    { country: "Benin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Bermuda", cases: 2, deaths: 0, recovered: 0 },
    { country: "Greenland", cases: 2, deaths: 0, recovered: 0 },
    { country: "Liberia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Mauritania", cases: 2, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 2, deaths: 0, recovered: 0 },
    { country: "New Caledonia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Zambia", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: { month: "March", day: 18, year: 2020 },
      date: "March 18, 2020",
      country: "China",
      cases: 80894,
      deaths: 3237,
      recovered: 69614
    },
    { country: "Italy", cases: 35713, deaths: 2978, recovered: 4025 },
    { country: "Iran", cases: 17361, deaths: 1135, recovered: 5710 },
    { country: "Spain", cases: 14746, deaths: 638, recovered: 1081 },
    { country: "Germany", cases: 12327, deaths: 28, recovered: 105 },
    { country: "France", cases: 9134, deaths: 264, recovered: 602 },
    { country: "S. Korea", cases: 8413, deaths: 84, recovered: 1540 },
    { country: "USA", cases: 8019, deaths: 125, recovered: 106 },
    { country: "Switzerland", cases: 3076, deaths: 33, recovered: 15 },
    { country: "UK", cases: 2626, deaths: 104, recovered: 65 },
    { country: "Netherlands", cases: 2051, deaths: 58, recovered: 2 },
    { country: "Austria", cases: 1646, deaths: 4, recovered: 9 },
    { country: "Norway", cases: 1567, deaths: 6, recovered: 1 },
    { country: "Belgium", cases: 1486, deaths: 14, recovered: 31 },
    { country: "Sweden", cases: 1292, deaths: 10, recovered: 15 },
    { country: "Denmark", cases: 1057, deaths: 4, recovered: 1 },
    { country: "Japan", cases: 899, deaths: 29, recovered: 144 },
    { country: "Malaysia", cases: 790, deaths: 2, recovered: 60 },
    { country: "Diamond Princess", cases: 712, deaths: 7, recovered: 456 },
    { country: "Canada", cases: 648, deaths: 9, recovered: 12 },
    { country: "Portugal", cases: 642, deaths: 2, recovered: 4 },
    { country: "Australia", cases: 565, deaths: 6, recovered: 43 },
    { country: "Czechia", cases: 522, deaths: 0, recovered: 3 },
    { country: "Qatar", cases: 452, deaths: 0, recovered: 4 },
    { country: "Israel", cases: 433, deaths: 0, recovered: 11 },
    { country: "Greece", cases: 418, deaths: 5, recovered: 14 },
    { country: "Brazil", cases: 387, deaths: 3, recovered: 2 },
    { country: "Finland", cases: 359, deaths: 0, recovered: 10 },
    { country: "Singapore", cases: 313, deaths: 0, recovered: 114 },
    { country: "Pakistan", cases: 307, deaths: 2, recovered: 13 },
    { country: "Ireland", cases: 292, deaths: 2, recovered: 5 },
    { country: "Poland", cases: 287, deaths: 5, recovered: 1 },
    { country: "Slovenia", cases: 286, deaths: 1, recovered: 0 },
    { country: "Romania", cases: 260, deaths: 0, recovered: 19 },
    { country: "Estonia", cases: 258, deaths: 0, recovered: 1 },
    { country: "Bahrain", cases: 255, deaths: 1, recovered: 95 },
    { country: "Iceland", cases: 250, deaths: 0, recovered: 5 },
    { country: "Saudi Arabia", cases: 238, deaths: 0, recovered: 6 },
    { country: "Chile", cases: 238, deaths: 0, recovered: 0 },
    { country: "Indonesia", cases: 227, deaths: 19, recovered: 11 },
    { country: "Thailand", cases: 212, deaths: 1, recovered: 41 },
    { country: "Egypt", cases: 210, deaths: 6, recovered: 28 },
    { country: "Luxembourg", cases: 203, deaths: 2, recovered: 0 },
    { country: "Philippines", cases: 202, deaths: 17, recovered: 4 },
    { country: "Hong Kong", cases: 181, deaths: 4, recovered: 92 },
    { country: "India", cases: 168, deaths: 3, recovered: 14 },
    { country: "Iraq", cases: 164, deaths: 12, recovered: 41 },
    { country: "Ecuador", cases: 155, deaths: 2, recovered: 0 },
    { country: "Russia", cases: 147, deaths: 0, recovered: 8 },
    { country: "Peru", cases: 145, deaths: 0, recovered: 1 },
    { country: "Kuwait", cases: 142, deaths: 0, recovered: 15 },
    { country: "Lebanon", cases: 133, deaths: 4, recovered: 4 },
    { country: "San Marino", cases: 119, deaths: 11, recovered: 4 },
    { country: "South Africa", cases: 116, deaths: 0, recovered: 0 },
    { country: "UAE", cases: 113, deaths: 0, recovered: 26 },
    { country: "Armenia", cases: 110, deaths: 0, recovered: 1 },
    { country: "Slovakia", cases: 105, deaths: 0, recovered: 0 },
    { country: "Taiwan", cases: 100, deaths: 1, recovered: 20 },
    { country: "Turkey", cases: 98, deaths: 1, recovered: 0 },
    { country: "Mexico", cases: 93, deaths: 0, recovered: 4 },
    { country: "Colombia", cases: 93, deaths: 0, recovered: 1 },
    { country: "Bulgaria", cases: 92, deaths: 2, recovered: 0 },
    { country: "Serbia", cases: 89, deaths: 0, recovered: 1 },
    { country: "Croatia", cases: 87, deaths: 0, recovered: 5 },
    { country: "Panama", cases: 86, deaths: 1, recovered: 0 },
    { country: "Argentina", cases: 79, deaths: 2, recovered: 3 },
    { country: "Algeria", cases: 75, deaths: 7, recovered: 32 },
    { country: "Vietnam", cases: 75, deaths: 0, recovered: 16 },
    { country: "Latvia", cases: 71, deaths: 0, recovered: 1 },
    { country: "Costa Rica", cases: 69, deaths: 0, recovered: 0 },
    { country: "Brunei", cases: 68, deaths: 0, recovered: 0 },
    { country: "Albania", cases: 59, deaths: 2, recovered: 0 },
    { country: "Hungary", cases: 58, deaths: 1, recovered: 2 },
    { country: "Cyprus", cases: 58, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 58, deaths: 0, recovered: 1 },
    { country: "Jordan", cases: 56, deaths: 0, recovered: 1 },
    { country: "Belarus", cases: 51, deaths: 0, recovered: 5 },
    { country: "Sri Lanka", cases: 51, deaths: 0, recovered: 3 },
    { country: "Uruguay", cases: 50, deaths: 0, recovered: 0 },
    { country: "Morocco", cases: 49, deaths: 2, recovered: 1 },
    { country: "Malta", cases: 48, deaths: 0, recovered: 2 },
    { country: "Palestine", cases: 44, deaths: 0, recovered: 0 },
    { country: "Andorra", cases: 39, deaths: 0, recovered: 1 },
    { country: "Oman", cases: 39, deaths: 0, recovered: 13 },
    { country: "Bosnia and Herzegovina", cases: 39, deaths: 0, recovered: 2 },
    { country: "Georgia", cases: 38, deaths: 0, recovered: 1 },
    { country: "Cambodia", cases: 37, deaths: 0, recovered: 1 },
    { country: "Moldova", cases: 36, deaths: 1, recovered: 1 },
    { country: "Senegal", cases: 36, deaths: 0, recovered: 2 },
    { country: "Kazakhstan", cases: 36, deaths: 0, recovered: 0 },
    { country: "Venezuela", cases: 36, deaths: 0, recovered: 0 },
    { country: "North Macedonia", cases: 35, deaths: 0, recovered: 1 },
    { country: "Azerbaijan", cases: 34, deaths: 1, recovered: 6 },
    { country: "Lithuania", cases: 33, deaths: 0, recovered: 1 },
    { country: "Tunisia", cases: 29, deaths: 0, recovered: 1 },
    { country: "Liechtenstein", cases: 28, deaths: 0, recovered: 0 },
    { country: "Guadeloupe", cases: 27, deaths: 0, recovered: 0 },
    { country: "Afghanistan", cases: 22, deaths: 0, recovered: 1 },
    { country: "Dominican Republic", cases: 21, deaths: 1, recovered: 0 },
    { country: "Burkina Faso", cases: 20, deaths: 1, recovered: 0 },
    { country: "New Zealand", cases: 20, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 19, deaths: 1, recovered: 0 },
    { country: "Uzbekistan", cases: 18, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 17, deaths: 0, recovered: 10 },
    { country: "Ukraine", cases: 14, deaths: 2, recovered: 0 },
    { country: "Bangladesh", cases: 14, deaths: 1, recovered: 3 },
    { country: "Cameroon", cases: 13, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 13, deaths: 0, recovered: 2 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 0 },
    { country: "Bolivia", cases: 12, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 12, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 11, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 11, deaths: 0, recovered: 0 },
    { country: "Rwanda", cases: 11, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 10, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 9, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 9, deaths: 0, recovered: 0 },
    { country: "Guatemala", cases: 8, deaths: 1, recovered: 0 },
    { country: "Nigeria", cases: 8, deaths: 0, recovered: 1 },
    { country: "Gibraltar", cases: 8, deaths: 0, recovered: 2 },
    { country: "Guam", cases: 8, deaths: 0, recovered: 0 },
    { country: "Montenegro", cases: 8, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 7, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 7, deaths: 0, recovered: 0 },
    { country: "Ghana", cases: 7, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 7, deaths: 0, recovered: 0 },
    { country: "Trinidad and Tobago", cases: 7, deaths: 0, recovered: 0 },
    { country: "Ivory Coast", cases: 6, deaths: 0, recovered: 1 },
    { country: "Ethiopia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 6, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 5, deaths: 0, recovered: 0 },
    { country: "Guyana", cases: 4, deaths: 1, recovered: 0 },
    { country: "Aruba", cases: 4, deaths: 0, recovered: 0 },
    { country: "Equatorial Guinea", cases: 4, deaths: 0, recovered: 0 },
    { country: "Curaçao", cases: 3, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Gabon", cases: 3, deaths: 0, recovered: 0 },
    { country: "Kyrgyzstan", cases: 3, deaths: 0, recovered: 0 },
    { country: "Mauritius", cases: 3, deaths: 0, recovered: 0 },
    { country: "Mayotte", cases: 3, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 3, deaths: 0, recovered: 0 },
    { country: "Tanzania", cases: 3, deaths: 0, recovered: 0 },
    { country: "Sudan", cases: 2, deaths: 1, recovered: 0 },
    { country: "Barbados", cases: 2, deaths: 0, recovered: 0 },
    { country: "Benin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Greenland", cases: 2, deaths: 0, recovered: 0 },
    { country: "Liberia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Mauritania", cases: 2, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 2, deaths: 0, recovered: 0 },
    { country: "New Caledonia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 },
    { country: "U.S. Virgin Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Zambia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cayman Islands", cases: 1, deaths: 1, recovered: 0 }
  ],
  [
    {
      dateInfo: { month: "March", day: 17, year: 2020 },
      date: "March 17, 2020",
      country: "China",
      cases: 80881,
      deaths: 3226,
      recovered: 68715
    },
    { country: "Italy", cases: 31506, deaths: 2503, recovered: 2941 },
    { country: "Iran", cases: 16169, deaths: 988, recovered: 5389 },
    { country: "Spain", cases: 11409, deaths: 510, recovered: 1028 },
    { country: "Germany", cases: 9352, deaths: 24, recovered: 67 },
    { country: "S. Korea", cases: 8320, deaths: 81, recovered: 1401 },
    { country: "France", cases: 7730, deaths: 175, recovered: 602 },
    { country: "USA", cases: 5875, deaths: 99, recovered: 74 },
    { country: "Switzerland", cases: 2742, deaths: 27, recovered: 15 },
    { country: "UK", cases: 1950, deaths: 71, recovered: 65 },
    { country: "Netherlands", cases: 1705, deaths: 43, recovered: 2 },
    { country: "Norway", cases: 1461, deaths: 3, recovered: 1 },
    { country: "Austria", cases: 1332, deaths: 4, recovered: 8 },
    { country: "Belgium", cases: 1243, deaths: 10, recovered: 14 },
    { country: "Sweden", cases: 1191, deaths: 8, recovered: 1 },
    { country: "Denmark", cases: 977, deaths: 4, recovered: 1 },
    { country: "Japan", cases: 878, deaths: 29, recovered: 144 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 456 },
    { country: "Malaysia", cases: 673, deaths: 2, recovered: 49 },
    { country: "Canada", cases: 465, deaths: 5, recovered: 11 },
    { country: "Australia", cases: 452, deaths: 5, recovered: 27 },
    { country: "Portugal", cases: 448, deaths: 1, recovered: 3 },
    { country: "Qatar", cases: 442, deaths: 0, recovered: 4 },
    { country: "Czechia", cases: 434, deaths: 0, recovered: 3 },
    { country: "Greece", cases: 387, deaths: 5, recovered: 14 },
    { country: "Israel", cases: 324, deaths: 0, recovered: 11 },
    { country: "Finland", cases: 322, deaths: 0, recovered: 10 },
    { country: "Brazil", cases: 301, deaths: 1, recovered: 2 },
    { country: "Ireland", cases: 292, deaths: 2, recovered: 5 },
    { country: "Slovenia", cases: 275, deaths: 1, recovered: 0 },
    { country: "Singapore", cases: 266, deaths: 0, recovered: 114 },
    { country: "Pakistan", cases: 247, deaths: 1, recovered: 2 },
    { country: "Bahrain", cases: 241, deaths: 1, recovered: 81 },
    { country: "Iceland", cases: 240, deaths: 1, recovered: 5 },
    { country: "Estonia", cases: 225, deaths: 0, recovered: 1 },
    { country: "Poland", cases: 221, deaths: 5, recovered: 0 },
    { country: "Romania", cases: 217, deaths: 0, recovered: 19 },
    { country: "Chile", cases: 201, deaths: 0, recovered: 0 },
    { country: "Egypt", cases: 196, deaths: 6, recovered: 26 },
    { country: "Philippines", cases: 187, deaths: 12, recovered: 5 },
    { country: "Thailand", cases: 177, deaths: 1, recovered: 41 },
    { country: "Indonesia", cases: 172, deaths: 7, recovered: 8 },
    { country: "Saudi Arabia", cases: 171, deaths: 0, recovered: 6 },
    { country: "Hong Kong", cases: 168, deaths: 4, recovered: 81 },
    { country: "Iraq", cases: 154, deaths: 11, recovered: 41 },
    { country: "India", cases: 143, deaths: 3, recovered: 14 },
    { country: "Luxembourg", cases: 140, deaths: 1, recovered: 0 },
    { country: "Kuwait", cases: 130, deaths: 0, recovered: 12 },
    { country: "Lebanon", cases: 120, deaths: 3, recovered: 4 },
    { country: "San Marino", cases: 119, deaths: 11, recovered: 4 },
    { country: "Peru", cases: 117, deaths: 0, recovered: 1 },
    { country: "Russia", cases: 114, deaths: 0, recovered: 8 },
    { country: "Ecuador", cases: 111, deaths: 2, recovered: 0 },
    { country: "UAE", cases: 98, deaths: 0, recovered: 26 },
    { country: "Slovakia", cases: 97, deaths: 0, recovered: 0 },
    { country: "Mexico", cases: 82, deaths: 0, recovered: 4 },
    { country: "Bulgaria", cases: 81, deaths: 2, recovered: 0 },
    { country: "Armenia", cases: 78, deaths: 0, recovered: 1 },
    { country: "Taiwan", cases: 77, deaths: 1, recovered: 20 },
    { country: "Serbia", cases: 72, deaths: 0, recovered: 1 },
    { country: "Panama", cases: 69, deaths: 1, recovered: 0 },
    { country: "Croatia", cases: 69, deaths: 0, recovered: 5 },
    { country: "Argentina", cases: 68, deaths: 2, recovered: 3 },
    { country: "Vietnam", cases: 66, deaths: 0, recovered: 16 },
    { country: "Colombia", cases: 65, deaths: 0, recovered: 1 },
    { country: "South Africa", cases: 62, deaths: 0, recovered: 0 },
    { country: "Algeria", cases: 60, deaths: 5, recovered: 10 },
    { country: "Latvia", cases: 60, deaths: 0, recovered: 1 },
    { country: "Brunei", cases: 56, deaths: 0, recovered: 0 },
    { country: "Albania", cases: 55, deaths: 1, recovered: 0 },
    { country: "Hungary", cases: 50, deaths: 1, recovered: 2 },
    { country: "Cyprus", cases: 49, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 47, deaths: 0, recovered: 0 },
    { country: "Turkey", cases: 47, deaths: 0, recovered: 0 },
    { country: "Sri Lanka", cases: 44, deaths: 0, recovered: 1 },
    { country: "Costa Rica", cases: 41, deaths: 0, recovered: 0 },
    { country: "Palestine", cases: 41, deaths: 0, recovered: 0 },
    { country: "Jordan", cases: 40, deaths: 0, recovered: 1 },
    { country: "Morocco", cases: 38, deaths: 2, recovered: 1 },
    { country: "Malta", cases: 38, deaths: 0, recovered: 2 },
    { country: "Belarus", cases: 36, deaths: 0, recovered: 3 },
    { country: "Azerbaijan", cases: 34, deaths: 1, recovered: 6 },
    { country: "Georgia", cases: 34, deaths: 0, recovered: 1 },
    { country: "Cambodia", cases: 33, deaths: 0, recovered: 1 },
    { country: "Kazakhstan", cases: 33, deaths: 0, recovered: 0 },
    { country: "Venezuela", cases: 33, deaths: 0, recovered: 0 },
    { country: "North Macedonia", cases: 31, deaths: 0, recovered: 1 },
    { country: "Moldova", cases: 30, deaths: 0, recovered: 1 },
    { country: "Uruguay", cases: 29, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 27, deaths: 0, recovered: 2 },
    { country: "Bosnia and Herzegovina", cases: 27, deaths: 0, recovered: 2 },
    { country: "Lithuania", cases: 25, deaths: 0, recovered: 1 },
    { country: "Oman", cases: 24, deaths: 0, recovered: 12 },
    { country: "Tunisia", cases: 24, deaths: 0, recovered: 1 },
    { country: "Afghanistan", cases: 22, deaths: 0, recovered: 1 },
    { country: "Dominican Republic", cases: 21, deaths: 1, recovered: 0 },
    { country: "Liechtenstein", cases: 19, deaths: 0, recovered: 0 },
    { country: "Andorra", cases: 16, deaths: 0, recovered: 1 },
    { country: "Martinique", cases: 15, deaths: 1, recovered: 0 },
    { country: "Burkina Faso", cases: 15, deaths: 0, recovered: 0 },
    { country: "Ukraine", cases: 14, deaths: 2, recovered: 0 },
    { country: "Macao", cases: 13, deaths: 0, recovered: 10 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 0 },
    { country: "New Zealand", cases: 12, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 12, deaths: 0, recovered: 2 },
    { country: "Bolivia", cases: 11, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 11, deaths: 0, recovered: 0 },
    { country: "Uzbekistan", cases: 11, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 10, deaths: 0, recovered: 3 },
    { country: "Cameroon", cases: 10, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 9, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 9, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 9, deaths: 0, recovered: 0 },
    { country: "Guatemala", cases: 8, deaths: 1, recovered: 0 },
    { country: "Honduras", cases: 8, deaths: 0, recovered: 0 },
    { country: "Guyana", cases: 7, deaths: 1, recovered: 0 },
    { country: "Ghana", cases: 7, deaths: 0, recovered: 0 },
    { country: "Rwanda", cases: 7, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 6, deaths: 0, recovered: 0 },
    { country: "Ethiopia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Guadeloupe", cases: 6, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 5, deaths: 0, recovered: 0 },
    { country: "Guam", cases: 5, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 5, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 5, deaths: 0, recovered: 0 },
    { country: "Trinidad and Tobago", cases: 5, deaths: 0, recovered: 0 },
    { country: "Ivory Coast", cases: 4, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 4, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 4, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 3, deaths: 0, recovered: 1 },
    { country: "Aruba", cases: 3, deaths: 0, recovered: 0 },
    { country: "Curaçao", cases: 3, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 3, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 3, deaths: 0, recovered: 2 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "Barbados", cases: 2, deaths: 0, recovered: 0 },
    { country: "Liberia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 },
    { country: "U.S. Virgin Islands", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: {
        month: "March",
        day: 16,
        year: 2020
      },
      date: "March 16, 2020",
      country: "China",
      cases: 80880,
      deaths: 3213,
      recovered: 67819
    },
    { country: "Italy", cases: 27980, deaths: 2158, recovered: 2749 },
    { country: "Iran", cases: 14991, deaths: 853, recovered: 4590 },
    { country: "Spain", cases: 9428, deaths: 342, recovered: 530 },
    { country: "S. Korea", cases: 8236, deaths: 75, recovered: 1137 },
    { country: "Germany", cases: 7241, deaths: 15, recovered: 65 },
    { country: "France", cases: 6633, deaths: 148, recovered: 12 },
    { country: "USA", cases: 4314, deaths: 77, recovered: 73 },
    { country: "Switzerland", cases: 2353, deaths: 19, recovered: 4 },
    { country: "UK", cases: 1543, deaths: 55, recovered: 52 },
    { country: "Netherlands", cases: 1413, deaths: 24, recovered: 2 },
    { country: "Norway", cases: 1334, deaths: 3, recovered: 1 },
    { country: "Sweden", cases: 1119, deaths: 7, recovered: 1 },
    { country: "Belgium", cases: 1058, deaths: 10, recovered: 1 },
    { country: "Austria", cases: 1018, deaths: 3, recovered: 8 },
    { country: "Denmark", cases: 914, deaths: 4, recovered: 1 },
    { country: "Japan", cases: 895, deaths: 27, recovered: 144 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 456 },
    { country: "Malaysia", cases: 566, deaths: 0, recovered: 42 },
    { country: "Qatar", cases: 439, deaths: 0, recovered: 4 },
    { country: "Canada", cases: 406, deaths: 4, recovered: 11 },
    { country: "Australia", cases: 375, deaths: 5, recovered: 27 },
    { country: "Greece", cases: 352, deaths: 4, recovered: 8 },
    { country: "Czechia", cases: 344, deaths: 0, recovered: 3 },
    { country: "Portugal", cases: 331, deaths: 1, recovered: 3 },
    { country: "Israel", cases: 298, deaths: 0, recovered: 4 },
    { country: "Finland", cases: 278, deaths: 0, recovered: 10 },
    { country: "Slovenia", cases: 253, deaths: 1, recovered: 0 },
    { country: "Singapore", cases: 243, deaths: 0, recovered: 109 },
    { country: "Brazil", cases: 234, deaths: 0, recovered: 2 },
    { country: "Bahrain", cases: 227, deaths: 1, recovered: 81 },
    { country: "Estonia", cases: 205, deaths: 0, recovered: 1 },
    { country: "Iceland", cases: 198, deaths: 0, recovered: 0 },
    { country: "Pakistan", cases: 184, deaths: 1, recovered: 2 },
    { country: "Ireland", cases: 170, deaths: 2, recovered: 5 },
    { country: "Romania", cases: 168, deaths: 0, recovered: 9 },
    { country: "Poland", cases: 156, deaths: 3, recovered: 0 },
    { country: "Chile", cases: 156, deaths: 0, recovered: 0 },
    { country: "Hong Kong", cases: 155, deaths: 4, recovered: 81 },
    { country: "Egypt", cases: 150, deaths: 2, recovered: 32 },
    { country: "Thailand", cases: 147, deaths: 1, recovered: 35 },
    { country: "Philippines", cases: 142, deaths: 12, recovered: 5 },
    { country: "Indonesia", cases: 134, deaths: 5, recovered: 8 },
    { country: "Iraq", cases: 133, deaths: 10, recovered: 32 },
    { country: "Saudi Arabia", cases: 133, deaths: 0, recovered: 6 },
    { country: "India", cases: 129, deaths: 2, recovered: 13 },
    { country: "Kuwait", cases: 123, deaths: 0, recovered: 9 },
    { country: "San Marino", cases: 109, deaths: 7, recovered: 4 },
    { country: "Lebanon", cases: 109, deaths: 3, recovered: 3 },
    { country: "UAE", cases: 98, deaths: 0, recovered: 23 },
    { country: "Russia", cases: 93, deaths: 0, recovered: 8 },
    { country: "Peru", cases: 86, deaths: 0, recovered: 1 },
    { country: "Luxembourg", cases: 81, deaths: 1, recovered: 0 },
    { country: "Slovakia", cases: 72, deaths: 0, recovered: 0 },
    { country: "Taiwan", cases: 67, deaths: 1, recovered: 20 },
    { country: "South Africa", cases: 64, deaths: 0, recovered: 0 },
    { country: "Bulgaria", cases: 62, deaths: 2, recovered: 0 },
    { country: "Vietnam", cases: 61, deaths: 0, recovered: 16 },
    { country: "Algeria", cases: 60, deaths: 4, recovered: 10 },
    { country: "Ecuador", cases: 58, deaths: 2, recovered: 0 },
    { country: "Croatia", cases: 57, deaths: 0, recovered: 3 },
    { country: "Serbia", cases: 57, deaths: 0, recovered: 1 },
    { country: "Argentina", cases: 56, deaths: 2, recovered: 3 },
    { country: "Panama", cases: 55, deaths: 1, recovered: 0 },
    { country: "Brunei", cases: 54, deaths: 0, recovered: 0 },
    { country: "Colombia", cases: 54, deaths: 0, recovered: 1 },
    { country: "Mexico", cases: 53, deaths: 0, recovered: 4 },
    { country: "Albania", cases: 51, deaths: 1, recovered: 0 },
    { country: "Cyprus", cases: 46, deaths: 0, recovered: 0 },
    { country: "Armenia", cases: 45, deaths: 0, recovered: 1 },
    { country: "Hungary", cases: 39, deaths: 1, recovered: 1 },
    { country: "Palestine", cases: 39, deaths: 0, recovered: 0 },
    { country: "Belarus", cases: 36, deaths: 0, recovered: 3 },
    { country: "Costa Rica", cases: 35, deaths: 0, recovered: 0 },
    { country: "Latvia", cases: 34, deaths: 0, recovered: 1 },
    { country: "Georgia", cases: 33, deaths: 0, recovered: 1 },
    { country: "Malta", cases: 30, deaths: 0, recovered: 2 },
    { country: "Morocco", cases: 29, deaths: 1, recovered: 1 },
    { country: "Moldova", cases: 29, deaths: 0, recovered: 1 },
    { country: "Sri Lanka", cases: 28, deaths: 0, recovered: 1 },
    { country: "Azerbaijan", cases: 25, deaths: 1, recovered: 6 },
    { country: "Bosnia and Herzegovina", cases: 25, deaths: 0, recovered: 2 },
    { country: "Senegal", cases: 24, deaths: 0, recovered: 2 },
    { country: "Oman", cases: 22, deaths: 0, recovered: 9 },
    { country: "Afghanistan", cases: 21, deaths: 0, recovered: 1 },
    { country: "Dominican Republic", cases: 21, deaths: 0, recovered: 0 },
    { country: "Tunisia", cases: 20, deaths: 0, recovered: 0 },
    { country: "Jordan", cases: 19, deaths: 0, recovered: 1 },
    { country: "North Macedonia", cases: 19, deaths: 0, recovered: 1 },
    { country: "Faeroe Islands", cases: 18, deaths: 0, recovered: 0 },
    { country: "Turkey", cases: 18, deaths: 0, recovered: 0 },
    { country: "Lithuania", cases: 17, deaths: 0, recovered: 1 },
    { country: "Venezuela", cases: 17, deaths: 0, recovered: 0 },
    { country: "Burkina Faso", cases: 15, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 15, deaths: 0, recovered: 2 },
    { country: "Martinique", cases: 15, deaths: 0, recovered: 0 },
    { country: "Andorra", cases: 14, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 0 },
    { country: "Cambodia", cases: 12, deaths: 0, recovered: 1 },
    { country: "Macao", cases: 11, deaths: 0, recovered: 10 },
    { country: "Bolivia", cases: 11, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 11, deaths: 0, recovered: 0 },
    { country: "Kazakhstan", cases: 10, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 9, deaths: 0, recovered: 0 },
    { country: "Guatemala", cases: 8, deaths: 1, recovered: 0 },
    { country: "New Zealand", cases: 8, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 8, deaths: 0, recovered: 3 },
    { country: "Paraguay", cases: 8, deaths: 0, recovered: 0 },
    { country: "Uruguay", cases: 8, deaths: 0, recovered: 0 },
    { country: "Uzbekistan", cases: 8, deaths: 0, recovered: 0 },
    { country: "Guyana", cases: 7, deaths: 1, recovered: 0 },
    { country: "Ukraine", cases: 7, deaths: 1, recovered: 0 },
    { country: "Liechtenstein", cases: 7, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 6, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 6, deaths: 0, recovered: 0 },
    { country: "Ghana", cases: 6, deaths: 0, recovered: 0 },
    { country: "Guadeloupe", cases: 6, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 6, deaths: 0, recovered: 0 },
    { country: "Ethiopia", cases: 5, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 5, deaths: 0, recovered: 0 },
    { country: "Rwanda", cases: 5, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 4, deaths: 0, recovered: 0 },
    { country: "Ivory Coast", cases: 4, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 4, deaths: 0, recovered: 0 },
    { country: "Trinidad and Tobago", cases: 4, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 3, deaths: 0, recovered: 1 },
    { country: "Guam", cases: 3, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 3, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 3, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 2, deaths: 0, recovered: 1 },
    { country: "Aruba", cases: 2, deaths: 0, recovered: 0 },
    { country: "Curaçao", cases: 2, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 2, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: {
        month: "March",
        day: 15,
        year: 2020
      },
      date: "March 15, 2020",
      country: "China",
      cases: 80849,
      deaths: 3199,
      recovered: 66931
    },
    { country: "Italy", cases: 24747, deaths: 1809, recovered: 2335 },
    { country: "Iran", cases: 13938, deaths: 724, recovered: 4590 },
    { country: "S. Korea", cases: 8162, deaths: 75, recovered: 834 },
    { country: "Spain", cases: 7798, deaths: 292, recovered: 517 },
    { country: "Germany", cases: 5795, deaths: 11, recovered: 46 },
    { country: "France", cases: 4499, deaths: 91, recovered: 12 },
    { country: "USA", cases: 3312, deaths: 62, recovered: 56 },
    { country: "Switzerland", cases: 2217, deaths: 14, recovered: 4 },
    { country: "UK", cases: 1372, deaths: 35, recovered: 18 },
    { country: "Norway", cases: 1220, deaths: 3, recovered: 1 },
    { country: "Netherlands", cases: 1135, deaths: 20, recovered: 2 },
    { country: "Sweden", cases: 1024, deaths: 3, recovered: 1 },
    { country: "Belgium", cases: 886, deaths: 4, recovered: 1 },
    { country: "Denmark", cases: 864, deaths: 2, recovered: 1 },
    { country: "Austria", cases: 860, deaths: 1, recovered: 6 },
    { country: "Japan", cases: 839, deaths: 24, recovered: 144 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 456 },
    { country: "Malaysia", cases: 428, deaths: 0, recovered: 42 },
    { country: "Qatar", cases: 401, deaths: 0, recovered: 4 },
    { country: "Greece", cases: 331, deaths: 4, recovered: 8 },
    { country: "Canada", cases: 313, deaths: 1, recovered: 11 },
    { country: "Australia", cases: 300, deaths: 5, recovered: 27 },
    { country: "Czechia", cases: 253, deaths: 0, recovered: 0 },
    { country: "Portugal", cases: 245, deaths: 0, recovered: 2 },
    { country: "Finland", cases: 244, deaths: 0, recovered: 10 },
    { country: "Singapore", cases: 226, deaths: 0, recovered: 105 },
    { country: "Slovenia", cases: 219, deaths: 1, recovered: 0 },
    { country: "Bahrain", cases: 214, deaths: 0, recovered: 60 },
    { country: "Israel", cases: 213, deaths: 0, recovered: 4 },
    { country: "Estonia", cases: 171, deaths: 0, recovered: 1 },
    { country: "Iceland", cases: 171, deaths: 0, recovered: 0 },
    { country: "Hong Kong", cases: 149, deaths: 4, recovered: 81 },
    { country: "Philippines", cases: 140, deaths: 11, recovered: 2 },
    { country: "Romania", cases: 139, deaths: 0, recovered: 9 },
    { country: "Ireland", cases: 129, deaths: 2, recovered: 1 },
    { country: "Brazil", cases: 121, deaths: 0, recovered: 1 },
    { country: "Poland", cases: 119, deaths: 3, recovered: 13 },
    { country: "Indonesia", cases: 117, deaths: 5, recovered: 8 },
    { country: "Iraq", cases: 116, deaths: 10, recovered: 26 },
    { country: "Thailand", cases: 114, deaths: 1, recovered: 35 },
    { country: "Kuwait", cases: 112, deaths: 0, recovered: 9 },
    { country: "India", cases: 111, deaths: 2, recovered: 10 },
    { country: "Egypt", cases: 110, deaths: 2, recovered: 27 },
    { country: "Saudi Arabia", cases: 103, deaths: 0, recovered: 2 },
    { country: "San Marino", cases: 101, deaths: 5, recovered: 4 },
    { country: "Lebanon", cases: 99, deaths: 3, recovered: 1 },
    { country: "UAE", cases: 98, deaths: 0, recovered: 20 },
    { country: "Chile", cases: 75, deaths: 0, recovered: 0 },
    { country: "Russia", cases: 63, deaths: 0, recovered: 8 },
    { country: "Luxembourg", cases: 59, deaths: 1, recovered: 0 },
    { country: "Taiwan", cases: 59, deaths: 1, recovered: 20 },
    { country: "Vietnam", cases: 56, deaths: 0, recovered: 16 },
    { country: "Slovakia", cases: 54, deaths: 0, recovered: 0 },
    { country: "Pakistan", cases: 53, deaths: 0, recovered: 2 },
    { country: "Bulgaria", cases: 51, deaths: 2, recovered: 0 },
    { country: "South Africa", cases: 51, deaths: 0, recovered: 0 },
    { country: "Brunei", cases: 50, deaths: 0, recovered: 0 },
    { country: "Croatia", cases: 49, deaths: 0, recovered: 2 },
    { country: "Algeria", cases: 48, deaths: 4, recovered: 10 },
    { country: "Serbia", cases: 48, deaths: 0, recovered: 1 },
    { country: "Argentina", cases: 45, deaths: 2, recovered: 0 },
    { country: "Panama", cases: 43, deaths: 1, recovered: 0 },
    { country: "Peru", cases: 43, deaths: 0, recovered: 0 },
    { country: "Albania", cases: 42, deaths: 1, recovered: 0 },
    { country: "Mexico", cases: 41, deaths: 0, recovered: 4 },
    { country: "Palestine", cases: 38, deaths: 0, recovered: 0 },
    { country: "Colombia", cases: 34, deaths: 0, recovered: 0 },
    { country: "Georgia", cases: 33, deaths: 0, recovered: 1 },
    { country: "Hungary", cases: 32, deaths: 1, recovered: 1 },
    { country: "Latvia", cases: 30, deaths: 0, recovered: 1 },
    { country: "Ecuador", cases: 28, deaths: 2, recovered: 0 },
    { country: "Morocco", cases: 28, deaths: 1, recovered: 1 },
    { country: "Belarus", cases: 27, deaths: 0, recovered: 3 },
    { country: "Costa Rica", cases: 27, deaths: 0, recovered: 0 },
    { country: "Armenia", cases: 26, deaths: 0, recovered: 0 },
    { country: "Cyprus", cases: 26, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 24, deaths: 0, recovered: 2 },
    { country: "Bosnia and Herzegovina", cases: 24, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 23, deaths: 1, recovered: 6 },
    { country: "Moldova", cases: 23, deaths: 0, recovered: 0 },
    { country: "Oman", cases: 22, deaths: 0, recovered: 9 },
    { country: "Malta", cases: 21, deaths: 0, recovered: 2 },
    { country: "Tunisia", cases: 20, deaths: 0, recovered: 0 },
    { country: "North Macedonia", cases: 19, deaths: 0, recovered: 1 },
    { country: "Sri Lanka", cases: 18, deaths: 0, recovered: 1 },
    { country: "Afghanistan", cases: 16, deaths: 0, recovered: 1 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 0 },
    { country: "Cambodia", cases: 12, deaths: 0, recovered: 1 },
    { country: "Lithuania", cases: 12, deaths: 0, recovered: 1 },
    { country: "Dominican Republic", cases: 11, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 11, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 10, deaths: 0, recovered: 10 },
    { country: "Bolivia", cases: 10, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 10, deaths: 0, recovered: 2 },
    { country: "Martinique", cases: 10, deaths: 0, recovered: 0 },
    { country: "Venezuela", cases: 10, deaths: 0, recovered: 0 },
    { country: "Kazakhstan", cases: 9, deaths: 0, recovered: 0 },
    { country: "Jordan", cases: 8, deaths: 0, recovered: 1 },
    { country: "New Zealand", cases: 8, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 7, deaths: 0, recovered: 0 },
    { country: "Liechtenstein", cases: 7, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 7, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 7, deaths: 0, recovered: 0 },
    { country: "Ghana", cases: 6, deaths: 0, recovered: 0 },
    { country: "Turkey", cases: 6, deaths: 0, recovered: 0 },
    { country: "Uruguay", cases: 6, deaths: 0, recovered: 0 },
    { country: "Andorra", cases: 5, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 5, deaths: 0, recovered: 2 },
    { country: "Guyana", cases: 4, deaths: 1, recovered: 0 },
    { country: "Ivory Coast", cases: 4, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 4, deaths: 0, recovered: 0 },
    { country: "Ethiopia", cases: 4, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 4, deaths: 0, recovered: 0 },
    { country: "Ukraine", cases: 3, deaths: 1, recovered: 0 },
    { country: "Burkina Faso", cases: 3, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 3, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Guadeloupe", cases: 3, deaths: 0, recovered: 0 },
    { country: "Guam", cases: 3, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 3, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 3, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 2, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 2, deaths: 0, recovered: 1 },
    { country: "Aruba", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 2, deaths: 0, recovered: 0 },
    { country: "Curaçao", cases: 2, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 2, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 2, deaths: 0, recovered: 0 },
    { country: "Trinidad and Tobago", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: { month: "March", day: 14, year: 2020 },
      date: "March 14, 2020",
      country: "China",
      cases: 80824,
      deaths: 3189,
      recovered: 65573
    },
    { country: "Italy", cases: 21157, deaths: 1441, recovered: 1966 },
    { country: "Iran", cases: 12729, deaths: 611, recovered: 4339 },
    { country: "S. Korea", cases: 8086, deaths: 72, recovered: 714 },
    { country: "Spain", cases: 6391, deaths: 195, recovered: 517 },
    { country: "Germany", cases: 4599, deaths: 9, recovered: 46 },
    { country: "France", cases: 4469, deaths: 91, recovered: 12 },
    { country: "USA", cases: 2836, deaths: 57, recovered: 49 },
    { country: "Switzerland", cases: 1375, deaths: 13, recovered: 4 },
    { country: "UK", cases: 1140, deaths: 21, recovered: 18 },
    { country: "Norway", cases: 1108, deaths: 3, recovered: 1 },
    { country: "Sweden", cases: 961, deaths: 2, recovered: 1 },
    { country: "Netherlands", cases: 959, deaths: 12, recovered: 2 },
    { country: "Denmark", cases: 827, deaths: 1, recovered: 1 },
    { country: "Japan", cases: 804, deaths: 22, recovered: 144 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 456 },
    { country: "Belgium", cases: 689, deaths: 4, recovered: 1 },
    { country: "Austria", cases: 655, deaths: 1, recovered: 6 },
    { country: "Qatar", cases: 337, deaths: 0, recovered: 4 },
    { country: "Australia", cases: 248, deaths: 3, recovered: 27 },
    { country: "Canada", cases: 247, deaths: 1, recovered: 11 },
    { country: "Malaysia", cases: 238, deaths: 0, recovered: 35 },
    { country: "Greece", cases: 228, deaths: 3, recovered: 8 },
    { country: "Finland", cases: 225, deaths: 0, recovered: 10 },
    { country: "Bahrain", cases: 212, deaths: 0, recovered: 60 },
    { country: "Singapore", cases: 212, deaths: 0, recovered: 105 },
    { country: "Israel", cases: 193, deaths: 0, recovered: 4 },
    { country: "Czechia", cases: 189, deaths: 0, recovered: 0 },
    { country: "Slovenia", cases: 181, deaths: 1, recovered: 0 },
    { country: "Portugal", cases: 169, deaths: 0, recovered: 2 },
    { country: "Iceland", cases: 161, deaths: 0, recovered: 0 },
    { country: "Brazil", cases: 151, deaths: 0, recovered: 1 },
    { country: "Hong Kong", cases: 142, deaths: 4, recovered: 81 },
    { country: "Ireland", cases: 129, deaths: 2, recovered: 0 },
    { country: "Romania", cases: 123, deaths: 0, recovered: 9 },
    { country: "Estonia", cases: 115, deaths: 0, recovered: 0 },
    { country: "Philippines", cases: 111, deaths: 8, recovered: 2 },
    { country: "Iraq", cases: 110, deaths: 10, recovered: 26 },
    { country: "Egypt", cases: 109, deaths: 2, recovered: 27 },
    { country: "Kuwait", cases: 104, deaths: 0, recovered: 5 },
    { country: "Poland", cases: 103, deaths: 3, recovered: 13 },
    { country: "Saudi Arabia", cases: 103, deaths: 0, recovered: 1 },
    { country: "San Marino", cases: 101, deaths: 5, recovered: 4 },
    { country: "India", cases: 97, deaths: 2, recovered: 10 },
    { country: "Indonesia", cases: 96, deaths: 5, recovered: 8 },
    { country: "Lebanon", cases: 93, deaths: 3, recovered: 1 },
    { country: "UAE", cases: 85, deaths: 0, recovered: 20 },
    { country: "Thailand", cases: 82, deaths: 1, recovered: 35 },
    { country: "Chile", cases: 61, deaths: 0, recovered: 0 },
    { country: "Russia", cases: 59, deaths: 0, recovered: 8 },
    { country: "Taiwan", cases: 53, deaths: 1, recovered: 20 },
    { country: "Vietnam", cases: 53, deaths: 0, recovered: 16 },
    { country: "Luxembourg", cases: 51, deaths: 1, recovered: 0 },
    { country: "Serbia", cases: 46, deaths: 0, recovered: 0 },
    { country: "Argentina", cases: 45, deaths: 2, recovered: 0 },
    { country: "Slovakia", cases: 44, deaths: 0, recovered: 0 },
    { country: "Bulgaria", cases: 41, deaths: 2, recovered: 0 },
    { country: "Brunei", cases: 40, deaths: 0, recovered: 0 },
    { country: "Croatia", cases: 39, deaths: 0, recovered: 1 },
    { country: "Albania", cases: 38, deaths: 1, recovered: 0 },
    { country: "Peru", cases: 38, deaths: 0, recovered: 0 },
    { country: "South Africa", cases: 38, deaths: 0, recovered: 0 },
    { country: "Palestine", cases: 38, deaths: 0, recovered: 0 },
    { country: "Algeria", cases: 37, deaths: 3, recovered: 10 },
    { country: "Panama", cases: 36, deaths: 1, recovered: 0 },
    { country: "Pakistan", cases: 31, deaths: 0, recovered: 2 },
    { country: "Georgia", cases: 30, deaths: 0, recovered: 0 },
    { country: "Hungary", cases: 30, deaths: 0, recovered: 1 },
    { country: "Ecuador", cases: 28, deaths: 1, recovered: 0 },
    { country: "Belarus", cases: 27, deaths: 0, recovered: 3 },
    { country: "Costa Rica", cases: 27, deaths: 0, recovered: 0 },
    { country: "Latvia", cases: 26, deaths: 0, recovered: 1 },
    { country: "Mexico", cases: 26, deaths: 0, recovered: 4 },
    { country: "Cyprus", cases: 26, deaths: 0, recovered: 0 },
    { country: "Colombia", cases: 22, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 21, deaths: 0, recovered: 2 },
    { country: "Bosnia and Herzegovina", cases: 21, deaths: 0, recovered: 0 },
    { country: "Oman", cases: 19, deaths: 0, recovered: 9 },
    { country: "Morocco", cases: 18, deaths: 1, recovered: 1 },
    { country: "Armenia", cases: 18, deaths: 0, recovered: 0 },
    { country: "Tunisia", cases: 18, deaths: 0, recovered: 0 },
    { country: "Malta", cases: 18, deaths: 0, recovered: 1 },
    { country: "Azerbaijan", cases: 15, deaths: 1, recovered: 3 },
    { country: "North Macedonia", cases: 13, deaths: 0, recovered: 1 },
    { country: "Moldova", cases: 12, deaths: 0, recovered: 0 },
    { country: "Afghanistan", cases: 11, deaths: 0, recovered: 0 },
    { country: "Dominican Republic", cases: 11, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 10, deaths: 0, recovered: 10 },
    { country: "Sri Lanka", cases: 10, deaths: 0, recovered: 1 },
    { country: "Bolivia", cases: 10, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 10, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 10, deaths: 0, recovered: 0 },
    { country: "Lithuania", cases: 9, deaths: 0, recovered: 1 },
    { country: "Faeroe Islands", cases: 9, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 8, deaths: 0, recovered: 0 },
    { country: "Cambodia", cases: 7, deaths: 0, recovered: 1 },
    { country: "New Zealand", cases: 7, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 7, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 7, deaths: 0, recovered: 0 },
    { country: "Kazakhstan", cases: 6, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 6, deaths: 0, recovered: 0 },
    { country: "Turkey", cases: 6, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 5, deaths: 0, recovered: 2 },
    { country: "Cuba", cases: 4, deaths: 0, recovered: 0 },
    { country: "Liechtenstein", cases: 4, deaths: 0, recovered: 0 },
    { country: "Uruguay", cases: 4, deaths: 0, recovered: 0 },
    { country: "Ukraine", cases: 3, deaths: 1, recovered: 0 },
    { country: "Channel Islands", cases: 3, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Guadeloupe", cases: 3, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 3, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 3, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 2, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 2, deaths: 0, recovered: 0 },
    { country: "Aruba", cases: 2, deaths: 0, recovered: 0 },
    { country: "Burkina Faso", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 2, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 2, deaths: 0, recovered: 0 },
    { country: "Ghana", cases: 2, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 2, deaths: 0, recovered: 0 },
    { country: "Trinidad and Tobago", cases: 2, deaths: 0, recovered: 0 },
    { country: "Venezuela", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      dateInfo: { month: "March", day: 13, year: 2020 },
      date: "March 13, 2020",
      country: "China",
      cases: 80815,
      deaths: 3177,
      recovered: 64152
    },
    { country: "Italy", cases: 15113, deaths: 1016, recovered: 1258 },
    { country: "Iran", cases: 11364, deaths: 514, recovered: 3529 },
    { country: "S. Korea", cases: 7979, deaths: 71, recovered: 510 },
    { country: "Spain", cases: 4334, deaths: 122, recovered: 193 },
    { country: "Germany", cases: 3117, deaths: 7, recovered: 46 },
    { country: "France", cases: 2876, deaths: 61, recovered: 12 },
    { country: "USA", cases: 1832, deaths: 41, recovered: 31 },
    { country: "Switzerland", cases: 1135, deaths: 7, recovered: 4 },
    { country: "Norway", cases: 898, deaths: 1, recovered: 1 },
    { country: "Sweden", cases: 810, deaths: 1, recovered: 1 },
    { country: "Netherlands", cases: 804, deaths: 10, recovered: 2 },
    { country: "UK", cases: 798, deaths: 10, recovered: 18 },
    { country: "Denmark", cases: 788, deaths: 0, recovered: 1 },
    { country: "Japan", cases: 701, deaths: 19, recovered: 118 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 325 },
    { country: "Belgium", cases: 556, deaths: 3, recovered: 1 },
    { country: "Austria", cases: 504, deaths: 1, recovered: 6 },
    { country: "Qatar", cases: 262, deaths: 0, recovered: 0 },
    { country: "Bahrain", cases: 210, deaths: 0, recovered: 44 },
    { country: "Singapore", cases: 200, deaths: 0, recovered: 97 },
    { country: "Australia", cases: 199, deaths: 3, recovered: 26 },
    { country: "Malaysia", cases: 197, deaths: 0, recovered: 32 },
    { country: "Canada", cases: 158, deaths: 1, recovered: 11 },
    { country: "Finland", cases: 155, deaths: 0, recovered: 1 },
    { country: "Brazil", cases: 151, deaths: 0, recovered: 0 },
    { country: "Slovenia", cases: 141, deaths: 0, recovered: 0 },
    { country: "Hong Kong", cases: 132, deaths: 4, recovered: 77 },
    { country: "Israel", cases: 126, deaths: 0, recovered: 4 },
    { country: "Czechia", cases: 120, deaths: 0, recovered: 0 },
    { country: "Greece", cases: 117, deaths: 1, recovered: 2 },
    { country: "Iceland", cases: 117, deaths: 0, recovered: 0 },
    { country: "Portugal", cases: 112, deaths: 0, recovered: 1 },
    { country: "Kuwait", cases: 100, deaths: 0, recovered: 5 },
    { country: "UAE", cases: 85, deaths: 0, recovered: 20 },
    { country: "Iraq", cases: 83, deaths: 8, recovered: 24 },
    { country: "India", cases: 81, deaths: 1, recovered: 4 },
    { country: "San Marino", cases: 80, deaths: 5, recovered: 2 },
    { country: "Egypt", cases: 80, deaths: 2, recovered: 27 },
    { country: "Romania", cases: 79, deaths: 0, recovered: 7 },
    { country: "Lebanon", cases: 77, deaths: 3, recovered: 1 },
    { country: "Thailand", cases: 75, deaths: 1, recovered: 35 },
    { country: "Ireland", cases: 70, deaths: 1, recovered: 0 },
    { country: "Indonesia", cases: 69, deaths: 4, recovered: 5 },
    { country: "Philippines", cases: 64, deaths: 5, recovered: 2 },
    { country: "Poland", cases: 64, deaths: 1, recovered: 0 },
    { country: "Saudi Arabia", cases: 62, deaths: 0, recovered: 1 },
    { country: "Taiwan", cases: 50, deaths: 1, recovered: 20 },
    { country: "Russia", cases: 45, deaths: 0, recovered: 8 },
    { country: "Vietnam", cases: 44, deaths: 0, recovered: 16 },
    { country: "Estonia", cases: 41, deaths: 0, recovered: 0 },
    { country: "Brunei", cases: 37, deaths: 0, recovered: 0 },
    { country: "Palestine", cases: 35, deaths: 0, recovered: 0 },
    { country: "Albania", cases: 33, deaths: 1, recovered: 0 },
    { country: "Chile", cases: 33, deaths: 0, recovered: 0 },
    { country: "Argentina", cases: 31, deaths: 1, recovered: 0 },
    { country: "Croatia", cases: 31, deaths: 0, recovered: 1 },
    { country: "Serbia", cases: 31, deaths: 0, recovered: 0 },
    { country: "Slovakia", cases: 30, deaths: 0, recovered: 0 },
    { country: "Peru", cases: 28, deaths: 0, recovered: 0 },
    { country: "Panama", cases: 27, deaths: 1, recovered: 0 },
    { country: "Algeria", cases: 26, deaths: 2, recovered: 10 },
    { country: "Luxembourg", cases: 26, deaths: 0, recovered: 0 },
    { country: "Georgia", cases: 25, deaths: 0, recovered: 0 },
    { country: "South Africa", cases: 24, deaths: 0, recovered: 0 },
    { country: "Bulgaria", cases: 23, deaths: 1, recovered: 0 },
    { country: "Costa Rica", cases: 23, deaths: 0, recovered: 0 },
    { country: "Pakistan", cases: 22, deaths: 0, recovered: 2 },
    { country: "Belarus", cases: 21, deaths: 0, recovered: 3 },
    { country: "Ecuador", cases: 19, deaths: 0, recovered: 0 },
    { country: "Oman", cases: 19, deaths: 0, recovered: 9 },
    { country: "Hungary", cases: 19, deaths: 0, recovered: 0 },
    { country: "Latvia", cases: 17, deaths: 0, recovered: 1 },
    { country: "Azerbaijan", cases: 15, deaths: 1, recovered: 3 },
    { country: "North Macedonia", cases: 14, deaths: 0, recovered: 1 },
    { country: "Cyprus", cases: 14, deaths: 0, recovered: 0 },
    { country: "Tunisia", cases: 13, deaths: 0, recovered: 0 },
    { country: "Bosnia and Herzegovina", cases: 13, deaths: 0, recovered: 0 },
    { country: "Colombia", cases: 13, deaths: 0, recovered: 0 },
    { country: "Mexico", cases: 12, deaths: 0, recovered: 4 },
    { country: "Malta", cases: 12, deaths: 0, recovered: 1 },
    { country: "Macao", cases: 10, deaths: 0, recovered: 10 },
    { country: "Senegal", cases: 10, deaths: 0, recovered: 2 },
    { country: "Maldives", cases: 9, deaths: 0, recovered: 0 },
    { country: "Armenia", cases: 8, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 8, deaths: 0, recovered: 0 },
    { country: "Morocco", cases: 7, deaths: 1, recovered: 0 },
    { country: "Afghanistan", cases: 7, deaths: 0, recovered: 0 },
    { country: "Cambodia", cases: 7, deaths: 0, recovered: 1 },
    { country: "Lithuania", cases: 6, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 6, deaths: 0, recovered: 0 },
    { country: "Moldova", cases: 6, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 6, deaths: 0, recovered: 0 },
    { country: "Dominican Republic", cases: 5, deaths: 0, recovered: 0 },
    { country: "New Zealand", cases: 5, deaths: 0, recovered: 0 },
    { country: "Sri Lanka", cases: 5, deaths: 0, recovered: 1 },
    { country: "Réunion", cases: 5, deaths: 0, recovered: 0 },
    { country: "Liechtenstein", cases: 4, deaths: 0, recovered: 0 },
    { country: "Ukraine", cases: 3, deaths: 1, recovered: 0 },
    { country: "Bangladesh", cases: 3, deaths: 0, recovered: 1 },
    { country: "Bolivia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 3, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 3, deaths: 0, recovered: 0 },
    {
      country: "Faeroe Islands",
      cases: 3,
      todayCases: 1,
      deaths: 0,
      todayDeaths: 0,
      recovered: 0,
      critical: 0
    },
    { country: "French Polynesia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 3, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 2, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 2, deaths: 0, recovered: 0 },
    { country: "Burkina Faso", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 2, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 2, deaths: 0, recovered: 0 },
    { country: "Ghana", cases: 2, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 2, deaths: 0, recovered: 0 },
    { country: "Kazakhstan", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Turkey", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      date: "March 12, 2020",
      country: "China",
      cases: 80796,
      deaths: 3169,
      recovered: 62826
    },
    { country: "Italy", cases: 12462, deaths: 827, recovered: 1045 },
    { country: "Iran", cases: 10075, deaths: 429, recovered: 3276 },
    { country: "S. Korea", cases: 7869, deaths: 66, recovered: 333 },
    { country: "Spain", cases: 3003, deaths: 84, recovered: 189 },
    { country: "Germany", cases: 2355, deaths: 4, recovered: 25 },
    { country: "France", cases: 2281, deaths: 48, recovered: 12 },
    { country: "USA", cases: 1375, deaths: 38, recovered: 15 },
    { country: "Switzerland", cases: 867, deaths: 6, recovered: 4 },
    { country: "Norway", cases: 713, deaths: 0, recovered: 1 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 325 },
    { country: "Japan", cases: 643, deaths: 16, recovered: 118 },
    { country: "Sweden", cases: 635, deaths: 1, recovered: 1 },
    { country: "Denmark", cases: 615, deaths: 0, recovered: 1 },
    { country: "Netherlands", cases: 614, deaths: 5, recovered: 2 },
    { country: "UK", cases: 590, deaths: 10, recovered: 18 },
    { country: "Belgium", cases: 399, deaths: 3, recovered: 1 },
    { country: "Austria", cases: 302, deaths: 1, recovered: 4 },
    { country: "Qatar", cases: 262, deaths: 0, recovered: 0 },
    { country: "Bahrain", cases: 195, deaths: 0, recovered: 35 },
    { country: "Singapore", cases: 178, deaths: 0, recovered: 96 },
    { country: "Malaysia", cases: 158, deaths: 0, recovered: 26 },
    { country: "Australia", cases: 156, deaths: 3, recovered: 26 },
    { country: "Hong Kong", cases: 130, deaths: 3, recovered: 77 },
    { country: "Canada", cases: 118, deaths: 1, recovered: 9 },
    { country: "Finland", cases: 109, deaths: 0, recovered: 1 },
    { country: "Iceland", cases: 103, deaths: 0, recovered: 0 },
    { country: "Israel", cases: 100, deaths: 0, recovered: 4 },
    { country: "Greece", cases: 99, deaths: 1, recovered: 0 },
    { country: "Czechia", cases: 96, deaths: 0, recovered: 0 },
    { country: "Slovenia", cases: 89, deaths: 0, recovered: 0 },
    { country: "UAE", cases: 85, deaths: 0, recovered: 17 },
    { country: "Kuwait", cases: 80, deaths: 0, recovered: 5 },
    { country: "Portugal", cases: 78, deaths: 0, recovered: 0 },
    { country: "India", cases: 74, deaths: 0, recovered: 4 },
    { country: "Iraq", cases: 71, deaths: 8, recovered: 15 },
    { country: "Thailand", cases: 70, deaths: 1, recovered: 35 },
    { country: "San Marino", cases: 69, deaths: 3, recovered: 0 },
    { country: "Brazil", cases: 69, deaths: 0, recovered: 0 },
    { country: "Lebanon", cases: 68, deaths: 3, recovered: 1 },
    { country: "Egypt", cases: 67, deaths: 1, recovered: 27 },
    { country: "Philippines", cases: 52, deaths: 2, recovered: 2 },
    { country: "Poland", cases: 51, deaths: 1, recovered: 0 },
    { country: "Taiwan", cases: 49, deaths: 1, recovered: 20 },
    { country: "Romania", cases: 48, deaths: 0, recovered: 6 },
    { country: "Saudi Arabia", cases: 45, deaths: 0, recovered: 1 },
    { country: "Ireland", cases: 43, deaths: 1, recovered: 0 },
    { country: "Vietnam", cases: 39, deaths: 0, recovered: 16 },
    { country: "Indonesia", cases: 34, deaths: 1, recovered: 3 },
    { country: "Palestine", cases: 31, deaths: 0, recovered: 0 },
    { country: "Russia", cases: 28, deaths: 0, recovered: 3 },
    { country: "Georgia", cases: 25, deaths: 0, recovered: 0 },
    { country: "Brunei", cases: 25, deaths: 0, recovered: 0 },
    { country: "Algeria", cases: 24, deaths: 1, recovered: 8 },
    { country: "Albania", cases: 23, deaths: 1, recovered: 0 },
    { country: "Chile", cases: 23, deaths: 0, recovered: 0 },
    { country: "Costa Rica", cases: 22, deaths: 0, recovered: 0 },
    { country: "Argentina", cases: 21, deaths: 1, recovered: 0 },
    { country: "Pakistan", cases: 21, deaths: 0, recovered: 2 },
    { country: "Croatia", cases: 19, deaths: 0, recovered: 1 },
    { country: "Luxembourg", cases: 19, deaths: 0, recovered: 0 },
    { country: "Serbia", cases: 19, deaths: 0, recovered: 0 },
    { country: "Oman", cases: 18, deaths: 0, recovered: 9 },
    { country: "Ecuador", cases: 17, deaths: 0, recovered: 0 },
    { country: "Estonia", cases: 17, deaths: 0, recovered: 0 },
    { country: "Peru", cases: 17, deaths: 0, recovered: 0 },
    { country: "South Africa", cases: 17, deaths: 0, recovered: 0 },
    { country: "Latvia", cases: 16, deaths: 0, recovered: 1 },
    { country: "Hungary", cases: 16, deaths: 0, recovered: 0 },
    { country: "Slovakia", cases: 16, deaths: 0, recovered: 0 },
    { country: "Panama", cases: 14, deaths: 1, recovered: 0 },
    { country: "Belarus", cases: 12, deaths: 0, recovered: 3 },
    { country: "Mexico", cases: 12, deaths: 0, recovered: 4 },
    { country: "Azerbaijan", cases: 11, deaths: 0, recovered: 3 },
    { country: "Bosnia and Herzegovina", cases: 11, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 10, deaths: 0, recovered: 10 },
    { country: "North Macedonia", cases: 9, deaths: 0, recovered: 1 },
    { country: "Colombia", cases: 9, deaths: 0, recovered: 0 },
    { country: "Malta", cases: 9, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 8, deaths: 0, recovered: 0 },
    { country: "Bulgaria", cases: 7, deaths: 1, recovered: 0 },
    { country: "Afghanistan", cases: 7, deaths: 0, recovered: 0 },
    { country: "Tunisia", cases: 7, deaths: 0, recovered: 0 },
    { country: "Cyprus", cases: 7, deaths: 0, recovered: 0 },
    { country: "Morocco", cases: 6, deaths: 1, recovered: 0 },
    { country: "French Guiana", cases: 6, deaths: 0, recovered: 0 },
    { country: "Cambodia", cases: 5, deaths: 0, recovered: 1 },
    { country: "Dominican Republic", cases: 5, deaths: 0, recovered: 0 },
    { country: "New Zealand", cases: 5, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 5, deaths: 0, recovered: 1 },
    { country: "Paraguay", cases: 5, deaths: 0, recovered: 0 },
    { country: "Armenia", cases: 4, deaths: 0, recovered: 0 },
    { country: "Liechtenstein", cases: 4, deaths: 0, recovered: 0 },
    { country: "Moldova", cases: 4, deaths: 0, recovered: 0 },
    { country: "Lithuania", cases: 3, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 3, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 3, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 3, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 3, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 2, deaths: 0, recovered: 0 },
    { country: "Sri Lanka", cases: 2, deaths: 0, recovered: 1 },
    { country: "Bolivia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Burkina Faso", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 2, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 2, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Guyana", cases: 1, deaths: 1, recovered: 0 },
    { country: "Andorra", cases: 1, deaths: 0, recovered: 0 },
    { country: "Jordan", cases: 1, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 1, deaths: 0, recovered: 0 },
    { country: "Nepal", cases: 1, deaths: 0, recovered: 1 },
    { country: "Ukraine", cases: 1, deaths: 0, recovered: 0 },
    { country: "Bhutan", cases: 1, deaths: 0, recovered: 0 },
    { country: "Ivory Coast", cases: 1, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 1, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 1, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 1, deaths: 0, recovered: 1 },
    { country: "Vatican City", cases: 1, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 1, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 1, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 1, deaths: 0, recovered: 0 },
    { country: "St. Vincent Grenadines", cases: 1, deaths: 0, recovered: 0 },
    { country: "Togo", cases: 1, deaths: 0, recovered: 0 },
    { country: "Turkey", cases: 1, deaths: 0, recovered: 0 }
  ],
  [
    {
      date: "March 11, 2020",
      country: "China",
      cases: 80790,
      deaths: 3158,
      recovered: 61611
    },
    { country: "Italy", cases: 10149, deaths: 631, recovered: 1004 },
    { country: "Iran", cases: 9000, deaths: 354, recovered: 2959 },
    { country: "S. Korea", cases: 7755, deaths: 61, recovered: 288 },
    { country: "Spain", cases: 2182, deaths: 49, recovered: 138 },
    { country: "France", cases: 1784, deaths: 33, recovered: 12 },
    { country: "Germany", cases: 1656, deaths: 3, recovered: 25 },
    { country: "USA", cases: 1016, deaths: 31, recovered: 15 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 325 },
    { country: "Switzerland", cases: 652, deaths: 4, recovered: 3 },
    { country: "Japan", cases: 587, deaths: 12, recovered: 102 },
    { country: "Netherlands", cases: 503, deaths: 5, recovered: 0 },
    { country: "Sweden", cases: 477, deaths: 0, recovered: 1 },
    { country: "UK", cases: 456, deaths: 6, recovered: 18 },
    { country: "Norway", cases: 443, deaths: 0, recovered: 1 },
    { country: "Denmark", cases: 340, deaths: 0, recovered: 1 },
    { country: "Belgium", cases: 314, deaths: 1, recovered: 1 },
    { country: "Austria", cases: 206, deaths: 0, recovered: 4 },
    { country: "Bahrain", cases: 189, deaths: 0, recovered: 30 },
    { country: "Singapore", cases: 178, deaths: 0, recovered: 96 },
    { country: "Malaysia", cases: 149, deaths: 0, recovered: 26 },
    { country: "Australia", cases: 127, deaths: 3, recovered: 24 },
    { country: "Hong Kong", cases: 126, deaths: 3, recovered: 60 },
    { country: "Canada", cases: 97, deaths: 1, recovered: 9 },
    { country: "Greece", cases: 90, deaths: 0, recovered: 0 },
    { country: "Iceland", cases: 85, deaths: 0, recovered: 1 },
    { country: "Israel", cases: 76, deaths: 0, recovered: 4 },
    { country: "UAE", cases: 74, deaths: 0, recovered: 17 },
    { country: "Kuwait", cases: 72, deaths: 0, recovered: 2 },
    { country: "Iraq", cases: 71, deaths: 7, recovered: 15 },
    { country: "Czechia", cases: 67, deaths: 0, recovered: 0 },
    { country: "San Marino", cases: 62, deaths: 2, recovered: 0 },
    { country: "India", cases: 62, deaths: 0, recovered: 4 },
    { country: "Lebanon", cases: 61, deaths: 2, recovered: 1 },
    { country: "Egypt", cases: 60, deaths: 1, recovered: 27 },
    { country: "Thailand", cases: 59, deaths: 1, recovered: 34 },
    { country: "Finland", cases: 59, deaths: 0, recovered: 1 },
    { country: "Portugal", cases: 59, deaths: 0, recovered: 0 },
    { country: "Slovenia", cases: 57, deaths: 0, recovered: 0 },
    { country: "Philippines", cases: 49, deaths: 1, recovered: 2 },
    { country: "Taiwan", cases: 48, deaths: 1, recovered: 17 },
    { country: "Vietnam", cases: 38, deaths: 0, recovered: 16 },
    { country: "Romania", cases: 36, deaths: 0, recovered: 6 },
    { country: "Brazil", cases: 35, deaths: 0, recovered: 0 },
    { country: "Indonesia", cases: 34, deaths: 1, recovered: 2 },
    { country: "Ireland", cases: 34, deaths: 0, recovered: 0 },
    { country: "Palestine", cases: 30, deaths: 0, recovered: 0 },
    { country: "Poland", cases: 27, deaths: 0, recovered: 0 },
    { country: "Qatar", cases: 24, deaths: 0, recovered: 0 },
    { country: "Georgia", cases: 23, deaths: 0, recovered: 0 },
    { country: "Saudi Arabia", cases: 21, deaths: 0, recovered: 1 },
    { country: "Algeria", cases: 20, deaths: 0, recovered: 0 },
    { country: "Russia", cases: 20, deaths: 0, recovered: 3 },
    { country: "Argentina", cases: 19, deaths: 1, recovered: 0 },
    { country: "Pakistan", cases: 19, deaths: 0, recovered: 2 },
    { country: "Oman", cases: 18, deaths: 0, recovered: 9 },
    { country: "Ecuador", cases: 17, deaths: 0, recovered: 0 },
    { country: "Chile", cases: 17, deaths: 0, recovered: 0 },
    { country: "Croatia", cases: 16, deaths: 0, recovered: 0 },
    { country: "Estonia", cases: 13, deaths: 0, recovered: 0 },
    { country: "Costa Rica", cases: 13, deaths: 0, recovered: 0 },
    { country: "Hungary", cases: 13, deaths: 0, recovered: 0 },
    { country: "South Africa", cases: 13, deaths: 0, recovered: 0 },
    { country: "Albania", cases: 12, deaths: 1, recovered: 0 },
    { country: "Serbia", cases: 12, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 11, deaths: 0, recovered: 3 },
    { country: "Brunei", cases: 11, deaths: 0, recovered: 0 },
    { country: "Peru", cases: 11, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 10, deaths: 0, recovered: 10 },
    { country: "Latvia", cases: 10, deaths: 0, recovered: 1 },
    { country: "Slovakia", cases: 10, deaths: 0, recovered: 0 },
    { country: "Belarus", cases: 9, deaths: 0, recovered: 3 },
    { country: "Colombia", cases: 9, deaths: 0, recovered: 0 },
    { country: "Panama", cases: 8, deaths: 1, recovered: 0 },
    { country: "Mexico", cases: 8, deaths: 0, recovered: 4 },
    { country: "Maldives", cases: 8, deaths: 0, recovered: 0 },
    { country: "Afghanistan", cases: 7, deaths: 0, recovered: 0 },
    { country: "Luxembourg", cases: 7, deaths: 0, recovered: 0 },
    { country: "North Macedonia", cases: 7, deaths: 0, recovered: 0 },
    { country: "Bosnia and Herzegovina", cases: 7, deaths: 0, recovered: 0 },
    { country: "Tunisia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Bulgaria", cases: 6, deaths: 0, recovered: 0 },
    { country: "Malta", cases: 6, deaths: 0, recovered: 0 },
    { country: "Morocco", cases: 5, deaths: 1, recovered: 0 },
    { country: "Dominican Republic", cases: 5, deaths: 0, recovered: 0 },
    { country: "New Zealand", cases: 5, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 5, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 5, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 4, deaths: 0, recovered: 1 },
    { country: "Cambodia", cases: 3, deaths: 0, recovered: 1 },
    { country: "Lithuania", cases: 3, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 3, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 3, deaths: 0, recovered: 0 },
    { country: "Moldova", cases: 3, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 2, deaths: 0, recovered: 0 },
    { country: "Sri Lanka", cases: 2, deaths: 0, recovered: 1 },
    { country: "Bolivia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Burkina Faso", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 2, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cyprus", cases: 2, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Andorra", cases: 1, deaths: 0, recovered: 0 },
    { country: "Armenia", cases: 1, deaths: 0, recovered: 0 },
    { country: "Jordan", cases: 1, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 1, deaths: 0, recovered: 0 },
    { country: "Nepal", cases: 1, deaths: 0, recovered: 1 },
    { country: "Ukraine", cases: 1, deaths: 0, recovered: 0 },
    { country: "Bhutan", cases: 1, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 1, deaths: 0, recovered: 0 },
    { country: "Gibraltar", cases: 1, deaths: 0, recovered: 1 },
    { country: "Vatican City", cases: 1, deaths: 0, recovered: 0 },
    { country: "Jamaica", cases: 1, deaths: 0, recovered: 0 },
    { country: "Liechtenstein", cases: 1, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 1, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 1, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 1, deaths: 0, recovered: 0 },
    { country: "Togo", cases: 1, deaths: 0, recovered: 0 },
    { country: "Turkey", cases: 1, deaths: 0, recovered: 0 }
  ],
  [
    {
      date: "March 10, 2020",
      country: "China",
      cases: 80924,
      deaths: 3140,
      recovered: 60115
    },
    { country: "Italy", cases: 10149, deaths: 631, recovered: 1004 },
    { country: "Iran", cases: 8042, deaths: 291, recovered: 2731 },
    { country: "S. Korea", cases: 7513, deaths: 58, recovered: 247 },
    { country: "France", cases: 1784, deaths: 33, recovered: 12 },
    { country: "Spain", cases: 1690, deaths: 35, recovered: 135 },
    { country: "Germany", cases: 1458, deaths: 2, recovered: 18 },
    { country: "USA", cases: 886, deaths: 28, recovered: 15 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 245 },
    { country: "Japan", cases: 581, deaths: 10, recovered: 102 },
    { country: "Switzerland", cases: 497, deaths: 3, recovered: 3 },
    { country: "Netherlands", cases: 382, deaths: 4, recovered: 0 },
    { country: "UK", cases: 373, deaths: 6, recovered: 18 },
    { country: "Sweden", cases: 355, deaths: 0, recovered: 1 },
    { country: "Norway", cases: 343, deaths: 0, recovered: 1 },
    { country: "Belgium", cases: 267, deaths: 0, recovered: 1 },
    { country: "Denmark", cases: 262, deaths: 0, recovered: 1 },
    { country: "Austria", cases: 182, deaths: 0, recovered: 4 },
    { country: "Singapore", cases: 166, deaths: 0, recovered: 93 },
    { country: "Malaysia", cases: 129, deaths: 0, recovered: 87 },
    { country: "Hong Kong", cases: 121, deaths: 3, recovered: 59 },
    { country: "Bahrain", cases: 110, deaths: 0, recovered: 30 },
    { country: "Australia", cases: 103, deaths: 3, recovered: 22 },
    { country: "Greece", cases: 89, deaths: 0, recovered: 0 },
    { country: "Canada", cases: 80, deaths: 1, recovered: 8 },
    { country: "Iceland", cases: 76, deaths: 0, recovered: 1 },
    { country: "UAE", cases: 74, deaths: 0, recovered: 12 },
    { country: "Iraq", cases: 71, deaths: 7, recovered: 15 },
    { country: "Kuwait", cases: 69, deaths: 0, recovered: 1 },
    { country: "Czechia", cases: 61, deaths: 0, recovered: 0 },
    { country: "Egypt", cases: 59, deaths: 1, recovered: 1 },
    { country: "Israel", cases: 58, deaths: 0, recovered: 4 },
    { country: "India", cases: 56, deaths: 0, recovered: 4 },
    { country: "Thailand", cases: 53, deaths: 1, recovered: 33 },
    { country: "Lebanon", cases: 52, deaths: 1, recovered: 1 },
    { country: "San Marino", cases: 51, deaths: 2, recovered: 0 },
    { country: "Taiwan", cases: 47, deaths: 1, recovered: 17 },
    { country: "Portugal", cases: 41, deaths: 0, recovered: 0 },
    { country: "Finland", cases: 40, deaths: 0, recovered: 1 },
    { country: "Ireland", cases: 34, deaths: 0, recovered: 0 },
    { country: "Vietnam", cases: 34, deaths: 0, recovered: 16 },
    { country: "Philippines", cases: 33, deaths: 1, recovered: 2 },
    { country: "Brazil", cases: 31, deaths: 0, recovered: 0 },
    { country: "Slovenia", cases: 31, deaths: 0, recovered: 0 },
    { country: "Romania", cases: 29, deaths: 0, recovered: 5 },
    { country: "Palestine", cases: 29, deaths: 0, recovered: 0 },
    { country: "Indonesia", cases: 27, deaths: 0, recovered: 2 },
    { country: "Qatar", cases: 24, deaths: 0, recovered: 0 },
    { country: "Georgia", cases: 23, deaths: 0, recovered: 0 },
    { country: "Poland", cases: 22, deaths: 0, recovered: 0 },
    { country: "Algeria", cases: 20, deaths: 0, recovered: 0 },
    { country: "Russia", cases: 20, deaths: 0, recovered: 3 },
    { country: "Saudi Arabia", cases: 20, deaths: 0, recovered: 1 },
    { country: "Pakistan", cases: 19, deaths: 0, recovered: 2 },
    { country: "Oman", cases: 18, deaths: 0, recovered: 9 },
    { country: "Argentina", cases: 17, deaths: 1, recovered: 0 },
    { country: "Chile", cases: 17, deaths: 0, recovered: 0 },
    { country: "Ecuador", cases: 15, deaths: 0, recovered: 0 },
    { country: "Croatia", cases: 14, deaths: 0, recovered: 0 },
    { country: "Estonia", cases: 13, deaths: 0, recovered: 0 },
    { country: "Costa Rica", cases: 13, deaths: 0, recovered: 0 },
    { country: "Hungary", cases: 12, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 11, deaths: 0, recovered: 0 },
    { country: "Peru", cases: 11, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 10, deaths: 0, recovered: 10 },
    { country: "Albania", cases: 10, deaths: 0, recovered: 0 },
    { country: "Belarus", cases: 9, deaths: 0, recovered: 3 },
    { country: "Latvia", cases: 8, deaths: 0, recovered: 1 },
    { country: "Luxembourg", cases: 7, deaths: 0, recovered: 0 },
    { country: "North Macedonia", cases: 7, deaths: 0, recovered: 0 },
    { country: "Mexico", cases: 7, deaths: 0, recovered: 4 },
    { country: "Slovakia", cases: 7, deaths: 0, recovered: 0 },
    { country: "South Africa", cases: 7, deaths: 0, recovered: 0 },
    { country: "Tunisia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Brunei", cases: 6, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 6, deaths: 0, recovered: 0 },
    { country: "Afghanistan", cases: 5, deaths: 0, recovered: 0 },
    { country: "Dominican Republic", cases: 5, deaths: 0, recovered: 0 },
    { country: "New Zealand", cases: 5, deaths: 0, recovered: 0 },
    { country: "Bosnia and Herzegovina", cases: 5, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 5, deaths: 0, recovered: 0 },
    { country: "Malta", cases: 5, deaths: 0, recovered: 0 },
    { country: "Serbia", cases: 5, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 4, deaths: 0, recovered: 1 },
    { country: "Bulgaria", cases: 4, deaths: 0, recovered: 0 },
    { country: "Morocco", cases: 3, deaths: 1, recovered: 0 },
    { country: "Cambodia", cases: 3, deaths: 0, recovered: 1 },
    { country: "Bangladesh", cases: 3, deaths: 0, recovered: 0 },
    { country: "Colombia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Moldova", cases: 3, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 2, deaths: 0, recovered: 0 },
    { country: "Burkina Faso", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 2, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cyprus", cases: 2, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 2, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      date: "March 9, 2020",
      country: "China",
      cases: 80904,
      deaths: 3123,
      recovered: 58742
    },
    { country: "Italy", cases: 9172, deaths: 463, recovered: 724 },
    { country: "S. Korea", cases: 7478, deaths: 53, recovered: 166 },
    { country: "Iran", cases: 7161, deaths: 237, recovered: 2394 },
    { country: "France", cases: 1412, deaths: 30, recovered: 12 },
    { country: "Spain", cases: 1229, deaths: 30, recovered: 32 },
    { country: "Germany", cases: 1191, deaths: 2, recovered: 18 },
    { country: "Diamond Princess", cases: 696, deaths: 7, recovered: 245 },
    { country: "USA", cases: 624, deaths: 22, recovered: 15 },
    { country: "Japan", cases: 530, deaths: 9, recovered: 101 },
    { country: "Switzerland", cases: 374, deaths: 2, recovered: 3 },
    { country: "UK", cases: 321, deaths: 5, recovered: 18 },
    { country: "Netherlands", cases: 321, deaths: 4, recovered: 0 },
    { country: "Sweden", cases: 260, deaths: 0, recovered: 1 },
    { country: "Belgium", cases: 239, deaths: 0, recovered: 1 },
    { country: "Norway", cases: 224, deaths: 0, recovered: 1 },
    { country: "Singapore", cases: 160, deaths: 0, recovered: 93 },
    { country: "Austria", cases: 131, deaths: 0, recovered: 2 },
    { country: "Malaysia", cases: 117, deaths: 0, recovered: 24 },
    { country: "Hong Kong", cases: 115, deaths: 3, recovered: 59 },
    { country: "Bahrain", cases: 109, deaths: 0, recovered: 22 },
    { country: "Australia", cases: 93, deaths: 3, recovered: 22 },
    { country: "Denmark", cases: 90, deaths: 0, recovered: 1 },
    { country: "Greece", cases: 84, deaths: 0, recovered: 0 },
    { country: "Canada", cases: 77, deaths: 1, recovered: 8 },
    { country: "Iraq", cases: 71, deaths: 7, recovered: 3 },
    { country: "Iceland", cases: 65, deaths: 0, recovered: 1 },
    { country: "Kuwait", cases: 65, deaths: 0, recovered: 1 },
    { country: "UAE", cases: 59, deaths: 0, recovered: 12 },
    { country: "Egypt", cases: 55, deaths: 1, recovered: 1 },
    { country: "San Marino", cases: 51, deaths: 2, recovered: 0 },
    { country: "Thailand", cases: 50, deaths: 1, recovered: 33 },
    { country: "Israel", cases: 50, deaths: 0, recovered: 4 },
    { country: "India", cases: 47, deaths: 0, recovered: 4 },
    { country: "Taiwan", cases: 45, deaths: 1, recovered: 15 },
    { country: "Lebanon", cases: 41, deaths: 0, recovered: 1 },
    { country: "Portugal", cases: 39, deaths: 0, recovered: 0 },
    { country: "Czechia", cases: 38, deaths: 0, recovered: 0 },
    { country: "Finland", cases: 33, deaths: 0, recovered: 1 },
    { country: "Vietnam", cases: 31, deaths: 0, recovered: 16 },
    { country: "Brazil", cases: 25, deaths: 0, recovered: 0 },
    { country: "Palestine", cases: 25, deaths: 0, recovered: 0 },
    { country: "Philippines", cases: 24, deaths: 1, recovered: 2 },
    { country: "Ireland", cases: 24, deaths: 0, recovered: 0 },
    { country: "Slovenia", cases: 23, deaths: 0, recovered: 0 },
    { country: "Algeria", cases: 20, deaths: 0, recovered: 0 },
    { country: "Russia", cases: 20, deaths: 0, recovered: 3 },
    { country: "Indonesia", cases: 19, deaths: 0, recovered: 0 },
    { country: "Oman", cases: 18, deaths: 0, recovered: 9 },
    { country: "Qatar", cases: 18, deaths: 0, recovered: 0 },
    { country: "Romania", cases: 17, deaths: 0, recovered: 5 },
    { country: "Poland", cases: 17, deaths: 0, recovered: 0 },
    { country: "Pakistan", cases: 16, deaths: 0, recovered: 1 },
    { country: "Ecuador", cases: 15, deaths: 0, recovered: 0 },
    { country: "Georgia", cases: 15, deaths: 0, recovered: 0 },
    { country: "Saudi Arabia", cases: 15, deaths: 0, recovered: 1 },
    { country: "Croatia", cases: 13, deaths: 0, recovered: 0 },
    { country: "Chile", cases: 13, deaths: 0, recovered: 0 },
    { country: "Argentina", cases: 12, deaths: 1, recovered: 0 },
    { country: "Macao", cases: 10, deaths: 0, recovered: 10 },
    { country: "Estonia", cases: 10, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 9, deaths: 0, recovered: 0 },
    { country: "Costa Rica", cases: 9, deaths: 0, recovered: 0 },
    { country: "Hungary", cases: 9, deaths: 0, recovered: 0 },
    { country: "Peru", cases: 9, deaths: 0, recovered: 0 },
    { country: "Mexico", cases: 7, deaths: 0, recovered: 1 },
    { country: "Slovakia", cases: 7, deaths: 0, recovered: 0 },
    { country: "South Africa", cases: 7, deaths: 0, recovered: 0 },
    { country: "Belarus", cases: 6, deaths: 0, recovered: 0 },
    { country: "Latvia", cases: 6, deaths: 0, recovered: 1 },
    { country: "Dominican Republic", cases: 5, deaths: 0, recovered: 0 },
    { country: "Luxembourg", cases: 5, deaths: 0, recovered: 0 },
    { country: "New Zealand", cases: 5, deaths: 0, recovered: 0 },
    { country: "Tunisia", cases: 5, deaths: 0, recovered: 0 },
    { country: "Bosnia and Herzegovina", cases: 5, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 5, deaths: 0, recovered: 0 },
    { country: "Afghanistan", cases: 4, deaths: 0, recovered: 0 },
    { country: "North Macedonia", cases: 4, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 4, deaths: 0, recovered: 1 },
    { country: "Bulgaria", cases: 4, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 4, deaths: 0, recovered: 0 },
    { country: "Malta", cases: 4, deaths: 0, recovered: 0 },
    { country: "Bangladesh", cases: 3, deaths: 0, recovered: 0 },
    { country: "Colombia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Cambodia", cases: 2, deaths: 0, recovered: 1 },
    { country: "Morocco", cases: 2, deaths: 0, recovered: 0 },
    { country: "Nigeria", cases: 2, deaths: 0, recovered: 0 },
    { country: "Albania", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cyprus", cases: 2, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Serbia", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      date: "March 8, 2020",
      country: "China",
      cases: 80652,
      deaths: 3078,
      recovered: 55521
    },
    { country: "S. Korea", cases: 7041, deaths: 48, recovered: 118 },
    { country: "Italy", cases: 5883, deaths: 233, recovered: 589 },
    { country: "Iran", cases: 5823, deaths: 145, recovered: 1669 },
    { country: "France", cases: 949, deaths: 16, recovered: 12 },
    { country: "Germany", cases: 800, deaths: 0, recovered: 18 },
    { country: "Spain", cases: 503, deaths: 10, recovered: 30 },
    { country: "Japan", cases: 461, deaths: 6, recovered: 76 },
    { country: "USA", cases: 395, deaths: 19, recovered: 15 },
    { country: "Switzerland", cases: 268, deaths: 1, recovered: 3 },
    { country: "UK", cases: 209, deaths: 2, recovered: 18 },
    { country: "Netherlands", cases: 188, deaths: 1, recovered: 0 },
    { country: "Belgium", cases: 169, deaths: 0, recovered: 1 },
    { country: "Sweden", cases: 161, deaths: 0, recovered: 1 },
    { country: "Norway", cases: 156, deaths: 0, recovered: 1 },
    { country: "Singapore", cases: 138, deaths: 0, recovered: 90 },
    { country: "Hong Kong", cases: 108, deaths: 2, recovered: 51 },
    { country: "Malaysia", cases: 93, deaths: 0, recovered: 23 },
    { country: "Bahrain", cases: 85, deaths: 0, recovered: 6 },
    { country: "Austria", cases: 81, deaths: 0, recovered: 2 },
    { country: "Greece", cases: 66, deaths: 0, recovered: 0 },
    { country: "Australia", cases: 64, deaths: 2, recovered: 22 },
    { country: "Kuwait", cases: 61, deaths: 0, recovered: 1 },
    { country: "Canada", cases: 60, deaths: 0, recovered: 8 },
    { country: "Iraq", cases: 54, deaths: 4, recovered: 1 },
    { country: "Thailand", cases: 50, deaths: 1, recovered: 31 },
    { country: "Iceland", cases: 50, deaths: 0, recovered: 1 },
    { country: "Egypt", cases: 48, deaths: 0, recovered: 1 },
    { country: "Taiwan", cases: 45, deaths: 1, recovered: 15 },
    { country: "UAE", cases: 45, deaths: 0, recovered: 7 },
    { country: "India", cases: 34, deaths: 0, recovered: 3 },
    { country: "Lebanon", cases: 28, deaths: 0, recovered: 1 },
    { country: "Denmark", cases: 27, deaths: 0, recovered: 1 },
    { country: "San Marino", cases: 23, deaths: 1, recovered: 0 },
    { country: "Czechia", cases: 21, deaths: 0, recovered: 0 },
    { country: "Israel", cases: 21, deaths: 0, recovered: 2 },
    { country: "Portugal", cases: 20, deaths: 0, recovered: 0 },
    { country: "Vietnam", cases: 20, deaths: 0, recovered: 16 },
    { country: "Algeria", cases: 19, deaths: 0, recovered: 0 },
    { country: "Finland", cases: 19, deaths: 0, recovered: 1 },
    { country: "Ireland", cases: 19, deaths: 0, recovered: 0 },
    { country: "Palestine", cases: 19, deaths: 0, recovered: 0 },
    { country: "Oman", cases: 16, deaths: 0, recovered: 2 },
    { country: "Brazil", cases: 14, deaths: 0, recovered: 0 },
    { country: "Ecuador", cases: 14, deaths: 0, recovered: 0 },
    { country: "Russia", cases: 14, deaths: 0, recovered: 2 },
    { country: "Georgia", cases: 13, deaths: 0, recovered: 0 },
    { country: "Romania", cases: 13, deaths: 0, recovered: 3 },
    { country: "Croatia", cases: 12, deaths: 0, recovered: 0 },
    { country: "Qatar", cases: 12, deaths: 0, recovered: 0 },
    { country: "Slovenia", cases: 12, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 10, deaths: 0, recovered: 10 },
    { country: "Estonia", cases: 10, deaths: 0, recovered: 0 },
    { country: "Azerbaijan", cases: 9, deaths: 0, recovered: 0 },
    { country: "Argentina", cases: 8, deaths: 0, recovered: 0 },
    { country: "Saudi Arabia", cases: 7, deaths: 0, recovered: 1 },
    { country: "Philippines", cases: 6, deaths: 1, recovered: 2 },
    { country: "Belarus", cases: 6, deaths: 0, recovered: 0 },
    { country: "Mexico", cases: 6, deaths: 0, recovered: 1 },
    { country: "Pakistan", cases: 6, deaths: 0, recovered: 1 },
    { country: "Poland", cases: 6, deaths: 0, recovered: 0 },
    { country: "New Zealand", cases: 5, deaths: 0, recovered: 0 },
    { country: "Chile", cases: 5, deaths: 0, recovered: 0 },
    { country: "Hungary", cases: 5, deaths: 0, recovered: 0 },
    { country: "Afghanistan", cases: 4, deaths: 0, recovered: 0 },
    { country: "Indonesia", cases: 4, deaths: 0, recovered: 0 },
    { country: "Senegal", cases: 4, deaths: 0, recovered: 1 },
    { country: "Luxembourg", cases: 3, deaths: 0, recovered: 0 },
    { country: "North Macedonia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Bosnia and Herzegovina", cases: 3, deaths: 0, recovered: 0 },
    { country: "Malta", cases: 3, deaths: 0, recovered: 0 },
    { country: "Slovakia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Cambodia", cases: 2, deaths: 0, recovered: 1 },
    { country: "Dominican Republic", cases: 2, deaths: 0, recovered: 0 },
    { country: "Morocco", cases: 2, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 2, deaths: 0, recovered: 0 },
    { country: "Faeroe Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Maldives", cases: 2, deaths: 0, recovered: 0 },
    { country: "South Africa", cases: 2, deaths: 0, recovered: 0 }
  ],
  [
    {
      date: "March 7, 2020",
      country: "China",
      cases: 80813,
      deaths: 3073,
      recovered: 54480
    },
    { country: "S. Korea", cases: 6767, deaths: 44, recovered: 0 },
    { country: "Iran", cases: 4747, deaths: 124, recovered: 0 },
    { country: "Italy", cases: 4636, deaths: 197, recovered: 0 },
    { country: "Germany", cases: 639, deaths: 0, recovered: 0 },
    { country: "France", cases: 613, deaths: 9, recovered: 0 },
    { country: "Japan", cases: 408, deaths: 6, recovered: 0 },
    { country: "USA", cases: 213, deaths: 11, recovered: 0 }
  ],
  [
    {
      date: "March 6, 2020",
      country: "China",
      cases: 80500,
      deaths: 3045,
      recovered: 53950
    },
    { country: "S. Korea", cases: 6284, deaths: 42, recovered: 0 },
    { country: "Italy", cases: 3858, deaths: 148, recovered: 0 },
    { country: "Iran", cases: 3513, deaths: 107, recovered: 0 },
    { country: "Germany", cases: 534, deaths: 0, recovered: 0 },
    { country: "France", cases: 420, deaths: 6, recovered: 0 },
    { country: "USA", cases: 148, deaths: 10, recovered: 0 }
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

// Check if data is up to date
if (
  month === data[0][0].dateInfo.month &&
  day === data[0][0].dateInfo.day &&
  year === data[0][0].dateInfo.year
) {
  console.log("Data is up to date")
}

let currentDataSet = data[0]

let totalCases = 0
let totalRecoveries = 0
let totalDeaths = 0

currentDataSet.forEach(x => {
  totalCases += x.cases
  totalRecoveries += x.recovered
  totalDeaths += x.deaths
})

let displayCases = JSON.parse(JSON.stringify(totalCases))
let displayRecoveries = JSON.parse(JSON.stringify(totalRecoveries))
let displayDeaths = JSON.parse(JSON.stringify(totalDeaths))

displayCases = displayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
displayRecoveries = displayRecoveries
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
displayDeaths = displayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const viewDate = document.createElement("p")
viewDate.innerText = `${month} ${date.getDate()}, ${date.getFullYear()}`
document.getElementById("date").appendChild(viewDate)

const worldwidecases = document.createElement("span")
worldwidecases.innerText = displayCases
document.getElementById("totalCases").appendChild(worldwidecases)

const worldwideRecoveries = document.createElement("span")
worldwideRecoveries.innerText = displayRecoveries
document.getElementById("totalRecoveries").appendChild(worldwideRecoveries)

const worldwideDeaths = document.createElement("span")
worldwideDeaths.innerText = displayDeaths
document.getElementById("totalDeaths").appendChild(worldwideDeaths)

let zoomSlider = document.getElementById("zoomSlider")
let dateSlider = document.getElementById("dateSlider")

// slider
let actuator = Math.floor((1 / (zoomSlider.value * 5)) * totalCases)

let svgHeight = (1 / actuator) * 260000

drawVisualization()

// Zoom Slider

zoomSlider.oninput = function() {
  // if (this.value % 10 === 0) {
  //   console.log(
  //     `A ${actuator} | H ${svgHeight} | D ${dateSlider.value} | Z ${zoomSlider.value}`
  //   )
  // }

  actuator = Math.floor((1 / (this.value * 5)) * totalCases) + 0.1

  d3.select("svg").remove()

  console.log("D", dateSlider.value)

  if (date.value < 100) {
    actuator = Math.floor(actuator * 2 + dateSlider.value)
  }

  svgHeight = Math.floor((1 / actuator) * totalCases * 2)

  drawVisualization()

  if (date.value > 50) {
    window.scrollTo(0, Math.floor(document.body.scrollHeight / 2) - 100)
  }
}

// Date Slider
dateSlider.oninput = function() {
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

  let displayCases = JSON.parse(JSON.stringify(totalCases))
  let displayRecoveries = JSON.parse(JSON.stringify(totalRecoveries))
  let displayDeaths = JSON.parse(JSON.stringify(totalDeaths))

  displayCases = displayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  displayRecoveries = displayRecoveries
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  displayDeaths = displayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  worldwidecases.innerText = displayCases
  document.getElementById("totalCases").appendChild(worldwidecases)

  worldwideRecoveries.innerText = displayRecoveries
  document.getElementById("totalRecoveries").appendChild(worldwideRecoveries)

  worldwideDeaths.innerText = displayDeaths
  document.getElementById("totalDeaths").appendChild(worldwideDeaths)

  document.getElementById("date").appendChild(viewDate)

  d3.select("svg").remove()

  svgHeight = Math.floor((1 / actuator) * totalCases * 2.1)

  // if (this.value % 10 === 0) {
  //   console.log(
  //     `A ${actuator} | H ${svgHeight} | D ${dateSlider.value} | Z ${zoomSlider.value}`
  //   )
  // }

  drawVisualization()
}

function drawVisualization() {
  if (svgHeight < 800) {
    svgHeight = 800
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
      if (i < 8) {
        return casesCumData[i] + radData[i] / (16 - i - 6)
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
        return radData[i] / 3
      } else if (i === 1) {
        return radData[i] / 2.5
      } else if (i < 7) {
        return radData[i] / 2
      } else {
        return radData[i]
      }
    })
    .attr("dominant-baseline", "ideographic")
    .attr("dy", (d, i) => {
      if (isSafari) {
        if (i === 0) {
          return radData[i] * -0.05
        } else if (i < 7) {
          return radData[i] * -0.2
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
      let displayCases = currentDataSet[i].cases
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      let displayRecovered = currentDataSet[i].recovered
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      let displayDeaths = currentDataSet[i].deaths
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return (
        displayCases +
        " cases" +
        "\xa0\xa0\xa0" +
        displayRecovered +
        " recoveries" +
        "\xa0\xa0\xa0" +
        displayDeaths +
        " deaths" +
        "\xa0\xa0\xa0"
      )
    })
    .attr("font-family", countryDataFont)
    .attr("font-size", (d, i) => {
      if (i === 0) {
        return radData[i] / 8
      } else if (i === 1) {
        return radData[i] / 5
      } else if (i < 7) {
        return radData[i] / 3
      } else {
        return radData[i] / 1.8
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
      } else if (i < 8) {
        return casesCumData[i] + 4
      } else {
        return casesCumData[i] + radData[i] / 4
      }
    })
    .attr("dominant-baseline", "hanging")
    .attr("dy", (d, i) => {
      if (isSafari && i === 0) {
        return radData[i] * 0.1
      } else if (i < 8) {
        return radData[i] * 0.1
      } else {
        return radData[i] * 0.05
      }
    })
}
