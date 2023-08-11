<template>
  <main>
    <page-header v-show="false"></page-header>
    <greeting :showGreetingWord="true" :studentName="studentInfo.name" :studentAvatar="studentInfo.avatar"></greeting>
    <widget-for-tomorrow></widget-for-tomorrow>
  </main>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import WidgetForTomorrow from '@/components/WidgetForTomorrow.vue';
import PageHeader from '@/components/PageHeader.vue';

export default {
  components: {
    Greeting,
    WidgetForTomorrow,
    PageHeader
  },
  created() {
    document.title = this.$t('Home');
    this.loadStudentInfo();
  },
  data() {
    return {
      studentInfo: null
    }
  },
  methods: {
    loadStudentInfo() {
      this.studentInfo = JSON.parse(localStorage.getItem('studentInfo'));
    }
  }
}
</script>