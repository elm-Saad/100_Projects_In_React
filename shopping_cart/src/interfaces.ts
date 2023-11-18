

export interface CartItemsType {
    id: string;
    title: string;
    price: string;
    img: string;
    amount: number;
}

export interface ContextValueType {
    loading: boolean
    cart: []
}