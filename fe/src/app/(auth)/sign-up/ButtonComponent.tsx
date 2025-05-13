import { Button } from "@/components/ui/button";

export const ButtonComponent = ({
  buttonText,
  className,
  onClick,
}: {
  buttonText: string;
  className: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <Button
        onClick={onClick}
        className={`bg-[#F4F4F5] text-black hover:bg-gray-500 ${className}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};
