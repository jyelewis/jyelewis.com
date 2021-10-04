import * as React from "react";
import { Helmet } from "react-helmet";

export type Props = {
  title: string;
  description: string;
};

export const Seo: React.FC<Props> = ({ description, title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={`${title} | jyelewis.com`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@jyelew15",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
};
