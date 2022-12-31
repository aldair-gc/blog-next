import { render, screen } from "@testing-library/react";
import Post from ".";

describe("<Post />", () => {
  it("should render a post", () => {
    render(
      <Post
        postData={{
          id: 0,
          attributes: {
            title: "",
            content: "",
            slug: "",
            createdAt: "",
            updatedAt: "",
            publishedAt: "",
            cover: {
              data: {
                id: 0,
                attributes: {
                  name: "",
                  createdAt: "",
                  updatedAt: "",
                  ext: "",
                  url: "",
                  hash: "",
                  mime: "",
                  size: 0,
                  width: 0,
                  height: 0,
                  alternativeText: "",
                  caption: "",
                  previewUrl: "",
                  provider: "",
                  provider_metadata: "",
                  formats: {
                    large: {
                      ext: "",
                      url: "",
                      hash: "",
                      mime: "",
                      name: "",
                      path: "",
                      size: 0,
                      width: 0,
                      height: 0,
                    },
                    small: {
                      ext: "",
                      url: "",
                      hash: "",
                      mime: "",
                      name: "",
                      path: "",
                      size: 0,
                      width: 0,
                      height: 0,
                    },
                    medium: {
                      ext: "",
                      url: "",
                      hash: "",
                      mime: "",
                      name: "",
                      path: "",
                      size: 0,
                      width: 0,
                      height: 0,
                    },
                    thumbnail: {
                      ext: "",
                      url: "",
                      hash: "",
                      mime: "",
                      name: "",
                      path: "",
                      size: 0,
                      width: 0,
                      height: 0,
                    },
                  },
                },
              },
            },
            author: {
              data: {
                id: 0,
                attributes: {
                  name: "",
                  createdAt: "",
                  updatedAt: "",
                  publishedAt: "",
                },
              },
            },
            category: {
              data: {
                id: 0,
                attributes: {
                  name: "",
                  createdAt: "",
                  updatedAt: "",
                  publishedAt: "",
                },
              },
            },
          },
        }}
      />,
    );
  });
});
