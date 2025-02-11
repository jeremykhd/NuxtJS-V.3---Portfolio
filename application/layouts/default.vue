<script lang="ts" setup>
import type { Portfolio } from '~/types/data';


const data = useState<Portfolio>('portfolioData');
</script>

<template>
    <div class="min-h-screen min-w-full scroll-smooth flex flex-col justify-between">
        <AppHeader :portfolio="data"/>
        <slot/>
        <AppFooter/>
    </div>
</template>