import Zen_Dots from "@/lib/fonts/zen-dots";

export default function Logo({
  className,
  withTM,
}: {
  className?: string;
  withTM?: boolean;
}) {
  return (
    <div className={`${Zen_Dots.className}`}>
      <span className={className}>LEXA</span>
      {withTM && <span className="ms-1 absolute">™</span>}
    </div>
  );
}
