import * as React from "react";
import "./BlogPost.scss";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../../components/Layout";
import { dateFromSlug } from "../../utilities/dateFromSlug";

const BlogPost: React.FC<any> = ({ data }) => {
  return (
    <Layout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
    >
      <article className="component-BlogPost">
        <h1 className="post-title">{data.mdx.frontmatter.title}</h1>
        <p className="post-date">
          by Jye Lewis on {dateFromSlug(data.mdx.slug)}
        </p>
        <div className="post-content">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </article>
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
