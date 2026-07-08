class Computer {
    brand: string;
    cpu: string;
    ram: number;
    price: number;

    constructor(b: string, c: string, r: number, p: number) {
        this.brand = b;
        this.cpu = c;
        this.ram = r;
        this.price = p;
    }

    show(): void {
        console.log(
            "computer brand:", this.brand,
            "cpu:", this.cpu,
            "ram:", this.ram,
            "price:", this.price, "บาท"
        );
    }
}

const computer1 = new Computer("Dell", "Intel", 64, 24500);
const computer2 = new Computer("HP", "AMD", 32, 18000);

computer1.show();
computer2.show();