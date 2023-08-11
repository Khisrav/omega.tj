<template>
  <div class="container" style="width: auto;">
    <router-view></router-view>
    <navigation></navigation> 
  </div> 
</template>

<script>
import { useI18n } from 'vue-i18n';
import LocaleSwitcher from './components/LocaleSwitcher.vue'
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    LocaleSwitcher,
    Navigation
  },
  data() {
    return {
      schedule: []
    }
  },
  async created() {
    await this.checkSchedule();
    await this.checkStudentInfo();
  },
  setup() {
    const { t } = useI18n({
        inheritLocale: true,
        useScope: "global"
    });
    return { t };
  },
  methods: {
    async checkSchedule() {
      let schedule = localStorage.getItem('schedule');
      if (schedule) {
        return schedule;
      } 
      await this.loadSchedule();
    },
    async loadSchedule() {
      try {
        let res = await fetch('schedule.json');
        let data = await res.json();
        localStorage.setItem('schedule', JSON.stringify(data));
      }
      catch (error) {
        console.error('Error fetching schedule:', error);
      }
    },
    async checkStudentInfo() {
      let studentInfo = localStorage.getItem('studentInfo');
      if (studentInfo) {
        return studentInfo;
      }
      await this.loadStudentInfo();
    },
    async loadStudentInfo() {
      try {
        let res = await fetch('student.json');
        let data = await res.json();
        localStorage.setItem('studentInfo', JSON.stringify(data));
      }
      catch (error) {
        console.error('Error fetching student information:', error);
      }
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #F26430;
  border-radius: 100px;
}
body {
  margin:0;
}
#app {
  font-family: 'Open Sans', sans-serif;
  color:#3c3c3c;
}
* {
  transition: all .5s ease 0s;
}
</style>