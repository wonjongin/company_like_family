export default function rm_footnote(line: string) {
  if (line.indexOf("<-") == -1) {
    return line;
  }
  let result = line.split("<-")[0];
  return result;
}
