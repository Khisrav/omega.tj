<template>
  <select @change="switchLocale($event)">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale" :selected="locale === getLocaleSetting()">
      {{ locale }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  created() {
    this.$i18n.locale = this.getLocaleSetting();
  },
  data() {
    return {
      locales: ["ru", "en"]
    };
  },
  methods: {
    switchLocale(event){
      let locale = event.target.value;
      this.$i18n.locale = locale;
      this.storeLocaleSetting(locale);
    },
    storeLocaleSetting(locale){
      localStorage.setItem('locale', locale);
    },
    getLocaleSetting(){
      let locale = localStorage.getItem('locale');
      if (locale) { return locale; }
      this.$i18n.locale = "ru";
      this.storeLocaleSetting("ru");
    }
  }
};
</script>