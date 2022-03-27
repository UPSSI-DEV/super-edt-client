import { useLocalStorage } from "@vueuse/core";

// Exports
export { darkMode, ignoreXFree, currentClass };

// State
const darkMode = useLocalStorage("darkMode", "light");
const ignoreXFree = useLocalStorage("state", false);
const currentClass = useLocalStorage("current-class", "");
