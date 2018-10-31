import getMeal from "../src/meal";

describe("meal tests", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should print dinner", () => {
    expect(getMeal()).toBe(
      "Good evening. Dinner is green beans and rice. Yum!"
    );
  });

  it("should print breakfast (mocked)", () => {
    jest.doMock("../src/food", () => ({
      type: "breakfast",
      veg: "avocado",
      carbs: "toast"
    }));
    console.log(require("../src/food"));
    expect(getMeal()).toBe("Good morning. Dinner is avocado and toast. Yum!");
  });
});
