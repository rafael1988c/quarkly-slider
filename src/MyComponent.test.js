import Component from "./MyComponent";

const controlTypes = [
  "input",
  "select",
  "color",
  "font",
  "shadow",
  "transition",
  "transform",
  "filter",
  "background",
  "checkbox-icon",
  "radio-icon",
  "radio-group",
  "checkbox",
  "image"
];

// main test for integration to quarkly
describe("test atomize integration", () => {
  it("prop info", () => {
    expect(Component.propInfo).toBeDefined();
  });
  it("component description", () => {
    expect(Component.description).toBeDefined();
  });
  describe("propinfo assets", () => {
    Object.entries(Component.propInfo).forEach(([infoName, info]) => {
      describe(`propInfo: ${infoName}`, () => {
        it("control", () => {
          const { control = "input" } = info;
          expect(controlTypes.includes(control)).toBeTruthy();
        });
        it("description", () => {
          const { description } = info;
          expect(description).toBeDefined();
          expect(description.en).toBeDefined();
        });
      });
    });
  });
});
