import React, {Component} from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

const StyledHero10 = styled.div`
  position: relative;
  padding: 125px 150px;
  background: #15253B;`

const StyledHero10Topbar = styled.div`
  position: relative;
  padding: 105px 150px;
  background: #ECC2AC;`

const StyledHero10Wave = styled.img`
 height: 5em;
 `
const StyledHero10News = styled.img`
 height: 6.5em;
 background: #ECC2AC;
 `

const StyledHero10Text = styled.h1`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
text-align: center;
margin: 0;
color: #FFFFFF;`

const StyledHero10Description = styled.h4`
margin: 0 0 2em 0;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
text-align: center;
color: rgba(255, 255, 255, 0.5);`

const StyledHero1 = styled.div`
  position: relative;
  padding: 25px 10px 40px 10px;
  background: #ECC2AC;`

const StyledHero1Container = styled.div`
  display: flex;
  flex-direction: row`

const StyledHero1Image = styled.img`
 height: 100%;
 width: 95%;
 `
const StyledHero1WaveLower = styled.img`
position: absolute;
bottom: 5em;
right: 40px;
 height: 5em;
 `
const StyledHero1WaveUpper = styled.img`
position: absolute;
top: 5em;
left: 17em;
 height: 5em;
 `
const StyledHero1Column = styled.div`
 display: flex;
  flex-direction: column`

const StyledHero1Bar = styled.div`
opacity: 0.5;
margin-left: 30px;
border-left: 1px solid rgba(21, 37, 59, 0.5);
height: 75%;`

const StyledHero1Text = styled.h5`
display: inline-block;
margin: 0;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: .8em;
letter-spacing: 0.02em;
text-transform: lowercase;
margin-top: 40px;
color: #15253B;

transform: rotate(-90deg);
 `

const StyledHero2 = styled.div`
  position: relative;
  padding: 100px 150px 50px 150px;
  background: #FFFFFF;`


const StyledHero2Title = styled.h1`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
  `

const StyledHero2Image = styled.img`
 width: 100%;
 `
const StyledHero2WaveLower = styled.img`
 width: 100%;
 `

const StyledHero2Wave = styled.img`
 position: absolute;
 height: 5em;
 left: 0;
 bottom: 50px;
 `

const StyledHero2Text = styled.h2`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4em;
margin: 0 0 0 50px;
color: #15253B;
line-height: 1.3em;
  `

const StyledHero2Description = styled.h4`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
margin: 0 0 20px 0;
letter-spacing: 0.02em;
color: #15253B;
line-height: 1.5em;
  `
const StyledHero3 = styled.div`
  position: relative;
  padding: 100px 0;
 background: #15253B;`

const StyledHero3ImageContainer = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: -30px 0 0 0;
 background: #FFFFFF;`

const StyledHero3Wave = styled.img`
 width: 100%;
 `

const StyledHero5Wave = styled.img`
 height: 5em;
 `

const StyledHero3Image = styled.img`
 height: 120px;
 `
const StyledHero3Title = styled.h2`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4em;
line-height: 1.2em;
margin: 20px 0;
color: #FFFFFF;
 `

const StyledHero3Step = styled.h6`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.2em;
margin: 20px 0;
color: #FFFFFF;
 `
const StyledHero3StepText = styled.h5`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.2em;
line-height: 1.8em;
margin: 20px 30px 20px 0;
color: rgba(255, 255, 255, 0.5);
 `

const StyledHero4 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 150px;
 background: #FFFFFF;
 `
const StyledHero4Image = styled.img`
  height: 30em;
 `

const StyledHero5 = styled.div`
 position: relative;
  padding: 0 0 100px 100px;
 background: #ECC2AC;
 `

const StyledHero5Title = styled.h1`
  position: absolute;
  z-index: 20;
  right: 0;
  top: -80px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
 `

const StyledHero5Container = styled.div`
 position: relative;
  padding: 200px 100px;
 background: #ECC2AC;
 `

const StyledHero5bar = styled.div`
 position: relative;
  padding: 150px 200px;
 background: rgba(236,194,172, 0.5);
 `

const StyledHero5Text = styled.h3`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 5em;
line-height: 1.1em;
margin: 20px 0;
color: #15253B;
max-width: 700px;
text-transform: uppercase;
 `

const StyledHero5Description = styled.h5`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 0;
color: #15253B;
max-width: 600px;
 `

const StyledHero5barTitle = styled.h2`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4.5em;
line-height: 1.2em;
margin: 0;
color: #15253B;
max-width: 600px;
text-transform: uppercase;
 `

const StyledHero5barDescription = styled.h5`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 2em;
margin: 0 0 20px 0;
color: #15253B;
max-width: 600px;
 `

export default class Landing extends Component {

  render() {
    return (
      <div>
        <StyledHero1>
          <StyledHero1Container>
            <StyledHero1Column>
              <StyledHero1Bar/>
              <StyledHero1Text>
                {'KEEP GOING'}
              </StyledHero1Text>
            </StyledHero1Column>

            <StyledHero1Image src={require('../static/assets/landing/hero-image1.png')}/>
          </StyledHero1Container>
          <StyledHero1WaveLower src={require('../static/assets/landing/wave-blue@3x.png')}/>
          <StyledHero1WaveUpper src={require('../static/assets/landing/wave-blue@3x.png')}/>
        </StyledHero1>
        <div style={{marginTop: -80, position: 'relative', zIndex: 10}}>
          <StyledHero2Title>
            {'IT’S POSSIBLE'}
          </StyledHero2Title>
          <StyledHero2>
            <Grid container>
              <Grid item container xs={4} justify="center"
                    alignItems="flex-start" style={{position: 'relative'}}>
                <StyledHero2Text>{'HAIR\n' + 'DOESN’T\n' + 'GROW\n' + 'IN A SNAP'}</StyledHero2Text>
                <StyledHero2Wave src={require('../static/assets/landing/wave-blue@3x.png')}/>
              </Grid>
              <Grid item container xs={4} justify="center"
                    alignItems="center">
                <StyledHero2Image src={require('../static/assets/landing/nature1@3x.png')}/>
              </Grid>
              <Grid item container xs={4} justify="center"
                    alignItems="flex-end">
                <div style={{marginBottom: 50}}>
                  <StyledHero2Description>{'A little time and a splash of science\n' +
                  'can work wonders.'}</StyledHero2Description>
                  <Button primary title={'GET STARTED'}/>
                </div>
              </Grid>
            </Grid>

          </StyledHero2>
        </div>
        <StyledHero2WaveLower src={require('../static/assets/landing/longWaves@3x.png')}/>
        <StyledHero3>
          <Grid container>
            <Grid item container xs={1} justify="center"
                  alignItems="center">
              <StyledHero3Wave src={require('../static/assets/landing/wave-pink@3x.png')}/>
            </Grid>
            <Grid xs={3}>
              <StyledHero3Title>{'IT’S PRETTY DAMN SIMPLE'}</StyledHero3Title>
              <Button title={'GET STARTED'}/>
            </Grid>
            <Grid xs={8}>
              <Grid style={{borderTop: '1px solid #fff', paddingBottom: 75}}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <Grid item xs={2}>
                  <StyledHero3Step>{'STEP 1'}</StyledHero3Step>
                </Grid>
                <Grid item xs={4}>
                  <StyledHero3ImageContainer>
                    <StyledHero3Image src={require('../static/assets/landing/info1@3x.png')}/>
                  </StyledHero3ImageContainer>
                </Grid>
                <Grid item xs={6}>
                  <StyledHero3StepText> {'Answer a few basic questions and get in touch with one of our doctors for consultation'}</StyledHero3StepText>
                </Grid>
              </Grid>
              <Grid style={{borderTop: '1px solid #fff', paddingBottom: 75}}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <Grid item xs={2}>
                  <StyledHero3Step>{'STEP 2'}</StyledHero3Step>
                </Grid>
                <Grid item xs={6}>
                  <StyledHero3StepText> {'Get FDA approved medicines tailored to your condition at the convenience of your home'}</StyledHero3StepText>
                </Grid>
                <Grid item xs={4}>
                  <StyledHero3ImageContainer>
                    <StyledHero3Image src={require('../static/assets/landing/info2@3x.png')}/>
                  </StyledHero3ImageContainer>
                </Grid>
              </Grid>
              <Grid style={{borderTop: '1px solid #fff', paddingBottom: 75}}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                <Grid item xs={2}>
                  <StyledHero3Step>{'STEP 3'}</StyledHero3Step>
                </Grid>
                <Grid item xs={4}>
                  <StyledHero3ImageContainer>
                    <StyledHero3Image src={require('../static/assets/landing/info3@3x.png')}/>
                  </StyledHero3ImageContainer>
                </Grid>
                <Grid item xs={6}>
                  <StyledHero3StepText>{'Track your progress and receive continuous support along the way'}</StyledHero3StepText>
                </Grid>

              </Grid>
              <Grid style={{borderTop: '1px solid #fff', paddingBottom: 75}}/>
            </Grid>
          </Grid>
        </StyledHero3>
        <StyledHero4>
          <StyledHero4Image src={require('../static/assets/landing/nature1@3x.png')}/>
        </StyledHero4>

        <StyledHero5>
          <StyledHero5Title>{'WHY'}</StyledHero5Title>
          <StyledHero5Container>
            <Grid container
                  direction="column">
              <Grid item style={{marginBottom: 100}}>
                <StyledHero5Wave src={require('../static/assets/landing/wave-blue@3x.png')}/>
                <StyledHero5Text>{'Doctor supported, FDA-approved'}</StyledHero5Text>
                <StyledHero5Description>{'Get access to quality medication and doctor’s consultation, all from the comfort and privacy of your home, as and when you want it'}</StyledHero5Description>
              </Grid>
              <Grid item>
                <StyledHero5Wave src={require('../static/assets/landing/wave-blue@3x.png')}/>
                <StyledHero5Text>{'DELIVERED TO YOUR DOORSTEP'}</StyledHero5Text>
                <StyledHero5Description>{'Get access to quality medication and doctor’s consultation, all from the comfort and privacy of your home, as and when you want it'}</StyledHero5Description>
              </Grid>
            </Grid>
          </StyledHero5Container>
        </StyledHero5>
        <StyledHero5bar>
          <Grid container>
            <Grid item xs={6} container justify="center"
                  alignItems="center">
              <StyledHero5barTitle>{'still not\n' +
              'convinced?'}</StyledHero5barTitle>
            </Grid>
            <Grid item xs={6}>
              <StyledHero5barDescription>{'With less than 1% chance of a temporary side effect, even if a side effect does occur, we’ve got you covered with a health insurance of up to Rs. 1,00,000'}
              </StyledHero5barDescription>
              <Button active title={'GET STARTED'}/>
            </Grid>
          </Grid>
        </StyledHero5bar>

        <StyledHero10Topbar>
          <Grid container
                spacing={0}
                direction="row"
                justify="space-evenly"
                alignItems="center">
            <Grid xs={6}>
              <StyledHero10News src={require('../static/assets/landing/news@3x.png')}/>
            </Grid>
            <Grid xs={6}>
              <StyledHero10News src={require('../static/assets/landing/news@3x.png')}/>
            </Grid>
          </Grid>
        </StyledHero10Topbar>
        <StyledHero10>
          <StyledHero10Text>{'YOUR TURN'}</StyledHero10Text>
          <StyledHero10Description>{'Answer a few questions and we’ll handle the rest.'}</StyledHero10Description>
          <Grid container justify="center"
                alignItems="center">
            <Button title={'GET STARTED'}/>
          </Grid>
          <Grid container justify="center"
                alignItems="center">
            <Grid item container xs={6} justify="center"
                  alignItems="center">
              <StyledHero10Wave src={require('../static/assets/landing/wave-pink@3x.png')}/>
            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>
        </StyledHero10>
      </div>
    )
  }
}
