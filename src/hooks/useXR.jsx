import { useEffect, useState } from "react";

const useXR = (src) => {
        const [loadingXR, setLoadingXR] = useState(true);
        const [errorXR, setErrorXR] = useState();
        useEffect(() => {
                let script = document.querySelector(`script[src="${src}"]`);
                if (!script) {
                  script = document.createElement("script");
                  script.src = src;
                  script.async = true;
                }
                const handleLoad = () => setLoadingXR(false);
                const handleError = (error) => setErrorXR(error);
            
                script.addEventListener("load", handleLoad);
                script.addEventListener("error", handleError);
            
                document.body.appendChild(script);
            
                return () => {
                  script.removeEventListener("load", handleLoad);
                  script.removeEventListener("error", handleError);
                };
              }, [src]);
        return [loadingXR, errorXR];
}

export default useXR;