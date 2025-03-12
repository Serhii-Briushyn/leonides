import { useEffect, useState } from "react";

export const useInView = (ref, offset = 0, threshold = 0.1) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
        if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
          setHasBeenVisible(false);
        }
      },
      {
        rootMargin: `0px 0px -${offset}% 0px`,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, offset]);

  return hasBeenVisible;
};
