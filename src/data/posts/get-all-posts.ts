import { POSTS_URL } from "../../config/app-config";
import { PostData } from "../../domain/posts/posts";
import { fetchJson } from "../../utils/fetch-json";

export const getPosts = async (): Promise<PostData[]> => {
  const data = await fetchJson<PostData[]>(POSTS_URL);
  return data;
};
