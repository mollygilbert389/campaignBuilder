import { gql } from '@apollo/client';

export const QUERY_MONSTER_DATA = gql`
query monsterData {
	monsters {
    id
    name
    category
    subcategory
    type
    area
    ideal
  }
}
`;