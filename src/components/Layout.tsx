import * as React from "react";
import { Link } from "gatsby";
import { Seo } from "./Seo";

export type Props = {
  title: string;
  description: string;
};

export const Layout: React.FC<Props> = ({ description, title, children }) => {
  return (
    <div className="global-wrapper">
      <Seo title={title} description={description} />
      <Link className="header-link-home" to="/">
        jyelewis.com
      </Link>
      <main>{children}</main>
      <footer>&copy; {new Date().getFullYear()} Jye Lewis</footer>
    </div>
  );
};
