<script lang="ts" setup>
import type { Portfolio } from '../types/data';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { useState } from 'nuxt/app';

const data = useState<Portfolio>('portfolioData');
</script>

<template>
    <Analytics />
    <SpeedInsights />
    <div class="min-h-screen min-w-full scroll-smooth flex flex-col justify-between">
        <AppHeader :portfolio="data"/>
        <slot/>
        <AppFooter/>
    </div>
</template>