import { gql } from '@apollo/client';

export const QUERY_RELIGION_DATA = gql`
query religionData {
	religion {
    id
    option
    toolTipData
  }
}
`;