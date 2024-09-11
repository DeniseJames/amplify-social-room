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

// Define and export the data member
export const data = {
  createContactForm: /* GraphQL */ `mutation CreateContactForm($input: CreateContactFormInput!) {
    createContactForm(input: $input) {
      comment
      email
      name
      __typename
    }
  }` as APITypes.GeneratedMutation<
    APITypes.CreateContactFormMutationVariables,
    APITypes.CreateContactFormMutation
  >,
  deleteContactForm: /* GraphQL */ `mutation DeleteContactForm($input: DeleteContactFormInput!) {
    deleteContactForm(input: $input) {
      comment
      email
      name
      __typename
    }
  }` as APITypes.GeneratedMutation<
    APITypes.DeleteContactFormMutationVariables,
    APITypes.DeleteContactFormMutation
  >,
  updateContactForm: /* GraphQL */ `mutation UpdateContactForm($input: UpdateContactFormInput!) {
    updateContactForm(input: $input) {
      comment
      email
      name
      __typename
    }
  }` as APITypes.GeneratedMutation<
    APITypes.UpdateContactFormMutationVariables,
    APITypes.UpdateContactFormMutation
  >,
  getContactForm: /* GraphQL */ `query GetContactForm($email: String!) {
    getContactForm(email: $email) {
      comment
      email
      name
      __typename
    }
  }` as APITypes.GeneratedQuery<
    APITypes.GetContactFormQueryVariables,
    APITypes.GetContactFormQuery
  >,
  listContactForms: /* GraphQL */ `query ListContactForms($filter: TableContactFormFilterInput, $limit: Int, $nextToken: String) {
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
  >,
  onCreateContactForm: /* GraphQL */ `subscription OnCreateContactForm($comment: String, $email: String, $name: String) {
    onCreateContactForm(comment: $comment, email: $email, name: $name) {
      comment
      email
      name
      __typename
    }
  }` as APITypes.GeneratedSubscription<
    APITypes.OnCreateContactFormSubscriptionVariables,
    APITypes.OnCreateContactFormSubscription
  >,
  onDeleteContactForm: /* GraphQL */ `subscription OnDeleteContactForm($comment: String, $email: String, $name: String) {
    onDeleteContactForm(comment: $comment, email: $email, name: $name) {
      comment
      email
      name
      __typename
    }
  }` as APITypes.GeneratedSubscription<
    APITypes.OnDeleteContactFormSubscriptionVariables,
    APITypes.OnDeleteContactFormSubscription
  >,
  onUpdateContactForm: /* GraphQL */ `subscription OnUpdateContactForm($comment: String, $email: String, $name: String) {
    onUpdateContactForm(comment: $comment, email: $email, name: $name) {
      comment
      email
      name
      __typename
    }
  }` as APITypes.GeneratedSubscription<
    APITypes.OnUpdateContactFormSubscriptionVariables,
    APITypes.OnUpdateContactFormSubscription
  >,
  getInstance: (props: any) => {
    return {
      resources: {
        // Define your resources here
      },
      // Add any other properties required by ResourceProvider
    };
  },
};
