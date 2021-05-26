var expect = require("expect");
import int32ToIp from './int32toipv4';

describe("Int32 To Ipv4 Tests", () => {
    it("test", () => {
        expect(int32ToIp(2154959208)).toEqual("128.114.17.104");
        expect(int32ToIp(0)).toEqual("0.0.0.0");
        expect(int32ToIp(2149583361)).toEqual("128.32.10.1");
    });
});