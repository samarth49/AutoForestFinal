import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react"; // Fixed the import statement
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from 'D:\\VIT22-26\\TY\\edai\\EDAI\\EDAIFINAL\\frontend\\src\\assets\\logo.webp'; // Adjust the path as needed

function NavbarWithSolidBackground() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home","TreeCount", "Location", "Path", "About"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="white" // Changed color to white for better visibility
          className="p-1 font-normal"
        >
          <a
            href={`/${item.toLowerCase()}`}
            className="flex items-center px-4 py-2 bg-transparent border border-white rounded-md transition-all hover:bg-red-600 hover:text-white" // Updated hover styles
          >
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <div className="relative overflow-hidden">
      {/* Navbar with solid background color */}
      <Navbar
        className="sticky top-0 z-10 h-max max-w-full bg-[#205A28] px-4 py-2 lg:px-8 lg:py-4" // Green background
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo or Brand Name */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Brand Logo"
              className="h-12 w-12 rounded-full mr-3 " // Adjusted size and added rounded-full
            />
            <Typography
              as="span"
              variant="h6"
              color="white" // Brand name color
              className="font-bold"
            >
              AutoForest
            </Typography>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex justify-center w-full">{navList}</div>

          {/* Mobile Nav Toggle */}
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} /> // Set icon color to white
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} /> // Set icon color to white
            )}
          </IconButton>
        </div>

        {/* Mobile Nav - Collapsible */}
        <Collapse open={openNav}>
          <div className="flex flex-col items-center">
            {navList}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarWithSolidBackground;
