import styled from 'styled-components'
import Video from '../videos/video.mp4'

const Container = styled.div`
    margin-top: -60px;
    margin-left: 0;
    margin-right: 0;
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100hv;
    height: 860px;
    position: relative;
    z-index: 1;

    /* :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),
            linear-gradient(180deg,rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    } */

    /* @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    } */
`
const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232134;
`

const HomeSection = () => {
    return (
        <Container id='home' >
            <Background>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </Background>
        </Container>
    )
}

export default HomeSection