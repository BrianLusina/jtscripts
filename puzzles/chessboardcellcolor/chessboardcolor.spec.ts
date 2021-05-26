import { assert } from "chai";
import { chessBoardCellColor } from "./chessboardcellcolor";

describe("Basic Tests", function(){
  it("It should works for basic tests.", function(){  
    assert.equal(chessBoardCellColor("A1","C3"),true)    
    assert.equal(chessBoardCellColor("A1","H3"),false)    
    assert.equal(chessBoardCellColor("A1","A2"),false)
  })  
})
let failed=0
function rand(from: number,to: number){
  return Math.floor((to-from+1)*Math.random()+from)
}

function rndtest(){
  return [String.fromCharCode(rand(65,72))+String(rand(1,8)),String.fromCharCode(rand(65,72))+String(rand(1,8))]
}

function answer(cell1: string, cell2: string) {
  const f = (c: string) => (c[0].charCodeAt(0) + parseInt(c[1])) & 1
  return f(cell1) === f(cell2)
}

describe("100 Random Tests --- Testing for correctness of solution", function(){
  it("It should works for random tests.", function(){
    for(var iii=0;iii<100;iii++){
      let [ddd,eee]=rndtest()

      let ans=answer(ddd,eee)

      let useran=chessBoardCellColor(ddd,eee)
      if(JSON.stringify(useran)!=JSON.stringify(ans)) {
        failed++  
      }
      assert.equal(useran, ans, `cell1: ${ddd}, cell2: ${eee}`)
    }
  });
  
});

if(!failed){
describe("Happy coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});
}