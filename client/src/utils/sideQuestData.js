import { gql } from '@apollo/client';

export const QUERY_SIDE_QUEST_DATA = gql`
query sideQuestData {
	sideQuests {
    id
    option
  }
}
`;