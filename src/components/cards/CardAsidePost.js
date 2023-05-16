import React from "react";
import { BiSearch } from "react-icons/bi";
import CardCategories from "./CardCategories";

export default function CardAsidePost() {
  return (
    <aside className="w-full pt-8 lg:pt-1" >
      <div className="">
        <h2 className="text-black text-xl font-black">Stack</h2>
        <CardCategories />
      </div>
    </aside>
  );
}
