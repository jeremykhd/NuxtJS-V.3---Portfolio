<script lang="ts" setup>
import FormContact from '~/components/forms/FormContact.vue';
import type { Portfolio } from '~/types/data';

const portfolio = useState<Portfolio>('portfolioData');

</script>
<template>
    <div>
        <TopSection title="Echangeons sur vos besoins" :leadingDescription="portfolio.contact.leadingDescription"/>
        <FormContact :contact="portfolio.contact"/>
    </div>
</template>