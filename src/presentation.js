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
  // Table,
  // TableRow,
  // TableHeaderItem,
  // TableItem
} from 'spectacle';

// Import Custom Components
import LanguageTable from './LanguageTable';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import jsCode from './img/js-code.jpg';
// import jsCode2 from './img/js-code-2.jpg';
import NameSvg from './NameSvg';
import LogoSvg from './LogoSvg';
import AwsLogo from './AwsLogo';
import GoogleLogo from './GoogleLogo';
import AzureLogo from './AzureLogo';
import IBMLogo from './IBMLogo';
import checkoutNow from './img/checkout_now.png';
import OAuth from './img/OAuth.png';
import CheckEmail from './img/CheckEmail.png';
import CheckoutButtons from './img/CheckoutButtons.png';
import Checkout from './img/Checkout.png';

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
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Where things get funky</Quote>
          </BlockQuote>
        </Slide>
      {/* Slide 5 */}
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
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
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading fit size={1} caps lineHeight={2} textColor="tertiary" bgColor="primary">
            &nbsp;Why are they not really serverless?&nbsp;
          </Heading>
          <List transition={['zoom']}>
            <Appear>
              <ListItem bold padding="10px">
                You control the server resources
              </ListItem>
            </Appear>
            <Appear>
              <ListItem bold padding="10px">
                Code is broken up into neat little individual functions but are running on your nice little container
              </ListItem>
            </Appear>
            <Appear>
              <ListItem bold padding="10px">
                It's always running, so you're always paying
              </ListItem>
            </Appear>
          </List>
        </Slide>
      {/* Slide 7 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary">
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
          <Appear>
              <Text textColor="primary">* These use to be logos, but I didn't have time to clear them with my legal team </Text>
            </Appear>
        </Slide>
      {/* Slide 8 */}
        <Slide transition={['slide']} bgColor="primary" textColor="secondary">
          <Heading fit padding="10px" size={1} caps lineHeight={1} textColor="primary" bgColor="tertiary">
            &nbsp;AWS Lambda&nbsp;
          </Heading>
          <Text>
            &nbsp;
          </Text>
          <Layout>
            <Fill padding="10px">
              <AwsLogo size="75%" lineHeight={5} />
            </Fill>
          </Layout>
        </Slide>
      {/* Slide 9 */}
        <Slide transition={['slide']} bgColor="primary" textColor="secondary">
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
      <Slide transition={['slide']} bgColor="secondary" textColor="primary">
          <Heading fit padding="10px" size={1} caps lineHeight={1} textColor="secondary" bgColor="tertiary">
            &nbsp;Azure Functions&nbsp;
          </Heading>
          <Text textAlign="center" >
            &nbsp;
          </Text>
          <Layout>
            <Fill>
              <AzureLogo size="80%" />
            </Fill>
          </Layout>
        </Slide>
      {/* Slide 11 */}
        <Slide transition={['slide']} bgColor="secondary" textColor="primary">
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
      {/* Slide 12 */}
        <Slide transition={['spin']} bgColor="primary" textColor="secondary">
          <Heading fit padding="10px" size={1} caps lineHeight={1} textColor="primary" bgColor="tertiary">
            &nbsp;Languages&nbsp;
          </Heading>
          <Text textAlign="center" >
            &nbsp;
          </Text>
          <LanguageTable />
          <Text textColor="primary" bgColor="tertiary" textAlign="right" textSize="20px">* available via Docker</Text>
        </Slide>
      {/* Slide 13 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote> JavaScript is the king of serverless! </Quote>
            <Cite> Me </Cite>
          </BlockQuote>
        </Slide>
      {/* Slide 14 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary">
          <Heading>
            Let's talk about an actual serverless application
          </Heading>
        </Slide>
      {/* Slide 15 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary">
          <Heading textColor="primary" bgColor="tertiary">
            What I built
          </Heading>
          <br />
          <Quote textSize="36px" bgColor="secondary" textColor="primary">
            A service that generates links from Square checkout to instantly checkout with an item from your catalog.
          </Quote>
          <br />
          <Text textColor="tertiary" textAlign="left"> What it contains: </Text>
          <List textColor="tertiary">
            <ListItem> OAuth to Square </ListItem>
            <ListItem> User managment via Firebase </ListItem>
            <ListItem> Static site via Firebase Hosting </ListItem>
          </List>
        </Slide>
      {/* Slide 16 */}
        <Slide transition={['slide']} bgImage={checkoutNow} textColor="primary">
        </Slide>
      {/* Slide 17 */}
        <Slide transition={['slide']} bgImage={OAuth} textColor="primary">
        </Slide>
      {/* Slide 18 */}
        <Slide transition={['slide']} bgImage={CheckEmail} textColor="primary">
        </Slide>
      {/* Slide 19 */}
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary">
          <Image src={CheckoutButtons} />
        </Slide>
      {/* Slide 20 */}
        <Slide transition={['slide']} bgImage={Checkout} textColor="primary">
        </Slide>
      {/* Slide 21 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary">
          <Heading fit lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Why my application sucks&nbsp;
          </Heading>
          <List bold textColor="tertiary">
            <Appear>
              <ListItem>
                Cold starts
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Version control
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Testing
              </ListItem>
            </Appear>
          </List>
        </Slide>
      {/* Slide 22 */}
      <Slide transition={['spin']} bgColor="secondary" textColor="primary">
          <Heading fill lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Cold starts&nbsp;
          </Heading>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            Your function hasn't run in a while, or there are a lot of requests and more instances need to be spun up.
          </Text>
          </Appear>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            Why is it bad?
          </Text>
          </Appear>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            Users hate waiting
          </Text>
          </Appear>
        </Slide>
      {/* Slide 23 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary">
          <Heading fit lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Version Control&nbsp;
          </Heading>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            Do you know which version of your function is currently deployed?
          </Text>
          </Appear>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            Of course you do, unless someone else deployed...
          </Text>
          </Appear>
        </Slide>
      {/* Slide 24 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary">
          <Heading fill lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Testing&nbsp;
          </Heading>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            How do you replicate a system that you have no control over?
          </Text>
          </Appear>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            There are some solutions for some providers, but it doesn't work 100%
          </Text>
          </Appear>
        </Slide>
      {/* Slide 25 */}
        <Slide transition={['spin']} bgColor="primary" textColor="primary">
          <Heading fill lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Silver Lining&nbsp;
          </Heading>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            I shouldn't need to worry about scaling *fingers crossed*
          </Text>
          </Appear>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            I never had to configure a server.
          </Text>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
