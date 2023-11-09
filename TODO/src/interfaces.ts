

export interface ItemsType {
    id: string,
    name: string,
    completed: boolean
}

export interface TextType {
    text: string
}

export interface FormItemType {
    addItem: (inputValue: string) => void
}

export interface AllItems {
    removeItem : (itemId: string) => void ,
    editItem: (itemId: string) => void ,
    allItems: ItemsType[]
}

export interface SingleItemType {
    removeItem : (itemId: string) => void ,
    editItem: (itemId: string) => void ,
    singleItem: ItemsType

}