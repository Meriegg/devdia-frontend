import { gql } from "@apollo/client";

export const GET_MY_DATA = gql`
  query {
    getMyData {
      email
      id
      joined_on
      liked_posts {
        id
        post_id
        user_id
        post {
          code
          content
          likes {
            id
            user_id
          }
        }
      }
      posts {
        author_id
        code
        content
        id
        likes {
          id
          user_id
        }
      }
      r_t
      username
    }
  }
`;

export const REFRESH_TOKEN = gql`
  query {
    refreshToken
  }
`;
