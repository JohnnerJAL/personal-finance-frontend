export interface Transaction {
    id: number,
    categoryId: number,
    title: string,
    description: string,
    total: number,
    totalAvailable: number
    createdOn: Date,
    icon: string,
    color: string
}

export interface TransactionDTO extends Omit<Transaction, 'id'> {}