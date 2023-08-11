<template>
    <page-header :title="$t('Settings')"></page-header>
    <locale-switcher></locale-switcher>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue';
import PageHeader from '@/components/PageHeader.vue';

export default {
    components: {
        LocaleSwitcher,
        PageHeader
    },
    created() {
        document.title = this.$t('Settings');
    }
}
</script>