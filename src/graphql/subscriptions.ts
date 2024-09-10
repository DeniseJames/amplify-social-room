/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateContactForm = /* GraphQL */ `subscription OnCreateContactForm(
  $comment: String
  $email: String
  $name: String
) {
  onCreateContactForm(comment: $comment, email: $email, name: $name) {
    comment
    email
    name
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContactFormSubscriptionVariables,
  APITypes.OnCreateContactFormSubscription
>;
export const onDeleteContactForm = /* GraphQL */ `subscription OnDeleteContactForm(
  $comment: String
  $email: String
  $name: String
) {
  onDeleteContactForm(comment: $comment, email: $email, name: $name) {
    comment
    email
    name
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContactFormSubscriptionVariables,
  APITypes.OnDeleteContactFormSubscription
>;
export const onUpdateContactForm = /* GraphQL */ `subscription OnUpdateContactForm(
  $comment: String
  $email: String
  $name: String
) {
  onUpdateContactForm(comment: $comment, email: $email, name: $name) {
    comment
    email
    name
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContactFormSubscriptionVariables,
  APITypes.OnUpdateContactFormSubscription
>;
