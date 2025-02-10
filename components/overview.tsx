import { motion } from "framer-motion";
import Logo from "./ui/logo";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-28"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-sm text-center max-w-xl">
        <div className="flex flex-row justify-center gap-4 items-center mt-6 md:mt-0">
          <Logo className="text-4xl" />
        </div>
        <p className="leading-relaxed text-xs md:text-sm">
          Ask me anything! I&apos;m here to help you as a personal legal
          assistant.
          <br className="hidden md:block" />
          <span className="ml-1 md:ml-0">Tips:</span>{" "}
          <span className="font-semibold">Core</span> or{" "}
          <span className="font-semibold">Advanced</span> model can generate
          documents directly in chat, while{" "}
          <span className="font-semibold">Thinker</span> model can research a
          more deep and complex topics.
        </p>
      </div>
    </motion.div>
  );
};
