<template>
    <page-header :title="$t('Schedule')"></page-header>
    <p class="date">{{ date.month }}, {{ date.day }} <span>{{ formattedDate() }}</span></p>
    <schedule-day></schedule-day>
    <navigation></navigation>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import Navigation from '@/components/Navigation.vue';
import ScheduleDay from '@/components/ScheduleDay.vue';
import SubjectsByDay from '@/components/SubjectsByDay.vue';

var _date = new Date();

export default {
    components: {
        PageHeader,
        Navigation,
        ScheduleDay,
        SubjectsByDay
    },
    created() {
        document.title = this.$t('Schedule');
    }, 
    data() {
        return {
            date: {
                date: _date,
                day: _date.getDate(),
                month: _date.toLocaleString('default', {month: 'long'}),
                year: _date.getFullYear()
            }
        }
    },
    methods: {
        formattedDate() {
            const yyyy = _date.getFullYear();
            let mm = _date.getMonth() + 1;
            let dd = _date.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            return dd + '.' + mm + '.' + yyyy;
        }
    }
}
</script>

<style scoped>
.date {
    font-weight: bold;
    text-transform: capitalize;
}
.date span {
    font-size:14px;
    float: right;
}
</style>