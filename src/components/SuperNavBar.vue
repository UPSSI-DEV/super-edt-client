<template>
  <header class="super-nav-bar">
      <h2 class="title">SuperEDT</h2>
      <nav>
          <router-link to="/">Dashboard</router-link>
          <router-link to="/week">Ma semaine</router-link>
      </nav>
  </header>
</template>

<script>
export default {

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
    }
</style>