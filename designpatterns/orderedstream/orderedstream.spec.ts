import OrderedStream from "./OrderedStream";
import OrderedStreamJs from "./ordered_stream";

describe("OrderedStream Tests", () => {
    describe("with n =5", () => {
        const n = 5
        const orderedStream = new OrderedStream(n);

        it("insert 3 & ccccc", () => {
            const actual = orderedStream.insert(3, "ccccc");
            expect(actual).toEqual([]);
        })

        it("insert 1 & aaaaa", () => {
            const actual = orderedStream.insert(1, "aaaaa");
            expect(actual).toEqual(["aaaaa"]);
        })

        it("insert 2 & bbbbb", () => {
            const actual = orderedStream.insert(2, "bbbbb");
            expect(actual).toEqual(["bbbbb", "ccccc"]);
        })

        it("insert 5 & eeeee", () => {
            const actual = orderedStream.insert(5, "eeeee");
            expect(actual).toEqual([]);
        })

        it("insert 4 & ddddd", () => {
            const actual = orderedStream.insert(4, "ddddd");
            expect(actual).toEqual(["ddddd", "eeeee"]);
        })
    })
})

describe("OrderedStreamJs Tests", () => {
    describe("with n =5", () => {
        const n = 5
        const orderedStream = new OrderedStreamJs(n);

        it("insert 3 & ccccc", () => {
            const actual = orderedStream.insert(3, "ccccc");
            expect(actual).toEqual([]);
        })

        it("insert 1 & aaaaa", () => {
            const actual = orderedStream.insert(1, "aaaaa");
            expect(actual).toEqual(["aaaaa"]);
        })

        it("insert 2 & bbbbb", () => {
            const actual = orderedStream.insert(2, "bbbbb");
            expect(actual).toEqual(["bbbbb", "ccccc"]);
        })

        it("insert 5 & eeeee", () => {
            const actual = orderedStream.insert(5, "eeeee");
            expect(actual).toEqual([]);
        })

        it("insert 4 & ddddd", () => {
            const actual = orderedStream.insert(4, "ddddd");
            expect(actual).toEqual(["ddddd", "eeeee"]);
        })
    })
})