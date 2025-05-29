import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
  }

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
  }) => {
    
    const buttonContent = (
      <button
        onClick={onClick}
      >
        {children}
      </button>
    );
  
  
    return buttonContent;
  };
  
  export default Button;
  