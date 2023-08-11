<template>
  <page-header :title="$t('Performance')"></page-header>
  <greeting
    :showGreetingWord="false"
    :studentName="studentInfo.name"
    :studentSurname="studentInfo.surname"
    :grade="studentInfo.grade"
    :studentAvatar="studentInfo.avatar"
  ></greeting>

  <div class="avg-score">
    <div class="filter">
      <div>
        <p class="m-3">{{ $t('Average score') }}</p>
      </div>
      <div style="display: flex;align-items: center;">
        <span class="avg-score__score">{{ Math.round(marksTotal / marksCount * 10) / 10 }}</span>
        <img src="../assets/img/cup.png" width="32">
      </div>
    </div>
  </div>

  <div class="performance-subjects">
    <subject-performance
      v-for="subject in studentInfo.performance"
      :subject="subject.subject"
      :teacher="subject.teacher"
      :marks="subject.marks"
    ></subject-performance>
  </div>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import PageHeader from '@/components/PageHeader.vue';
import SubjectPerformance from '@/components/SubjectPerformance.vue';

export default {
  components: {
    PageHeader,
    Greeting,
    SubjectPerformance
  },
  async created() {
    await this.getStudentInfo();
    this.calculateAverage(this.studentInfo.performance);
  },
  data() {
    return {
      studentInfo: [],
      marksCount: 0,
      marksTotal: 0
    }
  },
  methods: {
    async getStudentInfo() {
      try {
        let res = await fetch('student.json');
        let data = await res.json();
        this.studentInfo = data;
      }
      catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    },
    calculateAverage(studentPerf) {
      for (var i=0; i<studentPerf.length; i++) {
        
        var marks = studentPerf[i].marks;
        for (var j=0; j<marks.length; j++){
          if (marks[j][2] != 0) { this.marksCount++; }
          this.marksTotal+=marks[j][2];
        }
      }
    }
  }
}
</script>

<style>
h1 {
  font-size:24px !important;
}
.avg-score {
  background: url(../assets/img/student-avatar.jpg);
  border-radius: 32px;
  margin-top: 16px;
}
.avg-score p {
  margin-left:0 !important
}
.avg-score .filter {
  backdrop-filter: blur(32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px;
  padding: 16px;
  color:#fff;
  font-weight: bold;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.25);
}
.avg-score__score {
  border-radius: 8px;
  background: #fff;
  color: #3c3c3c;
  padding: 0 10px;
  margin-right: 16px;
}
.performance-subjects {
  margin-top: 16px;
}
</style>