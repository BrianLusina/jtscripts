export default function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }

    const mapping: Record<string, string> = {}

    for (let i = 0; i < s.length; i++) {
        if (mapping[s[i]]) {
            if (mapping[s[i]] !== t[i]) {
                return false
            }
        } else {
            if(Object.values(mapping).indexOf(t[i]) !== -1) {
                return false
            }
            mapping[s[i]] = t[i]
        }
    }

    return true
}
