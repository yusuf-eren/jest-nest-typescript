import { Utils } from "../app/Utils";

// describe.only() Runs only this test
// describe.skip() Skips this test
describe("Utils test suite", () => {
    // beforeEach runs every time before running any test
    beforeEach(() => {
        console.log("before each");
    });

    // beforeAll runs once. It runs at the start of the test
    beforeAll(() => {
        console.log("before All");
    });

    // we can use skip() and only() for "test" too
    test.skip("to upper case test", () => {
        const result = Utils.toUpperCase("abc");
        expect(result).toBe("ABC");
    });

    // test.only()
    test("parse simple URL", () => {
        const url = "http://localhost:3000/x%20y";
        const parsedUrl = Utils.parseUrl(url);
        expect(parsedUrl.port).toBe("3000");
        expect(parsedUrl.protocol).toBe("http:");
        expect(parsedUrl.query).toEqual({});
    });

    test("parse URL with query", () => {
        const url = "http://localhost:3000/login?user=yusuf&password=1234";
        const parsedUrl = Utils.parseUrl(url);
        const expectedQuery = {
            user: "yusuf",
            password: "1234",
        };
        expect(parsedUrl.query).toEqual(expectedQuery);
        expect(typeof parsedUrl.query.user).toBe("string");
    });

    // todo() marks this test as todo
    // so we can check this test later
    // and fix the problems
    test.todo("MARK AS TODO TEST");

    test("test invalid URL", () => {
        function expectError() {
            Utils.parseUrl("");
        }
        // if URL is invalid we are throwing
        // an error from Utils.ts
        expect(expectError).toThrowError("");
    });

    test("test invalid URL with arrow function", () => {
        expect(() => {
            Utils.parseUrl("");
        }).toThrow("Empty URL!");
    });

    test.only("test invalid URL with try catch", () => {
        try {
            Utils.parseUrl("");
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err).toHaveProperty("message", "Empty URL!");
        }
    });
});
