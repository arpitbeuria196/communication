import About from "./component/About";
import Body from "./component/Body";
import Header from "./component/Header";
import Login from "./component/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import Team from "./component/Team";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Accordion from "./component/Accordion";
import Comments from "./component/Comments";

function App() {
  const [lang, setLang] = useState('en');

  const router = createBrowserRouter([

    {
      path:"/",
      element:(
        <div>
          <Header lang={lang} setLang={setLang}/>
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
              element:<About lang={lang}/>
            },
            {
              path:"team",
              element:<Team/>
            },
            {
              path:"accordion",
              element:<Accordion/>
            },
            {
              path:"comments",
              element:<Comments/>

            }
          ]
        },
        
      ]
    }

  ])
  return <RouterProvider router={router} />;

}

export default App;
