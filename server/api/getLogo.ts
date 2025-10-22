import { createClient } from '@prismicio/client'

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const logoId = query.id;

  if (!logoId) {
    console.error("Error: Logo ID not provided");
    throw createError({
      statusCode: 400,
      statusMessage: "Logo ID is required",
    });
  }

  try {
    const client = createClient('tilbudsskabelon')
    
    // Get the logo from Prismic
    const logo = await client.getByID(logoId)
    
    if (!logo.data.logo) {
      throw createError({
        statusCode: 404,
        statusMessage: "Logo not found",
      });
    }

    // Return the logo URL
    return {
      url: logo.data.logo.url,
      alt: logo.data.logo.alt || 'Logo'
    }
  } catch (error) {
    console.error("Error fetching logo:", error);
    throw createError({
      statusCode: 500,
      statusMessage: `Error fetching logo: ${error.message}`,
    });
  }
});
