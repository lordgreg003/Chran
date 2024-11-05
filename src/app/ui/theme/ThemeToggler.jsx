"use client";

import { Button } from "./ button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      className="btn btn-primary rounded-none"
    >
      {theme === "dark" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggler;
