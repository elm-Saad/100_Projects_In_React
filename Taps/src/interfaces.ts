


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
}