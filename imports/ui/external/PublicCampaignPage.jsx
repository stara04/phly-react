import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { withHistory, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

//import '../../api/payments.js';
import { HTTP } from 'meteor/http';
import {
    Button,
    Form,
    Responsive,
    Segment,
    Grid,
    Header,
    Input
} from 'semantic-ui-react';

import { Campaigns } from '../../api/campaigns.js';

class PublicCampaignPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let name = "";
        let description = "";
        if (this.props.campaign) {
            name = this.props.campaign.name;
            description = this.props.campaign.description;
        }

        Meteor.call('getClientToken', function(error, clientToken) {
          if (error) {
            console.log(error);
          } else {
            braintree.setup(clientToken, "dropin", {
              container: "payment-form", // Injecting into <div id="payment-form"></div>
              onPaymentMethodReceived: function (response) {
                // When we submit the payment form,
                // it'll create new customer first...
                var nonce = response.nonce;

                Meteor.call('btCreateCustomer', function(error, success) {
                  if (error) {
                    throw new Meteor.Error('customer-creation-failed');
                  } else {
                    // ... and when the customer is successfuly created,
                    // call method for creating a transaction (finally!)
                    let donation_amount = document.getElementById('donation_amount').value;
                    Meteor.call('createTransaction', nonce, donation_amount, function(error, success) {
                      if (error) {
                        throw new Meteor.Error('transaction-creation-failed');
                      } else {
                        alert('Thank you for your donation!');
                      }
                    });
                  }
                });
              }
            });
          }
        });

      return (
          <Responsive>
              <Segment style={{ backgroundColor: '#F9FFFF', paddingTop: '6em' }} vertical>
                  <Grid container centered stackable>
                      <Grid.Column width={8} mobile={15}>
                          <Header as='h1'
                                  color='orange'
                                  style={{
                                      fontSize: '2em',
                                      letterSpacing: '1.5px' }}>
                              {name}
                          </Header>
                          <h3>St. Jude's Children Hospital</h3>
                          <p>{description}</p>
                          <p>ALL PROCEEDS GOING DIRECTLY TO <a href="https://www.stjude.org/">ST. JUDE’S HOSPITAL</a></p>
                          <Form role="form">
                            <Form.Field>
                                <Input
                                  type="integer"
                                  id="donation_amount"
                                  placeholder="Amount"/>
                            </Form.Field>
                            <Form.Field>
                                <div id="payment-form"></div>
                            </Form.Field>
                            <Button type="submit" color="orange">Submit</Button>
                            <p>Check out our <Link to="/policies">privacy policy</Link> and <Link to="/tos">terms of service</Link></p>
                        </Form>
                      </Grid.Column>
                  </Grid>
              </Segment>
          </Responsive>
      );
    }
}

export default CampaignContainer = withTracker(props => {
    Meteor.subscribe('campaigns');
    let campaign = Campaigns.findOne({ _id: props.match.params.id });
    return {
        campaign: campaign
    }
})(PublicCampaignPage);
