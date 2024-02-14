import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function AboutPage() {
  return (
    <Layout pageTitle='About page'>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage alt='' src='../images/icon.png' />
    </Layout>
  );
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => (<>
<title>About Me</title>
<meta name="description" content="123123 Your description" />
</>);
