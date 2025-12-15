import {chat} from "../llm/llmFacade.js";



export async function chatPipeline(msg) {
    return chat(msg);
    
}
