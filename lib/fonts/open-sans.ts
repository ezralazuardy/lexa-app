import { Open_Sans as font } from "next/font/google";

const Open_Sans: ReturnType<typeof font> = font({
  subsets: ["latin"],
  display: "swap",
});

export default Open_Sans;
