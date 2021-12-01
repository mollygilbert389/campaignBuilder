import { gql } from '@apollo/client';

export const QUERY_TWIST_DATA = gql`
query twistData {
	twists {
    id
    option
  }
}
`;