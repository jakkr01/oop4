class BankAccount {
    ownerName: string;
    balance: number;

    constructor(ownerName: string, balance: number) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    displayBalance(): void {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }
}

let account1 = new BankAccount("Terl", 500);
account1.displayBalance();