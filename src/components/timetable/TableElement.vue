<template>
    <div class="table-el" :class="event.infos.type">
        <p>{{ event.infos.lesson }}</p>
        <div class="extra">
            <p>
                <feather size="16px" type="map-pin"></feather
                ><span>{{ event.infos.room }}</span>
            </p>
            <p>
                <feather size="16px" type="clock"></feather
                ><span>{{ times }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "TableElement",
    props: ["event"],

    computed: {
        times: function() {
            const getTime = (timestamp) => {
                const date = new Date(timestamp);
                const addOs = (num) => (num < 10 ? "0" + num : num);
                return `${addOs(date.getHours())}h${addOs(date.getMinutes())}`;
            };
            return `${getTime(this.event.start)} - ${getTime(this.event.end)}`;
        },
    },
};
</script>

<style scoped>
.extra > * {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    margin-top: var(--space-1);
}
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
