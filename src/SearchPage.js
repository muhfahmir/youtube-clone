import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "./ChannelRow";

import "./SearchPage.css";
import VideoRow from "./VideoRow";
import Fahmi from "./assets/images/fahmi.jpeg";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image={Fahmi}
        channel="Fahmi Rahmat"
        verified
        subs="659K"
        noOfVideos={382}
        description="Hi! I am Informatics Engineer who very assionate about technology especially front end developer,and i have experiences such as make web display ..."
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with React JS for Beginners"
        image="https://i.ytimg.com/vi/FMhWbGOABVU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCtCHEU4dPghL5_F_8gy8tEqDABOA"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with React JS for Beginners"
        image="https://i.ytimg.com/vi/FMhWbGOABVU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCtCHEU4dPghL5_F_8gy8tEqDABOA"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with React JS for Beginners"
        image="https://i.ytimg.com/vi/FMhWbGOABVU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCtCHEU4dPghL5_F_8gy8tEqDABOA"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone with React JS for Beginners"
        image="https://i.ytimg.com/vi/FMhWbGOABVU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCtCHEU4dPghL5_F_8gy8tEqDABOA"
      />
    </div>
  );
}

export default SearchPage;
