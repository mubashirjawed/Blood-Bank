import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/login';
import Signup from './component/Signup';
import Information from './component/Information';
import DataInfo from './component/dataInfo';
import Navbar from './component/Navbar';
import Doctor from './component/doctor';
function App() {

  const router  = createBrowserRouter([
    { path:"/login" , element:<Login/>},
    { path:"/signup" , element:<Signup/>},
    { path:"/navbar" , element:<Navbar/>},
    { path:"/dataInfo" , element:<DataInfo/>},
    { path:"/doctor" , element:<Doctor/>},
    { path:"/home" , element:<Home/>},
    { path:"/information" , element:<Information/>},
     { path:"*" ,element:<Signup /> },
   ]);


  return <RouterProvider router={router}  />
}

export default App