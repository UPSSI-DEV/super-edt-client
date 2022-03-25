import { useLocalStorage } from "@vueuse/core";

// Exports
export { darkMode, ignoreXFree };

// State
const darkMode = useLocalStorage("darkMode", "light");
const ignoreXFree = useLocalStorage("state", false);
