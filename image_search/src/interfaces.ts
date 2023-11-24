


export interface ContextValueType {
    ToggleDarkTheme:  () => void,
    DarkTheme: boolean,
    searchValue: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export interface TitleType {
    text: string
}