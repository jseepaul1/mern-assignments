import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>Product Manager</h1>
        <NavLink to="/">Home</NavLink>
      </header>
    </div>
  );
};

export default Header;
