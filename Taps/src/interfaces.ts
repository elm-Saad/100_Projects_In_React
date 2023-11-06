


export interface DataType {
    id: string
    order: number
    title: string
    dates: string
    duties: string[]
    company: string
}

export interface SingleJobType {
    jobs: DataType[] | null
    currentItem: number
}
export interface DutiesComponentProps {
    duties: string[];
}
export interface ButtonType {
    jobs: DataType[] | null
    currentItem: number
    changeJob: (id: number) => void
}