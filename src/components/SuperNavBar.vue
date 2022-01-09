<template>
    <header class="super-nav-bar">
        <h2 class="title" :class="{ active: interval }" @mousedown="start" @mouseleave="stop" @mouseup="stop" @touchstart="start" @touchend="stop" @touchcancel="stop">
            <span v-if="userTheme != 'easter-theme'">SuperEDT</span>
            <span v-else>
                S
                <img src="@/static/uwu.png" alt="" style="height: 30px" />
                perEDT
            </span>
        </h2>
        <feather class="menu" type="menu" @click="menuOpen = !menuOpen" />
        <nav :class="{ show: menuOpen }">
            <router-link to="/">
                <feather type="clock" />
                <span>Ma journée</span>
            </router-link>
            <router-link to="/week">
                <feather type="calendar" />
                <span>Ma semaine</span>
            </router-link>
            <div class="icon-wrapper">
                <feather class="icon" :type="icon" @click="toggleTheme" />
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "SuperNavBar",
    data() {
        return {
            menuOpen: false,
            userTheme: "light-theme",
            interval: false,
            count: 0,
            easterTheme: false
        };
    },

    mounted() {
        const initUserTheme = this.getUserTheme();
        this.setTheme(initUserTheme);

        const navMenu = document.querySelector(".super-nav-bar nav");
        const navBurger = document.querySelector(".super-nav-bar .menu");
        document.addEventListener("click", e => {
            if (!(e.target == navMenu || navMenu.contains(e.target) || e.target == navBurger || navBurger.contains(e.target))) {
                this.menuOpen = false;
            }
        });
    },

    computed: {
        icon() {
            if (this.easterTheme == false) {
                return this.userTheme == "dark-theme" ? "sun" : "moon";
            } else {
                if (this.userTheme == "dark-theme") {
                    return "sun";
                } else if (this.userTheme == "light-theme") {
                    return "smile";
                } else if (this.userTheme == "easter-theme") {
                    return "moon";
                }
            }
            return "";
        }
    },

    methods: {
        // Set your value and localStorage theme
        setTheme(theme) {
            if (this.userTheme != "easter-theme") {
                this.userTheme = theme;
                this.$cookies.set("theme", theme);
            }
            document.documentElement.className = theme;
        },
        // Change the theme of your page
        toggleTheme() {
            if (this.easterTheme == false) {
                this.userTheme = this.userTheme === "light-theme" ? "dark-theme" : "light-theme";
            } else {
                if (this.userTheme == "dark-theme") {
                    this.userTheme = "light-theme";
                } else if (this.userTheme == "light-theme") {
                    this.userTheme = "easter-theme";
                } else if (this.userTheme == "easter-theme") {
                    this.userTheme = "dark-theme";
                }
            }
            const newTheme = this.userTheme;

            this.setTheme(newTheme);
        },
        // Get your preference webrowser
        getUserTheme() {
            // If first visit
            if (!this.$cookies.isKey("theme")) {
                const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = hasDarkPreference ? "dark-theme" : "light-theme";
                this.$cookies.set("theme", theme);
            }
            return this.$cookies.get("theme");
        },

        start() {
            if (!this.interval) {
                this.interval = setInterval(() => this.count++, 30);
            }
        },
        stop() {
            clearInterval(this.interval);
            this.interval = false;
            if (this.count >= 50) {
                this.easterTheme = true;
            }
            this.count = 0;
        }
    }
};
</script>

<style>
header.super-nav-bar {
    width: 100%;
    color: var(--word);
    background-color: var(--super-nav);

    padding: var(--space-2);

    display: flex;
    align-items: center;
    justify-content: space-between;
}

header.super-nav-bar .title {
    font-family: "Roboto Slab", sans-serif;
    color: var(--word);
}

header.super-nav-bar nav {
    display: flex;
    align-items: center;
    gap: var(--space-2);

    z-index: 8888;
}

.super-nav-bar h2 * {
    vertical-align: middle;
}

header.super-nav-bar nav > * {
    color: var(--word);
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: var(--space-2);
}

header.super-nav-bar .menu {
    display: none;
}

.super-nav-bar nav .icon-wrapper {
    padding-left: var(--space-2);
    position: relative;
}

.super-nav-bar nav .icon-wrapper::before {
    content: "";
    padding: 1px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: auto;

    background-color: var(--word);
    border-radius: 4px;
}

.super-nav-bar nav .icon:hover {
    animation: spin 500ms ease-in-out forwards;
}

.super-nav-bar nav .icon-wrapper .icon-desc {
    display: none;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.super-nav-bar nav .icon.day {
    background-color: yellow !important;
}

.super-nav-bar nav .icon.night {
    background-color: purple;
}

.super-nav-bar nav .router-link-exact-active {
    padding-top: 6px;
    padding-bottom: 4px;
    border-bottom: 2px solid var(--word);
}

@media only screen and (max-device-width: 480px) {
    header.super-nav-bar .menu {
        display: block;
        z-index: 9999;
    }

    header.super-nav-bar nav {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: var(--super-nav-mobile);
        padding-top: calc(2 * var(--space-4));

        box-shadow: -2px 0 15px -5px rgba(0, 0, 0, 0.2);

        transform: translateX(100%);
        transition: all 150ms;
    }

    header.super-nav-bar nav > *.selected {
        background-color: var(--background);
    }

    header.super-nav-bar nav > * {
        padding: var(--space-2) var(--space-4);
    }

    header.super-nav-bar nav.show {
        transform: translateX(0%);
    }

    .router-link-exact-active {
        background-color: var(--) !important;
    }

    .super-nav-bar nav .icon-wrapper {
        margin-top: var(--space-2);
        padding: var(--space-4);
        width: 100%;

        display: grid;
        place-items: center;
    }

    .super-nav-bar nav .icon-wrapper::before {
        top: 0;
        bottom: auto;
        left: 0;
        right: 0;

        margin: 0 var(--space-2);
    }

    .super-nav-bar nav .router-link-exact-active {
        padding: var(--space-2) var(--space-4);
        border: none;
        background-color: var(--super-nav-selected);
    }
}
</style>
