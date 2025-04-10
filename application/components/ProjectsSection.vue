<script lang="ts" setup>
import type { Project, Projects } from '~/types/data';
const props = defineProps<{
    projects: Projects
}>()

const openModal = ref(false);
const currentProject = ref<Project>();
const handleModal = (event: {title: string}) => {
    currentProject.value = props.projects.contents.find((p) => p.name === event.title);
    openModal.value = true;
}
</script>

<template>
    <div class="w-full p-10 pt-15">
        <div class="flex flex-row justify-center">
            <span class="text-xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Quelques projets récents</span>
        </div>
    </div>
    <section class="w-full p-4">
        <div class="grid grid-cols-6 gap-4 xl:gap-10">
            <card-project
                v-for="(project, index) in projects.contents"
                :key="project.name"
                :height="index < 2 ? 'lg' : 'md'"
                :width="index < 2 ? 'md' : 'sm'"
                :slug="project.slug"
                :title="project.name"
                :type="project.type"
                :background="project.background"
                :urls="project.urls"
                :technologies="project.technologies"
                @open-project-modal="(event) => handleModal(event)"
            />
        </div>
    </section>
    <teleport to="#teleports">
        <transition name="fade">
            <modal v-if="openModal" :project="currentProject" @close-modal="openModal = false"/>
        </transition>
    </teleport>
</template>