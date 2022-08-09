export default function int32ToIp(int32) {
  return `${int32 >>> 24}.${(int32 >> 16) & 0xff}.${(int32 >> 8) & 0xff}.${int32 & 0xff}`;
}
