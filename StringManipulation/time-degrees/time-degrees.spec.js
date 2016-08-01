var TimeDegrees = require("./time-degrees")

describe("Time Degrees Test suite", function(){
    var timeDegree = TimeDegrees();
    it("1 minute passed 1 am",function(){
    expect(timeDegree.clockDegree("01:01")).toEqual("30:6");
  });

  it("12 midnight",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("00:00")).toEqual("360:360");
  });

  it("3 minutes passed 1am",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("01:03")).toEqual("30:18");
  });

  it("30 minutes passed 1am",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("01:30")).toEqual("30:180");
  });

  it("5 minutes passed 12noon",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("12:05")).toEqual("360:30");
  });

  it("invalid time",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("26:78")).toEqual("Check your time !");
  });

  it("invalid time",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("26:60")).toEqual("Check your time !");
  });

  it("invalid time",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("24:60")).toEqual("Check your time !");
  });

  it("25 minutes passed 4 pm",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("16:25")).toEqual("120:150");
  });

  it("9 minutes passed 5 pm",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("16:25")).toEqual("150:54");
  });

  it("7pm",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("19:00")).toEqual("210:360");
  });

  it("34 minutes passed 8pm",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("20:34")).toEqual("240:204");
  });

  it("20 minutes passed 11pm",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("23:20")).toEqual("330:120");
  });

  it("Invalid time",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("24:00")).toEqual("Check your time !");
  });

  it("Invalid time, negative time",function(){
    var timeDegree = TimeDegrees();
    expect(timeDegree.clockDegree("-9:00")).toEqual("Check your time !");
  });

});
