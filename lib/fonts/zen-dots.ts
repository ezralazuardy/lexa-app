import { Zen_Dots as font } from "next/font/google";

const Zen_Dots: ReturnType<typeof font> = font({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default Zen_Dots;
