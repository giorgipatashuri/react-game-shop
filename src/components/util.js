export const CalcTotalPrice=(items)=>items.reduce((acc,game)=> acc+=game.price,0)
