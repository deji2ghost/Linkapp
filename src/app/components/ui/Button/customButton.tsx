
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import CustomLoader from "../CustomLoader/customLoader";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-Purple text-[16px] font-[600] py-[11px] px-[27px] lg:hover:bg-opacity-80 rounded-[8px] text-white outline-none border-none shadow-md lg:hover:translate-y-[1px] text-[#FFFFFF]",
        alternate:"bg-transparent border-Purple text-[16px] font-[600] py-[11px] px-[27px] lg:hover:bg-opacity-80 rounded-[8px] text-white outline-none border shadow-md lg:hover:translate-y-[1px] text-Purple",
      },
      size: {
        default: "h-[46px] py-[11px] px-[27px]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg py-[11px] px-[27px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  dropDown?: boolean;
  menuItems?: string[];
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      loading,
      variant,
      children,
      size,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`relative rounded-md inline-block`}>
        <button
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {loading && <CustomLoader />}
          {children}
        </button>
      </div>
    );
  }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
