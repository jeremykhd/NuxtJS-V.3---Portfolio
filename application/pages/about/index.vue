<script lang="ts" setup>
import type { Portfolio } from '~/types/data';

const portfolio = useState<Portfolio>('portfolioData');

</script>
<template>
    <div>
        <TopSection title="A propos de moi" :leadingDescription="portfolio.about.leadingDescription">
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-10">
                <div class="col-span-1 flex flex-col space-y-2">
                    <p class="text-5xl">{{ portfolio.about.experience }}+</p>
                    <p class="text-xl text-gray-400">Années d'expérience</p>
                </div>
                <div class="col-span-1 flex flex-col space-y-2">
                    <p class="text-5xl">{{ portfolio.about.completeProject }}</p>
                    <p class="text-xl text-gray-400">Projets aboutis</p>
                </div>
                <div class="col-span-1 flex flex-col space-y-2">
                    <p class="text-5xl">{{ portfolio.about.cupOfCoffe }}k</p>
                    <p class="text-xl text-gray-400">Tasses de café</p>
                </div>
            </div>
        </TopSection>
        <section class="w-full flex justify-center px-10 pb-10 pt-10 md:pt-20">
            <div class="w-full justify-center content-center flex flex-col sm:flex-col md:flex-row space-y-10 lg:space-y-15 md:space-y-0">
                <div class="w-2/3 sm:w-1/3 md:w-1/3 lg:w-3/5 lg:py-10 md:pr-10">
                    <div class="relative p-10">
                        <img class="max-w-full border-4 border-black relative block" src="/img/profil-pic.jpg">
                    </div>
                </div>
                <div class="flex flex-col justify-center w-full sm:w-full md:w-3/5 lg:w-3/5 lg:pr-10 space-y-6 animate__animated animate__fadeInUp">
                    <p v-html="portfolio.about.profileTitle" class="text-xl lg:text-4xl bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent">
                    </p>
                    <p class="text-base md:text-lg text-gray-300">
                        {{portfolio.about.profileDescription}}
                    </p>
                    <p class="text-base md:text-lg text-gray-300">
                        {{portfolio.about.profileCitation}}
                    </p>
                </div>
            </div>
        </section>
        <ExperiencesSection :experiences="portfolio.experiences"/>
        <ServicesSection :services="portfolio.services"/>
        <CardContact :contact="portfolio.contact"/>
    </div>

</template>