// Import React
import React from 'react';
import MtSvgLines from 'react-mt-svg-lines';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Fill,
  Layout,
  Appear,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import jsCode from './img/js-code.jpg';
import jsCode2 from './img/js-code-2.jpg';
import NameSvg from './NameSvg';
import LogoSvg from './LogoSvg';
import AwsLogo from './AwsLogo';
import GoogleLogo from './GoogleLogo';
import AzureLogo from './AzureLogo';
import IBMLogo from './IBMLogo';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'rgb(84, 114, 204)',
    secondary: 'rgb(46, 59, 78)',
    tertiary: 'white',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
      {/* Slide 1 */}
        <Slide transition={['fade']} bgImage={jsCode} bgDarken="0.75">
          <Heading size={1} caps lineHeight={1} textColor="tertiary" >
            Do More, Server Less
          </Heading>
        </Slide>
      {/* Slide 2 */}
        <Slide transition={['zoom']} bgColor="primary">
          <MtSvgLines animate={ true } duration={ 5000 } playback="infinite alternate both" timing="ease-in-out" >
            <NameSvg />
          </MtSvgLines>
          <Text>&nbsp;</Text>
          <MtSvgLines animate={ true } duration={ 5000 } playback="infinite alternate both" timing="ease-in-out">
            <LogoSvg />
          </MtSvgLines>
        </Slide>
      {/* Sldie 3 */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={2} fit caps lineHeight={2} textColor="tertiary" bgColor="secondary">
            &nbsp;What qualifies as serverless?&nbsp;
          </Heading>
          <List transition={['fade']}>
            <Appear>
              <ListItem padding="10px">
                You don't actually control the server resources
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding="10px">
                Code is broken up into neat little individual functions (lookin' at you App Engine!)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding="10px">
                If it's not running, you're not paying
              </ListItem>
            </Appear>
          </List>
        </Slide>
      {/* Slide 4 */}
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Where things get funky</Quote>
          </BlockQuote>
        </Slide>
      {/* Slide 5 */}
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} fit caps lineHeight={2} textColor="tertiary" bgColor="primary">
            &nbsp;Containerized Serverless&nbsp;
          </Heading>
            <Appear>
              <Heading padding="10px" size={4} lineHeight={1} textColor="primary">
                OpenFaaS
              </Heading>
            </Appear>
            <Appear>
              <Heading padding="10px" size={4} lineHeight={1} textColor="primary">
                Fn Project
              </Heading>
            </Appear>
            <Appear>
              <Heading padding="10px" size={4} lineHeight={1} textColor="primary">
                Kubeless
              </Heading>
            </Appear>
        </Slide>
      {/* Slide 6 */}
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading fit size={1} caps lineHeight={2} textColor="tertiary" bgColor="primary">
            &nbsp;Why are they not really serverless?&nbsp;
          </Heading>
          <List transition={['zoom']}>
            <Appear>
              <ListItem padding="10px">
                You control the server resources
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding="10px">
                Code is broken up into neat little individual functions but are running on your nice little container
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding="10px">
                If always running, so you're always paying
              </ListItem>
            </Appear>
          </List>
        </Slide>
      {/* Slide 7 */}
        <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading padding="10px" fit size={1} caps lineHeight={2} textColor="tertiary" bgColor="primary">
            &nbsp;So where can I find serverless?&nbsp;
          </Heading>
          <Text>&nbsp;</Text>
          <Layout>
            <Appear>
              <Fill padding="10px">
                  <AwsLogo />
              </Fill>
            </Appear>
            <Appear>
              <Fill padding="10px">
                  <GoogleLogo />
              </Fill>
            </Appear>
            <Appear>
              <Fill padding="10px">
                  <AzureLogo />
              </Fill>
            </Appear>
            <Appear>
              <Fill padding="10px">
                  <IBMLogo />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
      {/* Slide 8 */}
        <Slide transition={['zoom']} bgColor="primary" textColor="secondary">
          <Heading fit padding="10px" size={1} caps lineHeight={1} textColor="primary" bgColor="tertiary">
            &nbsp;AWS Lambda&nbsp;
          </Heading>
          <Text>
            &nbsp;
          </Text>
          <Layout>
            <Fill padding="10px">
              <AwsLogo size="75%" />
            </Fill>
          </Layout>
        </Slide>
      {/* Slide 9 */}
        <Slide transition={['zoom']} bgColor="primary" textColor="secondary">
          <Heading fit padding="10px" size={1} caps lineHeight={1} textColor="primary" bgColor="tertiary">
            &nbsp;Cloud Functions&nbsp;
          </Heading>
          <Text textAlign="center" >
            &nbsp;
          </Text>
          <Layout>
            <Fill>
              <GoogleLogo size="70%" />
            </Fill>
          </Layout>
        </Slide>
      {/* Slide 10 */}
      <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
          <Heading fit padding="10px" size={1} caps lineHeight={1} textColor="secondary" bgColor="tertiary">
            &nbsp;IBM OpenWhisk&nbsp;
          </Heading>
          <Text textAlign="center" >
            &nbsp;
          </Text>
          <Layout>
            <Fill>
              <IBMLogo size="70%" />
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
