<template>
<div class="timetable-subject">
    <div class="subject-main">
        <div style="margin-right:16px;text-align: center;width:42px;">
            <span style="display: block;">{{ start }}</span>
            <hr>
            <span style="display: block;color:#6a6a6a">{{ end }}</span>
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
        <p><span style="color: #6a6a6a;">{{ $t('Topic:') }}</span> {{ topic }}</p>
        <p class="mt-1"><span style="color: #6a6a6a;">{{ $t('H/W:') }}</span> {{ homework }}</p>
    </div>
</div>
</template>

<script>
export default {
    props: ['start', 'end', 'subject', 'teacher', 'topic', 'homework'],
    data() {
        return {
            isClosed: true
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
.timetable-subject {
    margin-bottom: 16px;
}
.timetable-subject .subject-main {    
    border-radius: 16px;
    position: relative;
    z-index: 2;
    background: #fff;
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.1);
    padding: 10px 24px;

}
.timetable-subject .subject-main div {
    display: inline-block;
    vertical-align: middle;
    font-weight: bold;
}
.timetable-subject .subject-main img {
    margin-right:-8px;
}
.subject-more {
    background-color: #f5f5f5;
    padding: 32px 16px 16px 16px;
    border-radius: 0 0 16px 16px;
    position: relative;
    z-index: 1;
    margin-top: -16px;
}
.subject-more p {
    margin: 0;
    font-weight: bold;
    font-size: 14px;
}
.subject-more span {
    width: 64px;
    display: inline-block;
}
</style>