import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
