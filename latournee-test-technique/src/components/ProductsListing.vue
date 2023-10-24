<template>
    <div class="products-listing">
        <ProductCard v-for="product in products" :product="product" :key="product.ID"/>
    </div>
</template>

<script setup lang=ts>
import { defineProps } from "vue";
import type { Product } from "./models";
import ProductCard from "./ProductCard.vue";

defineProps<{
        products: Product[];
    }>();
</script>

<style lang="scss" scoped>
    .products-listing {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }
</style>
