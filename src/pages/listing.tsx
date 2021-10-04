import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { dateFromSlug } from "../utilities/dateFromSlug";

export const Listing: React.FC<any> = ({ data }) => {
  return (
    <Layout title="Posts" description="">
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <Link to={`/blog/${node.slug}`}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {dateFromSlug(node.slug)}</p>
            <p>{node.frontmatter.description}</p>
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export default Listing;

export const query = graphql`
  query {
    allMdx(sort: { fields: slug, order: DESC }) {
      nodes {
        frontmatter {
          title
          description
        }
        id
        slug
        body
      }
    }
  }
`;
