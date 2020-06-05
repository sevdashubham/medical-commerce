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

const StyledHero6 = styled.div`
 position: relative;
  padding: 0 100px 100px 0;
 background: #FFFFFF;
 `

const StyledHero6Container = styled.div`
 position: relative;
  padding: 200px 100px 100px 100px;
 background: #FFFFFF;
 `
const StyledHero6Title = styled.h1`
  position: absolute;
  z-index: 20;
  left: 0;
  top: -80px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
 `

const StyledHero6Description = styled.h5`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 0;
color: #15253B;
max-width: 350px;
 `

const StyledHero6ProfileName = styled.h3`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.2em;
line-height: 2.5em;
margin: 0;
color: #15253B;
max-width: 350px;
 `

const StyledHero6ProfileText = styled.h4`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.2em;
margin: 0;
color: #15253B;
max-width: 350px;
 `
const StyledHero7 = styled.div`
 position: relative;
  padding: 100px;
 background: #ECC2AC;
 `

const StyledHero8 = styled.div`
 position: relative;
  padding: 250px 0 150px 150px;
 background: #FFFFFF;
 `
const StyledHero8Title = styled.h1`
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

const StyledHero8Description = styled.h5`
  position: absolute;
  z-index: 20;
  right: 0;
  top: 150px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 0 350px 0 0;
color: #15253B;
max-width: 350px;
 `

const StyledHero8Description2 = styled.h5`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 20px 0 30px 0;
color: #15253B;
max-width: 350px;
 `
const StyledHero8ClientName = styled.h3`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.2em;
line-height: 4em;
margin: 0;
color: #15253B;
 `

const StyledHero8ClientText = styled.h4`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: .9em;
line-height: 2em;
margin: 0;
color: #15253B;
 `

const StyledTableRowLeft = styled.div`
height: 4em;
width: 100%;
border: 1px solid rgba(21, 37, 59, 0.2);
border-left: none;
 `
const StyledTableRowTop = styled.div`
padding: 10px 40px;
height: 4em;
width: 100%;
border: 1px solid rgba(21, 37, 59, 0.2);
border-left: none;
border-top: none;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.5em;
letter-spacing: 0.02em;
color: #000000;
 `

const StyledTableRowRight = styled.div`
height: 4em;
width: 100%;
border-bottom: 1px solid rgba(21, 37, 59, 0.2);
padding: 10px 40px;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.5em;
letter-spacing: 0.02em;
color: #000000;
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
        <StyledHero6>
          <StyledHero6Title>{'EXPERTS'}</StyledHero6Title>
          <StyledHero6Container>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <Grid item xs={6} container
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                <StyledHero6Description>{'Our expert council of doctors come from some of the most renowned hospitals across India'}</StyledHero6Description>
              </Grid>
              <Grid item xs={6} container
                    direction="row"
                    justify="flex-end"
                    alignItems="center">
                <StyledHero5Wave src={require('../static/assets/landing/wave-blue@3x.png')}/>
              </Grid>
            </Grid>
          </StyledHero6Container>
          <Grid container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={8} container
                  direction="row"
                  justify="flex-end"
                  alignItems="center">
              <Grid xs={4}>
                <div style={{background: '#15253B', height: '20em', width: '90%'}}/>
                <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
              </Grid>
              <Grid xs={4}>
                <div style={{background: '#15253B', height: '20em', width: '90%'}}/>
                <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
              </Grid>
              <Grid xs={4}>
                <div style={{background: '#15253B', height: '20em', width: '90%'}}/>
                <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
              </Grid>
            </Grid>
            <Grid item xs={4}/>
          </Grid>
        </StyledHero6>
        <StyledHero2WaveLower src={require('../static/assets/landing/longWaves@3x.png')}/>

        <StyledHero7>
          <Grid container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={4} style={{paddingRight: 10}}>
              <div style={{background: '#15253B', height: '50em'}}/>
            </Grid>
            <Grid item xs={4} style={{padding: '0 20px'}}>
              <Grid container direction="column" justify="flex-end">

                <div>
                  <div style={{borderLeft: '1px solid #15253B', height: '20em'}}/>
                </div>
                <div>
                  <StyledHero5barTitle>
                    {'some\n' +
                    'quote\n' +
                    'goes\n' +
                    'here'}
                  </StyledHero5barTitle>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container
                    direction="column">
                <Grid item style={{paddingBottom: '1em'}}>
                  <div style={{background: '#15253B', height: '24.5em'}}/>
                </Grid>
                <Grid item>
                  <div style={{background: '#15253B', height: '24.5em'}}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledHero7>

        <StyledHero8>
          <StyledHero8Title>{'HALF THE'}</StyledHero8Title>
          <StyledHero8Description>{'By cutting out the middleman, we can provide you quality medication and doctor consultation, without overcharging you'}</StyledHero8Description>
          <Grid container style={{padding: '100px 200px'}}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                <StyledTableRowTop>{'TREATMENT'}</StyledTableRowTop>
                </Grid>
                <Grid item xs={4}>
                  <StyledTableRowTop>{'OTHER GUYS'}</StyledTableRowTop>
                </Grid>
                <Grid item xs={4}>
                  <StyledTableRowRight>{'YO MAN'}</StyledTableRowRight>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <StyledTableRowTop></StyledTableRowTop>
                </Grid>
                <Grid item xs={4}>
                  <StyledTableRowTop></StyledTableRowTop>
              </Grid>
                <Grid item xs={4}>
                  <StyledTableRowRight></StyledTableRowRight>
                </Grid>

              </Grid>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <StyledTableRowTop></StyledTableRowTop>
                </Grid>
                <Grid item xs={4}>
                  <StyledTableRowTop></StyledTableRowTop>
              </Grid>
                <Grid item xs={4}>
                  <StyledTableRowRight></StyledTableRowRight>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <StyledTableRowTop></StyledTableRowTop>
                </Grid>
                <Grid item xs={4}>
                  <StyledTableRowTop></StyledTableRowTop>
              </Grid>
                <Grid item xs={4}>
                  <StyledTableRowRight></StyledTableRowRight>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} style={{paddingRight: 70}}>
              <Grid container direction="row">
                <Grid item xs={6} style={{padding: '0 20px 40px 0'}}>
                  <div style={{background: '#15253B', height: '14.5em'}}/>
                  <StyledHero8ClientName>
                    {'Vivek Nair'}
                  </StyledHero8ClientName>
                  <StyledHero8ClientText>
                    {'Suspendisse potenti. Nulla accumsan ornare rhoncus. Nulla ligula libero, dictum ac pulvinar.'}
                  </StyledHero8ClientText>
                </Grid>
                <Grid item xs={6} style={{padding: '0 20px 40px 0'}}>
                  <div style={{background: '#15253B', height: '14.5em'}}/>
                  <StyledHero8ClientName>
                    {'Vivek Nair'}
                  </StyledHero8ClientName>
                  <StyledHero8ClientText>
                    {'Suspendisse potenti. Nulla accumsan ornare rhoncus. Nulla ligula libero, dictum ac pulvinar.'}
                  </StyledHero8ClientText>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={6} style={{paddingRight: 20}}>
                  <div style={{background: '#15253B', height: '14.5em'}}/>
                  <StyledHero8ClientName>
                    {'Vivek Nair'}
                  </StyledHero8ClientName>
                  <StyledHero8ClientText>
                    {'Suspendisse potenti. Nulla accumsan ornare rhoncus. Nulla ligula libero, dictum ac pulvinar.'}
                  </StyledHero8ClientText>
                </Grid>
                <Grid item xs={6} style={{paddingRight: 20}}>
                  <div style={{background: '#15253B', height: '14.5em'}}/>
                  <StyledHero8ClientName>
                    {'Vivek Nair'}
                  </StyledHero8ClientName>
                  <StyledHero8ClientText>
                    {'Suspendisse potenti. Nulla accumsan ornare rhoncus. Nulla ligula libero, dictum ac pulvinar.'}
                  </StyledHero8ClientText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <StyledHero5barTitle>
                {'FROM THE HAPPY CLIENT'}
              </StyledHero5barTitle>
              <StyledHero8Description2>
                {'Mauris nec neque porttitor, facilisis odio in, iaculis purus'}
              </StyledHero8Description2>
              <StyledHero5Wave src={require('../static/assets/landing/wave-blue@3x.png')}/>

            </Grid>
          </Grid>
        </StyledHero8>
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
