import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  background: transparent;
  .hen {
    position: fixed;
    top: 0;
    width: 100%;
    height: 200px;
    background: black;
    transition: all 1s;
  }
  .change {
    background: red;
  }
`;

const useScrollChange = () => {
  const ref = useRef();
  useEffect(() => {
    if (!(ref.current instanceof HTMLElement)) {
      return;
    }
    const changeSkin = (() => {
      const originName = ref.current.className;
      return function () {
        const nowName = ref.current.className;
        const top =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 0) {
          if (nowName.indexOf("change") != -1) {
            return;
          }
          ref.current.className = originName + " change";
        } else {
          ref.current.className = originName;
        }
      };
    })();
    window.addEventListener("scroll", changeSkin, true);
    return () => {
      window.removeEventListener("scroll", changeSkin);
    };
  }, []);
  return ref;
};
const ScrollChange = () => {
  const ref = useScrollChange();
  return (
    <Wrapper>
      <div className="hen" ref={ref}></div>
    </Wrapper>
  );
};

export default ScrollChange;
