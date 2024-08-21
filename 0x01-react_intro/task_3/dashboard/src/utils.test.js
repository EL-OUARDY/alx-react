import { getLatestNotification, getFullYear, getFooterCopy } from "./utils";

describe("Test Utils.js", () => {
  it("getFullYear function", (done) => {
    expect(getFullYear()).toBe(new Date().getFullYear());
    done();
  });

  it("getFooterCopy function", (done) => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    done();
  });

  it("getLatestNotification function", (done) => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
    done();
  });
});
