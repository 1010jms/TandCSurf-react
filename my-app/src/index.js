import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Image, Grid, Icon, Menu, Header, Container } from 'semantic-ui-react';

class TandCLogo extends React.Component {
  render() {
    const logoStyle = { paddingLeft: "5px" };
    return (
        <Image className="topPadding" floated="left" src="https://www.tcsurf.com/img/TClogo.png?width=76" style={logoStyle}/>
    )
  }
}

class Est1971 extends React.Component {
  render() {
    const headerStyle = { fontSize: "17px" };
    return (
    <Header as="p" floated="left" textAlign="centered" style={headerStyle}>&nbsp; &nbsp; est 1971</Header>
    );
  }
}

class SocialMediaMenu extends React.Component {
  render() {
    return (
        <Grid>
          <Grid.Row centered className="bordered">
            <Icon name="instagram icon" />
            <Icon name="facebook f icon" />
          </Grid.Row>
        </Grid>
    );
  }
}

class TopMenu extends React.Component{
  render() {
    const itemStyle = { color: " #707B7C", fontSize: "22px" };
    return (
        <Menu className="topmenu">
          <Container fluid className="bordered">
            <Menu.Item><Header as="h2">T&C Hawai'i</Header></Menu.Item>
            <Menu.Item position="right" style={itemStyle}>Surf</Menu.Item>
            <Menu.Item style={itemStyle}>Stores</Menu.Item>
            <Menu.Item style={itemStyle}>Int'l</Menu.Item>
            <Menu.Item style={itemStyle}>About</Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class StayStoked extends React.Component {
  render() {
    const itemStyle = { color: "whitesmoke", fontSize: "14px"};
    return (
      <Menu className="stayStoked">
        <Container fluid>
          <Menu.Item fitted position="right" style={itemStyle}>stay Stoked &nbsp; &nbsp; &nbsp; &nbsp;</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid src="https://www.tcsurf.com/media/1569/2017-home_hero_dawn.jpg?width=2000" />
    );
  }
}

class Description extends React.Component {
  render() {
    const headerStyle = {paddingTop: "50px"};
    const bodyStyle = {paddingTop: "10px", paddingBottom: "10px"};
    return (
        <Grid centered>
          <Grid.Row style={headerStyle}><Header as="h2">T&C Surf Hawaii</Header></Grid.Row>
          <Grid.Row style={bodyStyle}><p>T&C Surf has been serving Hawaii the best selection of surf, skate, & bodyboard apparel, accessories, and hard goods since 1971.</p></Grid.Row>
          <Grid.Row><Image src="https://www.tcsurf.com/img/TClogo.png?width=90" /></Grid.Row>
        </Grid>
    );
  }
}

class Images extends React.Component {
  render() {
    return (
        <Grid centered>
          <Grid.Row>
            <Grid.Column>
              <Image size="500px" src="https://www.tcsurf.com/media/1530/3cp-surf17.jpg" />
              <Header as="h3" className="italics">T&C SURF</Header>
            </Grid.Column>
            <Grid.Column>
              <Image size="500px" src="https://www.tcsurf.com/media/1529/3cp-stores17-3.jpg" />
              <Header as="h3" className="italics">HAWAII STORES</Header>
            </Grid.Column>
            <Grid.Column>
              <Image size="500px" src="https://www.tcsurf.com/media/1481/3cp-boards_30.jpg" />
              <Header as="h3" className="italics">T&C BOARD MODELS</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
          );
  }
}

class TandCSurf extends React.Component {

  render() {
    return (
        <div>
          <TandCLogo/>
          <SocialMediaMenu/>
          <TopMenu/>
          <Est1971/>
          <StayStoked/>
          <FullWidthImage/>
          <Description/>
          <Images/>
        </div>
    );
  }
}

ReactDOM.render(<TandCSurf />, document.getElementById('root'));