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
      dateInfo: { month: "March", day: 18, year: 2020 },
      date: "March 18, 2020",
      country: "China",
      cases: 80894,
      deaths: 3237,
      recovered: 69614
    },
    { country: "Italy", cases: 31506, deaths: 2503, recovered: 2941 },
    { country: "Iran", cases: 17361, deaths: 1135, recovered: 5389 },
    { country: "Spain", cases: 13910, deaths: 623, recovered: 1081 },
    { country: "Germany", cases: 10120, deaths: 27, recovered: 73 },
    { country: "S. Korea", cases: 8413, deaths: 84, recovered: 1540 },
    { country: "France", cases: 7730, deaths: 175, recovered: 602 },
    { country: "USA", cases: 7387, deaths: 116, recovered: 106 },
    { country: "Switzerland", cases: 3070, deaths: 27, recovered: 15 },
    { country: "UK", cases: 2626, deaths: 71, recovered: 65 },
    { country: "Netherlands", cases: 2051, deaths: 58, recovered: 2 },
    { country: "Austria", cases: 1646, deaths: 4, recovered: 9 },
    { country: "Norway", cases: 1539, deaths: 6, recovered: 1 },
    { country: "Belgium", cases: 1486, deaths: 14, recovered: 31 },
    { country: "Sweden", cases: 1292, deaths: 8, recovered: 1 },
    { country: "Denmark", cases: 1044, deaths: 4, recovered: 1 },
    { country: "Japan", cases: 899, deaths: 29, recovered: 144 },
    { country: "Malaysia", cases: 790, deaths: 2, recovered: 60 },
    { country: "Diamond Princess", cases: 712, deaths: 7, recovered: 456 },
    { country: "Portugal", cases: 642, deaths: 2, recovered: 4 },
    { country: "Canada", cases: 598, deaths: 8, recovered: 12 },
    { country: "Australia", cases: 565, deaths: 6, recovered: 43 },
    { country: "Czechia", cases: 464, deaths: 0, recovered: 3 },
    { country: "Qatar", cases: 442, deaths: 0, recovered: 4 },
    { country: "Israel", cases: 433, deaths: 0, recovered: 11 },
    { country: "Greece", cases: 387, deaths: 5, recovered: 14 },
    { country: "Finland", cases: 359, deaths: 0, recovered: 10 },
    { country: "Brazil", cases: 350, deaths: 1, recovered: 2 },
    { country: "Singapore", cases: 313, deaths: 0, recovered: 114 },
    { country: "Ireland", cases: 292, deaths: 2, recovered: 5 },
    { country: "Slovenia", cases: 286, deaths: 1, recovered: 0 },
    { country: "Pakistan", cases: 272, deaths: 0, recovered: 2 },
    { country: "Estonia", cases: 258, deaths: 0, recovered: 1 },
    { country: "Bahrain", cases: 255, deaths: 1, recovered: 88 },
    { country: "Poland", cases: 251, deaths: 5, recovered: 1 },
    { country: "Iceland", cases: 250, deaths: 0, recovered: 5 },
    { country: "Romania", cases: 246, deaths: 0, recovered: 19 },
    { country: "Chile", cases: 238, deaths: 0, recovered: 0 },
    { country: "Indonesia", cases: 227, deaths: 19, recovered: 11 },
    { country: "Thailand", cases: 212, deaths: 1, recovered: 41 },
    { country: "Luxembourg", cases: 203, deaths: 2, recovered: 0 },
    { country: "Philippines", cases: 202, deaths: 17, recovered: 4 },
    { country: "Egypt", cases: 196, deaths: 6, recovered: 26 },
    { country: "Hong Kong", cases: 181, deaths: 4, recovered: 92 },
    { country: "Saudi Arabia", cases: 171, deaths: 0, recovered: 6 },
    { country: "Iraq", cases: 164, deaths: 12, recovered: 41 },
    { country: "India", cases: 155, deaths: 3, recovered: 14 },
    { country: "Ecuador", cases: 155, deaths: 2, recovered: 0 },
    { country: "Russia", cases: 147, deaths: 0, recovered: 8 },
    { country: "Kuwait", cases: 142, deaths: 0, recovered: 15 },
    { country: "Lebanon", cases: 133, deaths: 4, recovered: 4 },
    { country: "San Marino", cases: 119, deaths: 11, recovered: 4 },
    { country: "Peru", cases: 117, deaths: 0, recovered: 1 },
    { country: "South Africa", cases: 116, deaths: 0, recovered: 0 },
    { country: "UAE", cases: 113, deaths: 0, recovered: 26 },
    { country: "Slovakia", cases: 105, deaths: 0, recovered: 0 },
    { country: "Taiwan", cases: 100, deaths: 1, recovered: 20 },
    { country: "Turkey", cases: 98, deaths: 1, recovered: 0 },
    { country: "Mexico", cases: 93, deaths: 0, recovered: 4 },
    { country: "Colombia", cases: 93, deaths: 0, recovered: 1 },
    { country: "Bulgaria", cases: 92, deaths: 2, recovered: 0 },
    { country: "Panama", cases: 86, deaths: 1, recovered: 0 },
    { country: "Armenia", cases: 84, deaths: 0, recovered: 1 },
    { country: "Serbia", cases: 83, deaths: 0, recovered: 1 },
    { country: "Croatia", cases: 81, deaths: 0, recovered: 5 },
    { country: "Argentina", cases: 79, deaths: 2, recovered: 3 },
    { country: "Vietnam", cases: 75, deaths: 0, recovered: 16 },
    { country: "Algeria", cases: 72, deaths: 6, recovered: 10 },
    { country: "Latvia", cases: 71, deaths: 0, recovered: 1 },
    { country: "Brunei", cases: 68, deaths: 0, recovered: 0 },
    { country: "Albania", cases: 59, deaths: 2, recovered: 0 },
    { country: "Hungary", cases: 58, deaths: 1, recovered: 2 },
    { country: "Faeroe Islands", cases: 58, deaths: 0, recovered: 1 },
    { country: "Jordan", cases: 52, deaths: 0, recovered: 1 },
    { country: "Belarus", cases: 51, deaths: 0, recovered: 5 },
    { country: "Sri Lanka", cases: 51, deaths: 0, recovered: 3 },
    { country: "Costa Rica", cases: 50, deaths: 0, recovered: 0 },
    { country: "Uruguay", cases: 50, deaths: 0, recovered: 0 },
    { country: "Morocco", cases: 49, deaths: 2, recovered: 1 },
    { country: "Cyprus", cases: 49, deaths: 0, recovered: 0 },
    { country: "Malta", cases: 48, deaths: 0, recovered: 2 },
    { country: "Palestine", cases: 44, deaths: 0, recovered: 0 },
    { country: "Andorra", cases: 39, deaths: 0, recovered: 1 },
    { country: "Georgia", cases: 38, deaths: 0, recovered: 1 },
    { country: "Bosnia and Herzegovina", cases: 38, deaths: 0, recovered: 2 },
    { country: "Kazakhstan", cases: 36, deaths: 0, recovered: 0 },
    { country: "Venezuela", cases: 36, deaths: 0, recovered: 0 },
    { country: "Cambodia", cases: 35, deaths: 0, recovered: 1 },
    { country: "North Macedonia", cases: 35, deaths: 0, recovered: 1 },
    { country: "Azerbaijan", cases: 34, deaths: 1, recovered: 6 },
    { country: "Lithuania", cases: 33, deaths: 0, recovered: 1 },
    { country: "Oman", cases: 33, deaths: 0, recovered: 12 },
    { country: "Senegal", cases: 31, deaths: 0, recovered: 2 },
    { country: "Moldova", cases: 30, deaths: 1, recovered: 1 },
    { country: "Tunisia", cases: 29, deaths: 0, recovered: 1 },
    { country: "Guadeloupe", cases: 27, deaths: 0, recovered: 0 },
    { country: "Afghanistan", cases: 22, deaths: 0, recovered: 1 },
    { country: "Dominican Republic", cases: 21, deaths: 1, recovered: 0 },
    { country: "Burkina Faso", cases: 20, deaths: 1, recovered: 0 },
    { country: "New Zealand", cases: 20, deaths: 0, recovered: 0 },
    { country: "Martinique", cases: 19, deaths: 1, recovered: 0 },
    { country: "Liechtenstein", cases: 19, deaths: 0, recovered: 0 },
    { country: "Macao", cases: 15, deaths: 0, recovered: 10 },
    { country: "Uzbekistan", cases: 15, deaths: 0, recovered: 0 },
    { country: "Ukraine", cases: 14, deaths: 2, recovered: 0 },
    { country: "Bangladesh", cases: 14, deaths: 1, recovered: 3 },
    { country: "Jamaica", cases: 13, deaths: 0, recovered: 2 },
    { country: "Maldives", cases: 13, deaths: 0, recovered: 0 },
    { country: "Bolivia", cases: 12, deaths: 0, recovered: 0 },
    { country: "Réunion", cases: 12, deaths: 0, recovered: 0 },
    { country: "French Guiana", cases: 11, deaths: 0, recovered: 0 },
    { country: "Paraguay", cases: 11, deaths: 0, recovered: 0 },
    { country: "Cameroon", cases: 10, deaths: 0, recovered: 0 },
    { country: "Monaco", cases: 9, deaths: 0, recovered: 0 },
    { country: "Honduras", cases: 9, deaths: 0, recovered: 0 },
    { country: "Guatemala", cases: 8, deaths: 1, recovered: 0 },
    { country: "Nigeria", cases: 8, deaths: 0, recovered: 1 },
    { country: "Gibraltar", cases: 8, deaths: 0, recovered: 2 },
    { country: "Guam", cases: 8, deaths: 0, recovered: 0 },
    { country: "Rwanda", cases: 8, deaths: 0, recovered: 0 },
    { country: "Cuba", cases: 7, deaths: 0, recovered: 0 },
    { country: "DRC", cases: 7, deaths: 0, recovered: 0 },
    { country: "Ghana", cases: 7, deaths: 0, recovered: 0 },
    { country: "Kenya", cases: 7, deaths: 0, recovered: 0 },
    { country: "Trinidad and Tobago", cases: 7, deaths: 0, recovered: 0 },
    { country: "Channel Islands", cases: 6, deaths: 0, recovered: 0 },
    { country: "Ivory Coast", cases: 6, deaths: 0, recovered: 1 },
    { country: "Ethiopia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Mongolia", cases: 6, deaths: 0, recovered: 0 },
    { country: "Puerto Rico", cases: 5, deaths: 0, recovered: 0 },
    { country: "Guyana", cases: 4, deaths: 1, recovered: 0 },
    { country: "Aruba", cases: 4, deaths: 0, recovered: 0 },
    { country: "Equatorial Guinea", cases: 4, deaths: 0, recovered: 0 },
    { country: "Seychelles", cases: 4, deaths: 0, recovered: 0 },
    { country: "Curaçao", cases: 3, deaths: 0, recovered: 0 },
    { country: "French Polynesia", cases: 3, deaths: 0, recovered: 0 },
    { country: "Gabon", cases: 3, deaths: 0, recovered: 0 },
    { country: "Kyrgyzstan", cases: 3, deaths: 0, recovered: 0 },
    { country: "Mayotte", cases: 3, deaths: 0, recovered: 0 },
    { country: "St. Barth", cases: 3, deaths: 0, recovered: 0 },
    { country: "Saint Martin", cases: 3, deaths: 0, recovered: 0 },
    { country: "Tanzania", cases: 3, deaths: 0, recovered: 0 },
    { country: "Sudan", cases: 2, deaths: 1, recovered: 0 },
    { country: "Barbados", cases: 2, deaths: 0, recovered: 0 },
    { country: "Benin", cases: 2, deaths: 0, recovered: 0 },
    { country: "Liberia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Montenegro", cases: 2, deaths: 0, recovered: 0 },
    { country: "Namibia", cases: 2, deaths: 0, recovered: 0 },
    { country: "New Caledonia", cases: 2, deaths: 0, recovered: 0 },
    { country: "Saint Lucia", cases: 2, deaths: 0, recovered: 0 },
    { country: "U.S. Virgin Islands", cases: 2, deaths: 0, recovered: 0 },
    { country: "Zambia", cases: 2, deaths: 0, recovered: 0 }
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
      } else if (i === 1) {
        return radData[i] / 2
      } else if (i < 4) {
        return radData[i] / 1.3
      } else {
        return radData[i]
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
        return radData[i] / 15
      } else if (i === 1) {
        return radData[i] / 5
      } else if (i < 4) {
        return radData[i] / 3
      } else {
        return radData[i] / 2
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
