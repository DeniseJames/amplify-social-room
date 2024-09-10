// resources.ts

import * as APITypes from "../../src/API";

// Define the Schema type
export type Schema = {
  ContactForm: {
    comment?: string | null;
    email: string;
    name?: string | null;
  };
  ContactFormConnection: {
    items?: Array<{
      comment?: string | null;
      email: string;
      name?: string | null;
    } | null> | null;
    nextToken?: string | null;
  };
  Mutation: {
    createContactForm: APITypes.CreateContactFormMutation;
    deleteContactForm: APITypes.DeleteContactFormMutation;
    updateContactForm: APITypes.UpdateContactFormMutation;
  };
  Query: {
    getContactForm: APITypes.GetContactFormQuery;
    listContactForms: APITypes.ListContactFormsQuery;
  };
  Subscription: {
    onCreateContactForm: APITypes.OnCreateContactFormSubscription;
    onDeleteContactForm: APITypes.OnDeleteContactFormSubscription;
    onUpdateContactForm: APITypes.OnUpdateContactFormSubscription;
  };
};

// Define the GraphQL mutation for creating a contact form
export const createContactForm = /* GraphQL */ `mutation CreateContactForm($input: CreateContactFormInput!) {
  createContactForm(input: $input) {
    comment
    email
    name
    __typename
  }
}` as APITypes.GeneratedMutation<
  APITypes.CreateContactFormMutationVariables,
  APITypes.CreateContactFormMutation
>;

// Define the GraphQL mutation for deleting a contact form
export const deleteContactForm = /* GraphQL */ `mutation DeleteContactForm($input: DeleteContactFormInput!) {
  deleteContactForm(input: $input) {
    comment
    email
    name
    __typename
  }
}` as APITypes.GeneratedMutation<
  APITypes.DeleteContactFormMutationVariables,
  APITypes.DeleteContactFormMutation
>;

// Define the GraphQL mutation for updating a contact form
export const updateContactForm = /* GraphQL */ `mutation UpdateContactForm($input: UpdateContactFormInput!) {
  updateContactForm(input: $input) {
    comment
    email
    name
    __typename
  }
}` as APITypes.GeneratedMutation<
  APITypes.UpdateContactFormMutationVariables,
  APITypes.UpdateContactFormMutation
>;

// Define the GraphQL query for getting a contact form
export const getContactForm = /* GraphQL */ `query GetContactForm($email: String!) {
  getContactForm(email: $email) {
    comment
    email
    name
    __typename
  }
}` as APITypes.GeneratedQuery<
  APITypes.GetContactFormQueryVariables,
  APITypes.GetContactFormQuery
>;

// Define the GraphQL query for listing contact forms
export const listContactForms = /* GraphQL */ `query ListContactForms($filter: TableContactFormFilterInput, $limit: Int, $nextToken: String) {
  listContactForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      comment
      email
      name
      __typename
    }
    nextToken
    __typename
  }
}` as APITypes.GeneratedQuery<
  APITypes.ListContactFormsQueryVariables,
  APITypes.ListContactFormsQuery
>;

// Define the GraphQL subscription for creating a contact form
export const onCreateContactForm = /* GraphQL */ `subscription OnCreateContactForm($comment: String, $email: String, $name: String) {
  onCreateContactForm(comment: $comment, email: $email, name: $name) {
    comment
    email
    name
    __typename
  }
}` as APITypes.GeneratedSubscription<
  APITypes.OnCreateContactFormSubscriptionVariables,
  APITypes.OnCreateContactFormSubscription
>;

// Define the GraphQL subscription for deleting a contact form
export const onDeleteContactForm = /* GraphQL */ `subscription OnDeleteContactForm($comment: String, $email: String, $name: String) {
  onDeleteContactForm(comment: $comment, email: $email, name: $name) {
    comment
    email
    name
    __typename
  }
}` as APITypes.GeneratedSubscription<
  APITypes.OnDeleteContactFormSubscriptionVariables,
  APITypes.OnDeleteContactFormSubscription
>;

// Define the GraphQL subscription for updating a contact form
export const onUpdateContactForm = /* GraphQL */ `subscription OnUpdateContactForm($comment: String, $email: String, $name: String) {
  onUpdateContactForm(comment: $comment, email: $email, name: $name) {
    comment
    email
    name
    __typename
  }
}` as APITypes.GeneratedSubscription<
  APITypes.OnUpdateContactFormSubscriptionVariables,
  APITypes.OnUpdateContactFormSubscription
>;
