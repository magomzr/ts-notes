import formatDate, { anotherWayOfFormatDate } from ".";

describe("formatDate", () => {
  it("should return a string", () => {
    const date = new Date();
    const formatter = anotherWayOfFormatDate();

    expect(typeof formatDate(date)).toBe("string"); // 2025-02-18T19:31:11.051Z
    expect(typeof formatter(date)).toBe("string"); // 2025-02-18T19:31:11.051Z
    expect(typeof formatDate.toShort(date)).toBe("string"); // 2/18/2025
    expect(typeof formatter.toShort(date)).toBe("string"); // 2/18/2025
    expect(typeof formatDate.toTime(date)).toBe("string"); // 2:31:11 PM
    expect(typeof formatter.toTime(date)).toBe("string"); // 2:31:11 PM
    expect(
      typeof formatDate.customFormat(date, { weekday: "long", year: "numeric" })
    ).toBe("string"); // 2025 Tuesday
    expect(
      typeof formatter.customFormat(date, { weekday: "long", year: "numeric" })
    ).toBe("string"); // 2025 Tuesday
  });
});
