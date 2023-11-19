

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
    ClearAllCardItems: ()=> void
    RemoveSingleCardItem: (id: string) => void
    AddCardItem: (id: string) => void
    RemoveCardItem: (id: string) => void
    TotalAmount: number
    TotalPrice: number
}