import * as React from "react";
import "./Layout.scss";
import { Link } from "gatsby";
import { Seo } from "./Seo";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export type Props = {
  title: string;
  description: string;
};

export const Layout: React.FC<Props> = ({ description, title, children }) => {
  return (
    <div className="component-Layout">
      <Seo title={title} description={description} />
      <header>
        <Link className="header-link-home" to="/">
          Jye Lewis&apos;s blog
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Jye Lewis
        </div>
        <div className="socials">
          <Link to="/" title="Blog home">
            blog
          </Link>
          <OutboundLink
            href="mailto:jye@jyelewis.com"
            title="jye@jyelewis.com"
            target="_blank"
          >
            email
          </OutboundLink>
          <OutboundLink
            href="https://twitter.com/jyelew15"
            title="twitter: @jyelew15"
            target="_blank"
          >
            twitter
          </OutboundLink>
          <OutboundLink
            href="https://github.com/jyelewis"
            title="github: @jyelewis"
            target="_blank"
          >
            github
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/in/jye-lewis-680ab6120/"
            title="LinkedIn: Jye Lewis"
            target="_blank"
          >
            linkedin
          </OutboundLink>
        </div>
      </footer>
    </div>
  );
};
