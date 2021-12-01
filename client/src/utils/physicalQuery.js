import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_DATA = gql`
  query physicalQuery {
    eras {
      id
      option
    }
    features {
      id
      option
    }
    travelPoints {
      id
      option
      type
    }
    worlds{
      id
      option
    }
    worldStyles{
      id
      image
      type
    }
    mapScales {
      id
      option
    }
    meetingLocations {
      id
      option
    }
  }
`;