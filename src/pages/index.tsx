import React, { useMemo } from "react";
import "./index.scss";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { dateFromSlug } from "../utilities/dateFromSlug";
import profileImage from "../images/profile-image.jpeg";

const externalPosts = [
  {
    id: "external-1",
    url: "https://medium.com/life-at-propeller/oops-i-did-it-again-435f21f6c739",
    slug: "2022-05-19",
    frontmatter: {
      title: "Oops, I did it again!",
      description:
        "The grass is always greener: Do I want to work as an IC or lead?",
      timeToRead: 6,
    },
  },
  {
    id: "external-2",
    url: "https://medium.com/life-at-propeller/hackathon-driven-development-taking-dirtlapse-to-production-55683d9691bb",
    slug: "2022-09-15",
    frontmatter: {
      title: "Hackathon Driven Development",
      description: "Taking 'Dirtlapse' from a hackathon project to production",
      timeToRead: 6,
    },
  },
];

export const Index: React.FC<any> = ({ data }) => {
  const allPosts = useMemo(() => {
    const posts = externalPosts.concat(data.allMdx.nodes);
    posts.sort((a, b) => b.slug.localeCompare(a.slug));

    return posts;
  }, [data.allMdx.nodes]);

  return (
    <Layout title="Posts" description="">
      <div className="page-index">
        <div className="about-me">
          <img src={profileImage} alt="Jye Lewis Profile Image" height={150} />
          I&apos;m a software engineer working primarily on the web. My ultimate
          goal as a developer is to improve my ability to explain a complex
          subject in accessible terms.
          <div style={{ clear: "both" }} />
        </div>

        {allPosts.map((node: any) => (
          <article key={node.id}>
            <Link
              to={node.url || `/blog/${node.slug}`}
              target={node.url ? "_blank" : undefined}
            >
              <h2 className="title">{node.frontmatter.title}</h2>
              <p className="date">
                {node.frontmatter.timeToRead || node.timeToRead} min read.{" "}
                {dateFromSlug(node.slug)}
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
          timeToRead
        }
        id
        slug
        body
        timeToRead
      }
    }
  }
`;
