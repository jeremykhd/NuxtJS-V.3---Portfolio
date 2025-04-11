<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt';
import { useState } from 'nuxt/app';
import { portfolio } from './data/portfolio';
const portfolioData = useState('portfolioData',  () => portfolio.getData());
</script>
<template>
    <Analytics />
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
     <NuxtLayout>
      <NuxtPage :portfolio="portfolioData" />
     </NuxtLayout>
</template>
