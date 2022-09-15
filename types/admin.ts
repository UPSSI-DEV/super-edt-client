type Type = {
  name: string;
  params: { [key: string]: ParamType };
};

type ParamType = "number" | "string" | "date" | "boolean" | "uid" | "object";

export { Type, ParamType };
