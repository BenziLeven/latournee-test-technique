<template>
    <q-page class="row items-center justify-evenly">
        <div v-if="subcategories.length > 0">
            <div v-for="subcategory in subcategories" v-bind:key="subcategory.ID">
                hello
            </div>
        </div>
        <div v-else>
            Loading
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getLanding } from "../services";

import type {SubCategory} from "../components/models"

export default defineComponent({
    data() {
        return {
            subcategories: null as SubCategory
        };
    },
    async beforeRouteEnter(to, from, next) {
        const data = await getLanding();
        next(vm => vm.setData(data));
    },
    methods: {
        setData(pageContent) {
            this.subcategories = pageContent["Sous-categories"];
        }
    }
});
</script>
