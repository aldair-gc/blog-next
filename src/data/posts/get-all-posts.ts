import { POSTS_URL } from "../../config/app-config";
import { PostsMeta } from "../../domain/posts/meta";
import { PostData } from "../../domain/posts/posts";
import { fetchJson } from "../../utils/fetch-json";

type jsonType = { data: PostData[]; meta: PostsMeta };

export const getAllPosts = async (query = ""): Promise<jsonType> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchJson<jsonType>(url);
  return posts;
};
