import rm_footnote from "./footnote";

export function condition_if_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^순형씨 (.+) 가능해\?/;
  if (re.test(fline)) {
    const match = fline.match(re);
    if (match) {
      const condition: string = match[1];
      let jsCode = `if (${condition}){`;
      return jsCode;
    }
  }
  return "";
}

export function condition_elseif_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^안되면 (.+) 가능해\?$/;
  if (re.test(fline)) {
    const match = fline.match(re);
    if (match) {
      const condition: string = match[1];
      let jsCode = `} else if (${condition}){`;
      return jsCode;
    }
  }
  return "";
}

export function condition_else_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^안되면 정말 안되면$/;
  if (re.test(fline)) {
    const match = fline.match(re);
    if (match) {
      let jsCode = `} else {`;
      return jsCode;
    }
  }
  return "";
}

export function condition_end_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^진짜 부탁이야 알겠지\?\^\^$/;
  if (re.test(fline)) {
    let jsCode = `}`;
    return jsCode;
  }
  return "";
}
