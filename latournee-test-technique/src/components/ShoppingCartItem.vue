<template>
    <QCard>
       <div> {{ item.product["Nom du produit"] }} x {{ item.quantity }}</div>
       <div class="item-actions">
            <QBtn round color="primary text-black pull-right" icon="add" @click="shoppingCart.addItem(item.product)"/>
            <QBtn round color="primary text-black pull-right" icon="remove" @click="shoppingCart.removeItem(item.product)"/>
       </div>
    </QCard>
</template>

<script setup lang="ts">
import { QCard, QBtn } from "quasar";
import { ShoppingCartItem, useShoppingCartStore } from "../stores/shopping-store";

const { item } = defineProps<{item: ShoppingCartItem}>();

const shoppingCart = useShoppingCartStore();


</script>
