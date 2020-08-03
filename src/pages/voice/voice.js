import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout'; import { Grid, Row, Col, Button, Image } from 'react-bootstrap';

const Voice = () => {
    return (
        <Grid>
            <Row>
            <Col md={6} >
                    <h1 className='red-underline-text'>Leverage voice <br />to grow your business.</h1>
                    <h2>Execute faster and build a stronger <br />brand with voice.</h2>
                </Col>
                <Col md={6}>
                    <Row>
                        <div className='page-img'>
                            <Image src='assets/voicebanner3.png' alt='voice by hayden' rounded responsive />
                            <Button href='mailto:solutions@haydenwade.com?subject=I Need Voice ASAP&body=Hi Hayden, I would love to chat about how voice can save my company time and money.' bsSize='lg'>Contact Me<br />To Get Started</Button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12} xs={12}>
                    <h3 className='hr-black'>Voice By Hayden</h3>
                    <h4>Do more with less. The power of voice is the future.</h4>
                </Col>
            </Row>
            <Row>
                <Col md={6} xs={12} className="text-center">
                    <i className="fa fa-pencil-square-o fa-5x"></i>
                    <br />
                    <h4>Briefing Content Manager</h4>
                        Briefing Content Manager (BCM) provides a way to manage Alexa flash briefing content at anytime from anywhere.
                        BCM makes distributing content instantly to clients, followers, and employees easy and does not require skills of a developer.
                        BCM supports media-files (mp3 and mp4) and text-to-speech (TTS). <a href="/briefing-content-manager">Read more.</a>
                </Col>
                <Col md={6} xs={12} className="text-center">
                    <i className="fa fa-microphone fa-5x"></i>
                    <br />
                    <h4>Custom Skill Development</h4>
                        For more complex tasks I will work one on one to build a custom skill to automate and stream line processes, as well as create a voice that expands your brand.
                        I can build voice skills for several platforms, as well as, for chat rooms. <a href='mailto:solutions@haydenwade.com?subject=Can You Build Me a Custom Skill&body=Hi Hayden, I am interested in building a custom skill and...'>Contact Me.</a>
                    {/* <a href="/custom-skills">Read more.</a> */}
                </Col>
            </Row>
            <Row>
                <Col md={12} xs={12}>
                    <h3>Brand Building with Voice</h3>
                        Can you sing the McDonald's jingle? Do you know what television channel Morgan Freeman narrates for? Some of the biggest brands today have succeed by using audio,
                        whether if it was a jingle or a person's voice. Voice skills are no different. Choosing to use mp3 files as the responses for voice skills can create an identity
                        that people can remember and connect with. If you choose to use text-to-speech voice you may want to consider using Speech Synthesis Markup Language (SSML), fancy words for adding
                        volume and pitch to text. Humans build stronger connections when they have emotional reactions during conversation. This could make a huge difference in your skill. For example,
                        you are building a fitness skill, users are more likely to engage with it if the voice has an energetic and motivational tone.
                    </Col>
            </Row>
            <Row>
                <Col md={12} xs={12}>
                    <h3>Choosing a Platform and Device</h3>
                    <div className='text-center'>
                        <i className="p-right fa fa-amazon fa-5x"></i>
                        <i className="p-right fa fa-windows fa-5x"></i>
                        <i className="p-right fa fa-google fa-5x"></i>
                        <i className="fa fa-apple fa-5x"></i>
                    </div>
                    <br />
                        When it comes to choosing the platforms and devices you want your application to support it can be very difficult because you want it to be available to everyone.
                        Well let me tell you with voice it is easier, kind of. The list of platforms to choose from include Amazon's Alexa, Microsoft's Cortana, Google's Assistant,
                        and Apple's Siri. Here are some considerations:
                        <ul>
                        <li>Alexa - available as a downloadable app on all mobile operating systems (Android, iOS, Windows)</li>
                        <li>Alexa - native to devices like echo dot and echo show which have the largest number of sales for home/office devices (Source: Strategy Analytics)</li>
                        <li>Cortana - enabled by default on all Windows 10 devices and can also be installed as a downloadable app on all mobile operating systems</li>
                        <li>Google Assistant - the voice for all Android phone users and can also be installed as a downloadable app on all mobile operating systems</li>
                        <li>Siri - only available on apple products and voice apps are downloaded like regular apps on iOS unlike the others where they have a dedicated store for voice skills</li>
                    </ul>
                    <br />
                        By looking at the list above choosing the voice platform and devices is based on which operating system you want to target and how you want the user to access
                        your skill (natively - can invoke without having to open an app, or non-native - open app to invoke skill). Some other considerations when picking a platform is
                        how natural and authentic the voice is. For example, Cortana isn't as fluent as Alexa, so you may want to go with Alexa if you plan to use text-to-speech. On the other hand,
                        you may not care how natural or authentic the voice is because you plan to use mp3s to communicate with the user.
                    </Col>
            </Row>
            <Row>
                <Col md={12} xs={12}>
                    <h3>Why Voice is Faster</h3>
                        There are only 24 hours in a day and our days get more and more busy with kids, work, and chores.
                        To think you can save time by setting a alarm clock via voice rather than by hand is mind blowing. Here are some facts:
                        the average typing speed is around 33 words per minute and the average speed of speaking is around 120 words per minute.
                        If you do some quick math speaking is <b>4X</b> faster than typing. If you think about the amount of time you spend
                        a day typing (texting, emails, searching websites, clicking buttons, etc.) and cut that in half twice, that's how much time you would save by using voice.
                        Correction, you would save all the time you spent typing if you did it via voice because you can <b>multi-task </b>
                        with voice. Voice doesn't require your <b>visual and physical attention</b>.
                        If you want to go a bit overboard you could shower and order dinner in one sentence.
                        <br />
                        Voice is excellent at handling tasks that are multi step. For example, texting a friend:
                        <br />
                    <strong>Normal process:</strong> unlock phone, find and open texting app, choose contact, type text, and click send. (5 steps)
                        <br />
                    <strong>Now with voice:</strong> speak the command "Hey Siri, text Susie V. that I will be late to the board meeting." (1 step)
                        <br />
                        This is a very simple example to understand but imagine if you applied this to day-to-day operations, it would be a game changer. Software plays a key part in
                        process automation but with voice you take it one step further because you can now do the same thing that would take multiple steps in just one sentence; do more with less.
                        <div className="text-center">
                        <br />
                        <i className="fa fa-microphone fa-2x"></i>
                        <br />
                            "The reason there are 60 year old men in here texting… it's faster. […]
                            Speed is something we are addicted to. Do you know why you don't care about privacy? 'Cause you're willing to give it up for speed." ~ Gary Vaynerchuk
                            <br />
                        <br />
                            "Voice, Like Emojis, Lets Us Say More Faster" ~ Paul Cutsinger
                            <br />
                        <br />
                        <a rel="noopener noreferrer" target="_blank" href="https://developer.amazon.com/blogs/alexa/post/26c76734-3445-4d5f-8c78-aa1eae4100cf/gary-vaynerchuk-voice-will-explode-and-drive-companies-the-size-of-facebook-instagram">Alexa Blogs: Gary Vaynerchuk: Voice Will ‘Explode’ and Drive Companies the Size of Facebook, Instagram</a>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default withPageLayout(Voice);