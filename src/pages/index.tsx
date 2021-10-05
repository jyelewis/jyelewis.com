import React from "react";
import "./index.scss";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { dateFromSlug } from "../utilities/dateFromSlug";
import profileImage from "../images/profile-image.jpeg";

export const Index: React.FC<any> = ({ data }) => {
  return (
    <Layout title="Posts" description="">
      <div className="page-index">
        <div className="about-me">
          <img
            src={profileImage}
            alt="Jye Lewis Profile Image"
            width={150}
            height={150}
          />
          I&apos;m a software engineer working primarily on the web. My ultimate
          goal as a developer is to improve my ability to explain a complex
          subject in accessible terms.
          <div style={{ clear: "both" }} />
        </div>

        {data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              <h2 className="title">{node.frontmatter.title}</h2>
              <p className="date">
                {node.timeToRead} min read. {dateFromSlug(node.slug)}
              </p>
              <p className="description">{node.frontmatter.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default Index;

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
        timeToRead
      }
    }
  }
`;
