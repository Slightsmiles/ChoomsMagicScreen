export class Item {
  constructor(
    public id: string,
    public name: string,
    public icon: string,
    public quantity: number
  ) {}

  isStackable(): boolean {
    return this.quantity > 1;
  }
}