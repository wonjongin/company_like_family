import rm_footnote from "./footnote";

export function loop_create_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^순형씨 이거 (\d+)번 부탁해\^\^$/;
  if (re.test(fline)) {
    const match = fline.match(re);
    if (match) {
      const times: number = +match[1];
      let jsCode = `for (let i = 0; i < ${times}; i++){`;
      return jsCode;
    }
  }
  return "";
}

export function loop_end_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^할수있지\?\^\^$/;
  if (re.test(fline)) {
    let jsCode = `}`;
    return jsCode;
  }
  return "";
}
