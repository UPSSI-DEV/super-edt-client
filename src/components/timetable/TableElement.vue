<template>
    <div class="table-el" :class="event.type">
        <p>{{ event.name }}</p>
    </div>
</template>

<style scoped>
    .table-el {
        background-color: var(--tt-cm);
        color: var(--white);

        padding: var(--space-3);
        border-radius: var(--rounding);
    }
</style>

<script>

export default {
    name: 'TableElement',
    props: [ 'event' ]
};

</script>
