

import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.

const GEMINI_API_KEY = 'AIzaSyCwGr7ac3qZ7364JVizS1OYRuPobZO8dUE'
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Explain how AI works in a few words",
    });
    console.log(response.text);
    return response.text()
}

export default main;