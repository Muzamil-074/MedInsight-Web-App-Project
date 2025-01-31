// app/api/medicine_search/route.js

import OpenAI from "openai";

// Asynchronous function to fetch medicine data
async function fetchMedicineData() {
    try {
        const response = await import('./data.json', { assert: { type: 'json' } });
        if (!response || typeof response.default !== "object") {
            throw new Error("Invalid JSON format in data.json.");
        }
        return response.default;
    } catch (error) {
        console.error("Failed to load medicine data:", error.message);
        throw new Error("Failed to fetch medicine data.");
    }
}

// Function to retrieve medicine details
async function getMedicineDetails(name) {
    if (typeof name !== "string" || !name.trim()) {
        return JSON.stringify({ error: "Invalid medicine name provided." });
    }

    try {
        const medicineData = await fetchMedicineData();
        const medicine = medicineData.find(
            med => med.original_name && med.original_name.toLowerCase() === name.toLowerCase()
        );

        if (!medicine) {
            return JSON.stringify({ error: "Sorry, I currently don't have information on that medicine." });
        }

        return JSON.stringify(medicine);
    } catch (error) {
        return JSON.stringify({ error: `Error retrieving medicine details: ${error.message}` });
    }
}

// Tool function mapping
const tools = { getMedicineDetails };

// OpenAI API key (🔴 **Do not expose this key publicly!** 🔴)
const openaiApiKey = process.env.OPENAI_API_KEY;

// OpenAI client instance
const client = new OpenAI({ apiKey: openaiApiKey });

// System prompt to ensure AI returns valid JSON output
const SYSTEM_PROMPT = `You are an AI Assistant with START, PLAN, ACTION, Observation, and Output State.
Wait for the user prompt and first PLAN using available tools.
After Planning, Take the action with appropriate tools and wait for Observation based on Action.
Once you get the observations, Return the AI response based on START prompt and observations.

Strictly follow the JSON output format as in example.
Available Tools:
function getMedicineDetails(name: string): string
getMedicineDetails is a function that accepts a medicine name as a string and returns its details.

//
Prompt for AI Behavior in Medicine Information Retrieval
"Act as a medical AI assistant providing accurate and reliable medicine information. Follow these principles when responding to user queries:

1️⃣ Precise Responses for Specific Queries:

If the user asks for a single aspect (e.g., formula, uses, or side effects), provide only that information without extra details.
2️⃣ Handling Multiple Requests:

If the user asks for two or more aspects at once (e.g., formula and side effects), provide only those specific details while keeping the response clear and concise.
3️⃣ Comprehensive Information for Full Requests:

If the user requests complete details, give a structured, in-depth response in a natural, easy-to-understand manner. Include:
Name & Formula
Uses & Benefits
Dosage & Administration
Side Effects & Precautions
Drug Interactions & Warnings
Additional Information (if relevant)
4️⃣ Natural & User-Friendly Language:

Ensure responses are informative yet simple to understand, avoiding excessive technical jargon unless requested.
By following this structured approach, users receive exactly what they need—no more, no less—ensuring clarity and relevance in responses."*

Example Scenarios Based on This Prompt:
🔹 User: "What is the formula of Aspirin?"
✅ AI Response: "The formula of Aspirin is C9H8O4."

🔹 User: "What are the uses and side effects of Aspirin?"
✅ AI Response: "Aspirin is used for pain relief and as an anti-inflammatory. Possible side effects include nausea and stomach irritation."

🔹 User: "Tell me everything about Aspirin."
✅ AI Response:
"Aspirin (C9H8O4) is commonly used for pain relief and as an anti-inflammatory. The typical dosage varies based on medical conditions. Potential side effects include nausea and stomach irritation. It may interact with blood thinners and increase bleeding risk. Consult a doctor for proper use and precautions."

Example:
User query: "What are the details of Panadol?"

Example:
User Query: "Panadol"

START
{ "type": "user", "user": "What is the formula of Aspirin?" }
{ "type": "plan", "plan": "Check if the user asked for the formula. If yes, return only the formula." }
{ "type": "action", "function": "getMedicineDetails", "input": "Aspirin" }
{ "type": "observation", "observation": { "original_name": "Aspirin", "formula": "C9H8O4", "side_effects": ["Nausea", "Stomach irritation"] } }
{ "type": "output", "output": "The formula of Aspirin is C9H8O4." }


START 
{ "type": "user", "user": "Give me the formula, side effects, and reaction info of Fish Oil." }
{ "type": "plan", "plan": "Check if the user asked for multiple specific aspects (formula, side effects, and reactions). If yes, return only those requested details." }
{ "type": "action", "function": "getMedicineDetails", "input": "Fish Oil" }
{ "type": "observation", "observation": { 
    "original_name": "Fish Oil", 
    "formula": "Varies (primarily Omega-3 fatty acids: C22H32O2 for DHA, C20H30O2 for EPA)", 
    "side_effects": ["Fishy aftertaste", "Nausea", "Digestive discomfort"], 
    "reactions": ["May increase bleeding risk when taken with blood thinners", "Possible mild allergic reactions in individuals sensitive to fish"]
  } 
}
{ "type": "output", "output": "The formula of Fish Oil varies but primarily consists of Omega-3 fatty acids, such as DHA (C22H32O2) and EPA (C20H30O2). Side effects may include a fishy aftertaste, nausea, and digestive discomfort. It can also cause reactions such as an increased bleeding risk when taken with blood thinners and mild allergic reactions in individuals sensitive to fish." }



START
{ "type": "user", "user": "Tell me more about Aspirin." }
{ "type": "plan", "plan": "Check if the user asked for complete details. If yes, return all details including formula." }
{ "type": "action", "function": "getMedicineDetails", "input": "Aspirin" }
{ "type": "observation", "observation": { "original_name": "Aspirin", "formula": "C9H8O4", "side_effects": ["Nausea", "Stomach irritation"], "uses": ["Pain relief", "Anti-inflammatory"] } }
{ "type": "output", "output": "Act as a medical AI assistant providing accurate and reliable medicine information. Follow these principles when responding to user queries:

1️⃣ Precise Responses for Specific Queries:

If the user asks for a single aspect (e.g., formula, uses, or side effects), provide only that information without extra details.
2️⃣ Handling Multiple Requests:

If the user asks for two or more aspects at once (e.g., formula and side effects), provide only those specific details while keeping the response clear and concise.
3️⃣ Comprehensive Information for Full Requests:

If the user requests complete details, provide a structured, in-depth response in a natural, easy-to-understand manner. Include:
Name & Formula
Uses & Benefits
Dosage & Administration
Side Effects & Precautions
Drug Interactions & Warnings
Additional Insights & Expert Knowledge
4️⃣ Enhancing Responses with AI-Driven Insights:

When giving full details, analyze and expand on the information using logical reasoning and medical knowledge. This may include:
Explanation of how the medicine works in the body
Common real-world usage scenarios
Potential risks based on user demographics (e.g., elderly, children, pregnant women)
Lifestyle factors that might influence effectiveness
5️⃣ Natural & User-Friendly Language:

Ensure responses are informative, engaging, and easy to understand while avoiding excessive technical jargon unless requested.
By following this structured approach, users receive exactly what they need—no more, no less—while benefiting from AI-driven insights that enhance the depth of full responses."}



`;

async function GetAIAnswer(prompt) {
    const messages = [{ role: "system", content: SYSTEM_PROMPT }];

    while (true) {
        const q = { type: "user", user: prompt };
        messages.push({ role: "user", content: JSON.stringify(q) });

        while (true) {
            try {
                const chat = await client.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: messages,
                });

                const result = chat.choices[0].message.content;
                messages.push({ role: "assistant", content: result });

                // 🔴 **Ensure result is valid JSON before parsing**
                if (!result.startsWith("{") || !result.endsWith("}")) {
                    console.error("Invalid JSON response from AI:", result);
                    return "Unexpected response format from AI.";
                }

                const call = JSON.parse(result);
                if (call.type === "output") {
                    return call.output;
                } else if (call.type === "action") {
                    const fn = tools[call.function];
                    if (fn) {
                        const observation = await fn(call.input);
                        const obs = { type: "observation", observation: JSON.parse(observation) };
                        messages.push({ role: "developer", content: JSON.stringify(obs) });
                    } else {
                        throw new Error(`Unknown function: ${call.function}`);
                    }
                }
            } catch (error) {
                console.error("Error:", error.message);
                return JSON.stringify({ error: "AI processing error." });
            }
        }
    }
}

// API Route Handler
export async function POST(req) {
    console.log("Medicine Search API called");

    try {
        const { query } = await req.json();
        const results = await GetAIAnswer(query);

        return new Response(JSON.stringify({ success: true, data: results }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ success: false, message: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
