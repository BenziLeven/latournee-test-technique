<template>
    <div class="subcategory">
       <h4> {{subcategory.Nom}} </h4>
       <p>{{ subcategory.Description }}</p>
    </div>
</template>

<script setup lang=ts>
import { defineProps } from 'vue';
import type {SubCategory} from './models'

defineProps<{
    subcategory: SubCategory
}>()
</script>

