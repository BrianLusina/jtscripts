import { assert } from "chai";
import { cleanString } from "./clean_string";

function testcase() {
  const abc = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890   ',
    r = () => abc[Math.floor(Math.random() * abc.length)]
  let str = r()
  while (Math.random() < 0.9 && str.length < 15) {
    str += Math.random() > 0.4 ? r() : '#'
  }
  return str
}
function answer(s: string) {
  const re = /[^#]?#/
  while (s.includes('#')) {
    s = s.replace(re, '')
  }
  return s
}

describe("Tests", function() {
  it("Fixed", function() {
    assert.equal(cleanString('abjd####jfk#'), "jf" )
    assert.equal(cleanString('gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##'), "gdasda")
    assert.equal(cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'), "6+yqw8hfklsd-=-f")
    assert.equal(cleanString('######831###dhkj####jd#dsfsdnjkf###d####dasns'), "jdsfdasns")
    assert.equal(cleanString(''), "")
    assert.equal(cleanString('#######'), "")
    assert.equal(cleanString('####gfdsgf##hhs#dg####fjhsd###dbs########afns#######sdanfl##db#####s#a'), "sa")
    assert.equal(cleanString('#hskjdf#gd'), "hskjdgd")
    assert.equal(cleanString('hsk48hjjdfgd'), "hsk48hjjdfgd")
    assert.equal(cleanString('fjnwui#NI#(*N#ION#Onfjen################Io4f'), "Io4f")
    assert.equal(cleanString('####6d87hbaskjdnf###$$%W#$@#$2332fr#f'), "6d87hbaskj$$%$$2332ff")
    assert.equal(cleanString('#9#9#9#9o#9#9#9#Oooooo#OOOooO#OO######'), "9OooooO")
    assert.equal(cleanString('0###0###0'), "0")
    assert.equal(cleanString('904rfn#jlkcn#####Djva2###*(#fsdgfd####fsdg###09849###mfenf##dnjn##kmfd;l#mg03###'), "904rfDj*fsf09mfednkmfd;m") 
  });
  
  it("Random", function() {
    for (let i = 0; i < 100; i++) {
      let q = testcase()
      let a = answer(q)
      assert.equal(cleanString(q), a, "'" + q + "'")
    }
  });
});