import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation(); // Get the current location

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "International", path: "/internasional" },
    { label: "National", path: "/nasional" },
    { label: "Sport", path: "/olahraga" },
    { label: "Technology", path: "/teknologi" },
    { label: "Entertainment", path: "/hiburan" },
    { label: "Life Style", path: "/gaya-hidup" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-slate-500 text-white shadow-lg"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <p className="font-bold text-xl text-inherit">News</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
        alignItems="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              to={item.path}
              className={`hover:text-gray-300 transition ${
                location.pathname === item.path
                  ? "text-yellow-400 font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-white text-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              to={item.path}
              className="w-full text-lg p-2 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
