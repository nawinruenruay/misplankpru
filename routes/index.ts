function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_PROJECT = "/project";

export const PATH_PROJECT = {
  root: ROOTS_PROJECT,
  record: path(ROOTS_PROJECT, "/record"),
  reportproject: path(ROOTS_PROJECT, "/reportproject"),
  recorddoc: path(ROOTS_PROJECT, "/recorddoc"),
  recordresult: path(ROOTS_PROJECT, "/recordresult"),
  reportsummary: path(ROOTS_PROJECT, "/reportsummary"),
};

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
};
