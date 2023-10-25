<template>
    <div>
        {{ item.product["Nom du produit"] }} x {{ item.quantity }}
    </div>
</template>

<script setup lang="ts">
import type { ShoppingCartItem } from "../stores/shopping-store";

const { item } = defineProps<{item: ShoppingCartItem}>();


</script>
