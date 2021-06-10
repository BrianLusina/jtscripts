import tankvol from './tanktruck';

describe("Tank Volume",function() {
    it("Basic Tests",function() {
        expect(tankvol(5, 7, 3848)).toEqual(2940)
        expect(tankvol(2, 7, 3848)).toEqual(907)
        expect(tankvol(2, 8, 5026)).toEqual(982)
        expect(tankvol(4, 9, 6361)).toEqual(2731)
        expect(tankvol(3, 10, 7853)).toEqual(1981)
        expect(tankvol(3, 5, 1963)).toEqual(1229)
        expect(tankvol(5, 7, 3848)).toEqual(2940)
        expect(tankvol(4, 7, 3848)).toEqual(2272)
        expect(tankvol(0, 7, 3848)).toEqual(0)
        expect(tankvol(7, 7, 3848)).toEqual(3848)
        
        expect(tankvol(2, 5, 1963)).toEqual(733)
        expect(tankvol(2, 4, 1256)).toEqual(628)
        expect(tankvol(4, 10, 7853)).toEqual(2933)
        expect(tankvol(3, 9, 6361)).toEqual(1856)
        expect(tankvol(2, 10, 7853)).toEqual(1118)
        expect(tankvol(5, 9, 6361)).toEqual(3629)
        expect(tankvol(5, 6, 2827)).toEqual(2517)
        expect(tankvol(1, 4, 1256)).toEqual(245)
    })
})
    
describe("Random tests",function() {
    
    function randint(a: number, b: number) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    
    function tankvolSol(h: number, d: number, vt: number) {
        if (h == 0) return 0;
        var r = d / 2.0;
        if (h === r) return Math.floor(vt / 2);
        if (h === d) return vt;
        if (h > r) {
            h = d - h;
            var hilevel = true;
        }
        else
            hilevel = false;
        var st = Math.PI * r * r;
        var theta = Math.acos((r - h) / r);
        var sr = (r - h) * Math.sqrt(r * r - (r - h) * (r - h));
        var sa = st / Math.PI * theta;
        var sh = sa - sr;
        var v = vt * sh / st;
        if (hilevel)
            v = vt - v;
        return Math.floor(v)
    }
    
    for (var i = 0; i < 100; i++){
        var h = randint(1, 5);
        var d = randint(h + 1, 10);
        var v = Math.floor(Math.PI * (d / 2.0) * (d / 2.0) * 100.0);
        it("Testing for volume (" +h.toString(10) + " " +d.toString(10) + " " +v.toString(10) + ")", function() {
            expect(tankvol(h, d, v)).toEqual(tankvolSol(h, d, v))
        })
    }
})