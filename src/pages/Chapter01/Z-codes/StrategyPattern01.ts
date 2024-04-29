interface DiscountStrategy {
  applyDiscount(orderTotal: number): number;
}

class NoDiscount implements DiscountStrategy {
  applyDiscount(orderTotal: number): number {
    return orderTotal;
  }
}

class PercentageDiscount implements DiscountStrategy {
  private percentage: number = 0.1; // 10% 折扣
  applyDiscount(orderTotal: number): number {
    return orderTotal * (1 - this.percentage);
  }
}

class FixedDiscount implements DiscountStrategy {
  private discount: number = 20; // 固定 20 元折扣
  applyDiscount(orderTotal: number): number {
    return orderTotal - this.discount;
  }
}

class OrderContext {
  private strategy: DiscountStrategy;

  constructor(strategy: DiscountStrategy) {
    this.strategy = strategy;
  }

  finalizeOrder(orderTotal: number): number {
    return this.strategy.applyDiscount(orderTotal);
  }
}

// 使用策略
let orderTotal = 100;
let context = new OrderContext(new PercentageDiscount());
let finalPrice = context.finalizeOrder(orderTotal);
console.log(`Final price: ${finalPrice}`);

context = new OrderContext(new FixedDiscount());
finalPrice = context.finalizeOrder(orderTotal);
console.log(`Final price: ${finalPrice}`);

context = new OrderContext(new NoDiscount());
finalPrice = context.finalizeOrder(orderTotal);
console.log(`Final price: ${finalPrice}`);
