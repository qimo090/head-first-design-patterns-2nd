// ---------- Strategy
// 策略接口
interface Strategy {
  doOperation(num1: number, num2: number): number;
}

// ---------- ConcreteStrategy
// 具体策略：加法
class OperationAdd implements Strategy {
  doOperation(num1: number, num2: number): number {
    return num1 + num2;
  }
}

// 具体策略：減法
class OperationSubtract implements Strategy {
  doOperation(num1: number, num2: number): number {
    return num1 - num2;
  }
}

// ---------- Context
class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public executeStrategy(num1: number, num2: number): number {
    return this.strategy.doOperation(num1, num2);
  }
}

// ---------- Example ----------
const context1 = new Context(new OperationAdd());
console.log('10 + 5 =', context1.executeStrategy(10, 5));
context1.setStrategy(new OperationSubtract());
console.log('10 - 5 =', context1.executeStrategy(10, 5));

const context2 = new Context(new OperationSubtract());
console.log('10 - 5 =', context2.executeStrategy(10, 5));
