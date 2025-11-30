import React from 'react';
import { cn } from '@/lib/utils';

export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'desktop' | 'tablet' | 'mobile';
  className?: string;
}

const LightModeIcon = ({ className }: { className?: string }) => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 28 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M14 10.5C15.925 10.5 17.5 12.075 17.5 14C17.5 15.925 15.925 17.5 14 17.5C12.075 17.5 10.5 15.925 10.5 14C10.5 12.075 12.075 10.5 14 10.5ZM14 8.16666C10.78 8.16666 8.16666 10.78 8.16666 14C8.16666 17.22 10.78 19.8333 14 19.8333C17.22 19.8333 19.8333 17.22 19.8333 14C19.8333 10.78 17.22 8.16666 14 8.16666ZM2.33332 15.1667H4.66666C5.30832 15.1667 5.83332 14.6417 5.83332 14C5.83332 13.3583 5.30832 12.8333 4.66666 12.8333H2.33332C1.69166 12.8333 1.16666 13.3583 1.16666 14C1.16666 14.6417 1.69166 15.1667 2.33332 15.1667ZM23.3333 15.1667H25.6667C26.3083 15.1667 26.8333 14.6417 26.8333 14C26.8333 13.3583 26.3083 12.8333 25.6667 12.8333H23.3333C22.6917 12.8333 22.1667 13.3583 22.1667 14C22.1667 14.6417 22.6917 15.1667 23.3333 15.1667ZM12.8333 2.33332V4.66666C12.8333 5.30832 13.3583 5.83332 14 5.83332C14.6417 5.83332 15.1667 5.30832 15.1667 4.66666V2.33332C15.1667 1.69166 14.6417 1.16666 14 1.16666C13.3583 1.16666 12.8333 1.69166 12.8333 2.33332ZM12.8333 23.3333V25.6667C12.8333 26.3083 13.3583 26.8333 14 26.8333C14.6417 26.8333 15.1667 26.3083 15.1667 25.6667V23.3333C15.1667 22.6917 14.6417 22.1667 14 22.1667C13.3583 22.1667 12.8333 22.6917 12.8333 23.3333ZM6.98832 5.34332C6.53332 4.88832 5.78666 4.88832 5.34332 5.34332C4.88832 5.79832 4.88832 6.54499 5.34332 6.98832L6.57999 8.22499C7.03499 8.67999 7.78166 8.67999 8.22499 8.22499C8.66832 7.76999 8.67999 7.02332 8.22499 6.57999L6.98832 5.34332ZM21.42 19.775C20.965 19.32 20.2183 19.32 19.775 19.775C19.32 20.23 19.32 20.9767 19.775 21.42L21.0117 22.6567C21.4667 23.1117 22.2133 23.1117 22.6567 22.6567C23.1117 22.2017 23.1117 21.455 22.6567 21.0117L21.42 19.775ZM22.6567 6.98832C23.1117 6.53332 23.1117 5.78666 22.6567 5.34332C22.2017 4.88832 21.455 4.88832 21.0117 5.34332L19.775 6.57999C19.32 7.03499 19.32 7.78166 19.775 8.22499C20.23 8.66832 20.9767 8.67999 21.42 8.22499L22.6567 6.98832ZM8.22499 21.42C8.67999 20.965 8.67999 20.2183 8.22499 19.775C7.76999 19.32 7.02332 19.32 6.57999 19.775L5.34332 21.0117C4.88832 21.4667 4.88832 22.2133 5.34332 22.6567C5.79832 23.1 6.54499 23.1117 6.98832 22.6567L8.22499 21.42Z" 
      fill="#6905D2"
    />
  </svg>
);

const DarkModeIcon = ({ className }: { className?: string }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_1939_90)">
      <path d="M7.07778 2.78889C6.87778 3.5 6.77778 4.24444 6.77778 5C6.77778 9.53333 10.4667 13.2222 15 13.2222C15.7556 13.2222 16.5 13.1222 17.2111 12.9222C16.0556 15.7667 13.2556 17.7778 10 17.7778C5.71111 17.7778 2.22222 14.2889 2.22222 10C2.22222 6.74444 4.23333 3.94444 7.07778 2.78889ZM10 0C4.47778 0 0 4.47778 0 10C0 15.5222 4.47778 20 10 20C15.5222 20 20 15.5222 20 10C20 9.48889 19.9556 8.97778 19.8889 8.48889C18.8 10.0111 17.0222 11 15 11C11.6889 11 9 8.31111 9 5C9 2.98889 9.98889 1.2 11.5111 0.111111C11.0222 0.0444443 10.5111 0 10 0Z" 
        fill="#6905D2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1939_90">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ 
    checked = false, 
    disabled = false, 
    onChange, 
    leftIcon, 
    rightIcon,
    size = 'desktop',
    className,
    ...props 
  }, ref) => {
    const handleClick = () => {
      if (!disabled && onChange) {
        onChange(!checked);
      }
    };

    const isMobile = size === 'mobile';
    const trackWidth = isMobile ? 'w-8' : 'w-10';
    const trackHeight = isMobile ? 'h-5' : 'h-6';
    const knobSize = isMobile ? 'w-5 h-5' : 'w-[23px] h-6';
    const knobTranslate = checked ? (isMobile ? 'translate-x-3' : 'translate-x-[17px]') : 'translate-x-0';

    const activeColor = disabled ? 'bg-light-purple/40 border-light-purple/40' : 'bg-light-purple border-light-purple';
    const inactiveColor = disabled ? 'bg-white border-light-purple/40' : 'bg-white border-light-purple/40';

    return (
      <div className={cn("flex items-center gap-2", className)}>
        {leftIcon !== undefined ? leftIcon : <LightModeIcon className={disabled ? 'opacity-40' : ''} />}
        
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={handleClick}
          className={cn(
            "relative inline-flex items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-light-purple",
            trackWidth,
            trackHeight,
            disabled && 'cursor-not-allowed',
            !disabled && 'cursor-pointer',
            checked ? activeColor : inactiveColor
          )}
          {...props}
        >
          <span
            className={cn(
              "inline-block rounded-full bg-white border transition-transform",
              knobSize,
              knobTranslate,
              disabled ? 'border-light-purple/40' : checked ? 'border-light-purple' : 'border-light-purple/40'
            )}
          />
        </button>

        {rightIcon !== undefined ? rightIcon : <DarkModeIcon className={disabled ? 'opacity-40' : ''} />}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
