import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faUsers,
  faShareAltSquare,
  faEdit,
  faHandHoldingHeart,
  faShareSquare,
  faQrcode,
  faCreditCard,
  faMoneyBillAlt,
  faChevronRight,
  faMousePointer,
  faUserEdit,
  faHeart,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  Container,
  Row, Col,
  Button,
  Card,
  CardBody,
  TabContent,
  TabPane
} from 'reactstrap';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ tabs: (this.state.tabs + 1) % 3}), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleTab = (e, index) => {
    e.preventDefault();
    this.setState({
      tabs: index
    });
  }

  render() {
    return (
      <div>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-nav headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" href="http://www.phly.co/">
                <img
                  alt="..."
                  src="/images/phly-color.png"
                  className="mr-2"
                />
                phly.co
              </NavbarBrand>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavItem>
                  <NavLink href="https://www.phly.co/campaigns">
                    <span className="nav-link-inner--text">Campaigns</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink href="https://www.phly.co/login">
                    <span className="nav-link-inner--text">Login</span>
                  </NavLink>
                </NavItem>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Button
                    className="btn-secondary"
                    color="secondary"
                    href="https://www.phly.co/register"
                  >
                    <span className="nav-link-inner--text ml-1">
                      Sign up
                    </span>
                  </Button>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-100">
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="justify-content-center">
                    <Col lg="10" className="text-center">
                      <h1 className="display-1">The best fundraising solution for student organizations</h1>
                      <p className="display-4 px-5 py-4">
                        Create and share campaigns instantly,<br/>
                        collect and track donations effortlessly.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="secondary"
                          href="https://www.phly.co/register"
                        >
                          <span className="btn-inner--text">Get Started</span>
                          <span className="btn-inner--icon mr-1">
                            <FontAwesomeIcon icon={faArrowRight}/>
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-primary"
                    points="2560 100 0 100 0 0"
                  />
                </svg>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 bg-gradient-primary">
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row className="row-grid">
                  <Col lg="6">
                    <h2 className="text-white display-2">How Phly works</h2>
                  </Col>
                </Row>
                <Row className="row-grid">
                  <Col lg="12">
                    <div className="nav-wrapper">
                      <Nav
                        className="nav-fill flex-column flex-md-row justify-content-center"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.tabs === 0
                            })}
                            onClick={e => this.toggleTab(e, 0)}
                            role="tab"
                          >
                              Organizations
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTab(e, 1)}
                            role="tab"
                          >
                              Campaigns
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTab(e, 2)}
                            role="tab"
                          >
                              Donations
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                    <TabContent activeTab={"tabs" + this.state.tabs}>
                      <TabPane tabId="tabs0">
                        <Card className="shadow border-0 px-4">
                          <CardBody>
                            <Row className="mt-4 align-items-center">
                              <Col className="text-center">
                                <div className="icon-lg icon-shape icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faAddressCard}/>
                                </div>
                                <p className="lead landing">Create a personal account</p>
                              </Col>
                              <Col className="col-1 text-center text-default">
                                <FontAwesomeIcon className="icon display-3" icon={faChevronRight}/>
                              </Col>
                              <Col className="text-center">
                                <div className="icon-lg icon-shape icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faUsers}/>
                                </div>
                                <p className="lead landing">Create a new organization account</p>
                              </Col>
                              <Col className="col-1 text-center text-default">
                                <FontAwesomeIcon className="icon display-3" icon={faChevronRight}/>
                              </Col>
                              <Col className="text-center">
                                <div className="icon-lg icon-shape icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faShareAltSquare}/>
                                </div>
                                <p className="lead landing">Invite your team members to join your organization</p>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="tabs1">
                        <Card className="shadow border-0 px-4">
                          <CardBody>
                            <Row className="mt-4 align-items-center">
                              <Col className="text-center">
                                <div className="icon-lg icon-shape icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faEdit}/>
                                </div>
                                <p className="lead landing">Enter campaign details and customize campaign</p>
                              </Col>
                              <Col className="col-1 text-center text-default">
                                <FontAwesomeIcon className="icon display-3" icon={faChevronRight}/>
                              </Col>
                              <Col className="text-center">
                                <div className="icon-lg icon-shape icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faHandHoldingHeart}/>
                                </div>
                                <p className="lead landing">Choose a non-profit to recieve donations</p>
                              </Col>
                              <Col className="col-1 text-center text-default">
                                <FontAwesomeIcon className="icon display-3" icon={faChevronRight}/>
                              </Col>
                              <Col className="text-center">
                                <div className="icon-lg icon-shape icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faShareSquare}/>
                                </div>
                                <p className="lead landing">Share your campaign with QR code, link, or social media post</p>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="tabs2">
                        <Card className="shadow border-0 px-4">
                          <CardBody>
                            <Row className="mt-4 align-items-center">
                              <Col className="text-center">
                                <div className="icon-lg icon-shape icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faQrcode}/>
                                </div>
                                <p className="lead landing">Scan QR code or click campaign link</p>
                              </Col>
                              <Col className="col-1 text-center text-default">
                                <FontAwesomeIcon className="icon display-3" icon={faChevronRight}/>
                              </Col>
                              <Col className="text-center">
                                <div className="icon-lg icon-shape icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faCreditCard}/>
                                </div>
                                <p className="lead landing">Enter donation amount and choose payment method</p>
                              </Col>
                              <Col className="col-1 text-center text-default">
                                <FontAwesomeIcon className="icon display-3" icon={faChevronRight}/>
                              </Col>
                              <Col className="text-center">
                                <div className="icon-shape icon-lg icon-shape-secondary rounded-circle mb-3">
                                  <FontAwesomeIcon icon={faMoneyBillAlt}/>
                                </div>
                                <p className="lead landing">Donate!</p>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="mb-md">
                <Col lg="6">
                  <h2 className="display-2">Why Phly?</h2>
                </Col>
              </Row>
              <Row className="mb-lg align-items-center">
                <Col className="order-md-1" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating shadow"
                    src="/images/custom/dashboard.png"
                  />
                </Col>
                <Col className="order-md-2" md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-md icon-shape icon-shape-secondary shadow rounded-circle mb-4">
                      <FontAwesomeIcon icon={faMousePointer}/>
                    </div>
                    <h3>Easy to use dashboard</h3>
                    <p className="lead">
                      View all of you fundraising
                      campaigns and goals in one place.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="mb-lg align-items-center">
                <Col className="order-md-1" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating shadow"
                    src="/images/custom/campaign.png"
                  />
                </Col>
                <Col className="order-md-2" md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-md icon-shape icon-shape-secondary shadow rounded-circle mb-4">
                      <FontAwesomeIcon icon={faUserEdit}/>
                    </div>
                    <h3>Seamless campaign customization</h3>
                    <p className="lead">
                      Create your fundraiser and
                      have your campaign live in
                      minutes.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="mb-lg align-items-center">
                <Col className="order-md-1" md="3">
                  <img
                    alt="..."
                    className="img-fluid floating shadow"
                    src="/images/custom/donate-1.png"
                  />
                </Col>
                <Col className="order-md-1" md="3">
                  <img
                    alt="..."
                    className="img-fluid floating shadow"
                    src="/images/custom/donate-2.png"
                  />
                </Col>
                <Col className="order-md-2" md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-md icon-shape icon-shape-secondary shadow rounded-circle mb-4">
                      <FontAwesomeIcon icon={faHeart}/>
                    </div>
                    <h3>Streamlined donation process</h3>
                    <p className="lead">
                      With Venmo, PayPal, and Credit Card
                      payment options, your donors can
                      support you however they prefer
                      with just a few clicks.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <footer className="footer bg-white">
            <Container>
              <hr />
              <Row className=" align-items-center justify-content-md-between">
                <Col md="6">
                  <div className=" copyright">

                    © {new Date().getFullYear()}{" "}
                    <a
                      href="https://www.phly.co"
                    >
                      Phly
                    </a>
                    .
                  </div>
                </Col>
                <Col md="6">
                  <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://www.phly.co"
                      target="_blank"
                    >
                      Phly
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.phly.co"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.phly.co/tos"
                      target="_blank"
                    >
                      Terms of Service
                    </NavLink>
                  </NavItem>
                </Nav>
                </Col>
              </Row>
            </Container>
          </footer>
        </main>
      </div>
    )
  }
}

export default Landing;