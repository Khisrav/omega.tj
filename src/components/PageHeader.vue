<template>
    <div class="header"><h1>{{ title }}</h1></div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
h1 {
    text-align: center;
    color:#3c3c3c;
    font-size:24px;
    margin-bottom:8px;
}
</style>