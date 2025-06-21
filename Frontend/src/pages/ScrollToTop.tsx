import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Set scroll position to top immediately on mount or pathname change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;