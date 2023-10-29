export interface Category {
    id: number
    name: string
    isActive: boolean
    accountId: number
    description?: string
    icon?: string
    color?: string
}

export interface CategoryDTO extends Omit<Category, 'id'> {}