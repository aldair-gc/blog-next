import { POST_URL } from "../../config/app-config";
import { PostData } from "../../domain/posts/posts";
import { fetchJson } from "../../utils/fetch-json";
import { markDownToHtml } from "../../utils/markdown-to-html";

export const getPost = async (id: string): Promise<PostData> => {
  const data = await fetchJson<PostData>(POST_URL(`${id}?populate=%2A`));
  const content = await markDownToHtml(data.attributes.content);
  data.attributes.content = content;
  return data;
};
