import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("InstaMeet-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("InstaMeet-theme", theme);
    set({ theme });
  },
}));
