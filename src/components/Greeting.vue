<template>
<div class="greeting mt-4">
    <div class="row" style="justify-content: space-between;">
        <div class="col-7" style="display: flex;align-items: center;justify-content: space-between;">
            <div>
                <p v-show="showGreetingWord" class="m-0">{{ $t('Good morning,') }}</p>
                <h1 class="m-0" style="">{{ studentName }}<br>{{ studentSurname }}</h1>
                <span v-if="grade">{{ grade }}</span>
            </div>
        </div>
        <div class="col-4" style="text-align: right;">
            <div class="student-avatar" :style="{ 'background-image': 'url(' + studentAvatar + ')' }"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['showGreetingWord', 'studentName', 'studentSurname', 'grade', 'studentAvatar']
}
</script>

<style scoped>
p {
    color: #3C3C3C;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
h1 {
    color: #3C3C3C;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.student-avatar {
    border-radius: 100px;
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.15);
    width: 90px;
    height: 90px;
    background-position: center;
    background-size: cover;
}
</style>