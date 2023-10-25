import { defineStore } from "pinia";
import type { Product } from "src/components/models";


type ShoppingCartItem = {
    product: Product;
    quantity: number;
}


export const useShoppingCartStore = defineStore("shoppingCart", {
    state: () => ({
        items: [] as ShoppingCartItem[]
    }),
    getters: {
        contains: state => (productId: string) => state.items.some(item => item.product.ID === productId),
        productIndex: state => (productId: string) => {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].product.ID === productId) { return i; }
            }

            return -1;
        }
    },
    actions: {
        addItem(product: Product, quantity = 1) {
            if (! this.contains(product.ID)) {
                this.items.push({
                    product,
                    quantity
                });
            } else {
                const itemIndex = this.productIndex(product.ID);
                this.items[itemIndex].quantity += quantity;
            }
        },
        removeItem(product: Product, quantity = 1) {
            if (! this.contains(product.ID)) {
                throw new Error("item is not in cart, so it cannot be removed");
            }

            const itemIndex = this.productIndex(product.ID);

            if (quantity >= this.items[itemIndex].quantity) {
                this.deleteItem(itemIndex);
            } else {
                this.items[itemIndex].quantity -= quantity;
            }

        },
        deleteItem(itemIndex: number) {
            if (itemIndex >= this.items.length) {
                throw new Error("out of bounds");
            }

            this.items.splice(itemIndex, 1);
        }
    }
});
