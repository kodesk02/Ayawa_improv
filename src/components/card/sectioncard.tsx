import { Icon } from "@iconify/react";

interface SectionCardProps {
  icon: string;
  title: string;
  text: string;
  description: string;
  onButtonClick?: () => void;
  variant: "primary" | "transparent";
  size: "small" | "medium" | "large";
}

const SectionCard: React.FC<SectionCardProps> = ({
  icon,
  title,
  text,
  description,
  onButtonClick,
  variant,
  size,
}) => {
  const variantStyles = {
    primary:
      "bg-yellow_primary text-green_primary border border-slate-400 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300",
    transparent:
      "text-lg text-green_primary transition ease-in duration-500 hover:translate-x-4",
  };

  const sizeStyles = {
    small: "px-4 py-2",
    medium: "px-4 py-2",
    large: "px-3 py-6",
  };
  return (
    <div
      className={`w-[250px] p-4 rounded-md shadow-lg cursor-pointer transition-transform transform hover:scale-105 bg-yellow_primary/30 backdrop-blur-2xl`}
      onClick={onButtonClick}
    >
      <div className="space-y-5">
        <div className="p-5 pb-2 flex items-center justify-center text-green_primary">
          <Icon width={50} height={50} icon={icon} />
        </div>
        <div className="text-2xl text-slate-500 flex items-center justify-center">{title}</div>
        <hr className="bg-green_primary border w-30 rounded border-green_primary h-[1px] my-2" />
        <div className="text-slate-500 text-center">{description}</div>
        <div className="p-5 pt-3">
          <button
            className={`flex items-center justify-center gap-2 rounded-lg focus:outline-none ${variantStyles[variant]} ${sizeStyles[size]}`}
          >
            <span>{text}</span>
            {icon && (
              <div className="text-lg">
                <Icon icon={"weui:arrow-filled"} />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
