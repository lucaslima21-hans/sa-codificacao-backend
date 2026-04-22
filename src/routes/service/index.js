import fs from "fs/promises";

async function readSeries() {
  const data = await fs.readFile("./series.json", "utf-8");
  const series = JSON.parse(data);
  return series;
}

const series = await readSeries();
console.log(series);

async function writeSeries(series) {
  const data = JSON.stringify(series, null, 2);
  await fs.writeFile("./series.json", data, "utf-8");
}

const Series = await readSeries();
series.push({ id: 4, nome: "Chicago fire" });
await writeSeries(series);