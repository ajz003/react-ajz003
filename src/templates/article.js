import React from 'react';
import { graphql } from 'gatsby';
import {Link, RichText, Date} from 'prismic-reactjs';
import  { linkResolver } from '../../src/utils/linkResolver';

import Layout from '../components/layout'
import SEO from '../components/seo'

const Page = props => {
  const doc = props.data.prismic.allArticles.edges.slice(0,1).pop();
  if(!doc) return null;
  console.log(doc)
  return (
      <Layout>
      <SEO title="Home" />
      <div>
    <RichText render={doc.node.title} linkResolver={linkResolver} />
    </div>
    </Layout>
  );
}

export default Page;

export const query = graphql`
query PageQuery($uid: String) {
  prismic {
    allArticles(uid: $uid) {
      edges {
        node {
          title
        }
      }
    }
  }
}
`;