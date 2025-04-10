<script lang="ts" setup>
import type { Services } from '~/types/data';

const props = defineProps<{
    services: Services;
}>()
</script>

<template>
    <section class="flex flex-col p-10 lg:p-20 space-y-10 lg:space-y-15">
        <h2 class="text-2xl lg:text-7xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Services
        </h2>
        <p class="text-gray-400 text-lg md:text-xl">
            {{ services.leadingDescription }}
        </p>
        <div class="grid grid-cols-3 md:flex-row gap-4">
            <div v-for="expertise in services.expertises" class=" col-span-3 md:col-span-1 hover:border-green-300 border border-black transition-all duration-400 rounded-xl bg-black px-6 py-10 pr-15 flex flex-col space-y-2">
                <Icon :name="expertise.icon" size="42" class="text-green-300"></Icon>
                <h3 class="text-lg md:text-2xl text-gray-300 pb-2 pt-4 md:truncate">
                    {{ expertise.name }}
                </h3>
                <p class="text-base text-gray-400">
                    {{ expertise.description }}
                </p>
            </div>
        </div>
    </section>
</template>