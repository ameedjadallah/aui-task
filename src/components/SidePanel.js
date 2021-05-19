import { useState } from "react";
import classnames from "classnames";

import "./SidePanel.scss";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function SidePanel() {
  const [collapsed, setCollapced] = useState(false);

  const toggleSidePanel = () => {
    setCollapced(!collapsed);
  };

  return (
    <div
      className={classnames(`side-panel`, {
        'collapsed': collapsed,
      })}
    >
      <button onClick={toggleSidePanel}>
        {collapsed ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>
    </div>
  );
}

export default SidePanel;
