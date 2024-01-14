export interface Transaction {
    id: number,
    categoryId: number,
    title: string,
    description: string,
    total: number,
    totalAvailable: number,
    createdOn: Date,
    icon: string,
    color: string,
}

export type TransactionDTO = Omit<Transaction, 'id'>


//


export interface GroupedTransactions {
    transactionsGroupedByMonthAndDay: Array<TransactionsByMonth>;
}

export interface TransactionsByMonth {
    month:             string;
    year:              number;
    dailyTransactions: Array<TransactionsByDay>;
}

export interface TransactionsByDay {
    date:         string;
    transactions: Array<Transaction2>;
}

export interface Transaction2 {
    id:                  number;
    totalAvailable:      number;
    createdOn:           Date;
    transactionTemplate: TransactionTemplate;
}

export interface TransactionTemplate {
    id:          number;
    title:       string;
    description: string;
    total:       number;
    accountId:   number;
    categoryId:  number;
    type:        string;
    icon:       string;
    color:     string;
}