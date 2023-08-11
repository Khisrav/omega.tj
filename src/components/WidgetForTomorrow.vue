<template>
    <div class="widget">
        <p><b>{{ $t('Schedule for tomorrow') }} ({{ date.month }}, {{ date.day }})</b></p>
        <div>
            <timetable-subject
                v-for    = "subject in subjects"
                :start   = "subject.time[0]"
                :end     = "subject.time[1]"
                :subject = "subject.subject"
                :teacher = "subject.teacher"
                :topic   = "subject.topic"
                :homework= "subject.homework"
            ></timetable-subject>
        </div>
    </div>
</template>

<script>
import TimetableSubject from './TimetableSubject.vue';

var _date = new Date();
export default {
    components: {
        TimetableSubject
    },
    created() {
        this.loadScheduleByDay();
    },
    data() {
        return {
            subjects: null,
            date: {
                date: _date,
                day: _date.getDate(),
                month: _date.toLocaleString('default', {month: 'long'}),
                year: _date.getFullYear()
            }
        }
    },
    methods: {
        async loadScheduleByDay() {
            var index = this.getTomorrowDayIndex();
            try {
                let res = await fetch('schedule.json');
                let data = await res.json();
                this.subjects = data[index];
            }
            catch (error) {
                console.error('Error fetching schedule:', error);
            }
        },
        getTomorrowDayIndex() {
            // const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            // const tomorrowDayName = daysOfWeek[tomorrow.getDay()];
            return tomorrow.getDay();
        }
    }
}
</script>