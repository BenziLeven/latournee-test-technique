<template>
    <div class="subcategory">
       <h4> {{subcategory.Nom}} </h4>
       <p>{{ subcategory.Description }}</p>
        <ProductsListing :products="subcategory.Produits"/>
    </div>
</template>

<script setup lang=ts>
import ProductsListing from "./ProductsListing.vue";
import { defineProps } from "vue";
import type { SubCategory } from "./models";

defineProps<{
    subcategory: SubCategory
}>();
</script>

