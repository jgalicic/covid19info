// Sanitize data
let data2 = data.map((d, i) => {
  if (d.cases > 30 && d.country == "Lao People's Democratic Republic")
    return {
      country: "Laos",
      cases: d.cases,
      deaths: d.deaths,
      recovered: d.recovered
    }
  if (d.cases > 30 && d.country == "Bosnia and Herzegovina")
    return {
      country: "Bosnia",
      cases: d.cases,
      deaths: d.deaths,
      recovered: d.recovered
    }

  if (d.cases > 30)
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

// Sort data

function compare(a, b) {
  return b.cases - a.cases
}

filtered.sort(compare)

const fs = require("fs")

fs.writeFileSync("./data.json", JSON.stringify(filtered, null, 0), "utf-8")
