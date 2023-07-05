import React, { useEffect, useState } from "react"
import "./styles/main.css";
import LandingForm from "./components/landing_form";
import LandingFormMob from "./components/landing_form_mob";
import featureImg from './assets/feature_img.png';
import mobPic from './assets/feature_img_mob.png';

function App() {

  const [width, setWidth] = useState(1000);

  useEffect(() => {

    setWidth(window.innerWidth);
    console.log('width: ', width);
    const script = document.createElement("script")
    script.id = 'wf_anal';
    script.src =
      "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=261ecd957ff9ba152b8b186a9bd4728895298b3fb3b654458c494237be5ca692gidfbd9ac9ef083d47d156e2b601ccf851b002f8770fc457789a46bb8163f949f31gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"

    script.async = true
  }, [width]);

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)

    }
  })



  const coverDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100vh',
    width: '160vh',
  };

  const imgStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    width: '100vh',
  };

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    width: '180vh',
  };

  const mobFormAlign = {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vh',
    maring: '0px 10px'
    // marginRight: '10px'
  };

  const mobileCoverDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // height: '00vh',
    width: '40vh',
    padding: '2rem'
  };

  const mobImgStyle = {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '60vh',
    width: '420px',
    // padding: '0rem -0.15rem',
    marginLeft: '90px',
    marginBottom: '20px',
    marginTop: '20px'
  };

  const marginBox = {
    display: 'flex',
    width: '20px'
  };

  return (
    <>
      {dimensions.width > 600 ?
        (<div style={coverDiv}>

          <img style={imgStyle} src={featureImg} alt={'Feature'} />
          <div style={marginBox}></div>
          <div style={formStyle}>
            <LandingForm />
          </div>

        </div>) : (<div style={mobileCoverDiv}>
          <img style={mobImgStyle} src={mobPic} alt={'Feature'} />
          <div style={mobFormAlign}>
            <LandingFormMob />
          </div>

        </div>)}
    </>
  );
}

export default App;
