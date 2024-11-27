import admin from "firebase-admin";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const logoPath = query.path;

  if (!logoPath) {
    console.error("Error: Logo path not provided");
    throw createError({
      statusCode: 400,
      statusMessage: "Logo path is required",
    });
  }

  try {
    // Access the Firebase Admin storage bucket
    const bucket = admin.storage().bucket();
    const file = bucket.file(logoPath);

    // Get metadata to determine content type
    const [metadata] = await file.getMetadata();
    console.log("File metadata:", metadata);

    // Create a readable stream of the file
    const stream = file.createReadStream();

    // Set the appropriate content type
    event.node.res.setHeader("Content-Type", metadata.contentType);
    return stream;
  } catch (error) {
    console.error("Error fetching logo:", error);
    throw createError({
      statusCode: 500,
      statusMessage: `Error fetching logo: ${error.message}`,
    });
  }
});
