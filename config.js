/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev && Papah-Chan
   * Contact Me on wa.me/6282287219167
   * Follow https://github.com/FahriAdison
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6283830811051']
global.ownernomer = "6283830811051"
global.premium = ['6283830811051']
global.packname = 'WhatsApp BOT Multidevice'
global.author = '💝karylbotz💝'
global.sessionName = 'session'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Selesai',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/papah.jpg')
global.faall = fs.readFileSync('./media/image/menu.jpg')

// Url
global.mygit = 'https://github.com/cielv2'
global.myyt = 'https://bit.ly/ciel-sama'
global.myytv = ''
global.mygc = "https://chat.whatsapp.com/EklKM7VFqfUFnu99kyLIRI"

// Engak Ngaruh, Belum Kepasang
global.botname = 'karyl'
global.akulaku = 'ciel-sama'
global.ytname = 'ciel-sama' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
