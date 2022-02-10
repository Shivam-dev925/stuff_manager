import React from "react";
import Main3Compo from "./Main_3";
import Main5Compo from "./Main_5";
import Main1Compo from "./Main_1";

import Main6Compo from "./Main_6";
import { useContext } from "react";
import { Context } from "../context/Context";
import Main4Compo from "./Main_4";
function MainBody({ show }) {
  const { active } = useContext(Context);

  return (
    <div style={{ zIndex: "-1" }}>
      <div className={show ? "mainbody-wrapper" : "active_mainbody_wrapper"}>
        {active === 1 ? (
          <Main1Compo />
        ) : active === 3 ? (
          <Main3Compo />
        ) : active === 5 ? (
          <Main5Compo />
        ) : active === 6 ? (
          <Main6Compo />
        ) : active === 4 ? (
          <Main4Compo />
        ) : null}
      </div>
    </div>
  );
}

export default MainBody;
