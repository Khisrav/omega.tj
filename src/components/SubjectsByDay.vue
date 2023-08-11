<template>
  <timetable-subject
    v-for="subject in subjects"
    :subject="subject.subject"
    :teacher="subject.teacher"
    :start="subject.time[0]"
    :end="subject.time[1]"
    :topic   = "subject.topic"
    :homework= "subject.homework"
  ></timetable-subject>
</template>

<script>
import TimetableSubject from './TimetableSubject.vue';

export default {
  props: ['subjects'],
  components: {
    TimetableSubject
  }
}
</script>