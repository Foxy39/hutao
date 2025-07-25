console.log("🚀 Interceptador externo carregado");

const fs = require("fs");
const path = require("path");

// ✅ Menus disponíveis
const menus = {
  "+menu": {
    image: "https://files.catbox.moe/mdeebk.jpg",
    caption: `
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐎𝐄𝐒 【✨】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✫✫✫✫✫
┃╎  *Oiê {nome} Boa tarde TwT*
┃╎ ✯ *Número*: +{numero}
┃╎ ✯ *Bot*: Billie
┃╎ ✯ *Dono*: ;-;
┃╎ ✯ *Hora*: {hora}
┃╎ ✯ *Premium*: {premium}
┃╎ ✯ *Usuario*: {nome}
┃╎✫✫✫✫✫
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐈𝐒 【🥂】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✰ۣۜۜ͜͡🍸 +ConfigurarBot "_Como Configurar_"
┃╎✰ۣۜۜ͜͡🍸 +MenuBaixar
┃╎✰ۣۜۜ͜͡🍸 +MenuHentai
┃╎✰ۣۜۜ͜͡🍸 +MenuFig
┃╎✰ۣۜۜ͜͡🍸 +MenuLogos
┃╎✰ۣۜۜ͜͡🍸 +MenuVip
┃╎✰ۣۜۜ͜͡🍸 +MenuGame
┃╎✰ۣۜۜ͜͡🍸 +MenuAnime
┃╎✰ۣۜۜ͜͡🍸 +MenuDono 
┃╎✰ۣۜۜ͜͡🍸 +MenuAdm
┃╎✰ۣۜۜ͜͡🍸 +MenuRpg
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐈𝐍𝐅𝐎𝐒 【🌸】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✧͜͡ 🌷 +infocmd "_comando_"
┃╎✧͜͡ 🌷 +listacmd
┃╎✧͜͡ 🌷 +infobot
┃╎✧͜͡ 🌷 +Idiomas
┃╎✧͜͡ 🌷 +infobv
┃╎✧͜͡ 🌷 +infodono
┃╎✧͜͡ 🌷 +InfoClosegp
┃╎✧͜͡ 🌷 +infoAdv
┃╎✧͜͡ 🌷 +info_listanegra 
┃╎✧͜͡ 🌷 +infocontador
┃╎✧͜͡ 🌷 +ping
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐏𝐄𝐒𝐆𝐔𝐈𝐒𝐀 【🔍】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎్మాై🕋 +Gemini "pesquisa"
┃╎్మాై🕋 +Gpt "pesquisa"
┃╎్మాై🕋 +YtStalk _@usuario_
┃╎్మాై🕋 +Tiktok_Stalker _@usuario_
┃╎్మాై🕋 +AnimeInfo "Nome"
┃╎్మాై🕋 +Piterest "titulo"
┃╎్మాై🕋 +Letra "Lyrics da música"
┃╎్మాై🕋 +Dicionário "palavra"
┃╎్మాై🕋 +CriarImg 
┃╎్మాై🕋 +Npm
┃╎్మాై🕋 +BingImg
┃╎్మాై🕋 +noticias
┃╎్మాై🕋 +Terra
┃╎్మాై🕋 +buscar "txt"
┃╎్మాై🕋 +amazon "txt"
┃╎్మాై🕋 +noticiaesp "txt"
┃╎్మాై🕋 +wikipedia "txt"
┃╎్మాై🕋 +Book "txt"
┃╎్మాై🕋 +clima "bahia"
┃╎్మాై🕋 +filme "movie"
┃╎్మాై🕋 +serie "txt"
┃╎్మాై🕋 +instauser "Alok"
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐌𝐎𝐃𝐒 𝐕𝐈𝐃𝐄𝐎 【📽】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎❀ۣۜۜ͜͡🎬 +tomp3
┃╎❀ۣۜۜ͜͡🎬 +Videocontrario 
┃╎❀ۣۜۜ͜͡🎬 +videolento 
┃╎❀ۣۜۜ͜͡🎬 +videorapido 
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐀𝐔𝐃𝐈𝐎 【🔊】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎❀ۣۜۜ͜͡⚘ +Grave 
┃╎❀ۣۜۜ͜͡⚘ +Grave2 
┃╎❀ۣۜۜ͜͡⚘ +Esquilo 
┃╎❀ۣۜۜ͜͡⚘ +Estourar 
┃╎❀ۣۜۜ͜͡⚘ +estourar2 
┃╎❀ۣۜۜ͜͡⚘ +Bass 
┃╎❀ۣۜۜ͜͡⚘ +Bass2 
┃╎❀ۣۜۜ͜͡⚘ +Bass3 
┃╎❀ۣۜۜ͜͡⚘ +Vozmenino      
┃╎❀ۣۜۜ͜͡⚘ +reverse 
┃╎❀ۣۜۜ͜͡⚘ +fat
┃╎❀ۣۜۜ͜͡⚘ +alto
┃╎❀ۣۜۜ͜͡⚘ +deep 
┃╎❀ۣۜۜ͜͡⚘ +deep1 
┃╎❀ۣۜۜ͜͡⚘ +speedup
┃╎❀ۣۜۜ͜͡⚘ +Audiolento 
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 【✨】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✰ۣۜۜ͜͡🧉 +Perfil "seu perfil"
┃╎✰ۣۜۜ͜͡🧉 +HD "marcar imagem"
┃╎✰ۣۜۜ͜͡🧉 +Simi "Fale algo"
┃╎✰ۣۜۜ͜͡🧉 +Printsite "_Url_"
┃╎✰ۣۜۜ͜͡🧉 +Totext "marcar audio / video"
┃╎✰ۣۜۜ͜͡🧉 +Traduzir _pt/hi_
┃╎✰ۣۜۜ͜͡🧉 +Wame "_texto ou não_"
┃╎✰ۣۜۜ͜͡🧉 +playstore "_nome do apk_"
┃╎✰ۣۜۜ͜͡🧉 +Apr
┃╎✰ۣۜۜ͜͡🧉 +Digt
┃╎✰ۣۜۜ͜͡🧉 +Celular "iphone 13"
┃╎✰ۣۜۜ͜͡🧉 +Signo "virgem"
┃╎✰ۣۜۜ͜͡🧉 +tagme
┃╎✰ۣۜۜ͜͡🧉 +Cantadas
┃╎✰ۣۜۜ͜͡🧉 +Fatos
┃╎✰ۣۜۜ͜͡🧉 +Moedas
┃╎✰ۣۜۜ͜͡🧉 +status
┃╎✰ۣۜۜ͜͡🧉 +Contar "texto/marcar"
┃╎✰ۣۜۜ͜͡🧉 +Tabela
┃╎✰ۣۜۜ͜͡🧉 +Ptvmsg "video"
┃╎✰ۣۜۜ͜͡🧉 +Tabelagp
┃╎✰ۣۜۜ͜͡🧉 +Afk "texto"
┃╎✰ۣۜۜ͜͡🧉 +Suicidio (❗)
┃╎✰ۣۜۜ͜͡🧉 +Falar pt "txt"
┃╎✰ۣۜۜ͜͡🧉 +Nick "Seu nick"
┃╎✰ۣۜۜ͜͡🧉 +Conselho
┃╎✰ۣۜۜ͜͡🧉 +Rankativo
┃╎✰ۣۜۜ͜͡🧉 +Rankinativo
┃╎✰ۣۜۜ͜͡🧉 +Me
┃╎✰ۣۜۜ͜͡🧉 +check "@usuario"
┃╎✰ۣۜۜ͜͡🧉 +admins
┃╎✰ۣۜۜ͜͡🧉 +bug "texto"
┃╎✰ۣۜۜ͜͡🧉 +avalie "1/10"
┃╎✰ۣۜۜ͜͡🧉 +sugestão "texto"
┃╎✰ۣۜۜ͜͡🧉 +convite "url"
┃╎✰ۣۜۜ͜͡🧉 +listavip
┃╎✰ۣۜۜ͜͡🧉 +Emoji "🥺+🥵"
┃╎✰ۣۜۜ͜͡🧉 +repetir "🗿"
┃╎✰ۣۜۜ͜͡🧉 +sn "Pergunta"
┃╎✰ۣۜۜ͜͡🧉 +Calcular "2+2"
┃╎✰ۣۜۜ͜͡🧉 +dono
┃╎✰ۣۜۜ͜͡🧉 +alugar
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛

✰ۣۜۜ͜͡Billie

✰✰✰✰✰`
  },

  "+menubaixar": {
    image: "https://i.imgur.com/4FTbj1R.jpeg",
    caption: `
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒 【🥂】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✰ۣۜۜ͜͡✨ +play "txt/url"
┃╎✰ۣۜۜ͜͡✨ +Play2 "txt/url"
┃╎✰ۣۜۜ͜͡✨ +playvideo "txt/url"
┃╎✰ۣۜۜ͜͡✨ +playvid2 "txt/url"
┃╎✰ۣۜۜ͜͡✨ +playdoc "txt/url" 
┃╎✰ۣۜۜ͜͡✨ +play_audio "txt/url"
┃╎✰ۣۜۜ͜͡✨ +play_video "txt/url"
┃╎✰ۣۜۜ͜͡✨ +Threads_Video "url do video"
┃╎✰ۣۜۜ͜͡✨ +Threads_Audio "url do video"
┃╎✰ۣۜۜ͜͡✨ +Spotify "url"
┃╎✰ۣۜۜ͜͡✨ +ytbuscar "txt/url"
┃╎✰ۣۜۜ͜͡✨ +ytmp4 "url"
┃╎✰ۣۜۜ͜͡✨ +ytmp3 "url"
┃╎✰ۣۜۜ͜͡✨ +Pinterest "txt"
┃╎✰ۣۜۜ͜͡✨ +Pinterest_video "url"
┃╎✰ۣۜۜ͜͡✨ +lyrics "txt"
┃╎✰ۣۜۜ͜͡✨ +Shazam "marcar audio"
┃╎✰ۣۜۜ͜͡✨ +tiktok "url/id"
┃╎✰ۣۜۜ͜͡✨ +tiktok2 "url/id"
┃╎✰ۣۜۜ͜͡✨ +facebook_video "url"
┃╎✰ۣۜۜ͜͡✨ +facebook_audio "url"
┃╎✰ۣۜۜ͜͡✨ +deezer "txt"
┃╎✰ۣۜۜ͜͡✨ +instagram "url"
┃╎✰ۣۜۜ͜͡✨ +insta2 "url"
┃╎✰ۣۜۜ͜͡✨ +insta_video "url"
┃╎✰ۣۜۜ͜͡✨ +insta_audio "url"
┃╎✰ۣۜۜ͜͡✨ +mediafire "url"
┃╎✰ۣۜۜ͜͡✨ +gitclone "url"
┃╎✰ۣۜۜ͜͡✨ +Imgpralink "marcar image"
┃╎✰ۣۜۜ͜͡✨ +Videopralink "marcar video"
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎

✰ۣۜۜ͜͡Billie

✰✰✰✰✰   `
  },

  "+menufig": {
    image: "https://i.imgur.com/UE9cH0B.jpeg",
    caption: `
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 【🌈】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎ঔৣֳ᷌͜͡❄ +S
┃╎ঔৣֳ᷌͜͡❄ +F
┃╎ঔৣֳ᷌͜͡❄ +Rbale
┃╎ঔৣֳ᷌͜͡❄ +Figu
┃╎ঔৣֳ᷌͜͡❄ +Toimg
┃╎ঔৣֳ᷌͜͡❄ +Togif 
┃╎ঔৣֳ᷌͜͡❄ +Idfigu
┃╎ঔৣֳ᷌͜͡❄ +Sfundo
┃╎ঔৣֳ᷌͜͡❄ +Take
┃╎ঔৣֳ᷌͜͡❄ +RgTake
┃╎ঔৣֳ᷌͜͡❄ +MyTake
┃╎ঔৣֳ᷌͜͡❄ +RmTake
┃╎ঔৣֳ᷌͜͡❄ +ModTake
┃╎ঔৣֳ᷌͜͡❄ +Attp "txt"
┃╎ঔৣֳ᷌͜͡❄ +Attp2 "txt"
┃╎ঔৣֳ᷌͜͡❄ +Attp3 "txt"
┃╎ঔৣֳ᷌͜͡❄ +Attp4 "txt"
┃╎ঔৣֳ᷌͜͡❄ +TTP "txt"
┃╎ঔৣֳ᷌͜͡❄ +TTP2 "txt"
┃╎ঔৣֳ᷌͜͡❄ +TTP3 "txt"
┃╎ঔৣֳ᷌͜͡❄ +TTP4 "txt"
┃╎ঔৣֳ᷌͜͡❄ +TTP5 "txt"
┃╎ঔৣֳ᷌͜͡❄ +TTP6 "txt"
┃╎ঔৣֳ᷌͜͡❄ +Rename "txt/txt"
┃╎ঔৣֳ᷌͜͡❄ +Placaloli "txt"
┃╎ঔৣֳ᷌͜͡❄ +bully
┃╎ঔৣֳ᷌͜͡❄ +cuddle
┃╎ঔৣֳ᷌͜͡❄ +cry
┃╎ঔৣֳ᷌͜͡❄ +hug
┃╎ঔৣֳ᷌͜͡❄ +awoo
┃╎ঔৣֳ᷌͜͡❄ +kiss
┃╎ঔৣֳ᷌͜͡❄ +lick
┃╎ঔৣֳ᷌͜͡❄ +pat
┃╎ঔৣֳ᷌͜͡❄ +smug
┃╎ঔৣֳ᷌͜͡❄ +bonk
┃╎ঔৣֳ᷌͜͡❄ +yeet
┃╎ঔৣֳ᷌͜͡❄ +blush
┃╎ঔৣֳ᷌͜͡❄ +smile
┃╎ঔৣֳ᷌͜͡❄ +wave
┃╎ঔৣֳ᷌͜͡❄ +highfive
┃╎ঔৣֳ᷌͜͡❄ +handhold
┃╎ঔৣֳ᷌͜͡❄ +nom
┃╎ঔৣֳ᷌͜͡❄ +bite
┃╎ঔৣֳ᷌͜͡❄ +glomp
┃╎ঔৣֳ᷌͜͡❄ +slap
┃╎ঔৣֳ᷌͜͡❄ +kill
┃╎ঔৣֳ᷌͜͡❄ +happy
┃╎ঔৣֳ᷌͜͡❄ +wink
┃╎ঔৣֳ᷌͜͡❄ +poke
┃╎ঔৣֳ᷌͜͡❄ +dance
┃╎ঔৣֳ᷌͜͡❄ +cringe
┃╎ঔৣֳ᷌͜͡❄ +FigAnime
┃╎ঔৣֳ᷌͜͡❄ +FigRoblox
┃╎ঔৣֳ᷌͜͡❄ +FigMeme
┃╎ঔৣֳ᷌͜͡❄ +FigDesenho
┃╎ঔৣֳ᷌͜͡❄ +FigEmoji
┃╎ঔৣֳ᷌͜͡❄ +Raiva
┃╎ঔৣֳ᷌͜͡❄ +FigCoreana
┃╎ঔৣֳ᷌͜͡❄ +Funny
┃╎ঔৣֳ᷌͜͡❄ +Emoji "🥺+🥵"
┃╎ঔৣֳ᷌͜͡❄ +Qc "txt"
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎

✰ۜۜ͜͡BILLIE✿

✰✰✰✰✰   `
  },

  "+menugame": {
    image: "https://i.imgur.com/UPDXVZO.jpeg",
    caption: `
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒 【💫】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐌𝐀𝐑𝐂𝐀𝐑/𝐏𝐄𝐒𝐒𝐎𝐀𝐋 【✨】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎☆ۣۜۜ͜͡🍹 +Personalidade
┃╎☆ۣۜۜ͜͡🍹 +Linda
┃╎☆ۣۜۜ͜͡🍹 +Lindo 
┃╎☆ۣۜۜ͜͡🍹 +Gay
┃╎☆ۣۜۜ͜͡🍹 +Hétero 
┃╎☆ۣۜۜ͜͡🍹 +Lésbica
┃╎☆ۣۜۜ͜͡🍹 +Puta
┃╎☆ۣۜۜ͜͡🍹 +Tapa
┃╎☆ۣۜۜ͜͡🍹 +Beijo
┃╎☆ۣۜۜ͜͡🍹 +Louça 
┃╎☆ۣۜۜ͜͡🍹 +Carinho
┃╎☆ۣۜۜ͜͡🍹 +Comer
┃╎☆ۣۜۜ͜͡🍹 +Abraço
┃╎☆ۣۜۜ͜͡🍹 +Matar 
┃╎☆ۣۜۜ͜͡🍹 +Gado
┃╎☆ۣۜۜ͜͡🍹 +Chute
┃╎☆ۣۜۜ͜͡🍹 +Casal
┃╎☆ۣۜۜ͜͡🍹 +Feio
┃╎☆ۣۜۜ͜͡🍹 +Corno
┃╎☆ۣۜۜ͜͡🍹 +Vesgo 
┃╎☆ۣۜۜ͜͡🍹 +Bebado
┃╎☆ۣۜۜ͜͡🍹 +Gostoso
┃╎☆ۣۜۜ͜͡🍹 +Gostosa
┃╎☆ۣۜۜ͜͡🍹 +Golpista
┃╎☆ۣۜۜ͜͡🍹 +Nazista
┃╎☆ۣۜۜ͜͡🍹 +Shipo
┃╎☆ۣۜۜ͜͡🍹 +Chance
┃╎☆ۣۜۜ͜͡🍹 +Sn
┃╎☆ۣۜۜ͜͡🍹 +Pontos
┃╎☆ۣۜۜ͜͡🍹 +Checkpts
┃╎☆ۣۜۜ͜͡🍹 +Rankpts
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐑𝐀𝐍𝐊𝐈𝐍𝐆 【🪩】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎్మాై🎐 +Ranklinda
┃╎్మాై🎐 +Ranklindo
┃╎్మాై🎐 +Rankbebado
┃╎్మాై🎐 +Rankgay
┃╎్మాై🎐 +Rankcorno
┃╎్మాై🎐 +Rankotaku
┃╎్మాై🎐 +Ranknazista
┃╎్మాై🎐 +Rankpobre
┃╎్మాై🎐 +Rankrico
┃╎్మాై🎐 +Rankfeio
┃╎్మాై🎐 +Rankgostosa
┃╎్మాై🎐 +Rankgostoso
┃╎్మాై🎐 +Rankgado
┃╎్మాై🎐 +Rankpau
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐆𝐀𝐌𝐄𝐒 【🎮】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎ঔৣֳ᷌᷈͜͡🎲 +Jogov "@"
┃╎ঔৣֳ᷌᷈͜͡🎲 +resetv
┃╎ঔৣֳ᷌᷈͜͡🎲 +Cassino
┃╎ঔৣֳ᷌᷈͜͡🎲 +Minerar
┃╎ঔৣֳ᷌᷈͜͡🎲 +Forca "solo/global"
┃╎ঔৣֳ᷌᷈͜͡🎲 +fc
┃╎ঔৣֳ᷌᷈͜͡🎲 +Enigna
┃╎ঔৣֳ᷌᷈͜͡🎲 +Revelar_enigma 
┃╎ঔৣֳ᷌᷈͜͡🎲 +Anagrama
┃╎ঔৣֳ᷌᷈͜͡🎲 +Revelar_anagrama 
┃╎ঔৣֳ᷌᷈͜͡🎲 +Quiz_animais  
┃╎ঔৣֳ᷌᷈͜͡🎲 +Revelar_animal 
┃╎ঔৣֳ᷌᷈͜͡🎲 +Gartic 
┃╎ঔৣֳ᷌᷈͜͡🎲 +Revelar_gartic 
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐂𝐀𝐒𝐀𝐌𝐄𝐍𝐓𝐎 【💖】 
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎ঔৣֳ᷌᷈͜͡💌 +Casar
┃╎ঔৣֳ᷌᷈͜͡💌 +Divorciar 
┃╎ঔৣֳ᷌᷈͜͡💌 +Minhadupla
┃╎ঔৣֳ᷌᷈͜͡💌 +Cancelar
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐕𝐄𝐑𝐃𝐀𝐃𝐄 / 𝐃𝐄𝐒𝐀𝐅𝐈𝐎 【✨】 
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎ஓீ፝͜͡🗡 +Vord ↝ 『 ADM 』
┃╎ஓீ፝͜͡🗡 +Participar 
┃╎ஓீ፝͜͡🗡 +Start_Vord ↝ 『 ADM 』
┃╎ஓீ፝͜͡🗡 +Help_Vord
┃╎ஓீ፝͜͡🗡 +Regras_Vord
┃╎ஓீ፝͜͡🗡 +Status_Vord
┃╎ஓீ፝͜͡🗡 +Rm_Vord ↝ 『 ADM 』
┃╎ஓீ፝͜͡🗡 +Add_vord ↝ 『 ADM 』
┃╎ஓீ፝͜͡🗡 +Exit_vord 
┃╎ஓீ፝͜͡🗡 +Pular
┃╎ஓீ፝͜͡🗡 +Reset_Vord ↝ 『 ADM 』
┃╎ஓீ፝͜͡🗡 +Responder 
┃╎ஓீ፝͜͡🗡 +Confirmar
┃╎ஓீ፝͜͡🗡 +Verdade <Opção>
┃╎ஓீ፝͜͡🗡 +Desafio <Opção>
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎

✰ۣۜۜ͜͡BILLIE✿

✰✰✰✰✰`
  },

  "+menulogos": {
    image: "https://i.imgur.com/ZP39eB8.jpeg",
    caption: `
off por enquanto`
  },

  "+menuhentai": {
    image: "https://i.imgur.com/x7w8fZ4.jpeg",
    caption: `
off por enquanto`
  },

  "+menuanime": {
    image: "https://i.imgur.com/bgnA6Ma.jpeg",
    caption: `
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐀𝐍𝐈𝐌𝐄𝐒 【💫】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎☆ۣۜۜ͜͡ 🌌 +Pinterest "tema"
┃╎☆ۣۜۜ͜͡ 🌌 +AnimeInfo "nome"
┃╎☆ۣۜۜ͜͡ 🌌 +yuno
┃╎☆ۣۜۜ͜͡ 🌌 +Daki
┃╎☆ۣۜۜ͜͡ 🌌 +Aqua
┃╎☆ۣۜۜ͜͡ 🌌 +Aizen
┃╎☆ۣۜۜ͜͡ 🌌 +goku
┃╎☆ۣۜۜ͜͡ 🌌 +nezuko
┃╎☆ۣۜۜ͜͡ 🌌 +makima
┃╎☆ۣۜۜ͜͡ 🌌 +kaguya
┃╎☆ۣۜۜ͜͡ 🌌 +nagatoro
┃╎☆ۣۜۜ͜͡ 🌌 +sakura
┃╎☆ۣۜۜ͜͡ 🌌 +itsuki
┃╎☆ۣۜۜ͜͡ 🌌 +chizuru
┃╎☆ۣۜۜ͜͡ 🌌 +hinata
┃╎☆ۣۜۜ͜͡ 🌌 +akame
┃╎☆ۣۜۜ͜͡ 🌌 +waifu
┃╎☆ۣۜۜ͜͡ 🌌 +loli
┃╎☆ۣۜۜ͜͡ 🌌 +megumin 
┃╎☆ۣۜۜ͜͡ 🌌 +neko
┃╎☆ۣۜۜ͜͡ 🌌 +komi
┃╎☆ۣۜۜ͜͡ 🌌 +esdeath
┃╎☆ۣۜۜ͜͡ 🌌 +muzan
┃╎☆ۣۜۜ͜͡ 🌌 +gojo
┃╎☆ۣۜۜ͜͡ 🌌 +shinobu
┃╎☆ۣۜۜ͜͡ 🌌 +yuta
┃╎☆ۣۜۜ͜͡ 🌌 +mitsuri
┃╎☆ۣۜۜ͜͡ 🌌 +yoruichi
┃╎☆ۣۜۜ͜͡ 🌌 +rukia
┃╎☆ۣۜۜ͜͡ 🌌 +fubuki
┃╎☆ۣۜۜ͜͡ 🌌 +kaguya
┃╎☆ۣۜۜ͜͡ 🌌 +anya
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎

✰ۣۜۜ͜͡BILLIE ✿

✰✰✰✰✰ `
  },

  "+menudono": {
    image: "https://i.imgur.com/nRYyL6m.jpeg",
    caption: `
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐃𝐎𝐍𝐎  【👑】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✰ۣۜۜ͜͡🩸 +ConfigurarBot "_Como Configurar_"
┃╎✰ۣۜۜ͜͡🩸 +DonoGp <@user>
┃╎✰ۣۜۜ͜͡🩸 +RmDonoGp <@user>
┃╎✰ۣۜۜ͜͡🩸 +DonosGp <@user>
┃╎✰ۣۜۜ͜͡🩸 +Prefixo
┃╎✰ۣۜۜ͜͡🩸 +Nick_dono
┃╎✰ۣۜۜ͜͡🩸 +Nome_bot
┃╎✰ۣۜۜ͜͡🩸 +Nick_bot
┃╎✰ۣۜۜ͜͡🩸 +Numero_dono 
┃╎✰ۣۜۜ͜͡🩸 +StatusBot
┃╎✰ۣۜۜ͜͡🩸 +Temporizador
┃╎✰ۣۜۜ͜͡🩸 +Zerar_Rank
┃╎✰ۣۜۜ͜͡🩸 +Limpar_Contador
┃╎✰ۣۜۜ͜͡🩸 +Tirar_Counter
┃╎✰ۣۜۜ͜͡🩸 +Add_prefixo
┃╎✰ۣۜۜ͜͡🩸 +Rm_prefixo
┃╎✰ۣۜۜ͜͡🩸 +Ausente "_motivo_"
┃╎✰ۣۜۜ͜͡🩸 +Ativo
┃╎✰ۣۜۜ͜͡🩸 +Add_f
┃╎✰ۣۜۜ͜͡🩸 +Rm_f
┃╎✰ۣۜۜ͜͡🩸 +Pvgp
┃╎✰ۣۜۜ͜͡🩸 +Listablock
┃╎✰ۣۜۜ͜͡🩸 +Addgold
┃╎✰ۣۜۜ͜͡🩸 +Rgold
┃╎✰ۣۜۜ͜͡🩸 +Addcmdvip
┃╎✰ۣۜۜ͜͡🩸 +Delcmdvip
┃╎✰ۣۜۜ͜͡🩸 +Fundo_bemvindo 
┃╎✰ۣۜۜ͜͡🩸 +Fundo_saiu
┃╎✰ۣۜۜ͜͡🩸 +Addvip
┃╎✰ۣۜۜ͜͡🩸 +Delvip
┃╎✰ۣۜۜ͜͡🩸 +Servip
┃╎✰ۣۜۜ͜͡🩸 +Rg_aluguel |_tempo_
┃╎✰ۣۜۜ͜͡🩸 +Ver_aluguel 
┃╎✰ۣۜۜ͜͡🩸 +Lista_aluguel
┃╎✰ۣۜۜ͜͡🩸 +Renovar_aluguel |_Tempo_
┃╎✰ۣۜۜ͜͡🩸 +Rm_aluguel 
┃╎✰ۣۜۜ͜͡🩸 +Revelar
┃╎✰ۣۜۜ͜͡🩸 +Block "@"
┃╎✰ۣۜۜ͜͡🩸 +Unblock "@"
┃╎✰ۣۜۜ͜͡🩸 +Blockcmd 
┃╎✰ۣۜۜ͜͡🩸 +Unblockcmd
┃╎✰ۣۜۜ͜͡🩸 +ListaCmdBlock
┃╎✰ۣۜۜ͜͡🩸 +Blockcmdg
┃╎✰ۣۜۜ͜͡🩸 +Unblockcmdg
┃╎✰ۣۜۜ͜͡🩸 +ListaCmdG
┃╎✰ۣۜۜ͜͡🩸 +Reiniciar
┃╎✰ۣۜۜ͜͡🩸 +Seradm
┃╎✰ۣۜۜ͜͡🩸 +Sermembro
┃╎✰ۣۜۜ͜͡🩸 +Setbio
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐀𝐓𝐈𝐕𝐀𝐂𝐎𝐄𝐒  【🌸】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✰ۣۜۜ͜͡⚔️ +Bangp
┃╎✰ۣۜۜ͜͡⚔️ +Anti-Arqv
┃╎✰ۣۜۜ͜͡⚔️ +Antidelete
┃╎✰ۣۜۜ͜͡⚔️ +Aluguel
┃╎✰ۣۜۜ͜͡⚔️ +Aluguel_global
┃╎✰ۣۜۜ͜͡⚔️ +Unbangp
┃╎✰ۣۜۜ͜͡⚔️ +Multiprefixo
┃╎✰ۣۜۜ͜͡⚔️ +Console
┃╎✰ۣۜۜ͜͡⚔️ +Autoread
┃╎✰ۣۜۜ͜͡⚔️ +Botoff ou boton
┃╎✰ۣۜۜ͜͡⚔️ +Verificado 
┃╎✰ۣۜۜ͜͡⚔️ +Anticall
┃╎✰ۣۜۜ͜͡⚔️ +Antipv1
┃╎✰ۣۜۜ͜͡⚔️ +Antipv2
┃╎✰ۣۜۜ͜͡⚔️ +Antipv3
┃╎✰ۣۜۜ͜͡⚔️ +Limitecaracteres
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐎𝐔𝐓𝐑𝐎𝐒  【❗】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎✰ۣۜۜ͜͡♨️ +Bcgc
┃╎✰ۣۜۜ͜͡♨️ +Substituir (❗)
┃╎✰ۣۜۜ͜͡♨️ +Entrar "_link grupo_"
┃╎✰ۣۜۜ͜͡♨️ +Add "55xxx"
┃╎✰ۣۜۜ͜͡♨️ +Reviver "_marcar mensagem_"
┃╎✰ۣۜۜ͜͡♨️ +ListaNegraG 
┃╎✰ۣۜۜ͜͡♨️ +TirarDaListaG
┃╎✰ۣۜۜ͜͡♨️ +ListaBanG
┃╎✰ۣۜۜ͜͡♨️ +rgtm
┃╎✰ۣۜۜ͜͡♨️ +Banghost
┃╎✰ۣۜۜ͜͡♨️ +transmitir
┃╎✰ۣۜۜ͜͡♨️ +transmitir2 (❗)
┃╎✰ۣۜۜ͜͡♨️ +rmtm
┃╎✰ۣۜۜ͜͡♨️ +Listatm
┃╎✰ۣۜۜ͜͡♨️ +Reviverqr
┃╎✰ۣۜۜ͜͡♨️ +Listagp
┃╎✰ۣۜۜ͜͡♨️ +Exit_gp
┃╎✰ۣۜۜ͜͡♨️ +Sair
┃╎✰ۣۜۜ͜͡♨️ +Ban "@"
┃╎✰ۣۜۜ͜͡♨️ +Idgp
┃╎✰ۣۜۜ͜͡♨️ +Dono1
┃╎✰ۣۜۜ͜͡♨️ +Dono2
┃╎✰ۣۜۜ͜͡♨️ +Dono3
┃╎✰ۣۜۜ͜͡♨️ +Dono4
┃╎✰ۣۜۜ͜͡♨️ +Dono5
┃╎✰ۣۜۜ͜͡♨️ +Dono6
┃╎✰ۣۜۜ͜͡♨️ +Mute
┃╎✰ۣۜۜ͜͡♨️ +Desmute
┃╎✰ۣۜۜ͜͡♨️ +Limitec
┃╎✰ۣۜۜ͜͡♨️ +Configurar_bot
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎

✰ۣۜۜ͜͡BILLIE ✿`
  },

  "+menuadm": {
    image: "https://i.imgur.com/tZ65lcy.jpeg",
    caption: `
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐀𝐃𝐌𝐒 【⛩️】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎☆ۣۜۜ͜͡🎴 +Ban "@"
┃╎☆ۣۜۜ͜͡🎴 +AddCmdAdm
┃╎☆ۣۜۜ͜͡🎴 +DelCmdAdm
┃╎☆ۣۜۜ͜͡🎴 +ListaCmdAdm
┃╎☆ۣۜۜ͜͡🎴 +Adverter "_@pessoa_"
┃╎☆ۣۜۜ͜͡🎴 +Rm_adv "_@pessoa_"
┃╎☆ۣۜۜ͜͡🎴 +Lista_adv "_advertências_"
┃╎☆ۣۜۜ͜͡🎴 +Ver_adv "@pessoa"
┃╎☆ۣۜۜ͜͡🎴 +Limpar_Adv
┃╎☆ۣۜۜ͜͡🎴 +Aceitar "Solicitações"
┃╎☆ۣۜۜ͜͡🎴 +Ausente "texto de ausência"
┃╎☆ۣۜۜ͜͡🎴 +Ativo "volta da ausência"
┃╎☆ۣۜۜ͜͡🎴 +Anotar "texto"
┃╎☆ۣۜۜ͜͡🎴 +Anotações
┃╎☆ۣۜۜ͜͡🎴 +rmnota "nota"
┃╎☆ۣۜۜ͜͡🎴 +Banghost (❗)
┃╎☆ۣۜۜ͜͡🎴 +mute "@pessoa"
┃╎☆ۣۜۜ͜͡🎴 +desmute "@pessoa"
┃╎☆ۣۜۜ͜͡🎴 +Prefixos
┃╎☆ۣۜۜ͜͡🎴 +Add_palavra "palavrão"
┃╎☆ۣۜۜ͜͡🎴 +Rm_palavra "palavrão"
┃╎☆ۣۜۜ͜͡🎴 +Rg_aviso
┃╎☆ۣۜۜ͜͡🎴 +Rm_aviso
┃╎☆ۣۜۜ͜͡🎴 +ListaNegra "55xxxx"
┃╎☆ۣۜۜ͜͡🎴 +TirarDaLista "55xxxx"
┃╎☆ۣۜۜ͜͡🎴 +Listafake
┃╎☆ۣۜۜ͜͡🎴 +Listaban
┃╎☆ۣۜۜ͜͡🎴 +Revelar "viewOnce"
┃╎☆ۣۜۜ͜͡🎴 +Promover "@"
┃╎☆ۣۜۜ͜͡🎴 +Rebaixar "@"
┃╎☆ۣۜۜ͜͡🎴 +sh_num "5521"
┃╎☆ۣۜۜ͜͡🎴 +Linkgp
┃╎☆ۣۜۜ͜͡🎴 +Sorteio
┃╎☆ۣۜۜ͜͡🎴 +Sorteio2
┃╎☆ۣۜۜ͜͡🎴 +Sortear
┃╎☆ۣۜۜ͜͡🎴 +Totag "mensagem"
┃╎☆ۣۜۜ͜͡🎴 +Hidetag "texto"
┃╎☆ۣۜۜ͜͡🎴 +Marcar "marca membros"
┃╎☆ۣۜۜ͜͡🎴 +Marcar2
┃╎☆ۣۜۜ͜͡🎴 +MarcarWa
┃╎☆ۣۜۜ͜͡🎴 +Atividades
┃╎☆ۣۜۜ͜͡🎴 +MsgAdm "texto"
┃╎☆ۣۜۜ͜͡🎴 +Sorteiogold
┃╎☆ۣۜۜ͜͡🎴 +Resetvelha
┃╎☆ۣۜۜ͜͡🎴 +Regras
┃╎☆ۣۜۜ͜͡🎴 +Papof
┃╎☆ۣۜۜ͜͡🎴 +Rv_forca 
┃╎☆ۣۜۜ͜͡🎴 +Revelar_anagrama 
┃╎☆ۣۜۜ͜͡🎴 +Revelar_gartic 
┃╎☆ۣۜۜ͜͡🎴 +Revelar_enigma
┃╎☆ۣۜۜ͜͡🎴 +Banfake (❗)
┃╎☆ۣۜۜ͜͡🎴 +Addcmdgold 
┃╎☆ۣۜۜ͜͡🎴 +Delcmdgold
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝐂𝐎𝐍𝐅𝐈𝐆𝐔𝐑𝐀𝐑 【🍸】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎ঔৣ͜͡💧 +Gp a/f
┃╎ঔৣ͜͡💧 +TempoCmd _segundos_
┃╎ঔৣ͜͡💧 +Opengp "06:00"
┃╎ঔৣ͜͡💧 +Closegp "22:00"
┃╎ঔৣ͜͡💧 +Time-status
┃╎ঔৣ͜͡💧 +Rm_opengp
┃╎ঔৣ͜͡💧 +Bemvindo
┃╎ঔৣ͜͡💧 +Bemvindo2
┃╎ঔৣ͜͡💧 +infobv
┃╎ঔৣ͜͡💧 +Criartabela
┃╎ঔৣ͜͡💧 +info_adverter 
┃╎ঔৣ͜͡💧 +info_listanegra 
┃╎ঔৣ͜͡💧 +infocontador
┃╎ঔৣ͜͡💧 +Descgp "texto"
┃╎ঔৣ͜͡💧 +Fotogp "marcar image"
┃╎ঔৣ͜͡💧 +Gpinfo 
┃╎ঔৣ͜͡💧 +Nomegp "name"
┃╎ঔৣ͜͡💧 +Legenda_listanegra "texto"
┃╎ঔৣ͜͡💧 +Legenda_video "texto"
┃╎ঔৣ͜͡💧 +Legenda_estrangeiro "texto"
┃╎ঔৣ͜͡💧 +Legenda_documento "texto"
┃╎ঔৣ͜͡💧 +Legenda_video "texto"
┃╎ঔৣ͜͡💧 +Legendabv "texto"
┃╎ঔৣ͜͡💧 +Legendasaiu "texto"
┃╎ঔৣ͜͡💧 +Legendabv2 "texto"
┃╎ঔৣ͜͡💧 +Legendasaiu2 "texto"
┃╎ঔৣ͜͡💧 +resetlink (❗)
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┣⋆⃟ۣۜ᭪➣ 𖡦 𝗔𝗧𝗜𝗩𝗔𝗖̧𝗢̃𝗘𝗦 【🔥】
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎
╎
┏═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┓
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎ঔৣ͜͡🀄 +Status
┃╎ঔৣ͜͡🀄 +Antilink
┃╎ঔৣ͜͡🀄 +Advlink
┃╎ঔৣ͜͡🀄 +AntiBots
┃╎ঔৣ͜͡🀄 +AntiMarcar
┃╎ঔৣ͜͡🀄 +Antilinkgp 
┃╎ঔৣ͜͡🀄 +Advlinkgp
┃╎ঔৣ͜͡🀄 +Advflood
┃╎ঔৣ͜͡🀄 +Autosticker
┃╎ঔৣ͜͡🀄 +Antifake 
┃╎ঔৣ͜͡🀄 +Anti_notas
┃╎ঔৣ͜͡🀄 +Anticontato
┃╎ঔৣ͜͡🀄 +Antiloc
┃╎ঔৣ͜͡🀄 +LimitCmd
┃╎ঔৣ͜͡🀄 +Antipalavra
┃╎ঔৣ͜͡🀄 +So_adm
┃╎ঔৣ͜͡🀄 +Antiimg
┃╎ঔৣ͜͡🀄 +Antivideo
┃╎ঔৣ͜͡🀄 +Antiaudio
┃╎ঔৣ͜͡🀄 +Antidoc
┃╎ঔৣ͜͡🀄 +Antisticker
┃╎ঔৣ͜͡🀄 +Anticatalogo
┃╎ঔৣ͜͡🀄 +Multiprefix
┃╎ঔৣ͜͡🀄 +Autoban
┃╎ঔৣ͜͡🀄 +Anagrama
┃╎ঔৣ͜͡🀄 +X9viewonce
┃╎ঔৣ͜͡🀄 +Limitexto
┃╎ঔৣ͜͡🀄 +X9adm
┃╎ঔৣ͜͡🀄 +Simih 
┃╎ঔৣ͜͡🀄 +Simih2
┃╎ঔৣ͜͡🀄 +ModoRPG
┃╎ঔৣ͜͡🀄 +Modogamer
┃╎ঔৣ͜͡🀄 +Autoresposta
┃╎ঔৣ͜͡🀄 ++18
┃╎ঔৣ͜͡🀄 +Antipalavra
┃╰━━─ ≪ •❈• ≫ ─━━╯
┗═•✭･ﾟ✧*･ﾟ| ⊱✿⊰ |*✭˚･ﾟ✧･ﾟ•═┛‎

✰ۣۜۜ͜͡BILLIE ✿

✰✰✰✰✰
`
  },

  "+menurpg": {
    image: "https://i.imgur.com/KaFiOhF.jpeg",
    caption: `
off por enquanto
`
  }
};


// ✅ Carrega lista premium
function carregarPremium() {
  const caminho = path.join(__dirname, "assets/users/premium.json");
  try {
    const data = fs.readFileSync(caminho, "utf8");
    return JSON.parse(data); // Ex: ["5511999999999@s.whatsapp.net"]
  } catch (err) {
    console.error("❌ Erro ao carregar premium.json:", err.message);
    return [];
  }
}

// ✅ Preenche variáveis nas mensagens
function preencherTags(template, dados) {
  return template
    .replace(/{nome}/g, dados.nome)
    .replace(/{numero}/g, dados.numero)
    .replace(/{hora}/g, dados.hora)
    .replace(/{premium}/g, dados.statusPremium);
}

// ✅ Espera o socket global ser carregado
function esperarSocket(retries = 30) {
  const delay = 1000;

  const intervalo = setInterval(() => {
    const sock = globalThis.sock;
    if (!sock || typeof sock.ev?.on !== "function" || typeof sock.sendMessage !== "function") {
      if (retries-- <= 0) {
        console.log("❌ Socket não detectado. Abortando.");
        clearInterval(intervalo);
      }
      return;
    }

    console.log("✅ Socket detectado. Injetando menus...");

    sock.ev.on("messages.upsert", async ({ messages }) => {
      const msg = messages[0];
      if (!msg?.message) return;

      const body =
        msg.message?.conversation ||
        msg.message?.extendedTextMessage?.text ||
        msg.message?.imageMessage?.caption ||
        msg.message?.videoMessage?.caption || "";

      const txt = body.trim().toLowerCase();
      const jid = msg.key.participant || msg.key.remoteJid;
      const nome = msg.pushName || "Usuário";
      const numero = jid.split("@")[0];

      const hora = new Date().toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo"
      });

      const premiumList = carregarPremium();
      const statusPremium = premiumList.includes(jid) ? "✅ Sim" : "❌ Não";

      const dados = { nome, numero, hora, statusPremium };

      // ✅ Se for um menu conhecido
      if (menus[txt]) {
        const menu = menus[txt];
        const caption = preencherTags(menu.caption, dados);

        await sock.sendMessage(msg.key.remoteJid, {
          image: { url: menu.image },
          caption: caption.trim(),
          jpegThumbnail: null
        }, { quoted: msg });

        return; // ⛔ Impede que o index trate esse comando
      }

      // ✅ Comandos manuais extras
      switch (txt) {
        case "+ping":
          await sock.sendMessage(msg.key.remoteJid, {
            text: "🏓 Pong!",
          }, { quoted: msg });
          return;

        // ➕ Adicione outros comandos aqui
      }

      // ⚠️ Nenhum comando tratado aqui? O index vai cuidar disso (e pode dar "comando não encontrado")
    });

    clearInterval(intervalo);
  }, delay);
}

esperarSocket();