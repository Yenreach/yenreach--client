import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    // console.log("scrolling ", pathname)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }, [pathname]);

  return <>{props.children}</>
};

export default ScrollToTop;