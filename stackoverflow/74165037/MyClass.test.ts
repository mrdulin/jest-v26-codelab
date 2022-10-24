import MyClass from "./MyClass";
import Dependency from "./Dependency";

it("connects with the server for match info messages", () => {
    // Arrange
    const dependency = new Dependency();
    const sut = new MyClass(dependency);
    jest.spyOn(dependency, "MyProp", "get").mockReturnValueOnce("Another string"); // Error: MyProp property does not exist

    // Act
    const retval = sut.DoIt();

    // Assert
    expect(retval).toStrictEqual("Another string");
});