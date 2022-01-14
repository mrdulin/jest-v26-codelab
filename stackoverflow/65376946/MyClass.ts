export default class MyClass {
  static mainFunction(paramA: string, paramB: number): boolean {
    if (MyClass.fucntionA(paramA, paramB)) {
      return false;
    }

    if (!MyClass.fucntionB(paramA, paramB)) {
      return false;
    }

    if (MyClass.fucntionC(paramA, paramB)) {
      return false;
    }

    if (MyClass.fucntionD(paramA)) {
      return false;
    }

    return true;
  }

  private static fucntionA(a, b) {
    return true;
  }

  private static fucntionB(a, b) {
    return false;
  }

  private static fucntionC(a, b) {
    return true;
  }
  private static fucntionD(a) {
    return false;
  }
}
