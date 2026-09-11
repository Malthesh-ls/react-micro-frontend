import React, { Suspense } from 'react';
import { Router } from '../../routing/router';
import { Loading } from '../../components';

// @ts-expect-error SCSS is handled by the bundler and has no TypeScript declarations.
import './styles.scss';

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  );
}
