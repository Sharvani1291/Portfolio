import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
});
