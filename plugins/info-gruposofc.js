let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers - Bot*
┏━━━━━━━━ɢʀᴏᴜᴘ ᴏғғɪᴄɪᴀʟ━━━━━━━━━━━━┓〨
┃➤ Grupos oficiales del Bot:*
┃https://chat.whatsapp.com/FLp51jG2oLmI772uusXYoc
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━〨
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
