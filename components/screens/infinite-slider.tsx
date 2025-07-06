'use client';
import React, { ReactNode } from 'react';

type InfiniteSliderProps = {
  children: ReactNode;
  speedOnHover?: number;
  gap?: number;
};

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  speedOnHover = 20,
  gap = 24,
}) => {
  return (
    <div className="w-full overflow-hidden py-6 bg-white">
      <div
        className="animate-scroll flex w-max gap-[24px] hover:[animation-duration:_20s]"
        style={{
          animation: `scroll linear infinite ${speedOnHover * 2}s`,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div className={`flex gap-[${gap}px]`} key={i}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
