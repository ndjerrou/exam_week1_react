import React from 'react';
import { Outlet } from 'react-router-dom';

function LayoutBlogPost() {
  return (
    <div style={{ backgroundColor: 'gold' }}>
      <Outlet />
    </div>
  );
}

export default LayoutBlogPost;
