export declare const PROP_TYPES: {
  STRING: string;
  ARRAY: string;
  NUMBER: string;
  BOOLEAN: string;
  OBJECT: string;
  ASSET: string;
  THEME: string;
};
export const createActionProp = (overrides = {}) => ({
  label: "Action",
  description: "Action to execute when button pressed",
  editable: true,
  required: false,
  formType: FORM_TYPES.action,
  propType: PROP_TYPES.STRING,
  defaultValue: null,
  group: GROUPS.basic,
  ...overrides,
});

export declare const COMPONENT_TYPES: {
  basic: string;
  media: string;
  layout: string;
  input: string;
  data: string;
  card: string;
  header: string;
  button: string;
  image: string;
  field: string;
  formControl: string;
  row: string;
  container: string;
  blocks: string;
  deprecated: string;
  screen: string;
  codeComponent: string;
  swiper: string;
};
export declare const createStaticBoolProp: (overrides?: {}) => {
  label: string;
  description: string;
  formType: string;
  propType: string;
  defaultValue: boolean;
  editable: boolean;
  required: boolean;
  group: string;
};
