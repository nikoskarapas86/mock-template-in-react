import React from 'react';
import { Sidebar } from '../../components/sidebar'
import './index.scss';

export const Homepage = (): JSX.Element => {
  return (
    <main className="Homepage">
      <Sidebar />
    </main>
  );
}