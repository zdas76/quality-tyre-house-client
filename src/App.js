import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './component/Blogs/Blogs';
import Dashboard from './component/Dashboard/Dashboard';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import Myportfolio from './component/MyProtfolio/Myportfolio';
import MyOrder from './component/Dashboard/MyOrder';
import Products from './component/Products/Products';
import Footer from './component/Shared/Footer';
import Navbar from './component/Shared/Navbar';
import Profile from './component/Shared/Profile';
import RequreAuth from './component/Login/RequreAuth';
import RequreAdmin from './component/Login/RequreAdmin';
import AddProduct from './component/Dashboard/AddProduct';
import AddReview from './component/Dashboard/AddReview';
import ManageOrder from './component/Dashboard/ManageOrder';
import ManageProduct from './component/Dashboard/ManageProduct';
import ProductCheckOut from './component/Products/ProductCheckOut';
import Payment from './component/Dashboard/Payment';
import Users from './component/Dashboard/Users';
import UpdateProduct from './component/Dashboard/UpdateProduct';
import NotFoundpage from './component/NotFound/NotFoundpage';
import ProfileEdit from './component/Shared/ProfileEdit';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>


        <div className='lg:w-11/12 mx-auto'>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          <Route path="products" element={<RequreAuth><Products /></RequreAuth>}></Route>
            <Route path="blogs" element={<Blogs></Blogs>}></Route>
            <Route path="myportfolio" element={<Myportfolio></Myportfolio>}></Route>
          <Route path="products/:_id" element={<RequreAuth><ProductCheckOut /></RequreAuth>}></Route>
          
          <Route path='dashboard' element={<RequreAuth>
            <Dashboard></Dashboard>
          </RequreAuth>}>
            
            <Route index element={<Profile />}></Route>
            <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="addreview" element={<AddReview />}></Route>
            <Route path="profileedit" element={<ProfileEdit />}></Route>
            <Route path="addproduct" element={<RequreAdmin><AddProduct /></RequreAdmin>}></Route>  
            <Route path="dashboard/updateproduct/:id" element={<RequreAdmin><UpdateProduct /></RequreAdmin>}></Route>  
            <Route path="users" element={<RequreAdmin><Users /></RequreAdmin>}></Route>
            <Route path="manageorder" element={<RequreAdmin><ManageOrder /></RequreAdmin> }></Route>
            <Route path="manageproduct" element={<RequreAdmin><ManageProduct /></RequreAdmin> }></Route>
            
            </Route>
          

            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signup" element={<SignUp></SignUp>}></Route>
            <Route path="*" element={<NotFoundpage></NotFoundpage>}></Route>
          </Routes>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
