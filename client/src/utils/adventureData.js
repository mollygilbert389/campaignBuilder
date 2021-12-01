import { gql } from '@apollo/client';

export const QUERY_ADVENTURE_DATA = gql`
query adventureData {
	meetingSelections {
    id
    option
  }
  dungeonLocations {
    id
    option
  }
  nonDungeonLocations{
    id
    option
  }
}
`;