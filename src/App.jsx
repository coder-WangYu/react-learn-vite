import routes from './router'
import { RouterProvider } from "react-router-dom";
import React from 'react';

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
