import {config} from "dotenv"
config()
import { Configuration, OpenAIApi } from "openai"
import readline from "readline"


const openai = new OpenAIApi(new Configuration({
    apiKey : process.env.API_KEY
}))

const userInterface = readline.createInterface({
    input: process.stdin,
    output : process.stdout
})

userInterface.prompt()
 //listener
 userInterface.on("line", async input => {
    const response = await openai.createChatCompletion({
        model : "gpt-3.5-turbo",
        // role is WHO the message is coming from. 
        // content is the actual content of the message.
        messages: [{role: "user", content: input}]
    // creates a promise which then gives us a result. 
    })
    console.log(response.data.choices[0].message.content)
    userInterface.prompt()
 })








