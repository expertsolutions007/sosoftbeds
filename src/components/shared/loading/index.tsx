import { PDiv, Logo } from "./loading.styles";
import { motion } from "framer-motion";

export const Loading = ({ isLoading }: any) => {
  return (
    <PDiv isLoading={isLoading}>
      <motion.div
        transition={{
          duration: 0.85,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
          <Logo isLoading={isLoading} src="https://narsun.s3.eu-central-1.amazonaws.com/NARSUN+FOOTER+Logo.webp" />
      </motion.div>
    </PDiv>
  );
};
