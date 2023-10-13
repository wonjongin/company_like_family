import rm_footnote from "./footnote";

export function main_start_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re_var: RegExp = /^순형 입사\^\^$/;
  if (re_var.test(fline)) {
    return `
    'use strict';
    (async () => {`;
  }
  return "";
}
export function main_end_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re_var: RegExp = /^퇴사\^\^$/;
  if (re_var.test(fline)) {
    return `})();`;
  }
  return "";
}
