import { gql } from '@apollo/client';

export const QUERY_NAME_DATA = gql`
query nameData {
	names {
    id
    option
    type
  }
}
`;