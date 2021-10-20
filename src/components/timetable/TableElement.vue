<template>
    <div class="table-el" :class="event.infos.type">
        <p>{{ event.infos.lesson }}</p>
        <slot />
    </div>
</template>

<script>

export default {
    name: 'TableElement',
    props: [ 'event' ],
};

</script>

<style scoped>
    .table-el {
        background-color: var(--gray);
        color: var(--white);

        padding: var(--space-3);
        border-radius: var(--rounding);

        grid-column: var(--col);
        grid-row: var(--row);
    }

    .table-el.C {
        background: var(--tt-cm);
    }

    .table-el.TD {
        background: var(--tt-td);
        color: var(--black);
    }

    .table-el.TP {
        background: var(--tt-tp);
    }

    .table-el.Exam {
        background: var(--tt-exam);
    }

    .table-el.Projet {
        background: var(--tt-proj);
    }

    .table-el.Autre {
        background: var(--tt-other);
    }
</style>
