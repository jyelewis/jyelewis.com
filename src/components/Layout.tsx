import * as React from "react";
import "./Layout.scss";
import { Link } from "gatsby";
import { Seo } from "./Seo";

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
          &copy; 2021-{new Date().getFullYear()} Jye Lewis
        </div>
        <div className="socials">
          <Link to="/" title="Blog home">
            blog
          </Link>
          <Link
            to="mailto:jye@jyelewis.com"
            title="jye@jyelewis.com"
            target="_blank"
            rel="noopener"
          >
            email
          </Link>
          <Link
            to="https://twitter.com/jyelew15"
            title="twitter: @jyelew15"
            target="_blank"
            rel="noopener"
          >
            twitter
          </Link>
          <Link
            to="https://fosstodon.org/@jyelewis"
            title="mastodon: @jyelewis@fosstodon.org"
            target="_blank"
            rel="me"
          >
            mastodon
          </Link>
          <Link
            to="https://github.com/jyelewis"
            title="github: @jyelewis"
            target="_blank"
            rel="noopener"
          >
            github
          </Link>
          <Link
            to="https://www.linkedin.com/in/jye-lewis-680ab6120/"
            title="LinkedIn: Jye Lewis"
            target="_blank"
            rel="noopener"
          >
            linkedin
          </Link>
        </div>
      </footer>
    </div>
  );
};
