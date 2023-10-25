<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-black toolbar">
        <img class="navbar-logo" src="https://19c85d5a6894b437e6911cccc712fe68.cdn.bubble.io/f1668169261206x335736637009041340/rond-3%20%281%29.svg"/>

        <div class="navbar-actions">
            <QBtn rounded color="secondary text-black" icon="person" label="Login"/>
            <QBtn round color="secondary text-black" icon="shopping_cart" @click="toggleCart"/>
        </div>
      </q-toolbar>
    </q-header>
    <ShoppingCart :isCartOpen="isCartOpen"/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { QBtn } from "quasar";
import ShoppingCart from "src/components/ShoppingCart.vue";

export default defineComponent({
    name: "MainLayout",

    components: {
        QBtn,
        ShoppingCart
    },
    data() {
        return {
            isCartOpen: false
        };
    },
    methods: {
        toggleCart() {
            this.isCartOpen = ! this.isCartOpen;
        }
    }
});
</script>

<style lang="scss" scoped>
    .toolbar {
        justify-content: space-between;
        .navbar-logo {
            height: 72px;
            width: 72px;
        }

        .navbar-actions {
            display: flex;
            gap: 16px;
        }
    }

</style>
