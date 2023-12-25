import { Outlet } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import HeaderContainer from "./header/HeaderContainer";
import FooterContainer from "./footer/FooterContainer";
// import { useRef } from "react";

function CoolBandShow() {
   //   const nodeRef = useRef();
   return (
      <>
         <HeaderContainer />
         {/* <TransitionGroup className="transitionGroup">
        <CSSTransition
          nodeRef={nodeRef}
          timeout={500}
          addEndListener={(done) => {
            nodeRef.current.addEventListener("transitionend", done, false);
          }}
          classNames="transitionGroupSwitch"
        > */}
         <Outlet />
         {/* </CSSTransition> */}
         {/* </TransitionGroup> */}
         <FooterContainer />
      </>
   );
}

export default CoolBandShow;
