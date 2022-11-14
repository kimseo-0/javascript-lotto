const MyLotto = require("../src/MyLotto");

describe("마이 로또 클래스 테스트", () => {
    test("로또 구입 금액이 1000원 단위가 아닌 경우 예외 발생", () => {
        expect(() => {
            new MyLotto(1100);
        }).toThrow("[ERROR] 로또 구입 금액은 1000원 단위로 입력 가능합니다.");
    });

});
