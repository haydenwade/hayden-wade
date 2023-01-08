import React from 'react';
import {Row,Col} from 'react-bootstrap';
import PicLink from './pic-link';

export default function HostedLinks(){
    return (
            <Row>
                <Col>
                    <PicLink id="apple-podcast-link" src="assets/zpo/apple-podcast-logo.png" height={50}  text="Listen on Apple Podcast" href="https://podcasts.apple.com/us/podcast/zero-plus-one-podcast/id1506681730"/>
                    <PicLink id="google-podcast-link" src="assets/zpo/google-podcast-logo.png" height={50}  text="Listen on Google Podcast" href="https://podcasts.google.com?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS85ODc2MjgucnNz"/>
                    <PicLink id="spotify-podcast-link" src="assets/zpo/spotify-logo.png" height={50}  text="Listen on Spotify" href="https://open.spotify.com/show/3cpIxXo4F5Mf6pf9hpfdCE?si=e_CCa3oEQEuiq_TZL-17CQ"/>
                    <PicLink id="iheartradio-podcast-link" src="assets/zpo/iheartradio-logo.png" height={50} text="Listen on iHeartRadio" href="https://www.iheart.com/podcast/269-zero-plus-one-podcast-61503168/"/>
                    <PicLink id="amazon-music-link" src="assets/zpo/amazon-music-logo.png" height={50} text="Listen on Amazon Music" href="https://music.amazon.com/podcasts/2a6461e8-d128-485e-b9ed-945a48e0d7da/Zero-Plus-One-Podcast"/>
                    <br/>
                    <PicLink id="castro-podcast-link" src="assets/zpo/castro-logo.svg" height={50}  text="Listen on Castro Podcast" href="https://castro.fm/podcast/6bcb3328-c70d-40ac-8f81-3091f49a81b4"/>
                    <PicLink id="buzzsprout-podcast-link" src="assets/zpo/buzzsproutlogo.png" height={50} text="Listen on Buzzsprout" href="https://www.buzzsprout.com/987628"/>
                    <PicLink id="overcast-podcast-link" src="assets/zpo/overcast-logo.svg" height={50}  text="Listen on Overcast Podcast" href="https://overcast.fm/itunes1506681730/zero-plus-one-podcast"/>
                    <PicLink id="tunein-podcast-link" src="assets/zpo/tune-in-logo.png" height={60}  href="http://tun.in/pjOCa" text="Listen on Tune In Live"/>
                    <PicLink id="stitcher-podcast-link" src="assets/zpo/stitcher-logo.png" height={50}  text="Listen on Stitcher" href="https://www.stitcher.com/s?fid=520768&refid=stpr"/>
                </Col>
            </Row>
    );
}