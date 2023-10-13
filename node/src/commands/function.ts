import { command_appender } from ".";
import rm_footnote from "./footnote";

export function func_use_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^순형씨 (.+랑|.+이랑)+ (.+)해줘\^\^$/;
  if (re.test(fline)) {
    const match = fline.match(re);
    if (match) {
      const param_string: string = match[1]
        .replace(/(랑|이랑)/g, ",")
        .replace(/,*$/, "");
      //   const params = param_string.split(",");
      const func_name: string = match[2];

      let jsCode = `${func_name}(${param_string});`;
      return jsCode;
    }
  }
  return "";
}

export function func_return_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^순형씨 (.+) 보고해줘\^\^$/;
  if (re.test(fline)) {
    const match = fline.match(re);
    if (match) {
      const value: string = match[1];
      let jsCode = `return ${value};`;
      return jsCode;
    }
  }
  return "";
}

export function func_end_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re: RegExp = /^퇴근\^\^$/;
  if (re.test(fline)) {
    const match = fline.match(re);
    if (match) {
      const value: string = match[1];
      let jsCode = `};`;
      return jsCode;
    }
  }
  return "";
}

export function func_create_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re_start: RegExp = /^순형씨 (.+)+ 챙기고 (.+)하러 출근\^\^$/;
  if (re_start.test(fline)) {
    const match = fline.match(re_start);
    if (match) {
      const param_string: string = match[1];
      const func_name: string = match[2];
      let jsCode = `const ${func_name} = (${param_string}) => {`;
      return jsCode;
    }
  }
  return "";
}
