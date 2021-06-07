import Event from './simpleevents';

function Stub() {
    return function _stub() {
        // @ts-ignore
        _stub.args = Array.prototype.slice.call(arguments);
        // @ts-ignore
        _stub.calls = (_stub.calls || 0) + 1;
    }
}

describe('Simple Event test cases', function() {
    it ('an Event constructor function should be defined', function () {
        expect(typeof Event).toEqual('function');
    });

    var e = new Event(),
        // @ts-ignore
        f1 = new Stub(),
        // @ts-ignore
        f2 = new Stub(),
        // @ts-ignore
        f3 = new Stub();

    it('an event object object should have .subscribe, .unsubscribe and .emit methods', function () {
        expect(typeof e.subscribe).toEqual('function');
        expect(typeof e.unsubscribe).toEqual('function');
        expect(typeof e.emit).toEqual('function');
    });

    it('an event object should emit values to subscribed handlers', function () {
        e.subscribe(f1);
        e.subscribe(f2);
        
        e.emit(1, 2, 3, 'first', undefined, false);
        
        expect(f1.calls).toEqual(1)
        expect(f2.calls).toEqual(1);
        expect(f1.args).toEqual([1, 2, 3, 'first', undefined, false])
        expect(f2.args).toEqual([1, 2, 3, 'first', undefined, false]);
    });

    it('an event object should not emit values to unsubscribed handlers', function () {
        e.subscribe(f3);
        e.unsubscribe(f2);
        
        e.emit(2, 'second', true);
        expect(f1.calls).toEqual(2);
        expect(f2.calls).toEqual(1);
        expect(f3.calls).toEqual(1);
        
        e.subscribe(f2);
        e.emit(3, 'third');
        
        expect(f2.calls).toEqual(2);
    });

});