// Make the Enzyme functions available in all test files without  importing
import { shallow, mount, render, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

global.render = render;
global.shallow = shallow;
global.mount = mount;

const mockConsoleMethod = (realConsoleMethod) => {
  const ignoredMessages = [
    "test was not wrapped in act(...)",
    "has been renamed, and is not recommended ",
  ];

  return (message, ...args) => {
    const containsIgnoredMessage = ignoredMessages.some((ignoredMessage) =>
      message.includes(ignoredMessage),
    );

    if (!containsIgnoredMessage) {
      realConsoleMethod(message, ...args);
    }
  };
};

console.warn = jest.fn(mockConsoleMethod(console.warn));
console.error = jest.fn(mockConsoleMethod(console.error));
