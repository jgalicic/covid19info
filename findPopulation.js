// Sanitize data
let data2 = data.map((d, i) => {
  if (d.cases > 30 && d.country == "Lao People's Democratic Republic")
    return {
      country: "Laos",
      deathsPerOneMillion: d.deathsPerOneMillion
    }
  else if (d.cases > 30 && d.country == "Bosnia and Herzegovina")
    return {
      country: "Bosnia",
      deathsPerOneMillion: d.deathsPerOneMillion
    }
  else if (d.cases > 30)
    return {
      country: d.country.split(",")[0],
      deathsPerOneMillion: d.deathsPerOneMillion
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

fs.writeFileSync(
  "./perMillionData.json",
  JSON.stringify(filtered, null, 0),
  "utf-8"
)
