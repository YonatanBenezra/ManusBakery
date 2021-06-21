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
    ThirdNote: "",
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
      recipeName: input.recipeName.image,
      paragraph1: input.paragraph1.image,
      paragraph2: input.paragraph2.image,
      paragraph3: input.paragraph3.image,
      paragraph4: input.paragraph4.image,
      firstNote: input.firstNote.image,
      firstIngredientTitle: input.firstIngredientTitle.image,
      firstIngredient1: input.firstIngredient1.image,
      firstIngredient2: input.firstIngredient2.image,
      firstIngredient3: input.firstIngredient3.image,
      firstIngredient4: input.firstIngredient4.image,
      firstIngredient5: input.firstIngredient5.image,
      firstIngredient6: input.firstIngredient6.image,
      firstIngredient7: input.firstIngredient7.image,
      firstIngredient8: input.firstIngredient8.image,
      firstIngredient9: input.firstIngredient9.image,
      firstIngredient10: input.firstIngredient10.image,
      firstIngredient11: input.firstIngredient11.image,
      firstIngredient12: input.firstIngredient12.image,
      firstIngredient13: input.firstIngredient13.image,
      firstIngredient14: input.firstIngredient14.image,
      firstIngredient15: input.firstIngredient15.image,
      firstIngredient16: input.firstIngredient16.image,
      firstIngredient17: input.firstIngredient17.image,
      firstIngredient18: input.firstIngredient18.image,
      firstIngredient19: input.firstIngredient19.image,
      firstIngredient20: input.firstIngredient20.image,
      firstIngredient21: input.firstIngredient21.image,
      firstIngredient22: input.firstIngredient22.image,
      firstIngredient23: input.firstIngredient23.image,
      firstIngredient24: input.firstIngredient24.image,
      firstIngredient25: input.firstIngredient25.image,
      secondIngredientTitle: input.secondIngredientTitle.image,
      secondIngredient1: input.secondIngredient1.image,
      secondIngredient2: input.secondIngredient2.image,
      secondIngredient3: input.secondIngredient3.image,
      secondIngredient4: input.secondIngredient4.image,
      secondIngredient5: input.secondIngredient5.image,
      secondIngredient6: input.secondIngredient6.image,
      secondIngredient7: input.secondIngredient7.image,
      secondIngredient8: input.secondIngredient8.image,
      secondIngredient9: input.secondIngredient9.image,
      secondIngredient10: input.secondIngredient10.image,
      secondIngredient11: input.secondIngredient11.image,
      secondIngredient12: input.secondIngredient12.image,
      secondIngredient13: input.secondIngredient13.image,
      secondIngredient14: input.secondIngredient14.image,
      secondIngredient15: input.secondIngredient15.image,
      secondIngredient16: input.secondIngredient16.image,
      secondIngredient17: input.secondIngredient17.image,
      secondIngredient18: input.secondIngredient18.image,
      secondIngredient19: input.secondIngredient19.image,
      secondIngredient20: input.secondIngredient20.image,
      secondIngredient21: input.secondIngredient21.image,
      secondIngredient22: input.secondIngredient22.image,
      secondIngredient23: input.secondIngredient23.image,
      secondIngredient24: input.secondIngredient24.image,
      secondIngredient25: input.secondIngredient25.image,
      thirdIngredientTitle: input.thirdIngredientTitle.image,
      thirdIngredient1: input.thirdIngredient1.image,
      thirdIngredient2: input.thirdIngredient2.image,
      thirdIngredient3: input.thirdIngredient3.image,
      thirdIngredient4: input.thirdIngredient4.image,
      thirdIngredient5: input.thirdIngredient5.image,
      thirdIngredient6: input.thirdIngredient6.image,
      thirdIngredient7: input.thirdIngredient7.image,
      thirdIngredient8: input.thirdIngredient8.image,
      thirdIngredient9: input.thirdIngredient9.image,
      thirdIngredient10: input.thirdIngredient10.image,
      thirdIngredient11: input.thirdIngredient11.image,
      thirdIngredient12: input.thirdIngredient12.image,
      thirdIngredient13: input.thirdIngredient13.image,
      thirdIngredient14: input.thirdIngredient14.image,
      thirdIngredient15: input.thirdIngredient15.image,
      thirdIngredient16: input.thirdIngredient16.image,
      thirdIngredient17: input.thirdIngredient17.image,
      thirdIngredient18: input.thirdIngredient18.image,
      thirdIngredient19: input.thirdIngredient19.image,
      thirdIngredient20: input.thirdIngredient20.image,
      thirdIngredient21: input.thirdIngredient21.image,
      thirdIngredient22: input.thirdIngredient22.image,
      thirdIngredient23: input.thirdIngredient23.image,
      thirdIngredient24: input.thirdIngredient24.image,
      thirdIngredient25: input.thirdIngredient25.image,
      secondNote: input.secondNote.image,
      step1Title: input.step1Title.image,
      step1Content: input.step1Content.image,
      step2Title: input.step2Title.image,
      step2Content: input.step2Content.image,
      step3Title: input.step3Title.image,
      step3Content: input.step3Content.image,
      step4Title: input.step4Title.image,
      step4Content: input.step4Content.image,
      step5Title: input.step5Title.image,
      step5Content: input.step5Content.image,
      step6Title: input.step6Title.image,
      step6Content: input.step6Content.image,
      step7Title: input.step7Title.image,
      step7Content: input.step7Content.image,
      step8Title: input.step8Title.image,
      step8Content: input.step8Content.image,
      step9Title: input.step9Title.image,
      step9Content: input.step9Content.image,
      step10Title: input.step10Title.image,
      step10Content: input.step10Content.image,
      step11Title: input.step11Title.image,
      step11Content: input.step11Content.image,
      step12Title: input.step12Title.image,
      step12Content: input.step12Content.image,
      step13Title: input.step13Title.image,
      step13Content: input.step13Content.image,
      step14Title: input.step14Title.image,
      step14Content: input.step14Content.image,
      step15Title: input.step15Title.image,
      step15Content: input.step15Content.image,
      step16Title: input.step16Title.image,
      step16Content: input.step16Content.image,
      step17Title: input.step17Title.image,
      step17Content: input.step17Content.image,
      step18Title: input.step18Title.image,
      step18Content: input.step18Content.image,
      step19Title: input.step19Title.image,
      step19Content: input.step19Content.image,
      step20Title: input.step20Title.image,
      step20Content: input.step20Content.image,
      step21Title: input.step21Title.image,
      step21Content: input.step21Content.image,
      step22Title: input.step22Title.image,
      step22Content: input.step22Content.image,
      step23Title: input.step23Title.image,
      step23Content: input.step23Content.image,
      step24Title: input.step24Title.image,
      step24Content: input.step24Content.image,
      step25Title: input.step25Title.image,
      step25Content: input.step25Content.image,
      ThirdNote: input.ThirdNote.image,
    };
    axios.post("http://localhost:3001/create", newPost);
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
