export const API_URL = "https://strapiproject-server.aldairgc.com";
export const POSTS_URL = `${API_URL}/api/posts?populate=%2A`;
export const POST_URL = (postId: string): string => {
  return `${API_URL}/api/posts/${postId}`;
};
export const SERVER_HOST_NAME = "strapi-project-server.aldairgc.com";

export const SITE_NAME = "Next Strapi Blog";
export const SITE_URL = "http://localhost:3000";
