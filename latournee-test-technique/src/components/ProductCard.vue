<template>
  <QCard class="product-card" bordered>
    <div class="image-container">
      <img :src="product.Image" class="image" />
    </div>
    <div class="product-name">{{ product["Nom du produit"] }}</div>
    <div class="action-container">
      <div class="price-container">
        <div class="price">{{ price }}</div>
        <div class="price-description">{{ priceDescription }}</div>
      </div>
      <QBtn round color="primary text-black pull-right" icon="add" />
    </div>
  </QCard>
</template>

<script setup lang="ts">
import { QCard, QBtn } from "quasar";
import { computed, defineProps } from "vue";
import type { Product } from "./models";

const { product } = defineProps<{
  product: Product;
}>();

const price = computed(() => formatPriceToEuro(product["B2C - Prix TTC"]));
const priceDescription = computed(() => {
    const unitPrice = product["Unité prix B2C"];
    const unit = "L";
    return `${product.Metafield} (${formatPriceToEuro(unitPrice)} / ${unit})`;
});

function formatPriceToEuro(_price: number) {
    return `${_price.toFixed(2)}€`;
}
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 230px;

  border-radius: 8px;
  padding: 8px;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 148px;
    width: 100%;

    background-color: $secondary;
    border-radius: 4px;

    .image {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .product-name {
    height: 32px;
    width: 100%;

    margin-top: 8px;

    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    text-overflow: ellipsis;
  }

  .price-container {
    .price {
        font-weight: bold;
        font-size: 16px;
    }
  }
  .action-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: $secondary;
    border-radius: 4px;
    margin: 8px 4px 0;
    padding: 8px;
  }
}
</style>
