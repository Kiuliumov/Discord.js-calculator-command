const  Discord  = require("discord.js")

module.exports ={ 
name:'calculator',
async execute(message,args){
let number1 = Number(args[0])
let number2 = Number(args[2])


if(args[1] === '*'){
const result = number1 * number2
const msg = await message.channel.send('Calculating...')
const embed = new Discord.MessageEmbed()

.setColor('03fccf')
   .setTitle('Calculator')
   .setDescription(`The result is ${result}!`)
.setFooter('Kenobi Bot®')
.setImage('https://media.giphy.com/media/VIbp98GiJdGnnTDE4f/giphy.gif')

msg.delete()
   
message.channel.send(embed)

}else if(args[1] === '+'){

    const result = number1 + number2
    const msg = await message.channel.send('Calculating...')
    const embed = new Discord.MessageEmbed()
    
    .setColor('03fccf')
       .setTitle('Calculator')
       .setDescription(`The result is ${result}!`)
    .setFooter('Kenobi Bot®')
    .setImage('https://media.giphy.com/media/VIbp98GiJdGnnTDE4f/giphy.gif')

    msg.delete()
       
    message.channel.send(embed)

}else if(args[1] ==='-'){
 const result = number1 - number2
const msg = await message.channel.send('Calculating...')
const embed = new Discord.MessageEmbed()

.setColor('03fccf')
   .setTitle('Calculator')
   .setDescription(`The result is ${result}!`)
.setFooter('Kenobi Bot®')
.setImage('https://media.giphy.com/media/VIbp98GiJdGnnTDE4f/giphy.gif')

msg.delete()
   
message.channel.send(embed)


}else if(args[1]==='/'){
const result = number1 / number2


const msg = await message.channel.send('Calculating...')
const embed = new Discord.MessageEmbed()

.setColor('03fccf')
.setTitle('Calculator')
.setDescription(`The result is ${result}!`)
.setFooter('Kenobi Bot®')
.setImage('https://media.giphy.com/media/VIbp98GiJdGnnTDE4f/giphy.gif')
msg.delete()
   
message.channel.send(embed)

}

}
}
