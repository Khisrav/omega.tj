<template>
    <h3 class="m-0">{{ title }}</h3>
    <div class="announcement-info">
        <span>{{ date }}</span>
        <span>{{ $t("Read...") }}<!--<router-link>Read...</router-link>--></span>
    </div>
    <hr>
</template>

<script>
export default {
    props: ['title', 'date']
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: space-between;
}
.announcement-info {
    margin-top: 16px;
}
hr {
    border:1px solid #000;
}
</style>