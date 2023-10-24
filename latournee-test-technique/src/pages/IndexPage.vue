<template>
    <q-page class="row">
        <div v-if="subcategories.length > 0" class="page-container">
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

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getLanding } from "../services";
import SubcategoryDisplay from "../components/SubcategoryDisplay.vue";
import type {SubCategory, Category} from "../components/models";


export default defineComponent({
    components: { SubcategoryDisplay },
    async beforeRouteEnter(to, from, next) {
        const data = await getLanding();
        next(vm => vm.setData(data));
    },
    data() {
        return {
            subcategories: [] as SubCategory[]
        };
    },
    methods: {
        setData(pageContent: Category) {
            this.subcategories = pageContent["Sous-categories"];
        }
    }
});
</script>

<style scoped lang="scss">
.page-container {
    width: 100%;
    padding: 24px;
}
</style>
