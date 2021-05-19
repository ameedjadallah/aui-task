import { useState } from "react";
import classnames from "classnames";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

import "./SidePanel.scss";
import data  from '../data/data.json';

function SidePanel() {
  const [collapsed, setCollapced] = useState(false);
  const userData = data.user;

  const toggleSidePanel = () => {
    setCollapced(!collapsed);
  };

  return (
    <div
      className={classnames(`side-panel`, {
        collapsed: collapsed,
      })}
    >
      <button
        className="btn collapsed-btn inline-flex justify-center items-center"
        onClick={toggleSidePanel}
      >
        {collapsed ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>
      {!collapsed && (
        <div className="side-panel__content">
          <div className="profile-image">
            <img src={userData.image} />
          </div>
          <div className="profile-info">
            <div className="info-item flex justify-between">
              <label>Name</label>
              <div className="info-value">{userData.name}</div>
            </div>
            <div className="info-item flex justify-between">
              <label>Age</label>
              <div className="info-value">{userData.age} years old</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidePanel;
