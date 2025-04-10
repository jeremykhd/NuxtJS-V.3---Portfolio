<script lang="ts" setup>
import type { Project } from '~/types/data';

const emit = defineEmits(['closeModal']);
const props = defineProps<{
    project: Project | undefined;
}>();

const handleCloseModal = () => {
    emit('closeModal')
}
</script>

<template>
    <div class="z-1 fixed inset-0 backdrop-blur h-screen w-screen bg-transparent flex flex-col justify-center items-center">
        <div class="w-4/5 md:w-3/5 h-5/6 rounded-2xl overflow-scroll" style="background: linear-gradient(302deg, rgba(255,255,255,1) 0%, rgba(12,25,64,1) 0%, rgba(0,0,0,1) 70%);">
            <div class="modal-header relative overflow-hidden min-h-1/5 md:min-h-2/6">
                <img class="z-0 absolute w-full h-full rounded-xl transition-all duration-300 object-cover" :src="project?.background"/>
                <div class="flex flex-row p-5 md:p-10">
                    <button class="bg-transparent cursor-pointer" v-on:click="handleCloseModal">
                        <Icon name="ri-arrow-left-line" style="color:white" size="20"></Icon>
                    </button>
                </div>
            </div>
            <div class="modal-body min-h-4/5 md:min-h-4/6 overflow-scroll">
                <div class="flex flex-col p-10 h-full w-full">
                    <div class="modal-subtitle text-lg md:text-xl space-x-2">
                        <span v-for="technologie in project?.technologies" :key="technologie" class=" bg-gradient-to-b from-green-300 to-green-800 bg-clip-text text-transparent">
                            {{ technologie }}
                        </span>
                    </div>
                    <div class="modal-title text-lg md:text-4xl">
                        {{ project?.name }}
                    </div>
                    <div class="flex flex-col space-y-2 text-lg md:text-4xl pt-10">
                        <div class="text-base text-gray-400">
                            Prinicpales technologies utilisés :
                        </div>
                        <div class="text-base text-gray-400 space-x-2">
                            <span v-for="technologie in project?.technologies" :key="technologie" class=" text-gray-300">
                                {{ technologie }}
                            </span>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2 text-lg md:text-4xl pt-6">
                        <div class="text-base text-gray-400">
                            Autres technologies utilisés :
                        </div>
                        <div class="text-base text-gray-400 space-x-2">
                            <span v-for="service in project?.services" :key="service" class=" text-gray-300">
                                {{ service }}
                            </span>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2 text-lg md:text-4xl pt-6">
                        <div class="text-base text-gray-400">
                            Description :
                        </div>
                        <div class="text-base text-gray-300 space-x-2">
                            {{ project?.description }}
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2 text-lg md:text-4xl pt-6">
                        <div class="text-base text-gray-400">
                            Points clés de l'application :
                        </div>
                        <div class="text-base text-gray-300 space-x-2">
                            <ul class="">
                                <li v-for="competence in project?.competences" :key="competence" class=" text-gray-300">
                                    - {{ competence }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>