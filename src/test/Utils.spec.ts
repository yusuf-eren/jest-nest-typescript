import { Utils } from "../app/Utils"

describe("Utils test suite", () => {
    // beforeEach runs every time before running any test
    beforeEach(() => {
        console.log("before each")
    })

    // beforeAll runs once. It runs at the start of the test
    beforeAll(() => {
        console.log("before All")
    })

    test("to upper case test", () => {
        const result = Utils.toUpperCase("abc")
        expect(result).toBe("ABC")
    })

    test("parse simple URL", () => {
        const url = "http://localhost:3000/x%20y"
        const parsedUrl = Utils.parseUrl(url)
        expect(parsedUrl.port).toBe("3000")
        expect(parsedUrl.protocol).toBe("http:")
        expect(parsedUrl.query).toEqual({})
    })

    test("parse URL with query", () => {
        const url = "http://localhost:3000/login?user=yusuf&password=1234"
        const parsedUrl = Utils.parseUrl(url)
        const expectedQuery = {
            user: "yusuf",
            password: "1234",
        }
        expect(parsedUrl.query).toEqual(expectedQuery)
        expect(typeof parsedUrl.query.user).toBe("string")
    })
})
