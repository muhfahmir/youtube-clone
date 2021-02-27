import React from "react";

import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import {
  ExpandMoreOutlined,
  History,
  OndemandVideo,
  ThumbUpAltOutlined,
  VideoLibrary,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeIcon} selected />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrary} />
      <SidebarRow title="History" Icon={History} />
      <SidebarRow title="Your videos" Icon={OndemandVideo} />
      <SidebarRow title="Watch Later" Icon={ThumbUpAltOutlined} />
      <SidebarRow title="Show More" Icon={ExpandMoreOutlined} />
      <hr />
    </div>
  );
}

export default Sidebar;
