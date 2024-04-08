/// <reference types="react" />
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'primary' | 'secondary' | 'inherit';
    children?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export { Button };
