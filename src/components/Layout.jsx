import React from "react";
import Nav from "./Nav";

export default function LayoutPage({ children }) {
  return (
    <div className="flex flex-col items-center gap-10">
        <Nav />
    
      
      <div className="">{children}</div>
    
    </div>
  );
}
