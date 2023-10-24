<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-black toolbar">
        <img class="navbar-logo" src="https://19c85d5a6894b437e6911cccc712fe68.cdn.bubble.io/f1668169261206x335736637009041340/rond-3%20%281%29.svg"/>

        <div>
        <div class="navbar-actions">
            <QBtn rounded color="secondary text-black" icon="person" label="Login"/>
            <QBtn round color="secondary text-black" icon="shopping_cart" />
        </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { QBtn } from "quasar";

export default defineComponent({
    name: "MainLayout",

    components: {
        QBtn
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
