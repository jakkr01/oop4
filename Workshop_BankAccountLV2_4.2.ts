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

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposit $${amount} successful.`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdraw $${amount} successful.`);
        }
    }
}

let account2 = new BankAccount("Terl", 500);

account2.displayBalance();
account2.deposit(200);
account2.displayBalance();

account2.withdraw(1000);
account2.displayBalance();