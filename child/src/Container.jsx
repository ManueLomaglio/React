import { useState } from "react";

function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);
  const handleColapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="container">
      <h2 onClick={handleColapsed}>{title}</h2>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}
export default Container;