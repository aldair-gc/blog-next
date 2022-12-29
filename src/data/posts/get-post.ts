import { POST_URL } from "../../config/app-config";
import { PostData } from "../../domain/posts/posts";
import { fetchJson } from "../../utils/fetch-json";
import { markDownToHtml } from "../../utils/markdown-to-html";

export const getPost = async (id: number): Promise<PostData> => {
  const post = await fetchJson<{ data: PostData }>(POST_URL(`${id}?populate=%2A`));

  if (!post.data) return post.data;

  const content = await markDownToHtml(post.data.attributes.content);
  post.data.attributes.content = content;
  return post.data;
};
