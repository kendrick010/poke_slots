import { MouseEvent, ReactNode } from 'react';

type ClickableProps = {
  width: number;
  height: number;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
  className?: string;
};

export default function Clickable({
  width,
  height,
  onClick,
  children,
  className = '',
}: ClickableProps) {
  return (
    <div 
      className={`cursor-pointer hover:bg-black/5 active:scale-95 transition-all ${className}`}
      style={{
        width: `${width.toString()}px`,
        height: `${height.toString()}px`,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}