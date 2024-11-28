/*
  Appellation: loading <root>
  Contrib: @FL03
*/

import { Centered } from '@/components/common/layouts';
import { Loading } from '@/components/common/screens';
import * as React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <Centered>
      <Loading/>
    </Centered>
  );
}
LoadingPage.displayName = 'LoadingPage';

export default LoadingPage;