import { FC, ReactElement, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import {
  motion,
  useAnimation,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import {
  ExpBox,
  ExperienceSlider,
  ExperienceText,
  ExpImage,
  ExpMidBox,
  TypographyExperience,
} from "./experience.styles";

type data = {
  image: string;
};

interface IExperience {
  left: data[];
  mid: data[];
  right: data[];
}

const Experience = ({ left, mid, right, content }: any): any => {
  const controls = useAnimation();
  const baseX = useMotionValue(0);
  const baseY = useMotionValue(0);
  const { scrollY, scrollX } = useScroll();
  const scrollVelocity = useVelocity(scrollX);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 600,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const baseVelocity = 2;

  useEffect(() => {
    const startAnimate1 = () => {
      controls.start({
        transition: {
          duration: 0.5,
          ease: "backIn",
        },
        scale: [0, 1.1, 1.2, 1],
      });
    };

    startAnimate1();
  }, []);
  useEffect(() => {
    // console.log("UseEffect Experience");
  }, []);

  const x = useTransform(baseX, (v) => `${wrap(-15, -20, v)}%`);
  const y = useTransform(baseY, (v) => `${wrap(-15, -20, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 30000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseY.set(baseY.get() - moveBy);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <ExperienceSlider id="experience" className="parent">
      <motion.div animate={controls}>
        <ExperienceText maxWidth={"xl"}>
          <TypographyExperience variant="h5">{content?.title}</TypographyExperience>
          <TypographyExperience variant="h5">{content?.subtitle}</TypographyExperience>
        </ExperienceText>
      </motion.div>
      <Box>
        <motion.div style={{ y: x }}>
          {left.map((datas: any, index: any) => (
            <ExpBox key={index}>
              <ExpImage src={datas.image} />
            </ExpBox>
          ))}
        </motion.div>
      </Box>
      <ExpMidBox>
        <Box component={motion.div} style={{ y: y }}>
          {mid.map((datas: any, index: any) => (
            <ExpBox key={index}>
              <ExpImage src={datas.image} />
            </ExpBox>
          ))}
        </Box>
      </ExpMidBox>
      <Box>
        <Box component={motion.div} style={{ y: x }}>
          {right.map((datas: any, index: any) => (
            <ExpBox key={index}>
              <ExpImage src={datas.image} />
            </ExpBox>
          ))}
        </Box>
      </Box>
    </ExperienceSlider>
  );
};
export default Experience;
