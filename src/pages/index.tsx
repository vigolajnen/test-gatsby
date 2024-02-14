// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout/layout';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Main page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>44</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg"/>
    </Layout>
   
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>11 Home Page</title>

// Step 3: Export your component
export default IndexPage
