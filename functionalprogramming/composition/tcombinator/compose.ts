export default function compose (...args) {
    const argumentSize = args.length;
    
    if (argumentSize === 0) {
      return undefined;
    }
  
    const param = args[0];
  
    if (argumentSize === 1) {
      return param;
    }
    
    const functions = args.slice(1).reverse();
    
    const result = functions.reduce((accumulation, fn) => 
      (...funcs) => accumulation(fn(...funcs)), x => x);
   
    return result(param);
}