export default class ShortUrlCodec {
  private codeDb: Map<string, string>;
  private urlDb: Map<string, string>;
  private chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  constructor() {
    this.codeDb = new Map();
    this.urlDb = new Map<string, string>();
  }

  private getCode(): string {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const code = new Array(6).fill(0).map((_) => this.chars.charAt(~~Math.random() * 62));
    return `http://tinyurl.com/${code.join('')}`;
  }

  /**
   * Encodes a URL to a shortened URL.
   */
  encode(longUrl: string): string {
    if (this.urlDb.has(longUrl)) {
      const code = this.urlDb.get(longUrl);
      if (code) {
        return code;
      }
    }

    const code = this.getCode();

    this.codeDb.set(code, longUrl);
    this.urlDb.set(longUrl, code);
    return code;
  }

  /**
   * Decodes a shortened URL to its original URL.
   */
  decode(shortUrl: string): string {
    const longUrl = this.codeDb.get(shortUrl);
    if (!longUrl) {
      throw new Error(`ShortURL: ${shortUrl} does not exist`);
    }
    return longUrl;
  }
}
