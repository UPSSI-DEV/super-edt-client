<template>
    <header class="super-nav-bar">
        <h2 class="title">SuperEDT</h2>
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
                <feather class="icon" :class="iconColor" :type="icon" @click="toggleTheme" />
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
        };
    },

    mounted() {
        const initUserTheme = this.getMediaPreference();
        this.setTheme(initUserTheme);

        const navMenu = document.querySelector('.super-nav-bar nav')
        const navBurger = document.querySelector('.super-nav-bar .menu')
        document.addEventListener('click', e => {
            if(!(e.target == navMenu || navMenu.contains(e.target) || e.target == navBurger || navBurger.contains(e.target))) {
                this.menuOpen = false
            }
        })
    },

    computed: {
        icon() {
            return (this.userTheme == 'dark-theme') ? 'sun' : 'moon'
        },

        iconColor() {
            return (this.userTheme == 'dark-theme') ? 'day' : 'night'
        },

        iconTheme() {
            return (this.userTheme == 'dark-theme') ? 'clair' : 'sombre'
        }
    },

    methods: {
        // Set your value and localStorage theme
        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },
        // Change the theme of your page
        toggleTheme() {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                this.setTheme("dark-theme");
            } else {
                this.setTheme("light-theme");
            }
        },
        // Get your preference webrowser
        getMediaPreference() {
            const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (hasDarkPreference) {
                return "dark-theme";
            } else {
                return "light-theme";
            }
        },
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
    content: '';
    padding: 1px;

    position: absolute;
    top: 0; bottom: 0; left: 0; right: auto;

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
    0%   { transform: rotate(  0deg); }
    100% { transform: rotate(360deg); }
}

.super-nav-bar nav .icon.day {
    background-color: yellow !important;
}

.super-nav-bar nav .icon.night {
    background-color: purple;
}

@media only screen and (max-device-width: 480px) {
    header.super-nav-bar .menu {
        display: block;
        z-index: 9999;
    }

    header.super-nav-bar nav {
        display: block;
        position: fixed;
        top: 0; bottom: 0;right: 0;
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
        top: 0; bottom: auto;
        left: 0; right: 0;

        margin: 0 var(--space-2);
    }
}
</style>
