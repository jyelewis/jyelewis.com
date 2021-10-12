import * as React from "react";
import "./BlogPost.scss";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../../components/Layout";
import { dateFromSlug } from "../../utilities/dateFromSlug";
import { MDXProvider } from "@mdx-js/react";

const isSSR = typeof window === "undefined";
const ReactFreezeframeLazy = React.lazy(() => import("react-freezeframe"));

const CustomLink: React.FC<any> = (props) => {
  if (props.href.startsWith("http")) {
    return <Link {...props} to={props.href} target="_blank" rel="noopener" />;
  }

  return <Link {...props} to={props.href} />;
};

const CustomImg: React.FC<any> = (props) => {
  if (isSSR) {
    return <img {...props} />;
  }

  return (
    <React.Suspense fallback={<img {...props} />}>
      <ReactFreezeframeLazy
        {...props}
        options={{
          overlay: true,
          responsive: false,
          trigger: "hover",
          warnings: false,
        }}
      />
    </React.Suspense>
  );
};

const customMdxComponents = {
  a: CustomLink,
  img: CustomImg,
};

const BlogPost: React.FC<any> = ({ data }) => {
  return (
    <Layout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
    >
      <article className="component-BlogPost">
        <h1 className="post-title">{data.mdx.frontmatter.title}</h1>
        <p className="post-date">
          {data.mdx.frontmatter.timeToRead || data.mdx.timeToRead} min read.{" "}
          {dateFromSlug(data.mdx.slug)}
        </p>
        <div className="post-content">
          <MDXProvider components={customMdxComponents}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>

        <div className="read-more-posts">
          <Link to="/">Read more posts</Link>
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
        timeToRead
      }
      slug
      body
      timeToRead
    }
  }
`;
export default BlogPost;
