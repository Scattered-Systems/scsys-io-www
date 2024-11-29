/*
  Appellation: page <about>
  Contrib: @FL03
*/
import * as React from 'react';

export const runtime = 'edge';

const AboutPage: React.FC = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page</p>
    </div>
  );
}
AboutPage.displayName = 'AboutPage';


export default AboutPage;