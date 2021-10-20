<template>
  <header class="super-nav-bar">
      <h2 class="title">SuperEDT</h2>
      <feather class="menu" type="menu" @click="menuOpen = !menuOpen"/>
      <nav :class="{'show': menuOpen}">
          <router-link to="/">
            <feather type="clock" />
            <span>Dashboard</span>
          </router-link>
          <router-link to="/week">
            <feather type="calendar" />
            <span>Ma semaine</span>
          </router-link>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'SuperNavBar',
    data() {
        return {
            menuOpen: false,

        }
    }
}
</script>

<style>
    header.super-nav-bar {
        width: 100%;
        background-color: var(--white);
        
        padding: var(--space-2);

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header.super-nav-bar .title {
        font-family: 'Roboto Slab', sans-serif;
    }

    header.super-nav-bar nav {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    header.super-nav-bar nav > * {
        color: var(--black);
        text-decoration: none;
        
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    header.super-nav-bar .menu {
        display: none;
    }

    @media only screen and (max-device-width: 480px) {
        header.super-nav-bar .menu {
            display: block;
            z-index: 9999;
        }

        header.super-nav-bar nav {
            display: block;
            position: fixed;
            top: 0; bottom: 0; right: 0;
            background-color: var(--white);
            padding-top: calc(2 * var(--space-4));

            box-shadow: -2px 0 15px -5px rgba(0,0,0, 0.2);

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
    }
</style>