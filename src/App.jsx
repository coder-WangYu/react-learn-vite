import routes from './router'
import { RouterProvider } from "react-router";
import React from 'react';

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
