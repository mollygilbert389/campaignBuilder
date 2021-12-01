import { gql } from '@apollo/client';

export const QUERY_CAMPAIGN_NAME_DATA = gql`
query campaignNameData {
	campaignNames {
    id
    option
    type
  }
}
`;