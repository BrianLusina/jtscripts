function convertHTML(str) {
  const charHTMLlist = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  function charMapper(char) {
    return charHTMLlist[char];
  }
  return str.replace(/&|<|>|"|'/gi, charMapper);
}
