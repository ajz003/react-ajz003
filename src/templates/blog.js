import React from 'react';
import moment from 'moment-timezone';
import { graphql } from 'gatsby';
import { Link, RichText, Date } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';

import Layout from '../components/layout'
import SEO from '../components/seo'

import "./blog.scss"

const Page = props => {
  const document = props.data.prismic.allArticles.edges.slice(0, 1).pop();
  if (!document) return null;

  const blogContent = document.node.body1.map(function (slice, index) {

    // Render the right markup for the given slice type

    // Text Slice
    if (slice.type === 'body_section') {
      return <RichText render={slice.primary.body_section} linkResolver={linkResolver} />

      // Image Gallery Slice
    } else if (slice.type === 'image_gallery') {
      const galleryContent = slice.items.map(function (image, imageIndex) {
        return <img src={image.gallery_image.url} alt={image.gallery_image.alt} key={imageIndex} />;
      });
      return (
        <div className="image-gallery" key={index}>
          <h2 className="gallery-title">
            {RichText.asText(slice.primary.gallery_title)}
          </h2>
          {galleryContent}
        </div>
      );

      // Return null by default
    } else {
      return null;
    }
  })

  var date = Date(document.node._meta.firstPublicationDate);
  var datePublished = moment.tz(date, "America/Los_Angeles").format("LLL");

  return (
    <Layout>
      <SEO title="Home" />


      <section className="section blog-content">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <RichText render={document.node.title} />
              <p>Published on {datePublished} PST</p>
              {blogContent}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
query PageQuery($uid: String) {
  prismic {
    allArticles(uid: $uid) {
      edges {
        node {
          title
          date_published
          _linkType
          _meta {
            lastPublicationDate
            firstPublicationDate
          }
          body1 {
            ... on PRISMIC_ArticleBody1Body_section {
              type
              label
              primary {
                body_section
              }
            }
            ... on PRISMIC_ArticleBody1Code_block {
              type
              label
              primary {
                code_block
              }
            }
          }
        }
      }
    }
  }
}

`;

Page.query = query;

export default Page