import Ajv, { JSONSchemaType } from "ajv";
import addformats from "ajv-formats";
import { IUser } from "./interfaces";

const ajv = new Ajv({ allErrors: true });
addformats(ajv);

const userSchema: JSONSchemaType<IUser> = {
  type: "object",
  required: ["id", "name", "email"],
  properties: {
    id: { type: "integer" },
    name: { type: "string", minLength: 1, maxLength: 10 },
    email: { type: "string", format: "email" },
    age: { type: "number", minimum: 0, nullable: true },
  },
  additionalProperties: false,
};

export const validator = ajv.compile(userSchema);
