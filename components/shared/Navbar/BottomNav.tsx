'use client'
import React from 'react'
import { navValues } from '@/lib/constants/constants';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useIsSmallScreen } from '@/hooks/useIsSmallScreen';
const BottomNav = () => {
    const isSmallScreen = useIsSmallScreen();
  return (
    <div className="flex items-center justify-evenly w-full overflow-hidden my-5">
      {navValues.map((val, index) => {
        const Icon = val.icon;
        return (
          <React.Fragment key={index}>
            <Link
              href={val.link}
              className="hover:bg-slate-200 flex-1 text-center md:p-5 transition-all rounded hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              {Icon && <Icon className="text-lg md:text-2xl" />}
              {!isSmallScreen && <h2>{val.label}</h2>}
            </Link>
            {index !== navValues.length - 1 && (
              <Separator
                orientation="vertical"
                className="h-6 mx-2 font-bold my-2"
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default BottomNav