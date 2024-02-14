// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout/layout';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Main page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
   
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>11 Home Page</title>

// Step 3: Export your component
export default IndexPage
