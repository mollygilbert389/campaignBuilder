import { gql } from '@apollo/client';

export const QUERY_ENCOUNTER_DATA = gql`
query encounterData {
	encounters {
    id
    option
  }
}
`;