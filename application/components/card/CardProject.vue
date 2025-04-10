<script lang="ts" setup>
import type { SocialLinks } from '~/types/data';
const emit = defineEmits(['openProjectModal'])

const props = defineProps<{
    background: string;
    hover?: boolean;
    title: string;
    slug: string;
    type: string;
    height: string;
    width: string;
    urls?: SocialLinks;
    technologies?: string[];
}>();

const hover = ref(false);

const handleProjectModal = (projectTitle : string) => {
    emit('openProjectModal', {title: projectTitle});
}
</script>

<template>
<div 
    v-on:mouseenter="hover = true"
    v-on:mouseleave="hover = false"
    class="group relative rounded-lg overflow-hidden"
    :class="{ 
        'h-54 sm:h-64 md:h-46' : height === 'sm',
        'h-54 sm:h-64 md:h-46 lg:h-46 xl:h-64' : height === 'md',
        'h-54 sm:h-64 md:h-64 lg:h-72 xl:h-96' : height === 'lg',
        'col-span-6 md:col-span-3 lg:col-span-2' : width === 'sm',
        'col-span-6 md:col-span-3' : width === 'md',
        'col-span-6 md:col-span-4' : width === 'lg',
        }"
    >
    <img class="z-0 absolute w-full h-full rounded-lg transition-all duration-300" :class="{'blur-xs' : hover, 'scale-110' : hover}" :src="background"/>
    <div class="bg-transparent rounded-lg p-5 flex flex-col justify-between relative h-full w-full">
        <div class="flex flex-row justify-between">
            <div></div>
            <span class=" uppercase tracking-wide">
                {{ type }}
            </span>
        </div>
        <transition name="fade">
            <div v-if="hover"  class="group-hover:animate-fade-in-up flex flex-row justify-between transition-all duration-200 space-x-4">
                <div class="flex flex-col w-fit h-fit overflow-x-hidden">
                    <div v-if="hover" class="flex flex-row space-x-2 overflow-ellipsis">
                        <span v-for="technologie in technologies" :key="technologie" class=" bg-gradient-to-b from-green-300 to-green-800 bg-clip-text text-transparent">
                            {{ technologie }}
                        </span>
                    </div>
                    <div class="flex h-fit">
                        <!-- <NuxtLink :to="'/projets/' + slug"> -->
                            <span v-on:click="handleProjectModal(title)" class="cursor-pointer text-2xl lg:text-4xl font-medium tracking-wider overflow-ellipsis truncate">
                                {{ title }}
                            </span>
                        <!-- </NuxtLink> -->
                    </div>
                </div>
                <div class="flex flex-row space-x-2 items-end content-center px-4">
                    <a v-if="urls?.github" class="text-gray-400 cursor-pointer hover:text-white transition-all duration-300" :href="urls?.github ?? '#'">
                        <Icon name="ri:github-fill" size="24"></Icon>
                    </a>           
                </div>
            </div>
        </transition>
    </div>
</div>

</template>