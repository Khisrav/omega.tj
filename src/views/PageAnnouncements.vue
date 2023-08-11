<template>
  <page-header :title="$t('Announcements')"></page-header>
  <announcement
    v-for="announcement in announcements"
    :title="announcement.title"
    :date="announcement.date"
  ></announcement>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import Announcement from '@/components/Announcement.vue';

export default {
  components: {
    PageHeader,
    Announcement
  },
  async created() {
    document.title = this.$t('Announcements');
    await this.checkAnnouncements();
    console.log(this.announcements[0].title);
  },
  data() {
    return {
      announcements: null
    }
  },
  methods: {
    async checkAnnouncements() {
      let announcements = localStorage.getItem('announcements');
      if (announcements) {
        this.announcements = JSON.parse(announcements);
      } 
      await this.loadAnnouncements();
    },
    async loadAnnouncements() {
      try {
        let res = await fetch('announcements.json');
        let data = await res.json();
        localStorage.setItem('announcements', JSON.stringify(data));
      }
      catch (error) {
        console.error('Error fetching announcements:', error);
      }
    }
  }
}
</script>