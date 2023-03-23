import {config} from "dotenv"
config()
import { Configuration, OpenAIApi } from "openai"



const openai = new OpenAIApi(new Configuration({
    apiKey : process.env.API_KEY
}))

openai.createChatCompletion({
    model : "gpt-3.5-turbo",
    // role is WHO the message is coming from. 
    // content is the actual content of the message.
    messages: [{role: "user", content: "Hello chatbot!"}]
// creates a promise which then gives us a result. 
}).then(res => {
    console.log(res.data.choices[0].message.content)
})