import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const modalRef = useRef();
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handler();
      console.log("click");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return { modalRef };
}

export default useOutsideClick;
