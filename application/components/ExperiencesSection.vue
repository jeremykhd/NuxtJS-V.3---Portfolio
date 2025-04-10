<script lang="ts" setup>
import type { Experiences } from '~/types/data';

const props = defineProps<{
    experiences: Experiences;
}>()
</script>

<template>
    <section class="flex flex-col bg-black p-10 lg:p-20 space-y-10 lg:space-y-15">
        <h2 class="text-2xl lg:text-7xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Formation & Expérience
        </h2>
        <p class="text-gray-400 text-lg md:text-xl">
            {{ experiences.leadingDescription }}
        </p>
        <div class="flex flex-col">
            <div v-for="experience in experiences.contents" class="relative flex flex-col text-gray-300 border-l border-gray-400">
                <div class="w-fit flex flex-row relative items-center">
                    <div class="absolute -left-1 rounded-full p-1 bg-gray-400"></div>
                    <div class="border-1 border-gray-400 w-6 "></div>
                    <p class=" border border-gray-400 px-4 py-1 rounded-4xl text-base text-gray-400">{{experience.from}} - {{experience.to}}</p>
                </div>
                <div class="flex flex-col px-8 pb-6 pt-4">
                    <h3 class=" text-2xl py-2">
                        {{experience.name}}
                    </h3>
                    <p v-if="experience.poste.length > 0" class="text-base md:text-lg text-green-300"> @ {{experience.poste}}</p>
                    <p class="text-base">{{experience.description}}</p>
                    <ul class="py-4 px-2">
                        <li v-for="competence in experience.competences" :key="competence">
                            - {{ competence }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>