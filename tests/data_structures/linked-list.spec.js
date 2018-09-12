var LinkedList = require('../../jssnips/data_structures/arrays/linked_list/linked-list');

test('LinkedList', function () {
  test('push/pop', function () {
    var list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBe(10);
  });

  test('push/shift', function () {
    var list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.shift()).toBe(10);
    expect(list.shift()).toBe(20);
  });
  
  test('unshift/shift', function () {
    var list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.shift()).toBe(20);
    expect(list.shift()).toBe(10);
  });
  test('unshift/pop', function () {
    var list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.pop()).toBe(10);
    expect(list.pop()).toBe(20);
  });
  
  test('example', function () {
    var list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    list.push(30);
    expect(list.shift()).toBe(10);
    list.unshift(40);
    list.push(50);
    expect(list.shift()).toBe(40);
    expect(list.pop()).toBe(50);
    expect(list.shift()).toBe(30);
  });
  test('can count its elements', function () {
    var list = new LinkedList();
    expect(list.count()).toBe(0);
    list.push(10);
    expect(list.count()).toBe(1);
    list.push(20);
    expect(list.count()).toBe(2);
  });
  test('deletes the last element from the list', function () {
    var list = new LinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.delete(20);
    expect(list.count()).toBe(2);
    expect(list.pop()).toBe(30);
    expect(list.shift()).toBe(10);
  });
  test('deletes the only element', function() {
    var list = new LinkedList();
    list.push(10);
    list.delete(10);

    expect(list.count()).toBe(0);
  });
});