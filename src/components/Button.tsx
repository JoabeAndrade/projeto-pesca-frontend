import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  icon: Icon,
  iconPosition = "right",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const isIconOnly = !children && Icon;

  const hasText = !!children;

  const coreStyle =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const defaultVisualStyle = "bg-[#6d4c41] text-white hover:bg-[#5a3f37]";

  const defaultRoundingStyle = "rounded";

  let sizingStyle = "px-3 py-1";
  let gapStyle = Icon && hasText ? "gap-2" : "";

  if (isIconOnly) {
    sizingStyle = "p-2";
    gapStyle = "";
  }

  const finalClassName = [
    coreStyle,
    defaultVisualStyle,
    defaultRoundingStyle,
    sizingStyle,
    gapStyle,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={finalClassName} {...props}>
      {Icon && iconPosition === "left" && <Icon size={20} aria-hidden="true" />}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon size={20} aria-hidden="true" />
      )}
    </button>
  );
}
