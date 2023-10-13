import rm_footnote from "./footnote";

export function var_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re_var: RegExp =
    /^순형씨 (.+)(은|는) (숫자|문자열) (\d|".+")(야|이야|으로 고정이야) 기억해\^\^$/;
  if (re_var.test(fline)) {
    const match = fline.match(re_var);
    if (match) {
      const var_name: string = match[1];
      let var_type: string = "any";
      if (match[3] == "숫자") {
        var_type = "number";
      } else if (match[3] == "문자열") {
        var_type = "string";
      }
      let var_value: string = match[4];
      let var_const: boolean = false;
      if (match[5] == "으로 고정이야") {
        var_const = true;
      }

      let jsCode = `${var_const ? "const" : "let"} ${var_name} = ${var_value};`;
      return jsCode;
    }
  }
  return "";
}

export function varc_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re_varp: RegExp = /^순형씨 (.+)(을|를) (\d|".+")(로|으로) 바꿔줘\^\^$/;
  if (re_varp.test(fline)) {
    const match = fline.match(re_varp);
    if (match) {
      const var_name: string = match[1];
      const var_value: string = match[3];
      let jsCode = `
      try{
        ${var_name} = ${var_value};
      } catch(e) {
        if (e.message == "Assignment to constant variable."){
          console.log("부장님 ${var_name}은|는 상수에요 그것도 몰라요?")
        }
      }
      `;
      return jsCode;
    }
  }
  return "";
}

export function varp_parse(line: string): string {
  let fline = rm_footnote(line).trim();
  let re_varp: RegExp = /^순형씨 (.+)(이|가) 뭔지 알려줘\^\^$/;
  if (re_varp.test(fline)) {
    const match = fline.match(re_varp);
    if (match) {
      const var_name: string = match[1];

      let jsCode = `console.log("부장님 ${var_name}은|는 "+${var_name}+"에요. 아시겠어요?");`;
      return jsCode;
    }
  }
  return "";
}
