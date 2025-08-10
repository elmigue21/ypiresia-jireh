"use client";
import React from "react";
import { useNavbar } from "@/providers/NavbarProvider";
// import { useIsSmallScreen } from "@/app/hooks/useIsSmallScreen"; // adjust path as needed
import { useIsSmallScreen } from "@/hooks/useIsSmallScreen";
const HeightWithNavbarDiv = ({
  children,
  className,
  navbarPadding,
}: {
  children: React.ReactNode;
  className?: string;
  navbarPadding?: boolean;
}) => {
  const { navbarHeight } = useNavbar();
  const isSmall = useIsSmallScreen();

  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{
        height: isSmall ? "auto" : `calc(100vh - ${navbarHeight}px)`,
        marginTop: navbarPadding ? `${navbarHeight}px` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default HeightWithNavbarDiv;
