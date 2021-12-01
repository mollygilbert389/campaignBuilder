import { gql } from '@apollo/client';

export const QUERY_CLIMAX_DATA = gql`
query climaxData {
	climaxes {
    id
    option
  }
}
`;