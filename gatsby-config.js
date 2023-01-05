module.exports = {
  siteMetadata: {
    siteUrl: "https://jyelewis.com",
    title: "jyelewis.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                const [year, month, day] = node.slug.split("-");
                return {
                  title: node.frontmatter.title,
                  description: node.frontmatter.description,
                  date: `${year}-${month}-${day}`,
                  url: site.siteMetadata.siteUrl + "/blog/" + node.slug,
                  guid: site.siteMetadata.siteUrl + node.slug,
                };
              });
            },
            query: `
              {
                allMdx(sort: { fields: slug, order: DESC }) {
                  nodes {
                    frontmatter {
                      title
                      description
                    }
                    id
                    slug
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "jyelewis.com",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          "gatsby-remark-prismjs",
          "gatsby-remark-autolink-headers",
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `./src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
    },
  ],
};
