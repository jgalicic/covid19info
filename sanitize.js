// Sanitize data
let data2 = data.map((d, i) => {
  if (d.cases > 1)
    return {
      country: d.country.split(",")[0],
      cases: d.cases,
      deaths: d.deaths,
      recovered: d.recovered
    }
})

let filtered = data2.filter(function(el) {
  return el != null
})

const fs = require("fs")

fs.writeFileSync("./data.json", JSON.stringify(filtered, null, 0), "utf-8")
