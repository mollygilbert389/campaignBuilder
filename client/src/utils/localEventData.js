import { gql } from '@apollo/client';

export const QUERY_LOCAL_EVENT_DATA = gql`
query localEventData {
	localEvents {
    id
    option
  }
}
`;