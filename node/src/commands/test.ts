import rm_footnote from "./footnote";

export function test_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re_test: RegExp = /^순형씨 (.+)(이|가) (.+)(이|가) 맞아\?$/;
  if (re_test.test(fline)) {
    const match = fline.match(re_test);
    if (match) {
      const var_name: string = match[1];
      const var_value: string = match[3];

      let jsCode = `
      if (${var_name} === ${var_value}) {console.log("네, ${var_name}은 ${var_value} 에요.");}
      else {console.log("아니오, ${var_name}은 ${var_value} 아니에요.");}
      `;
      return jsCode;
    }
  }
  return "";
}
