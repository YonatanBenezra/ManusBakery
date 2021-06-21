import React, { useState } from "react";
import {
  CFormGroup,
  CForm,
  CInput,
  CTextarea,
  CButton,
  CCollapse,
} from "@coreui/react";
import "@coreui/icons";
import axios from "axios";

const Admin = () => {
  const [input, setInput] = useState({
    image: "",
    recipeName: "",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    firstNote: "",
    firstIngredientTitle: "",
    firstIngredient1: "",
    firstIngredient2: "",
    firstIngredient3: "",
    firstIngredient4: "",
    firstIngredient5: "",
    firstIngredient6: "",
    firstIngredient7: "",
    firstIngredient8: "",
    firstIngredient9: "",
    firstIngredient10: "",
    firstIngredient11: "",
    firstIngredient12: "",
    firstIngredient13: "",
    firstIngredient14: "",
    firstIngredient15: "",
    firstIngredient16: "",
    firstIngredient17: "",
    firstIngredient18: "",
    firstIngredient19: "",
    firstIngredient20: "",
    firstIngredient21: "",
    firstIngredient22: "",
    firstIngredient23: "",
    firstIngredient24: "",
    firstIngredient25: "",
    secondIngredientTitle: "",
    secondIngredient1: "",
    secondIngredient2: "",
    secondIngredient3: "",
    secondIngredient4: "",
    secondIngredient5: "",
    secondIngredient6: "",
    secondIngredient7: "",
    secondIngredient8: "",
    secondIngredient9: "",
    secondIngredient10: "",
    secondIngredient11: "",
    secondIngredient12: "",
    secondIngredient13: "",
    secondIngredient14: "",
    secondIngredient15: "",
    secondIngredient16: "",
    secondIngredient17: "",
    secondIngredient18: "",
    secondIngredient19: "",
    secondIngredient20: "",
    secondIngredient21: "",
    secondIngredient22: "",
    secondIngredient23: "",
    secondIngredient24: "",
    secondIngredient25: "",
    thirdIngredientTitle: "",
    thirdIngredient1: "",
    thirdIngredient2: "",
    thirdIngredient3: "",
    thirdIngredient4: "",
    thirdIngredient5: "",
    thirdIngredient6: "",
    thirdIngredient7: "",
    thirdIngredient8: "",
    thirdIngredient9: "",
    thirdIngredient10: "",
    thirdIngredient11: "",
    thirdIngredient12: "",
    thirdIngredient13: "",
    thirdIngredient14: "",
    thirdIngredient15: "",
    thirdIngredient16: "",
    thirdIngredient17: "",
    thirdIngredient18: "",
    thirdIngredient19: "",
    thirdIngredient20: "",
    thirdIngredient21: "",
    thirdIngredient22: "",
    thirdIngredient23: "",
    thirdIngredient24: "",
    thirdIngredient25: "",
    secondNote: "",
    step1Title: "",
    step1Content: "",
    step2Title: "",
    step2Content: "",
    step3Title: "",
    step3Content: "",
    step4Title: "",
    step4Content: "",
    step5Title: "",
    step5Content: "",
    step6Title: "",
    step6Content: "",
    step7Title: "",
    step7Content: "",
    step8Title: "",
    step8Content: "",
    step9Title: "",
    step9Content: "",
    step10Title: "",
    step10Content: "",
    step11Title: "",
    step11Content: "",
    step12Title: "",
    step12Content: "",
    step13Title: "",
    step13Content: "",
    step14Title: "",
    step14Content: "",
    step15Title: "",
    step15Content: "",
    step16Title: "",
    step16Content: "",
    step17Title: "",
    step17Content: "",
    step18Title: "",
    step18Content: "",
    step19Title: "",
    step19Content: "",
    step20Title: "",
    step20Content: "",
    step21Title: "",
    step21Content: "",
    step22Title: "",
    step22Content: "",
    step23Title: "",
    step23Content: "",
    step24Title: "",
    step24Content: "",
    step25Title: "",
    step25Content: "",
    thirdNote: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newPost = {
      image: input.image,
      recipeName: input.recipeName,
      paragraph1: input.paragraph1,
      paragraph2: input.paragraph2,
      paragraph3: input.paragraph3,
      paragraph4: input.paragraph4,
      firstNote: input.firstNote,
      firstIngredientTitle: input.firstIngredientTitle,
      firstIngredient1: input.firstIngredient1,
      firstIngredient2: input.firstIngredient2,
      firstIngredient3: input.firstIngredient3,
      firstIngredient4: input.firstIngredient4,
      firstIngredient5: input.firstIngredient5,
      firstIngredient6: input.firstIngredient6,
      firstIngredient7: input.firstIngredient7,
      firstIngredient8: input.firstIngredient8,
      firstIngredient9: input.firstIngredient9,
      firstIngredient10: input.firstIngredient10,
      firstIngredient11: input.firstIngredient11,
      firstIngredient12: input.firstIngredient12,
      firstIngredient13: input.firstIngredient13,
      firstIngredient14: input.firstIngredient14,
      firstIngredient15: input.firstIngredient15,
      firstIngredient16: input.firstIngredient16,
      firstIngredient17: input.firstIngredient17,
      firstIngredient18: input.firstIngredient18,
      firstIngredient19: input.firstIngredient19,
      firstIngredient20: input.firstIngredient20,
      firstIngredient21: input.firstIngredient21,
      firstIngredient22: input.firstIngredient22,
      firstIngredient23: input.firstIngredient23,
      firstIngredient24: input.firstIngredient24,
      firstIngredient25: input.firstIngredient25,
      secondIngredientTitle: input.secondIngredientTitle,
      secondIngredient1: input.secondIngredient1,
      secondIngredient2: input.secondIngredient2,
      secondIngredient3: input.secondIngredient3,
      secondIngredient4: input.secondIngredient4,
      secondIngredient5: input.secondIngredient5,
      secondIngredient6: input.secondIngredient6,
      secondIngredient7: input.secondIngredient7,
      secondIngredient8: input.secondIngredient8,
      secondIngredient9: input.secondIngredient9,
      secondIngredient10: input.secondIngredient10,
      secondIngredient11: input.secondIngredient11,
      secondIngredient12: input.secondIngredient12,
      secondIngredient13: input.secondIngredient13,
      secondIngredient14: input.secondIngredient14,
      secondIngredient15: input.secondIngredient15,
      secondIngredient16: input.secondIngredient16,
      secondIngredient17: input.secondIngredient17,
      secondIngredient18: input.secondIngredient18,
      secondIngredient19: input.secondIngredient19,
      secondIngredient20: input.secondIngredient20,
      secondIngredient21: input.secondIngredient21,
      secondIngredient22: input.secondIngredient22,
      secondIngredient23: input.secondIngredient23,
      secondIngredient24: input.secondIngredient24,
      secondIngredient25: input.secondIngredient25,
      thirdIngredientTitle: input.thirdIngredientTitle,
      thirdIngredient1: input.thirdIngredient1,
      thirdIngredient2: input.thirdIngredient2,
      thirdIngredient3: input.thirdIngredient3,
      thirdIngredient4: input.thirdIngredient4,
      thirdIngredient5: input.thirdIngredient5,
      thirdIngredient6: input.thirdIngredient6,
      thirdIngredient7: input.thirdIngredient7,
      thirdIngredient8: input.thirdIngredient8,
      thirdIngredient9: input.thirdIngredient9,
      thirdIngredient10: input.thirdIngredient10,
      thirdIngredient11: input.thirdIngredient11,
      thirdIngredient12: input.thirdIngredient12,
      thirdIngredient13: input.thirdIngredient13,
      thirdIngredient14: input.thirdIngredient14,
      thirdIngredient15: input.thirdIngredient15,
      thirdIngredient16: input.thirdIngredient16,
      thirdIngredient17: input.thirdIngredient17,
      thirdIngredient18: input.thirdIngredient18,
      thirdIngredient19: input.thirdIngredient19,
      thirdIngredient20: input.thirdIngredient20,
      thirdIngredient21: input.thirdIngredient21,
      thirdIngredient22: input.thirdIngredient22,
      thirdIngredient23: input.thirdIngredient23,
      thirdIngredient24: input.thirdIngredient24,
      thirdIngredient25: input.thirdIngredient25,
      secondNote: input.secondNote,
      step1Title: input.step1Title,
      step1Content: input.step1Content,
      step2Title: input.step2Title,
      step2Content: input.step2Content,
      step3Title: input.step3Title,
      step3Content: input.step3Content,
      step4Title: input.step4Title,
      step4Content: input.step4Content,
      step5Title: input.step5Title,
      step5Content: input.step5Content,
      step6Title: input.step6Title,
      step6Content: input.step6Content,
      step7Title: input.step7Title,
      step7Content: input.step7Content,
      step8Title: input.step8Title,
      step8Content: input.step8Content,
      step9Title: input.step9Title,
      step9Content: input.step9Content,
      step10Title: input.step10Title,
      step10Content: input.step10Content,
      step11Title: input.step11Title,
      step11Content: input.step11Content,
      step12Title: input.step12Title,
      step12Content: input.step12Content,
      step13Title: input.step13Title,
      step13Content: input.step13Content,
      step14Title: input.step14Title,
      step14Content: input.step14Content,
      step15Title: input.step15Title,
      step15Content: input.step15Content,
      step16Title: input.step16Title,
      step16Content: input.step16Content,
      step17Title: input.step17Title,
      step17Content: input.step17Content,
      step18Title: input.step18Title,
      step18Content: input.step18Content,
      step19Title: input.step19Title,
      step19Content: input.step19Content,
      step20Title: input.step20Title,
      step20Content: input.step20Content,
      step21Title: input.step21Title,
      step21Content: input.step21Content,
      step22Title: input.step22Title,
      step22Content: input.step22Content,
      step23Title: input.step23Title,
      step23Content: input.step23Content,
      step24Title: input.step24Title,
      step24Content: input.step24Content,
      step25Title: input.step25Title,
      step25Content: input.step25Content,
      thirdNote: input.thirdNote,
    };
    axios.post("http://localhost:3001/create-post", newPost);
  }

  const paragraphs = ["paragraph1", "paragraph2", "paragraph3", "paragraph4"];
  const firstIngredients = [];
  const secondIngredients = [];
  const thirdIngredients = [];
  const steps = [];

  for (let i = 1; i < 26; i++) {
    firstIngredients.push(`firstIngredient${i}`);
    secondIngredients.push(`secondIngredient${i}`);
    thirdIngredients.push(`thirdIngredient${i}`);
    steps.push(`step${i}Title`);
    steps.push(`step${i}Content`);
  }

  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);
  const [collapse5, setCollapse5] = useState(false);

  const toggle = (e) => {
    setCollapse(!collapse);
    e.preventDefault();
  };

  const toggle2 = (e) => {
    setCollapse2(!collapse2);
    e.preventDefault();
  };
  const toggle3 = (e) => {
    setCollapse3(!collapse3);
    e.preventDefault();
  };
  const toggle4 = (e) => {
    setCollapse4(!collapse4);
    e.preventDefault();
  };
  const toggle5 = (e) => {
    setCollapse5(!collapse5);
    e.preventDefault();
  };

  return (
    <>
      <CForm>
        <CFormGroup>
          <CInput
            className="formControl"
            name="image"
            autoComplete="off"
            value={input.image}
            placeholder="image"
            onChange={handleChange}
            key="image"
          ></CInput>
          <CInput
            className="formControl"
            name="recipeName"
            autoComplete="off"
            value={input.recipeName}
            placeholder="recipeName"
            onChange={handleChange}
            key="recipeName"
          ></CInput>
          <CButton color="primary" onClick={toggle} className={"mb-1"}>
            Paragraphs
          </CButton>
          <CCollapse
            show={collapse}
          >
            {paragraphs.map((paragraph) => (
              <CTextarea
                className="formControl"
                name={paragraph}
                autoComplete="off"
                value={input.paragraph}
                placeholder={paragraph}
                onChange={handleChange}
                key={paragraph}
              ></CTextarea>
            ))}
          </CCollapse>
          <CInput
            className="formControl"
            name="firstNote"
            autoComplete="off"
            value={input.firstNote}
            placeholder="firstNote"
            onChange={handleChange}
            key="firstNote"
          ></CInput>
          <CButton color="primary" onClick={toggle2} className={"mb-1"}>
            Ingredients #1
          </CButton>
          <CCollapse
            show={collapse2}
          >
            {firstIngredients.map((ingredient) => (
              <CTextarea
                className="formControl"
                name={ingredient}
                autoComplete="off"
                value={input.ingredient}
                placeholder={ingredient}
                onChange={handleChange}
                key={ingredient}
              ></CTextarea>
            ))}
          </CCollapse>
          <CButton color="primary" onClick={toggle3} className={"mb-1"}>
            Ingredients #2
          </CButton>
          <CCollapse
            show={collapse3}
          >
            {secondIngredients.map((ingredient) => (
              <CTextarea
                className="formControl"
                name={ingredient}
                autoComplete="off"
                value={input.ingredient}
                placeholder={ingredient}
                onChange={handleChange}
                key={ingredient}
              ></CTextarea>
            ))}
          </CCollapse>
          <CButton color="primary" onClick={toggle4} className={"mb-1"}>
            Ingredients #3
          </CButton>
          <CCollapse
            show={collapse4}
          >
            {thirdIngredients.map((ingredient) => (
              <CTextarea
                className="formControl"
                name={ingredient}
                autoComplete="off"
                value={input.ingredient}
                placeholder={ingredient}
                onChange={handleChange}
                key={ingredient}
              ></CTextarea>
            ))}
          </CCollapse>
          <CInput
            className="formControl"
            name="secondNote"
            autoComplete="off"
            value={input.title}
            placeholder="secondNote"
            onChange={handleChange}
            key="secondNote"
          ></CInput>
          <CButton color="primary" onClick={toggle5} className={"mb-1"}>
            Steps
          </CButton>
          <CCollapse
            show={collapse5}
          >
            {steps.map((step) => (
              <CTextarea
                className="formControl"
                name={step}
                autoComplete="off"
                value={input.step}
                placeholder={step}
                onChange={handleChange}
                key={step}
              ></CTextarea>
            ))}
          </CCollapse>
          <CInput
            className="formControl"
            name="thirdNote"
            autoComplete="off"
            value={input.thirdNote}
            placeholder="thirdNote"
            onChange={handleChange}
            key="thirdNote"
          ></CInput>
        </CFormGroup>
        <CButton color="primary" onClick={handleClick}>
          ADD
        </CButton>
      </CForm>
    </>
  );
};

export default Admin;
