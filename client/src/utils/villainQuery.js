import { gql } from '@apollo/client';

export const QUERY_VILLAIN_DATA = gql`
query villainData {
	villainMethods {
    id
    methods
    category
  }
  villainWeaknesses {
    id
    option
  }
  villainObjectives {
    id
    category
    objectives
  }
}
`;