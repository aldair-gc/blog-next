type CoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
};

type Attributes = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

export type PostData = {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
          ext: string;
          url: string;
          hash: string;
          mime: string;
          size: number;
          width: number;
          height: number;
          alternativeText: string;
          caption: string;
          previewUrl: string;
          provider: string;
          provider_metadata: string;
          formats: {
            large: CoverFormat;
            small: CoverFormat;
            medium: CoverFormat;
            thumbnail: CoverFormat;
          };
        };
      };
    };
    author: Attributes;
    category: Attributes;
  };
};
