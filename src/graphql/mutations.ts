/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createContactForm = /* GraphQL */ `mutation CreateContactForm($input: CreateContactFormInput!) {
  createContactForm(input: $input) {
    comment
    email
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContactFormMutationVariables,
  APITypes.CreateContactFormMutation
>;
export const deleteContactForm = /* GraphQL */ `mutation DeleteContactForm($input: DeleteContactFormInput!) {
  deleteContactForm(input: $input) {
    comment
    email
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContactFormMutationVariables,
  APITypes.DeleteContactFormMutation
>;
export const updateContactForm = /* GraphQL */ `mutation UpdateContactForm($input: UpdateContactFormInput!) {
  updateContactForm(input: $input) {
    comment
    email
    name
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContactFormMutationVariables,
  APITypes.UpdateContactFormMutation
>;
