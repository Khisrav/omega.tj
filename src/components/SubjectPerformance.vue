<template>
    <div class="performance-subject">
        <div class="subject-main">
            <div style="text-align: center;width:42px;">
                <span>{{ counter }}</span>
            </div>
            <div>
                <p class="m-0" style="font-size:20px">{{ subject }}</p>
                <p class="m-0" style="font-weight: normal;margin-top:6px !important;font-size:14px">{{ teacher }}</p>
            </div>
            <div style="float:right;line-height: 64px;">
                <img src="../assets/img/arrow.png" :class="{closed: isClosed}" width="24" @click="isClosed = !isClosed">
            </div>
        </div>
        <div class="subject-more" v-show="!isClosed">
            <!-- <p v-for="mark in marks">{{ mark }}</p> -->
            <div class="mark" v-for="mark in marks"
                :class="{
                    'mark-0': mark[2] == 0,
                    'mark-2': mark[2] == 2,
                    'mark-3': mark[2] == 3,
                    'mark-4': mark[2] == 4,
                    'mark-5': mark[2] == 5,
                }"
            >
                <span style="margin-top:3px;">{{ $t(mark[0]) }} {{ mark[1] }}</span>
                <span style="font-size:16px;font-weight: bold;">{{ (mark[2] != 0) ? mark[2] : 'Н' }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['subject', 'teacher', 'marks'],
    data() {
        return {
            isClosed: true,
            skipped: 0,
            totalMarks: 0,
            countMarks: 0,
            counter: 1
        }
    }
}
</script>

<style scoped>
.closed {
    transform: rotate(180deg);
}
.opened {
    transform: rotate(0);
}
hr {
    width: 8px;
    background: transparent;
    border: 2px solid #F26430;
    border-radius: 100px;
    margin-top: 4px;
    margin-bottom: 4px;
}
.performance-subject {
    margin-bottom: 16px;
}
.performance-subject .subject-main {    
    border-radius: 16px;
    position: relative;
    z-index: 2;
    background: #fff;
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.15);
    padding: 10px 32px;

}
.performance-subject .subject-main div {
    display: inline-block;
    vertical-align: middle;
    font-weight: bold;
}
.performance-subject .subject-main img {
    margin-right:-8px;
}
.subject-more {
    background-color: #f5f5f5;
    padding: 32px 8px 8px 8px;
    border-radius: 0 0 16px 16px;
    position: relative;
    z-index: 1;
    margin-top: -16px;
    text-align: center;
}
.subject-more p {
    margin: 0;
    font-weight: bold;
    font-size: 14px;
}
.mark {
    display: inline-block;
    width: 56px;
    height: 56px;
    background: #fff;
    text-align: center;
    font-size: 12px;
    border-radius: 8px;
    margin:6px;
}
.mark span {
    display: inline-block;
    line-height: 21px;
    width:48px;
}
.mark-0 {
    background: #f8f9fa;
    color:#6c757d;
}
.mark-2 {
    background: #dc3545;
    color:#fff;
}
.mark-3 {
    background: #ffc107;
    color:#212529;
}
.mark-4 {
    background: #0d6efd;
    color:#fff;
}
.mark-5 {
    background:#198754;
    color:#fff;
}
</style>