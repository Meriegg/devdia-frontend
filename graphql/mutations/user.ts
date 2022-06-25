import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation ($args: RegisterInput!) {
    register(args: $args) {
      accessToken
      userData {
        email
        id
        joined_on
        r_t
        username
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation ($args: LoginInput!) {
    login(args: $args) {
      accessToken
      userData {
        email
        id
        joined_on
        r_t
        username
      }
    }
  }
`;
