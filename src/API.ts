// API.ts

export type CreateContactFormInput = {
  comment?: string | null;
  email: string;
  name?: string | null;
};

export type ContactForm = {
  __typename: "ContactForm";
  comment?: string | null;
  email: string;
  name?: string | null;
};

export type DeleteContactFormInput = {
  email: string;
};

export type UpdateContactFormInput = {
  comment?: string | null;
  email: string;
  name?: string | null;
};

export type TableContactFormFilterInput = {
  comment?: TableStringFilterInput | null;
  email?: TableStringFilterInput | null;
  name?: TableStringFilterInput | null;
};

export type TableStringFilterInput = {
  attributeExists?: boolean | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ContactFormConnection = {
  __typename: "ContactFormConnection";
  items?: Array<ContactForm | null> | null;
  nextToken?: string | null;
};

export type CreateContactFormMutationVariables = {
  input: CreateContactFormInput;
};

export type CreateContactFormMutation = {
  createContactForm?: {
    __typename: "ContactForm";
    comment?: string | null;
    email: string;
    name?: string | null;
  } | null;
};

export type DeleteContactFormMutationVariables = {
  input: DeleteContactFormInput;
};

export type DeleteContactFormMutation = {
  deleteContactForm?: {
    __typename: "ContactForm";
    comment?: string | null;
    email: string;
    name?: string | null;
  } | null;
};

export type UpdateContactFormMutationVariables = {
  input: UpdateContactFormInput;
};

export type UpdateContactFormMutation = {
  updateContactForm?: {
    __typename: "ContactForm";
    comment?: string | null;
    email: string;
    name?: string | null;
  } | null;
};

export type GetContactFormQueryVariables = {
  email: string;
};

export type GetContactFormQuery = {
  getContactForm?: {
    __typename: "ContactForm";
    comment?: string | null;
    email: string;
    name?: string | null;
  } | null;
};

export type ListContactFormsQueryVariables = {
  filter?: TableContactFormFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListContactFormsQuery = {
  listContactForms?: {
    __typename: "ContactFormConnection";
    items?: Array<{
      __typename: "ContactForm";
      comment?: string | null;
      email: string;
      name?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateContactFormSubscriptionVariables = {
  comment?: string | null;
  email?: string | null;
  name?: string | null;
};

export type OnCreateContactFormSubscription = {
  onCreateContactForm?: {
    __typename: "ContactForm";
    comment?: string | null;
    email: string;
    name?: string | null;
  } | null;
};

export type OnDeleteContactFormSubscriptionVariables = {
  comment?: string | null;
  email?: string | null;
  name?: string | null;
};

export type OnDeleteContactFormSubscription = {
  onDeleteContactForm?: {
    __typename: "ContactForm";
    comment?: string | null;
    email: string;
    name?: string | null;
  } | null;
};

export type OnUpdateContactFormSubscriptionVariables = {
  comment?: string | null;
  email?: string | null;
  name?: string | null;
};

export type OnUpdateContactFormSubscription = {
  onUpdateContactForm?: {
    __typename: "ContactForm";
    comment?: string | null;
    email: string;
    name?: string | null;
  } | null;
};

// Define and export the GeneratedMutation type
export type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

// Define and export the GeneratedQuery type
export type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

// Define and export the GeneratedSubscription type
export type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};
