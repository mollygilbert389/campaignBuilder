import { gql } from '@apollo/client';

export const QUERY_GOVERNMENT_DATA = gql`
query governmentData {
	governments {
    id
    description
    name
  }
  languages {
    id
    option
  }
  currency {
    id
    option
  }
}
`;