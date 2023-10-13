import rm_footnote from "./footnote";

export function input_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re_var: RegExp = /^순형씨 사수에게 (.+)(이|가) 뭐냐고 질문해줘\^\^$/;
  if (re_var.test(fline)) {
    const match = fline.match(re_var);
    if (match) {
      const var_name = match[1];

      let jsCode = `
      const readlineSync = require('readline-sync');
      const answer = readlineSync.question("${var_name}${match[2]} 뭐에요?   ");
      let ${var_name} = answer;`;
      return jsCode;
    }
  }
  return "";
}
