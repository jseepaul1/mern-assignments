import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();
  console.log("location-", location.pathname);
  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);
  return (
    <header className="header">
      <h1>Favorite Authors</h1>

      {isHomePage ? (
        <NavLink className= 'links' to="/new">Add a new author</NavLink>
      ) : (
        <>
          <NavLink className= 'links' to="/">Home</NavLink>
          {/* <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <NavLink className= 'links' to="/new">Add a new author</NavLink> */}
        </>
      )}
    </header>
  );
};

export default Header;
