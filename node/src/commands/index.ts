import {
  condition_else_parse,
  condition_elseif_parse,
  condition_end_parse,
  condition_if_parse,
} from "./condition";
import {
  func_create_parse,
  func_end_parse,
  func_return_parse,
  func_use_parse,
} from "./function";
import { input_parse } from "./input";
import { loop_create_parse, loop_end_parse } from "./loop";
import { main_end_parse, main_start_parse } from "./main";
import { test_parse } from "./test";
import { var_parse, varc_parse, varp_parse } from "./var";

export function command_appender(line: string, index: number, lines: string[]) {
  const commands = [
    main_start_parse,
    main_end_parse,
    var_parse,
    varp_parse,
    varc_parse,
    input_parse,
    test_parse,
    func_use_parse,
    func_return_parse,
    func_create_parse,
    func_end_parse,
    loop_create_parse,
    loop_end_parse,
    condition_if_parse,
    condition_elseif_parse,
    condition_else_parse,
    condition_end_parse,
  ];

  for (let command of commands) {
    let cl = command(line);
    if (cl != "") {
      return cl;
    }
  }
  return "";
}
