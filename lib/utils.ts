import { env } from "std-env";

const IMGBB_API_KEY = env.IMGBB_API_KEY;

/**
 * Generates a random number between the given min and max values.
 *
 * @param min The minimum value for the random number.
 * @param max The maximum value for the random number.
 *
 * @returns A random number between the given min and max values.
 */
export function generateRandomNumber(min = 100000, max = 10000000) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Converts an ArrayBuffer to a base64 string.
 *
 * @param arrayBuffer The ArrayBuffer to convert to a base64 string.
 *
 * @returns The base64 string representation of the ArrayBuffer.
 */
export function convertToBase64(arrayBuffer: ArrayBuffer) {
	let string = "";
	const encodedArray = new Uint8Array(arrayBuffer);

	for (const byte of encodedArray) {
		string += String.fromCharCode(byte);
	}

	string = btoa(string);

	return string;
}

/**
 * Uploads the given data to ImgBB and returns the response.
 *
 * @param data The data to upload to ImgBB.
 *
 * @returns The URL of the uploaded image.
 */
export async function uploadToImgBB(data: string) {
	const formData = new FormData();
	formData.append("image", data);

	// Upload the image to ImgBB.
	const imgBBUploadResponse = await fetch(
		`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
		{
			method: "POST",
			body: formData,
		},
	);

	const imgBBUploadResponseJson = await imgBBUploadResponse.json();

	if (!imgBBUploadResponseJson?.data?.url) {
		throw new Error(
			`Failed to upload image to ImgBB. Response: ${JSON.stringify(imgBBUploadResponse)}`,
		);
	}

	return imgBBUploadResponseJson.data.url;
}
