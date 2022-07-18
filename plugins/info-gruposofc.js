let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The MENDEZBOTV2- Bot🐱‍👤*

*➤ Grupos oficiales del Bot:*

*1.-* https://chat.whatsapp.com/GWUtDFilWhPD0QVFjTnJll

*2.-* https://chat.whatsapp.com/HlDG6DpgZXxELdlkDedqIe

*3.-* https://chat.whatsapp.com/IjW0kg3ZchxJkCBNiUUtoG

*4.-* 

*5.-* 

*6.-* 

*7.-* 

*8.-* 

*9.-* 

*10.-* 

*11.-* 

*12.-* 

*13.-* 

*14.-* 

*15.-* 
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
