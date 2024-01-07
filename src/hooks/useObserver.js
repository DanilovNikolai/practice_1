import { useEffect, useRef } from "react";

function useObserver(ref, canLoad, isLoading, callback) {
  const observer = useRef();

  return useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const options = {
      root: document,
    };
    let cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
}

export default useObserver;
