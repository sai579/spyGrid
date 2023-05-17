import renderer from "react-test-renderer";
import axios from "axios";
import AssetDisplay from "../AssetDisplay";

jest.mock("axios");

describe("AssetDisplay", () => {
  it("should render component", () => {
    let component;
    renderer.act(() => {
      component = renderer.create(<AssetDisplay />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
