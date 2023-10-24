<template>
    <q-page class="row">
        <div v-if="!isLoading" class="page-container">
            <SubcategoryDisplay
                v-for="subcategory in subcategories"
                v-bind:key="subcategory.ID"
                :subcategory="subcategory"
            />
        </div>
        <div v-else>
            Loading
        </div>
    </q-page>
</template>


<script setup lang="ts">
import { ref } from "vue";
import { getLanding } from "../services";
import type { SubCategory } from "../components/models";
import SubcategoryDisplay from "../components/SubcategoryDisplay.vue";

const subcategories = ref<SubCategory[]>([]);
const isLoading = ref(true);

fetchPageContent();

async function fetchPageContent() {
    try {
        isLoading.value = true;
        const landing = await getLanding();
        subcategories.value = landing["Sous-categories"];
        isLoading.value = false;
    } catch (e) {
        console.error("Error: ", e);
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped lang="scss">
.page-container {
    width: 100%;
    padding: 24px;
}
</style>
