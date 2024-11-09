import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header className="bg-blue-600 text-white py-4 w-[100%]">
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">SecureBank</Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/" className="hover:text-gray-300">
            Services
          </Link>
          {isAuth ? (
            <Link to="/account" className="hover:text-gray-300">
              Account
            </Link>
          ) : (
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
