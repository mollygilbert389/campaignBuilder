import { gql } from '@apollo/client';

export const QUERY_PATRON_DATA = gql`
query patronData {
  patron {
    id
    option
    type
  }
}
`;