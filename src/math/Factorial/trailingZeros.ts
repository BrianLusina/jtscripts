export default function zeros (n: number): number {
    let count=0;
     while(n>=5){
         n=Math.floor(n/5)
         count+=n
     }
     return count
  }
  