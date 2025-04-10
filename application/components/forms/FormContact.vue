<script lang="ts" setup>
import type { Contact } from '~/types/data';

const props = defineProps<{
    contact: Contact
}>();

export type Forms = {
    fullname: string,
    email: string,
    object: string,
    message: string,
}

const forms = reactive({
    fullname: '',
    email: '',
    object: '',
    message: '',
});

const submitForm = (forms: Forms) => {
    console.log(forms);
}

</script>

<template>
    <div class="bg-black flex flex-col justify-center p-10 md:p-20">
        <div class="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
            <div class=" border border-dashed border-green-300 rounded-2xl px-4 py-2 text-gray-400">
                Lieux : Lyon, Toute la France
            </div>
            <div class=" border border-dashed border-green-300 rounded-2xl px-4 py-2 text-gray-400">
                {{ contact.email }}
            </div>
        </div>
        <div class="grid grid-cols-2 md:flex-row gap-4 py-10 md:py-20">
            <div class="flex flex-col col-span-2 md:col-span-1">
                <div class="pb-4 text-lg text-gray-400">
                    Nom
                </div>
                <input v-model="forms.fullname" class=" transition-all duration-600 outline-0 focus:border-solid border border-dashed border-green-300 rounded-xl px-6 py-4" type="text"/>
            </div>
            <div class="flex flex-col col-span-2 md:col-span-1">
                <div class="pb-4 text-lg text-gray-400">
                    Email
                </div>
                <input v-model="forms.email" class=" transition-all duration-600 outline-0 focus:border-solid border border-dashed border-green-300 rounded-xl px-6 py-4" type="email"/>
            </div>
            <div class="flex flex-col col-span-2">
                <div class="pb-4 text-lg text-gray-400">
                    Objet de l'échange
                </div>
                <input v-model="forms.object" class=" transition-all duration-600 outline-0 focus:border-solid border border-dashed border-green-300 rounded-xl px-6 py-4" type="text"/>
            </div>
            <div class="flex flex-col col-span-2">
                <div class="pb-4 text-lg text-gray-400">
                    Votre message
                </div>
                <textarea v-model="forms.message" class=" transition-all duration-600 outline-0 focus:border-solid min-h-54 border border-dashed border-green-300 rounded-xl px-6 py-4">
                    
                </textarea>
            </div>
        </div>
        <div class="flex flex-row w-full">
            <button v-on:click="submitForm(forms)" class=" w-full md:w-fit justify-center items-center cursor-pointer transition-all duration-400 bg-green-300 hover:bg-black text-black hover:text-white border border-green-300 rounded-4xl px-10 py-4 flex flex-row space-x-2">
                <p>Envoyez votre demande</p>
                <Icon name="ri:mail-line" class="justify-end" size="20"></Icon>
            </button>
        </div>
    </div>
</template>