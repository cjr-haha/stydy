import React, { useEffect, useMemo, useState, useRef } from "react";
import Styled from "styled-components";
const Wrapper = Styled.div`
border-radius:50%;
border:transparent solid;
background:url(' https://lengyibai.gitee.io/img-bed/lib.png') no-repeat;
background-size:cover;
width:25vw;
height:25vw;
position:relative;
.light{
position:absolute;
width:200%;
height:33.3%;
transform:rotate(45deg) translateY(-25%);
transform-origin:50% 50%; 
background:white ;
filter:blur(5px);
transition:all 200ms;
}

.change{
transform:rotate(45deg) translateY(400%);
}
`;

const LightShining = (props) => {
  const { imgSrc, ...otherProps } = props;
  const ref = useRef();
  const on_off = () => {
    ref.current.childNodes[0].className = (() => {
      const boxclassName = ref.current.childNodes[0].className;
      return boxclassName.indexOf("change") != -1
        ? boxclassName.replace(/change/gi, "")
        : boxclassName + " change";
    })();
  };

  useEffect(() => {
    if (ref.current && ref.current instanceof HTMLElement) {
      (() => {
        if (imgSrc) {
          const cssText = ref.current.style.cssText;
          ref.current.style = cssText + `;background:url(${imgSrc}) no-repeat;`;
        }
        const dom = document.createElement("div");
        dom.className = "light";
        ref.current.appendChild(dom);
      })();
      ref.current.addEventListener("mouseenter", on_off);
      ref.current.addEventListener("mouseleave", on_off);
      return () => {
        ref.current.removeEventListener("mouseenter", on_off);
        ref.current.removeEventListener("mouseleave", on_off);
      };
    }
  }, []);

  return <Wrapper ref={ref} {...otherProps} />;
};

export default LightShining;
