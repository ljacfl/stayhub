import React from "react";
import { BiHome, BiHotel, BiApartment, BiSearch, BiStar } from "react-icons/bi";
import { SidebarItem } from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col bg-[#7145D5] text-white border-r shadow-sm">
      {/* Sidebar content */}
      <div className="p-4 pb-2 flex justify-between items-center">
        <div className="text-2xl font-bold">StayHub</div>
        {/* Add your toggle button here */}
      </div>

      {/* Sidebar items */}
      <ul className="flex-1 px-3">
        <SidebarItem icon={<BiHome size={15} />} text="Casas" />
        <SidebarItem icon={<BiHotel size={20} />} text="Hoteles" />
        <SidebarItem icon={<BiApartment size={20} />} text="Apartamentos" />
        <SidebarItem icon={<BiSearch size={20} />} text="Explora" />
        <SidebarItem icon={<BiStar size={20} />} text="Favoritos" />
        {/* Add more sidebar items as needed */}
      </ul>

      {/* User info */}
      {/* Add user info section here */}
    </div>
  );
};

export default Sidebar;
