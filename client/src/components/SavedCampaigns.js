import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_CAMPAIGNS } from '../utils';
import "./home.css"

const SavedCampaigns = () => {
  const { loading, data, error } = useQuery(QUERY_CAMPAIGNS);
  const campaigns = data?.campaigns || [];

  if(loading || data === undefined) {
    return <div>Loading</div>
  } else if (error) {
    return <div>Error</div>
  } else {
      return (
          <div>
            {campaigns.length > 0 && (
              <CardGroup>
                {campaigns.map((campaign) => {
                  return (
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px160" />
                      <Card.Body>
                        <Card.Title>{campaign.campaignName}</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </Card.Footer>
                    </Card>
                )})}
              </CardGroup>
            )}
          </div>
      );
    }
}

export default SavedCampaigns;

