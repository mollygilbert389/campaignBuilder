import { gql } from '@apollo/client';

export const QUERY_GOAL_DATA = gql`
query goalData {
	goals {
    id
    option
    type
  }
}
`;