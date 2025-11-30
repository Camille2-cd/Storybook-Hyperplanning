import * as React from "react";
import { cn } from "@/lib/utils";

const CheckboxIcon = ({
  checked,
  disabled,
  isMobile,
}: {
  checked: boolean;
  disabled: boolean;
  isMobile: boolean;
}) => {
  const size = isMobile ? 32 : 24;
  const color = disabled ? "#878787" : "#6905D2";

  if (checked) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {isMobile ? (
          <path
            d="M25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4ZM25.3333 25.3333H6.66667V6.66667H25.3333V25.3333ZM23.9867 12L22.1067 10.1067L13.32 18.8933L9.88 15.4667L7.98667 17.3467L13.32 22.6667L23.9867 12Z"
            fill={color}
          />
        ) : (
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17.99 9L16.58 7.58L9.99 14.17L7.41 11.6L5.99 13.01L9.99 17L17.99 9Z"
            fill={color}
          />
        )}
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {isMobile ? (
        <path
          d="M25.3333 6.66667V25.3333H6.66667V6.66667H25.3333ZM25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4Z"
          fill={color}
        />
      ) : (
        <path
          d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, label, checked = false, onCheckedChange, disabled, ...props },
    ref,
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      setIsChecked(checked);
    }, [checked]);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      setIsChecked(newChecked);
      onCheckedChange?.(newChecked);
    };

    const textColor = disabled ? "text-[#878787]" : "text-light-purple";
    const fontSize = isMobile ? "text-base" : "text-lg";
    const lineHeight = isMobile ? "leading-[1.4]" : "leading-[1.6]";

    return (
      <label
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer font-medium",
          disabled && "cursor-not-allowed",
          className,
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <CheckboxIcon
          checked={isChecked}
          disabled={!!disabled}
          isMobile={isMobile}
        />
        {label && (
          <span className={cn(textColor, fontSize, lineHeight, "select-none")}>
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
