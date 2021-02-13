import React from "react";

import SpeakersCarousel from "../../carousels/speakers-carousel";
import SectionDescription from "../../utils/sectionDescription";
import Container from "../../container/container";
import Footer from "../footer";
import NavBar from "../../../components/nav/nav";
import "../../../assets/css/speakers.css";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

function Speakers(props) {
  let styling = {
    paddingLeft: "0",
    paddingRight: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  };

  const queryParams = queryString.parse(props.location.search);

  return (
    <>
      <div className="speakers-bg">
        <NavBar />
        <div>
          <div style={styling}>
            <Container>
              <SectionDescription
                middleTitle="Speakers"
                title="A crazy cool selection of speakers."
                style={{
                  marginBottom: "150px",
                  marginTop: "10px",
                }}
              ></SectionDescription>
              <SpeakersCarousel
                style={{ paddingLef: "0px" }}
                initialDay={queryParams.day ? parseInt(queryParams.day) : 0}
              ></SpeakersCarousel>
            </Container>
          </div>
        </div>
      </div>
      <Footer>Yep. That’s the end of it. Bye now. 👋</Footer>
    </>
  );
}

export default withRouter(Speakers);
