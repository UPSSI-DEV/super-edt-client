import { useLocalStorage, useColorMode } from "@vueuse/core";

// Exports
export { darkMode, ignoreXFree, currentClass };

// State
const darkMode = useColorMode({
    attribute: "theme"
});


const ignoreXFree = useLocalStorage("state", false);
const currentClass = useLocalStorage("current-class", "");
