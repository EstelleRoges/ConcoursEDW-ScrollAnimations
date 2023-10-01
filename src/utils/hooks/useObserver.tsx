import React, { RefObject } from "react";

const useObserver = () => {
  const observeAndDisplay = (
    containerToObserve: RefObject<HTMLElement | null>,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    setTextState?: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (containerToObserve.current && entries[0].isIntersecting) {
          const elementToDisplay = entries[0].target as HTMLElement;
          setState(true);
          if (
            setTextState &&
            elementToDisplay.getBoundingClientRect().top <
              elementToDisplay.getBoundingClientRect().height / 2
          ) {
            setTextState(true);
          }
          observer.unobserve(elementToDisplay);
        }
      },
      {
        root: null,
        threshold: 0.6,
        rootMargin: "-12% 0px",
      }
    );

    containerToObserve.current && observer.observe(containerToObserve.current);

    return () => {
      containerToObserve.current &&
        observer.unobserve(containerToObserve.current);
      setState(false);
      setTextState && setTextState(false);
    };
  };
  return { observeAndDisplay };
};

export default useObserver;
