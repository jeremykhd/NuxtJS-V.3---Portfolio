<script lang="ts" setup>
import type { Portfolio } from '~/types/data';

const portfolio = useState<Portfolio>('portfolioData');

</script>
<template>
    <div>
        <TopSection title="Projets" :leadingDescription="portfolio.projects.leadingDescription">
        </TopSection>
        <ProjectsSection :projects="portfolio.projects"/>
        <CardContact :contact="portfolio.contact"/>
    </div>
</template>