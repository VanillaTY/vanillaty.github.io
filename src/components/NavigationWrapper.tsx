"use client";

import { useState } from "react";
import Navigation from "./Navigation";

interface NavigationWrapperProps {
  isBlogPage?: boolean;
}

export default function NavigationWrapper({
  isBlogPage = false,
}: NavigationWrapperProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Navigation
      darkMode={darkMode}
      activeSection=""
      onToggleDarkMode={() => setDarkMode(!darkMode)}
      isBlogPage={isBlogPage}
    />
  );
}
