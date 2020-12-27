const Toxic = () => new Promise((resolve, reject) => {
  let kata = [
    'babi',
    'monyet',
    'anjing',
    'rizky',
    'jembut',
    'memek',
    'kontol',
    'tempik',
    'tempik',
    'gay',
    'lesbi',
    'yoga',
    'setan',
    'cangcut',
    'piyo',
    'bagong',
    'bangsat',
    'ngentot'
  ]
  let randKata = kata[Math.floor(Math.random() * kata.length)]
  let list = [
    `muka lo kek ${randKata}`, `anda tau ${randKata} ?`,`${randKata} Lo ${randKata}`,
    `ngapa ${randKata} ga seneng?`,`ribut sini lo ${randKata}`,`jangan ngakak lo ${randKata}`,
    `wey ${randKata}!!`,`aku sih owh aja ya ${randKata}`,`ga seneng send lokasi lo ${randKata}`,
    `capek w ${randKata}`, `hari ini kau minat gelut ${kata[2]} ?`, `w tw lo itu ${randKata}`,
    `w ganteng dan lo kek ${randKata}`,`bucin lo ${randKata}`,
    `najis baperan kek ${randKata}`,
    `nge-teh ${randKata}`,`gaya lo sok iye, mukalo kek ${randKata}`,`${randKata} awokwowkok`
  ]
  resolve(list[Math.floor(Math.random() * list.length)])
})

//created by piyo

module.exports = Toxic
