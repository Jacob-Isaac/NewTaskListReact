import React, {useState} from "react";

const useWindowDimensions = () => {
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
    React.useEffect(() => {
      window.addEventListener("resize", updateDimensions);
       return () => {
         window.removeEventListener("resize", updateDimensions);
       }
    }, []);
  
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    return dimensions;
};

export default useWindowDimensions;