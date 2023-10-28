export interface Transaction {
    id: number,
    title: string,
    description: string,
    total: number,
    totalAvailable: number
    createdOn: Date,
    icon: string,
    color: string
}