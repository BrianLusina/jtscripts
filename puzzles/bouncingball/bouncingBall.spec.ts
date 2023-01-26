import bouncingBall from "./bouncingBall";

describe("BouncingBall", function() {
    it("Basic tests", function() {
      expect(bouncingBall(3.0, 0.66, 1.5)).toEqual(3);
      expect(bouncingBall(30.0, 0.66, 1.5),).toEqual( 15);
      expect(bouncingBall(30, 0.75, 1.5),).toEqual( 21);
      expect(bouncingBall(30, 0.4, 10)).toEqual(3);
    });
  });
  