const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 아닐 경우 예외 처리", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외 처리", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복이 없어야 합니다.");
  });

  test("로또 번호가 자연수가 아닌경우 예외 처리", () => {
    expect(() => {
      new Lotto([1, 2.1, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 자연수여야 합니다.");
  });

  test("로또 번호가 1부터 45사이의 수가 아닌경우 예외 처리 1", () => {
    expect(() => {
      new Lotto([1, -1, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 수여야 합니다.");
  });

  test("로또 번호가 1부터 45사이의 수가 아닌경우 예외 처리 2", () => {
    expect(() => {
      new Lotto([1, 50, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 수여야 합니다.");
  });
});
