import About from "./component/About";
import Body from "./component/Body";
import Header from "./component/Header";
import Login from "./component/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import Team from "./component/Team";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


function App() {

  const router = createBrowserRouter([

    {
      path:"/",
      element:(
        <div>
          <Header/>
          <Outlet/>
        </div>
      ),

      children:[
        {
          path: "",
          element:<Body/>
        },
        {
          path: "login",
          element:<Login/>
        },
        {
          element:<ProtectedRoute/>,

          children: [

            {
              path:"about",
              element:<About/>
            },
            {
              path:"team",
              element:<Team/>
            }
          ]
        },
        
      ]
    }

  ])
  return <RouterProvider router={router} />;

}

export default App;
