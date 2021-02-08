/* eslint-disable no-undef */

/**
 * Get random toxic.
 * @returns {string}
 */
module.exports = toxic = () => {
    const kata = [
        'babi',
        'monyet',
        'anjing',
        'jembut',
        'memek',
        'kontol',
        'tempik',
        'gay',
        'lesbi',
        'setan',
        'cangcut',
        'bagong',
        'bangsat',
        'ngentot',
        'goblog',
        'pepek'
    ]
    const randKata = kata[Math.floor(Math.random() * kata.length)]
    const list = [
      `muka lo kek ${randKata}`, `anda tau ${randKata} ?`,`${randKata} Lo ${randKata}`,
      `ngapa ${randKata} ga seneng?`,`ribut sini lo ${randKata}`,`jangan ngakak lo ${randKata}`,
      `wey ${randKata}!!`,`aku sih owh aja ya ${randKata}`,`ga seneng send lokasi lo ${randKata}`,
      `capek w ${randKata}`, `hari ini kau minat gelut ${kata[2]} ?`, `w tw lo itu ${randKata}`,
      `w ganteng dan lo kek ${randKata}`,`bucin lo ${randKata}`,
      `najis baperan kek ${randKata}`,
      `nge-teh ${randKata}`,`gaya lo sok iye, mukalo kek ${randKata}`,`${randKata} awokwowkok`
    ]
    return list[Math.floor(Math.random() * list.length)]
}

//created by piyo
