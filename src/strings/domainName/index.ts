export function extractDomainName(url: string): string | null {
    const pattern = /^(?<scheme>[a-z]+:\/\/)*(?<www>(www.)*)?(?<hostname>[a-z\d][a-z\d-]*)?(\.[a-z\d][a-z\d-]*(\/)*[\w]*(\/)*)+?$/gm
    const regex = new RegExp(pattern);
    const result = regex.exec(url);
    if(result) {
        return result.groups.hostname;
    }
    return null;
  }
  