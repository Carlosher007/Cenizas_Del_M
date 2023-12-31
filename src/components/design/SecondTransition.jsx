import { motion } from 'framer-motion';
import { useGameStore } from '../../store/game';

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: 'afterChildren',
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const SecondTransition = () => {
  const { setActionsGame } = useGameStore.getState();

  const handleAnimationComplete = () => {
    setActionsGame('showAnimation', false);
    setActionsGame('showedAnimation', true);
    setActionsGame('showDSleepS2',true);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationComplete={handleAnimationComplete}
      >
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-4xl font-bold"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: 'url(#pattern)' }}
          >
            <tspan x="50%" dy="-1em">
              3 días
            </tspan>
            <tspan x="50%" dy="1em">
              despues
            </tspan>
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
};
