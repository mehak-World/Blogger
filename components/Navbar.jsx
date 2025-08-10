const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="navbar-brand text-2xl font-bold">
        <a href="/" className="hover:text-yellow-400 transition-colors duration-300">
          Blogger
        </a>
      </div>
      <ul className="navbar-menu flex space-x-6">
        <li>
          <a href="/" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-yellow-400 transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-yellow-400 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
