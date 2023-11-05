
export interface DataType{
    id: number
    title: string
    category: string
    price: number
    img: string
    desc: string
}

export interface MenuProps {
    data: DataType[]
}

export interface NavigationProps {
    categories: string[]
    FilterCategory: (category: string) => void;

}
  