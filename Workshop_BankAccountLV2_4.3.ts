class BankAccount2 {
    ownerName: string;
    balance: number;

    constructor(ownerName: string, balance: number) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    displayBalance(): void {
        console.log(`ชื่อบัญชี: ${this.ownerName}, ยอดเงินคงเหลือ: ${this.balance} บาท`);
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`ฝากเงิน ${amount} บาท สำเร็จ`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("ยอดเงินคงเหลือไม่เพียงพอ");
        } else {
            this.balance -= amount;
            console.log(`ถอนเงิน ${amount} บาท สำเร็จ`);
        }
    }
}

let account2 = new BankAccount2("Terl", 500);

account2.displayBalance();
account2.deposit(200);
account2.displayBalance();

account2.withdraw(1000);
account2.displayBalance();