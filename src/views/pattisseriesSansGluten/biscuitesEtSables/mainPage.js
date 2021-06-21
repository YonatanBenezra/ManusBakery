import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CImg,
  CCardTitle,
} from "@coreui/react";
import "@coreui/icons";
import Data from '../../../data.json'

const mainPage = () => {
  const headerStyles = {
    textAlign: "center",
  };
  const imageStyles = {
    marginBottom: "-14%",
    borderStyle: "groove",
  };
  const textStyles = {
    fontSize: "0.96rem",
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    color: "white",
    fontWeight: 350,
  };
  const data = Data.pattisseriesSansGluten
  for(let i=0; i < data.length; i++) {
    const styles = {
      backgroundImage: `url('${data[i].img}')`,
      padding: 0,
      textAlign: "inherit",
      height: "17rem",
      backgroundSize: "cover",
      width: "100%"
    };

  return (
    <>
      <CCardTitle style={{ textAlign: "center" }}>
      pattisseriesSansGluten
      </CCardTitle>
      <CImg
        src="https://img.freepik.com/free-photo/colorful-macarons-cookies-french-cakes-sweet-colorful-french-macaroons-fall-fly-motion-with-slices_96270-19.jpg?size=626&ext=jpg"
        width="97.5%"
        height="80%"
        block="true"
        fluid="true"
        align="center"
        placeholderColor="warning"
        style={{ ...imageStyles }}
      />
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="primary" className="text-white">
            <CCardHeader style={{ ...headerStyles }}>
               {data[i].name}
            </CCardHeader>
            <CLink to={`/${data[i].url}`}>
              <CButton color="primary" style={{ ...styles }}>
                <CCardBody style={{ ...textStyles }}>
                </CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
  }
};

export default mainPage;
