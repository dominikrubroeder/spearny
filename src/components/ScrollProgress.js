import { useEffect, useState } from 'react';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import './ScrollProgress.scss';

export const ScrollProgress = () => {
  const [currentPercent, setCurrentPercent] = useState(null);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  useEffect(
    () =>
      yRange.onChange((v) => {
        if (yRange.current.toFixed(2) < 99.2) {
          setCurrentPercent(Math.trunc(yRange.current));
        } else {
          setCurrentPercent(100);
        }
      }),
    [yRange]
  );

  return (
    <motion.div className="scroll-progress">
      <div className="scroll-progress__bar">
        <motion.div
          className="scroll-progress__indicator"
          style={{
            width: `${currentPercent}%`,
          }}
        ></motion.div>
      </div>
      <motion.div
        class="scroll-progress__percentage"
        style={{
          opacity: pathLength,
        }}
      >
        {currentPercent}
      </motion.div>
    </motion.div>
  );
};

export default ScrollProgress;

// Simplified version of: https://javascript.plainenglish.io/how-to-create-a-scroll-progress-animation-with-framer-motion-and-react-b98754cd8638
