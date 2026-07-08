class Bank {
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

// Test
let account1 = new BankAccount("Terl", 500);

account1.displayBalance();
account1.deposit(200);
account1.displayBalance();

account1.withdraw(1000); // เงินไม่พอ
account1.displayBalance();