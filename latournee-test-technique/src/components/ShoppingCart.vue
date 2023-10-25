<template>
    <q-drawer
        v-if="isCartOpen"
        side="right"
        show-if-above
        bordered
        sticky
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
        class="shopping-cart"
      >
      <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <ShoppingCartItem
            v-for="item in shoppingCart.items"
            :item="item"
            :key="item.product.ID"
        />
          </q-list>
        </q-scroll-area>

      </q-drawer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useShoppingCartStore } from "../stores/shopping-store";
import ShoppingCartItem from "./ShoppingCartItem.vue";

const { isCartOpen } = defineProps<{isCartOpen: boolean}>();
const shoppingCart = reactive(useShoppingCartStore());
</script>


<style lang="scss" scoped>

.shopping-cart {
    position: sticky;
    top: 140px;
}

</style>
