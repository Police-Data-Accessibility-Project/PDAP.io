// DEPENDENCIES
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

// COMPONENTS
import Header from "../components/Header"
import Footer from "../components/Footer"

// CSS
import "../css/main.css"

export default function Layout(props) {
  return (
    <StaticQuery
      query={graphql`
        query siteMetadata {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div id="main">
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              name="description"
              content="We gather data, then educate citizens and empower the public. PDAP aggregates and consolidates open-source, law-enforcement activity data into digestible records."
            ></meta>
            <title>{data.site.siteMetadata.title}</title>
            {/* Global site tag (gtag.js) - Google Analytics */}
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-REKS6B95BL"></script>
              <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-REKS6B95BL');
              `}
              </script>
          </Helmet>
          <Header pages={props.pages} />
          <main className="container">{props.children}</main>
          <Footer />
        </div>
      )}
    />
  )
}

Layout.defaultProps = {
  pages: [],
  title: "Title",
  children: null,
}
