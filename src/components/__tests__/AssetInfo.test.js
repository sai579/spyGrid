import React from "react";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import renderer from "react-test-renderer";
import AssetInfo from "../AssetInfo";

Enzyme.configure({ adapter: new Adapter() });

describe("AssetInfo", () => {

  const mockAssetInfo = {
    gender: "male",
    name: {
      title: "Mr",
      first: "Nimit",
      last: "Thampy",
    },
    location: {
      street: {
        number: 5825,
        name: "Maharanipeta",
      },
      city: "Berhampur",
      state: "Kerala",
      country: "India",
      postcode: 37657,
      coordinates: {
        latitude: "6.8955",
        longitude: "-148.3765",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "nimit.thampy@example.com",
    login: {
      uuid: "afa97284-e3a1-4702-a826-058e7958afb5",
      username: "blackkoala109",
      password: "kevin",
      salt: "4mQfCbi5",
      md5: "583f56c781f972cb37afaf74fec824c8",
      sha1: "b93ed83211c82579113b7e015e232f3cab966dee",
      sha256:
        "37b15d48caf0fb42e76227a7e94d0239c1a411f50db34c8f6bac45e338a119e1",
    },
    dob: {
      date: "1964-11-08T17:08:05.819Z",
      age: 58,
    },
    registered: {
      date: "2012-12-22T17:29:16.198Z",
      age: 10,
    },
    phone: "8535697308",
    cell: "8797083739",
    id: {
      name: "UIDAI",
      value: "628370717440",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
    },
    nat: "IN",
  };

  it("should render component", () => {
    let component;
    renderer.act(() => {
      component = renderer.create(<AssetInfo />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("should display asset info", () => {
    const renderedList = shallow(<AssetInfo currentAgent={mockAssetInfo} />);
    expect(renderedList.find('assetInfo').toBe(mockAssetInfo));
  });
});
