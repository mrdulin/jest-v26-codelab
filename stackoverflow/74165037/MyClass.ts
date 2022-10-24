import Dependency from "./Dependency";

export default class MyClass {
    public constructor(private dependency: Dependency) {}

    public DoIt(): string {
        return this.dependency.MyProp;
    }
}
