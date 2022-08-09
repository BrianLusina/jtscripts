export function validIPAddressRegex(ip: string): string {
  const chunkIpv4 = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
  const patternIpv4 = '^(' + chunkIpv4 + '.){3}' + chunkIpv4 + '$';
  const patternIpv4Regex = new RegExp(patternIpv4, 'i');

  const chunkIpv6 = '([0-9a-fA-F]{1,4})';
  const patternIpv6 = '^(' + chunkIpv6 + ':){7}' + chunkIpv6 + '$';
  const patternIpv6Regex = new RegExp(patternIpv6, 'i');

  if (ip.match(patternIpv4Regex)) {
    return 'IPv4';
  }
  return ip.match(patternIpv6Regex) ? 'IPv6' : 'Neither';
}

export function validateIpv4(ip: string): string {
  const nums = ip.split('.');

  for (let idx = 0; idx < nums.length; idx++) {
    const chunk = nums[idx];

    if (chunk.length === 0 || chunk.length > 3) {
      return 'Neither';
    }

    if (
      (chunk[0] === '0' && chunk.length !== 1) ||
      Number(chunk) > 255 ||
      !Number.isNaN(parseInt(chunk))
    ) {
      return 'Neither';
    }
  }
  return 'IPv4';
}

export function validateIpv6(ip: string): string {
  const nums = ip.split(':');

  const hexdigits = '0123456789abcdefABCDEF';

  const isHexdigit = (value: string) => hexdigits.includes(value);

  for (let idx = 0; idx < nums.length; idx++) {
    const chunk = nums[idx];

    if (chunk.length === 0 || chunk.length > 4 || !chunk.split('').every(isHexdigit)) {
      return 'Neither';
    }
  }

  return 'IPv6';
}

/**
 * Validates an IP address as either IPv4 or IPv6 or returns Neither if the IP is invalid. This splits up the string
 * using either . or : and validates the chunks. an IP is only valid if each chunk is valid.
 * Space Complexity is O(1)
 * Time Complexity is O(n) because to count the number of dots requires parsing the whole input string
 * @param ip
 */
export function validIPAddressRegexDivConquer(ip: string): string {
  if (ip.match(/\./)?.length === 3) {
    return validateIpv4(ip);
  } else if (ip.match(/:/)?.length === 7) {
    return validateIpv6(ip);
  } else {
    return 'Neither';
  }
}
