//Se llama al modulo
const { Telegraf } = require('telegraf')
//Se crea al bot con el Token otorgado por BotFather
const bot = new Telegraf('1686465985:AAH_sp6_uNnBDWYFGKVo6KnEVqzHoTvz89I');

//Se configura al bot
bot.start((ctx)=>{
    ctx.reply(`Hola, ${ctx.from.first_name} bienvenido a mi bot! Si quieres saber que es lo que puedo hacer, enviame un /help!`)
});
//Ayuda de los comandos 
bot.help((ctx)=>{
    ctx.reply('Muy bien, esto puedo hacer: /lng va decirte en qué idioma me estas escribiendo, y /bot va a decirte si eres o no un bot')
});

//
bot.settings((ctx)=>{
    ctx.reply('Settings')
})

//Comandos personalizados
bot.command(['/lng','/Lng'],(ctx)=>{
    ctx.reply(`Me estas hablando en ${ctx.from.language_code}`)
})
bot.command(['/bot','/Bot'],(ctx)=>{
    if(ctx.from.is_bot == true){
        ctx.reply('Si, eres un bot')
    }
    else{
        ctx.reply('Parece que eres de carne y hueso')
    }
})

//Se arranca al bot

bot.launch()

