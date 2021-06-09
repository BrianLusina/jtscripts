import pofi from './powersofi';

describe('Basic Tests', function(){
    it('powers 0 through 10', function(){
      expect(pofi(0)).toEqual('1');
      expect(pofi(1)).toEqual('i');
      expect(pofi(2)).toEqual('-1');
      expect(pofi(3)).toEqual('-i');
      expect(pofi(4)).toEqual('1');
      expect(pofi(5)).toEqual('i');
      expect(pofi(6)).toEqual('-1');
      expect(pofi(7)).toEqual('-i');
      expect(pofi(8)).toEqual('1');
      expect(pofi(9)).toEqual('i');
      expect(pofi(10)).toEqual('-1');
    });
  });
  
  const solution = (n: number) => ['1', 'i', '-1', '-i'][n % 4];
  
  describe('Random Tests', function(){
    describe('Random numbers between 0 and 500',function(){
      for(let i = 0;i < 200; i++){
        var num = Math.floor(Math.random()*501);
        expect(pofi(num)).toEqual(solution(num));
      }
    });
  });