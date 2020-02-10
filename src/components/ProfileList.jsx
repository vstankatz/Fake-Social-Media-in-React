import React from "react";
import LiveFeed from "./LiveFeed";
import Friends from "./Friends";
import About from "./About";

function ProfileList(){
  return(
    <div>
      <LiveFeed/>
      <Friends/>
      <About/>
    </div>
  );
}

export default ProfileList;
