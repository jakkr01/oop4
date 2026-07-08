class BankAccount {
    ownername: string;
    balance: number;
    deposit: number;
    withdraw: number;

    constructor(o: string, b: number, d: number, w: number) {
        this.ownername = o;
        this.balance = b;
        this.deposit = d;
        this.withdraw = w;
    }

    show(): void {
        console.log(
            `BankAccount ownername: ${this.ownername}, balance: ${this.balance}, deposit: ${this.deposit}, withdraw: ${this.withdraw}`
        );
    }

    chgdeposit(newdeposit: number): void {
        this.deposit = newdeposit;
        this.balance += newdeposit;
        console.log("deposit change to:", this.deposit);
    }

    chgwithdrw(newwithdraw: number): void {
        if (newwithdraw > this.balance) {
            console.log("You don't have enough money");
        } else {
            this.withdraw = newwithdraw;
            this.balance -= newwithdraw;
            console.log("withdraw change to:", this.withdraw);
            console.log("succeed");
        }
    }
}

let bank1 = new BankAccount("Terl", 10, 200, 0);

bank1.show();
bank1.chgdeposit(1000);
bank1.chgwithdrw(800);
bank1.show();