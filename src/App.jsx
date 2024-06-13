import Navbar from "./components/navbar/Navbar"
import HomePage from "./routes/homePage/homePage"
import "./layout.scss"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { path: "/",
          element: <HomePage/> 
        },
        { path: "/list", 
          element: <ListPage/> 
        },
        {
          path: "/:id",
          element: <SinglePage/>
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App