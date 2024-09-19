import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_KEY } from "./constants";

const genAI = new GoogleGenerativeAI(AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;