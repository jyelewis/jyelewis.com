import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../../components/layout";

const BlogPost: React.FC<any> = ({ data }) => {
  const date = data.mdx.slug.split("/")[0];

  return (
    <Layout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
    >
      <p>{date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
      slug
      body
    }
  }
`;
export default BlogPost;
