import React, { useEffect, useState } from "react"
import "./styles/main.css";
// import LoginForm from "./components/login_form";
import LandingForm from "./components/landing_form";
import featureImg from './assets/loginpageimage.png';
import { useWindowDimensions } from './components/utils.js';

function App() {

  // let width = 1000;

  const [width, setWidth] = useState(1000);


  useEffect(() => {
    // width = useWindowDimensions();
    setWidth(window.innerWidth);
    console.log('width: ', width);
    const script = document.createElement("script")
    script.id = 'wf_anal';
    script.src =
      "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=261ecd957ff9ba152b8b186a9bd4728895298b3fb3b654458c494237be5ca692gidfbd9ac9ef083d47d156e2b601ccf851b002f8770fc457789a46bb8163f949f31gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"

    script.async = true
  }, [width]);



  const coverDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100vh',
    width: '200vh',
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

  return (
    <>
      {width > 700 ?
        (<div style={coverDiv}>
          {/* <div><p>More than 600</p></div> */}


          <img style={imgStyle} src={featureImg} alt={'Feature'} />

          <div style={formStyle}>
            <LandingForm />
          </div>


        </div>) : (<div><p>More than 600</p></div>)}
    </>
  );
}

export default App;
