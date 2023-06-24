import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      
      <Outlet />
    </>
  )
};

export default Layout;