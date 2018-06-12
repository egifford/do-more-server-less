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
  // Fit,
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
import Authorize from './img/Authorize.png';
import GetToken from './img/GetToken.png';
import Catalog from './img/Catalog.png';
import HandleCheckout from './img/HandleCheckout.png';

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
        <Slide transition={['fade']} bgImage={jsCode} bgDarken="0.75" notes={
          `Overview<br/>
          - We'll cover a bit about my background<br/>
          - A little about what is and isn't serverless<br/>
          - The current landscape for serverless providers<br/>
          - Discuss an actual serverless application that I built<br/>
          - Some do's and don'ts for serverless<br/>
          - The benefits you get from going serverless and where it shines`
        }>
          <Heading size={1} caps lineHeight={1} textColor="tertiary" >
            Do More, Server Less
          </Heading>
        </Slide>
      {/* Slide 2 */}
        <Slide transition={['zoom']} bgColor="primary" notes={
          `- Previously did Dev Evangelism at Shippo, a multi-carrier shipping API<br/>
           - Started writing about serverless and ways of using it for webhooks<br/>
           - Came over to Square to continue promoting serverless for payments<br/>
           - I previously wrote an article on using Google Cloud functions for processing webhooks<br/>
           - Also wrote about making a simple serverless ecommerce site using Square checkout and AWS S3 with Lambda`
        }>
          <MtSvgLines animate={ true } duration={ 5000 } playback="infinite alternate both" timing="ease-in-out" >
            <NameSvg />
          </MtSvgLines>
          <Text>&nbsp;</Text>
          <MtSvgLines animate={ true } duration={ 5000 } playback="infinite alternate both" timing="ease-in-out">
            <LogoSvg />
          </MtSvgLines>
        </Slide>
      {/* Sldie 3 */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary" notes={
          `3 key things for telling its actually serverless<br/>
           - You don't actually control the server resources<br/>
           - Code is broken up into neat little individual functions (lookin' at you App Engine!)<br/>
           - If it's not running, you're not paying`
        }>
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
        <Slide transition={['slide']} bgColor="secondary" textColor="primary" notes={
          `Somethings sounds serverless, but they really aren't`
        }>
          <BlockQuote>
            <Quote>Where things get funky</Quote>
          </BlockQuote>
        </Slide>
      {/* Slide 5 */}
        <Slide transition={['slide']} bgColor="secondary" textColor="primary" notes={
          `There are a few tools out there that are <em>sorta</em> serverless but not quite<br/>
          - OpenFaaS <br/>
          - Fn Project <br/>
          - Kubeless <br/>
          - OpenWhisk? I omitted since there is a place to deploy it, but you can run it yourself`
        }>
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
        <Slide transition={['slide']} bgColor="secondary" textColor="primary" notes={
          `Let's look at why I wouldn't really call these services serverless <br/>
          - You still have to manage servers and allocate resources<br/>
          - You might deploy code to your private serverless container, but there is still a container <br/>
          - The server you're managing is always running, so you're always paying for it`
        }>
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
        <Slide transition={['spin']} bgColor="secondary" textColor="primary" notes={
          `So you want to do actual serverless, so you need a provider<br/>
          There are quite a few different providers, but I'll cover the major player right now <br/>
          - AWS with their Lambda service (also Lambda at Edge)<br/>
          - Google Cloud with Cloud functions + Firebase <br/>
          - Microsoft Azure with Azure functions <br/>
          - IBM OpenWhisk (Cloud Functions?) This can be done in a containery way<br/>
          <br/>
          Some others not listed but worth mentioning are Spotnist and Stdlib, but they're likely mostly still leaning on Lambda`
        }>
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
        <Slide transition={['slide']} bgColor="primary" textColor="secondary" notes={
          `Pretty much coined the term serverless<br/>
          - Yes, its a marketing phrase and misleading <br/>
          - Started back in 2015, they have officially been doing it the longest <br/>
          - Initially it was structured a lot around your own cloud's events to better react to changes in your system <br/>
          - Be wary of HTTP calls, it gets expensive very fast <br/>
          - Tooling is a bit difficult to use but there are services that help facilitate deployment like Serverless and ClaudiaJS`
        }>
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
        <Slide transition={['slide']} bgColor="primary" textColor="secondary" notes={
          `Google's answer to Lambda <br/>
          - Great for handling http <br/>
          - Useful tooling with local testing (doesn't always work) <br/>
          - The most limited in available languages, since they only offer JavaScript (not that I'm complaining about that)<br/>
          - Can be used directly with Firebase and would recommend trying it out if you're interested, since the Firebase tools are a breaze to use <br/>
          - Although Serverless says they support Google Cloud, it really pails in comparison to support for Lambda`
        }>
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
        <Slide transition={['slide']} bgColor="secondary" textColor="primary" notes={
          `Offers C# and F# support for the Windows folks <br/>
          - Has been fairly competative on pricing <br/>
          - Very big on browser IDE and VS Code integrations <br/>`
        }>
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
        <Slide transition={['slide']} bgColor="secondary" textColor="primary" notes={
          `Most versatile in language support due to leaning on Apache OpenWhisk <br/>
          - A fairly challening an somewhat confusing console for getting started <br/>
          - You can bundle up your code and containerize it for IBM to manage through Apache OpenWhisk <br/>
          - I've not really work with OpenWhisk, so I don't really know of the benefits vs drawbacks of going that route`
        }>
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
        <Slide transition={['spin']} bgColor="primary" textColor="secondary" notes={
            `Here we have a limited look at language support <br/>
            - I would argue that AWS has the most solid support in each of their respective languages <br/>
            - Although you can write code in each of these language for each of these platforms, there can be serious performance drawbacks depending on the platform or language <br/>
            - There have been a few writeups going over the performance difference between languages, but generally one this is true... <br/>`
        }>
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
        <Slide transition={['spin']} bgColor="secondary" textColor="primary" notes={
          `It should come at no surprise, its the oldest language for serverless and as such, has been optimized the most <br/>
          Being a JavaScript person myself, I'm pretty happy about this.`
        }>
          <BlockQuote>
            <Quote> JavaScript is the king of serverless! </Quote>
            <Cite> Me </Cite>
          </BlockQuote>
        </Slide>
      {/* Slide 14 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary" notes={
          `Now that we've explored the landscape, lets take a look at an actual serverless application and how its setup`
        }>
          <Heading>
            Let's talk about an actual serverless application
          </Heading>
        </Slide>
      {/* Slide 15 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary" notes={
          `Square Checkout Now <br/>
          - Allows you to let your customer click a link to instantly checkout an item from your catalog <br/>
          - We have a couple functions for handling OAuth to Square <br/>
          - We manage our users via Firebase and have a passwordless login via magic email links <br/>
          - Static hosting through Firebase since it sorta just came with their user management <br/>
          - Generation of shortlinks so you can use them for social selling or just creating a button with the link as your href`
        }>
          <Heading textColor="primary" bgColor="tertiary">
            What I built
          </Heading>
          <br />
          <Appear>
          <Quote textSize="36px" bgColor="secondary" textColor="primary">
            A service that generates links from Square checkout to instantly checkout with an item from your catalog.
          </Quote>
          </Appear>
          <br />
          <Appear>
          <Text textColor="tertiary" textAlign="left"> What it contains: </Text>
          </Appear>
          <List textColor="tertiary">
            <Appear>
              <ListItem> OAuth to Square </ListItem>
            </Appear>
            <Appear>
              <ListItem> User managment via Firebase </ListItem>
            </Appear>
            <Appear>
              <ListItem> Static site via Firebase Hosting </ListItem>
            </Appear>
            <Appear>
              <ListItem> Buy now short links for selling online wherever links are supported </ListItem>
            </Appear>
          </List>
        </Slide>
      {/* Slide 16 */}
        <Slide transition={['slide']} bgImage={checkoutNow} textColor="primary" notes={
          `Here we have our main login screen`
        }>
        </Slide>
      {/* Slide 17 */}
        <Slide transition={['slide']} bgImage={OAuth} textColor="primary" notes={
          `The button will initiate our redirect to the Authentication URL provided by our authenticate cloud function`
        }>
        </Slide>
      {/* Slide 18 */}
        <Slide transition={['slide']} bgImage={CheckEmail} textColor="primary" notes={
          `We get redirected back and send out auth code to our "code" function to create the user in Firebase and store their Square access token and send their login email`
        }>
        </Slide>
      {/* Slide 19 */}
        <Slide transition={['slide']} bgColor="tertiary" textColor="primary" notes={
          `Once we click the link, we're directed into out app and auto-logged in and sent back our list of catalog items with their accompanying short links`
        }>
          <Image src={CheckoutButtons} />
        </Slide>
      {/* Slide 20 */}
        <Slide transition={['slide']} bgImage={Checkout} textColor="primary" notes={
          `If we click any of those links, we'll look-up the Square user and catalog item associated with this URL <br/>
          - Then generate a checkout URL through the Square Checkout API with the specified catalog item as a line item for that order <br/>
          - The example here more demonstrates digital goods, since we're not capturing shipping info, but we could. <br/>
          - It might become more complicated if you wanted dynamic shipping rates, but works exceedingly well for flat-rate shipping`
        }>
        </Slide>
      {/* Slide 21 */}
        <Slide transition={['slide']} bgColor="primary" textColor="primary" notes={
          `This is our Authorization function that simply does the job of generating our URL to redirect the user to when authenticating them <br/>
           I'll openly admit that is something that could likely just be coded into the client-side application <br/>
           I just wanted to be sure to generate the state value myself and store it in a session cookie to verify later`
        }>
          <Heading fit lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Authorization URL&nbsp;
          </Heading>
          <Image src={Authorize} />
        </Slide>
      {/* Slide 22 */}
        <Slide align="center flex-start" transition={['slide']} bgColor="primary" textColor="primary" notes={
          `- We take our code and then query Square to get our token<br/>
           - Create an account in Firebase for that user<br/>
           - Storing the Square access token for that user<br/>
           - Sending a sign-in email link to the associated email address`
        }>
          <Heading fill lineHeight={1} textColor="primary" bgColor="tertiary">
            &nbsp;Get Token&nbsp;
          </Heading>
          <Image src={GetToken} />
        </Slide>
      {/* Slide 23 */}
        <Slide align="center flex-start" transition={['slide']} bgColor="primary" textColor="primary" notes={
          `- We're just taking our token from the front-end, looking up our Square Merchant, and pulling their whole catalog to iterate over and assemble all of our shortlinks<br/>
           - We have our URL's constructed to be /Merchant ID/Catalog ID and then create a shortlink<br/>`
        }>
          <Heading fill lineHeight={1} textColor="primary" bgColor="tertiary">
            &nbsp;Get Catalog&nbsp;
          </Heading>
          <Image src={Catalog} />
        </Slide>
      {/* Slide 24 */}
        <Slide align="center flex-start" transition={['slide']} bgColor="primary" textColor="primary" notes={
          `- Here we actually wrapped our cloud function with an Express application<br/>
           - This lets up better parse the Square Merchant ID and Catalog ID from the URI route<br/>`
        }>
          <Heading fit lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Handle Checkout&nbsp;
          </Heading>
          <Image src={HandleCheckout} />
        </Slide>
      {/* Slide 25 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary" notes={
          `So, since my application it should be awesome and infititely scalable, right?<br/>
          - My application actually sucks in a few ways<br/>
          - Cold Starts
          - Version Control
          - Testing`
        }>
          <Heading fit lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Where my application sucks&nbsp;
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
      {/* Slide 26 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary" notes={
        `- Cold starts are painful, if a lot of people click on the links at one time, they'll have to wait for a new instance of my function to be spun up to service their request<br/>`
        }>
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
      {/* Slide 27 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary" notes={
          `- Version control can be really annoying. Its not always easy to see which version of your functions are currently deployed. This is something that the providers are working on, but if I had another developer working on my app, I'd have a hard time troubleshooting why behavior suddenly changed<br/>`
        }>
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
      {/* Slide 28 */}
        <Slide transition={['spin']} bgColor="secondary" textColor="primary" notes={
          `- Testing can be rather difficult. Google cloud offers local function testing, but it doesn't always work as expected and can be hard when trying to react to and test cloud provider events<br/>
           - We can hope the cloud providers come up with solutions for this, since its really annoying to do a deploy/run/test cycle over and over.`
        }>
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
      {/* Slide 29 */}
        <Slide transition={['spin']} bgColor="primary" textColor="primary" notes={
          `If I don't care about the small percentage of users getting a slow initial response, I am not needing to manage my scaling<br/>
           I never had to configure a server, ssh in to troubleshoot, and maybe I don't even <em>need</em> devops`
        }>
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
      {/* Slide 30 */}
        <Slide transition={['spin']} bgColor="primary" textColor="primary" notes={
          `There are quite a few areas that serverless can really shine for you:<br/>
          - Doing async tasks in your cloud environment, like servicing webhooks, doing image or file process<br/>
          - ETL processing, something we actually did when I was at Shippo. We were able to build and load our data warehouse using Lambda functions<br/>
          - Batch processing. Rather than running some chron job at specific intervals (although you can do certain intervals), you can just run the batch when it hits a certain threshold`
        }>
          <Heading fit lineHeight={2} textColor="primary" bgColor="tertiary">
            &nbsp;Where serverless can shine&nbsp;
          </Heading>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            ASYNC Tasks like webhooks, image processing, etc...
          </Text>
          </Appear>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            ETL processing
          </Text>
          </Appear>
          <br />
          <Appear>
          <Text textColor="tertiary" textSize="40px" bold>
            Batch processing
          </Text>
          </Appear>
        </Slide>
      {/* Slide 31 */}
        <Slide transition={['zoom']} bgColor="primary">
          <MtSvgLines animate={ true } duration={ 5000 } playback="infinite alternate both" timing="ease-in-out" >
            <NameSvg />
          </MtSvgLines>
          <Text>&nbsp;</Text>
          <MtSvgLines animate={ true } duration={ 5000 } playback="infinite alternate both" timing="ease-in-out">
            <LogoSvg />
          </MtSvgLines>
        </Slide>
      </Deck>
    );
  }
}
