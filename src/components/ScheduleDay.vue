<template>
  <div class="day-chooser">
    <button 
      class="day"
      v-for="(day, index) in weekDays"
      :key="index"
      @click="loadScheduleByDay(getDayIndex(day.dayOfWeek.toLowerCase()), this.setActive(index))"
      :class="{active: (activeButton === null) ? day.date === new Date().getDate() : activeButton === index, disabled: day.dayOfWeek == 'Sun'}"
      :disabled="day.dayOfWeek == 'Sun'"
    >
      <span>{{ $t(day.dayOfWeek) }}<br><span>{{ day.date }}</span></span>
    </button>
  </div>
  <div class="subjects-list mt-4">
    <subjects-by-day :subjects="subjects"></subjects-by-day>
  </div>
</template>

<script>
import SubjectsByDay from './SubjectsByDay.vue';

export default {
  components: {
    SubjectsByDay
  },
  created() {
    this.weekDays = this.getNextSevenDays();
    this.loadScheduleByDay(this.getDayIndex(this.weekDays[0].dayOfWeek.toLowerCase()));
  },
  data() {
    return {
      weekDays: null,
      activeButton: null,
      subjects: null
    }
  },
  methods: {
    getNextSevenDays() {
      const today = new Date();
      const nextSevenDays = [];
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      for (let i = 0; i < 7; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        const dayOfWeek = days[nextDate.getDay()];
        const date = nextDate.getDate();
        nextSevenDays.push({ dayOfWeek, date });
      }

      return nextSevenDays;
    },

    loadScheduleByDay(index) {
      const schedule = JSON.parse(localStorage.getItem('schedule'));
      this.subjects = schedule[index];
    },

    setActive(index) {
      this.activeButton = index;
    },

    getDayIndex(dayName) {
      const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      return days.indexOf(dayName.toLowerCase());
    },

    getDayName(index) {
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      return (index >= 0 && index < days.length) ? days[index] : 'Invalid day index. Please provide a number between 0 and 6.';
    },
  }

}
</script>

<style scoped>
::-webkit-scrollbar {
  height: 4px;
}
::-webkit-scrollbar-track {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #F26430;
  border-radius: 100px;
}
.day-chooser {
  overflow-x: auto;
  white-space: nowrap;
}
.day-chooser .day {
  display: inline-block;
  width: 64px;
  height:64px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-weight: bold;
  margin: 16px 8px;
  border:none;
  color:#3c3c3c;
}
.day-chooser .day span {
  display: block;
  font-size: 18px;
}
.day-chooser .day span span {
  font-weight: normal;
  font-size: 16px;
  margin-top: 0;
}
.day.disabled {
  color: #AEAEAE;
}
.day.active {
  color: #F26430;
}
</style>