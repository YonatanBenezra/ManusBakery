import React from "react";
import {
  CLink,
} from "@coreui/react";
import "@coreui/icons";

const Explanation = () => {
  return (
    <div style={{ padding: "2rem 10rem" }}>
      <h1>Explanation of Home task</h1>
      <p>
        I want to believe the <CLink to="/hometask">Home task</CLink> page is
        intuitive enough, if not, this is the explanation.
      </p>
      <hr></hr>
      <p>
        Each different colored square has a short explanation about the company
        in the squares title. once clicked, it will render a new component with
        longer explanation using 4 sections.
      </p>
      <ul>
        <li>Section 1</li>A video about the platform or look-into their
        website/platform (as you can see on the
        <CLink to="/vimeo"> Vimeo page</CLink>)
        <br />
        <br />
        <li>Section 2</li>
        A further explanation about what the platform is.
        <br />
        <br />
        <li>Section 3</li>
        An explanation of how to use the platform
        <br />
        <br />
        <li>Section 4</li>
        Practices you can try, meaning lessons you can make, how to do all kinds
        of specific things in the platform.
      </ul>
      <hr></hr>
      <p>
        I hope you like it, feel free to send me a message for further
        questions.
      </p>
      <br></br>
      <h1>Happy Holiday!</h1>
    </div>
  );
};

export default Explanation;
