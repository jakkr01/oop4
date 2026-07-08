class House {
    constructor(
        public name: string,
        public room: number,
        public bathroom: number,
        public area: number,
        public price: number,
        public bedroom: number
    ) {}

    show(): void {
        console.log(
            `แบบบ้าน: ${this.name}, ห้องนอน: ${this.bedroom}, ห้องน้ำ: ${this.bathroom}, พื้นที่: ${this.area} ตร.ม., ราคา: ${this.price} บาท`
        );
    }
    adjustPrice(newPrice: number)
    {
        this.price = newPrice;
    }
}

let house1 = new House("ขวัญทิพย์", 4, 3, 150, 2500000, 3);
house1.show();
house1.adjustPrice(3000000);
house1.show();