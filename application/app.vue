<script lang="ts" setup>
import { useState } from 'nuxt/app';
import { portfolio } from './data/portfolio';
const portfolioData = useState('portfolioData',  () => portfolio.getData());
</script>
<template>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
     <NuxtLayout>
      <NuxtPage :portfolio="portfolioData" />
     </NuxtLayout>
</template>
