import { gql } from '@apollo/client';

export const QUERY_SETBACK_DATA = gql`
query setbackData {
	worldShakingEvents {
    id
    option
    possible {
      id
      option
    }
  }
  traps {
    id
    option
  }
}
`;