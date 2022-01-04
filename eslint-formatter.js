/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-var */
/* eslint-disable no-redeclare */

module.exports = function (results) {
  const skipWarnings = 'true'
  const summary = results.reduce(
    (seq, current) => {
      current.messages.forEach((msg) => {
        const logMessage = {
          filePath: current.filePath,
          ruleId: msg.ruleId,
          message: msg.message,
          line: msg.line,
          column: msg.column,
        };

        if (msg.severity === 1) {
          logMessage.type = 'warning';
          seq.warnings.push(logMessage);
        }
        if (msg.severity === 2) {
          logMessage.type = 'error';
          seq.errors.push(logMessage);
        }
      });
      return seq;
    },
    {
      errors: [],
      warnings: [],
    }
  );

  if (summary.errors.length > 0) {
    const warnings = !skipWarnings ? summary.warnings : []; // skip the warnings in that case

    const lines = summary.errors
      .concat(warnings)
      .map((msg) => (
        `\n${
          msg.type
        } ${
          msg.ruleId
        }\n  ${
          msg.filePath
        }:${
          msg.line
        }:${
          msg.column}`
      ))
      .join('\n');

    return `${lines}\n`;
  }

  console.log('Hey, great job! No syntax errors today!')
}
