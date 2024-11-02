import { env } from "std-env";
import { convertToBase64 } from "./utils";

const BASE_URL = "https://api-inference.huggingface.co";
const MODEL = "black-forest-labs/FLUX.1-schnell";
const API_KEY = env.HUGGING_FACE_API_KEY;

export async function generateImage(prompt: string, seed: number) {
	const huggingFaceResponse = await fetch(`${BASE_URL}/models/${MODEL}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${API_KEY}`,
		},
		body: JSON.stringify({
			inputs: prompt,
			seed,
		}),
	});

	if (!huggingFaceResponse.ok) {
		const body = await huggingFaceResponse.text();
		console.log(body);
		throw new Error(
			`Failed to generate image. Status: ${huggingFaceResponse.status} | Body: ${body}`,
		);
	}

	// Convert the image to a base64 string.
	const imageArrayBuffer = await huggingFaceResponse.arrayBuffer();
	const base64Image = convertToBase64(imageArrayBuffer);

	return base64Image;
}
