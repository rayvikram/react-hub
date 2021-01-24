import { act } from "@testing-library/react";

const mock = {
  get: jest.fn(() => {
    return {
      then: (callback) => act(() => callback({ data: "hu" })),
    };
  }),
};

export default mock;
