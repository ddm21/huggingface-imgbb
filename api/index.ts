import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { generateRandomNumber, uploadToImgBB } from "../lib/utils";
import { generateImage } from "../lib/hugging-face";

export const config = {
	runtime: "edge",
};

const app = new Hono().basePath("/api");

app.post(
	"/generate-image",
	zValidator(
		"json",
		z.object({
			prompt: z.string().min(1),
			seed: z.number().min(1).default(generateRandomNumber()),
		}),
	),
	async ({ req, json }) => {
		const requestBody = req.valid("json");

		try {
			const generatedImage = await generateImage(
				requestBody.prompt,
				requestBody.seed,
			);

			const uploadedImageURL = await uploadToImgBB(generatedImage);

			// Return the generated image
			return json({
				success: true,
				imageUrl: uploadedImageURL,
			});
		} catch (error) {
			console.log(error);
			// Return an error response
			return json({ message: error }, { status: 500 });
		}
	},
);

export default handle(app);
