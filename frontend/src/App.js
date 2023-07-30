import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Logout from './pages/logout/Logout';
import Register from './pages/register/Register';
import Create from './pages/create/Create';
import BlogDetails from './pages/blogDetails/BlogDetails';
import UpdateBlog from './pages/updateBlog/UpdateBlog';
import Categories from './components/categories/Categories';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/logout' element={!user ? <Login /> : <Logout />} />
        <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
        <Route path='/create' element={user ? <Create /> : <Navigate to='/login' />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/blogDetails/:id' element={user ? <BlogDetails /> : <Navigate to='/login' />} />
        <Route path='/updateBlog/:id' element={user ? <UpdateBlog /> : <Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;