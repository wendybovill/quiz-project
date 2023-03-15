/**
 * @jest-environment jsdom
 */

const {
    quiz
} = require("../quiz");

jest.spyOn(window, "alert").mockImplementation(() => {});

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("pre-game", () => {
    test("clicking buttons before newGame should fail", () => {
        quiz.lastButton = "";
        document.getElementById("choice2").click();
        expect(quiz.lastButton).toEqual("");
    });
});

