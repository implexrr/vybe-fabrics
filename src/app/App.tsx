import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../assets/styles/App.css"
import routes from './routes/routes.tsx'

const router = createBrowserRouter(routes);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;