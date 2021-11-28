<template>
    <div>
        <div class="cur-day">{{ curDay }}</div>
        <div class="elements">
            <detailed-table-element
                v-for="event of events"
                :key="event.raw"
                :event="event"
            ></detailed-table-element>
        </div>
    </div>
</template>

<script>
import DetailedTableElement from "../components/timetable/DetailedTableElement.vue";
export default {
    components: { DetailedTableElement },
    name: "Home",
    props: ["data"],

    data() {
        return {
            day: "",
            events: [],
        };
    },

    mounted() {
        var today = new Date().getDay() - 1;
        console.log(today);
        if (today == 5 || today == -1) {
            today = 0;
        }

        const week = Object.entries(Object.values(this.data)[0]);
        console.log(week);
        if (week[today]) {
            this.day = week[today][0];
            this.events = week[today][1];
        }
    },

    computed: {
        curDay() {
            if (this.day == "") return "";
            const weekDays = [
                "Dimanche",
                "Lundi",
                "Mardi",
                "Mercredi",
                "Jeudi",
                "Vendredi",
                "Samedi",
            ];
            const months = [
                "Janvier",
                "Février",
                "Mars",
                "Avril",
                "Mai",
                "Juin",
                "Juillet",
                "Août",
                "Septembre",
                "Octobre",
                "Novembre",
                "Décembre",
            ];
            const date = new Date(this.day);

            return `${weekDays[date.getDay()]} - ${date.getDate()} ${
                months[date.getMonth()]
            } ${date.getFullYear()}`;
        },
    },
};
</script>

<style scoped>
.cur-day {
    margin-bottom: var(--space-2);
    color: var(--word);
}

.elements {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
}
</style>
