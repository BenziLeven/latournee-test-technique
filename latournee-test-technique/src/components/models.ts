export interface Category {
    ID:string;
    Nom: string;
    Couleur: string;
    Description:string;
    Image: string;
    NavbarVisible: boolean;
    "Sous-categories": SubCategory[];
}

export interface SubCategory {
    ID: string;
    Description: string;
    Image: string;
    Nom: string;
    Produits: Product[]
}

export interface Product {
    ID: string; // unique ID
    "Sku unité": string; // human-friendly identifier
    "B2C - Prix TTC": number; // purchase price in euros for the given number of units that the product is packaged
    Consigne: number; // total deposit amount in euros for the number of units (e.g. 6 large bottles)
    "Unité prix B2C": number; // comparable price information: price in euros for one unit of product
    "Unité de vente": string; // unit for the comparable price information (e.g. liter)
    Marque: string; // brand for the product
    Description: string;
    "Ingrédients": string; // unstructured list of ingredients
    Metafield: string; // meta description for the quantity being sold
    "Nom du produit": string;
    "Provenance / Producteur": string;
    Image: string;
    "Nombre unités": number; // number of units that the product is packaged
    "IsInStock": boolean; // do we have stock to sell?
    "IsAntigaspi": boolean // is this a product with a short expiration date?
}
