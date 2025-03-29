import Techolcon from "@/component/TechoIcon";
import { twMerge } from "tailwind-merge";

const ToolBox = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    src: string;
    title: string;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge("flex", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-1",
          itemsWrapperClassName
        )}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 py-2 lg:py-4 lg:px-6 px-2 border-2 border-white/10 rounded-lg"
          >
            <Techolcon src={item.src} w={20} h={20} alt="Programing Language" />
            <span className="font-semibold font-poppins">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolBox;
