import { Utils } from "../app/Utils"

describe("Utils test suite", () => {
    test("first test", () => {
        const result = Utils.toUpperCase("abc")
        expect(result).toEqual("ABC")
    })
})
