/*
  Appellation: loading <root>
  Contrib: @FL03
*/

import * as React from 'react';
import { Loading } from '@/components/common/screens';

const LoadingPage: React.FC = () => {
  return (
    <div className="h-full">
      <Loading />
    </div>
  );
}
LoadingPage.displayName = 'LoadingPage';

export default LoadingPage;