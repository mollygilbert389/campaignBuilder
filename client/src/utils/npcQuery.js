import { gql } from '@apollo/client';

export const QUERY_NPC_DATA = gql`
query npcData {
	npcIdeals {
    id
    option
    list
  }
  npcs {
    id
    option
    type
  }
}
`;