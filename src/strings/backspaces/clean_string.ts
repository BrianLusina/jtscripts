export function cleanString(s: string): string {
    let q: string[] = [];
    
    for (let index = 0; index < s.length; index++) {
        if (s[index] != "#") {
            q.push(s[index]);
        } else if (q.length != 0) {
            q.pop();
        }
    }

    return q.join("");
}
