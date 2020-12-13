


let quotes = ['How much trouble do you think we’d get into if I were your co-worker?',' If you come upstairs, I’ll let you skip first and go straight for a home run.','I bought new lingerie. Wanna see?'];
 
const addQuotes = (quote) => {
    quotes.push(quote)
}

const generateMessage = () =>{
    let randNum = Math.floor(Math.random()* quotes.length)
    return quotes[randNum]
}



addQuotes('How many more days until we’re in bed together, again?')
addQuotes('How many times can you go in one night')

console.log(generateMessage())