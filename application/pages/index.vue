<script lang="ts" setup>
import type { Portfolio } from '~/types/data';

const portfolio = useState<Portfolio>('portfolioData');
</script>
<template>
    <div class="">
        <section class="w-full flex justify-center px-10 pb-10 pt-10 md:pt-20">
            <div class="w-full justify-center content-center flex flex-col sm:flex-col md:flex-row space-y-15 md:space-y-0">
                <div class="w-2/3 sm:w-1/3 md:w-1/3 lg:w-1/3 lg:py-10 md:pr-10">
                    <div class="relative">
                        <img class="max-w-full border-4 border-black rounded-4xl relative block" src="/img/profil-pic.jpg">
                    </div>
                </div>
                <div class="w-full sm:w-full md:w-3/5 lg:w-3/5 lg:p-10 pr-0 space-y-6 animate__animated animate__fadeInUp">
                    <p class="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        {{portfolio.leadingDescription}}
                    </p>
                    <p class="text-base md:text-xl text-gray-300">
                        {{portfolio.description}}
                    </p>
                    <button class="cursor-pointer text-black rounded-4xl bg-green-300 px-6 py-4 transition-all duration-300 border-2 hover:border-green-300 hover:bg-black hover:text-white">
                        Télécharger mon CV
                    </button>
                </div>
            </div>
        </section>
        <ProjectsSection :projects="portfolio.projects"/>
        <div class="h-24">

        </div>
        <card-contact :contact="portfolio.contact"/>
    </div>
</template>