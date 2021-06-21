import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CImg,
} from "@coreui/react";

const Ludus = () => {
  return (
    <>
      <CRow className="top">
        <CCol>
          <CCard>
            <CCardHeader style={{ backgroundColor: "#B0A2FA" }}></CCardHeader>
            <CCardBody>
              <CImg
                src="https://i.pinimg.com/originals/ff/77/d9/ff77d9937d844c5a6a1d805261ae1b49.jpg"
                height="100%"
                width="100%"
              />
            </CCardBody>
            <CCardHeader style={{ backgroundColor: "var(--info)" }} />
            <CCardBody style={{ padding: "2rem 10rem" }}>
              <h1 style={{ textAlign: "center" }}>What is Flan De Chocolate</h1>
              <p className="lead">
                One of the products on which almost every Frenchman grows is the
                Flan, it is actually a kind of custard made from milk or milk
                and cream, egg yolks, sugar and thickening substances (flour,
                cornflour) baked without or with dough. If it comes with crispy
                dough on the bottom and sides, then it is called Flan
                Patisseier.
                <br />
                <br />
                Originally the flan’s taste is natural, only with a little bit
                of vanilla. Like many classics, the flan also gets more modern
                interpretations like caramel flan, pistachio, coffee and of
                course chocolate flan. By the way, the flan appears in different
                countries in different forms – Pastel de nate in Portugal, the
                English custard tart and more.
                <br />
                <br />
                One of my favorite flans is this chocolate flan which is a kind
                of moist chocolate cake, wonderful for chocolate lovers.
                <br />
                <br />
              </p>
              <hr></hr>
              ring mold 20 cm in diameter, 4-5 cm high
            </CCardBody>
            <CCardHeader style={{ backgroundColor: "var(--success)" }} />
            <CCardBody style={{ padding: "2rem 10rem" }}>
              <h1 style={{ textAlign: "center" }}>Ingredients</h1>
              <p className="lead">
                <h3>Cocoa pastry dough:</h3>
                <ul>
                  <li>160 g all-purpose flour, sifted</li>
                  <li>20 g roasted hazelnut meal</li>
                  <li>110 g butter, cubed</li>
                  <li>30 g sugar</li>
                  <li>pinch of salt</li>
                  <li>20 g cocoa powder, sifted</li>
                  <li>35 g milk</li>
                  <li>1 egg yolk</li>
                  <br />
                  <br />
                </ul>
                  <h3>Cocoa pastry dough:</h3>
                  <ul>
                  <li>500 g milk</li>
                  <li>150 g heavy whipping cream</li>
                  <li>120 g egg yolks (6 M egg yolks aropx)</li>
                  <li>110 g butter, cubed</li>
                  <li>130 g sugar</li>
                  <li>20 g all-purpose flour, sifted</li>
                  <li>20 g cornflour, sifted</li>
                  <li>160 g dark chocolate 70%, chopped</li>
                  <br />
                  <br />
                </ul>
              </p>
              <hr></hr>
              Optional: Cocoa powder for decoration
            </CCardBody>
            <CCardHeader style={{ backgroundColor: "var(--warning)" }} />
            <CCardBody style={{ padding: "2rem 10rem" }}>
              <h1 style={{ textAlign: "center" }}>Preparation</h1>
              <br></br>
              <p className="lead">
                <ul>
                  <li>Step 1</li>
                  Chocolate pastry dough: In the bowl of a stand mixer, combine flour, hazelnut meal, butter, sugar, salt, and cocoa. Add milk and egg yolk, mix until the ingredients come together into a ball of dough.
                  <br />
                  <br />
                  <li>Step 2</li>
                  Remove from the mixer bowl and knead briefly on your work surface until well combined.
                  <br />
                  <br />
                  <li>Step 3</li>
                  Lightly sprinkle the top and bottom of the ball of dough with flour (be sure to flour both sides!), put it between two sheets of parchment paper, and lightly flatten it into a disk (don’t roll it out completely). Transfer the dough, with the paper, to the refrigerator and chill for 2 hours.
                  <br />
                  <br />
                  <li>Step 4</li>
                  Remove from the fridge, and roll out the dough to a thickness of 3 mm. Line the ring with the dough, making sure that the sides are fully filled in and straight so that they don’t collapse during baking. Using a knife, gently trim the overhanging edges. Freeze the dough-lined ring for about half an hour.
                  <br />
                  <br />
                  <li>Step 5</li>
                  Preheat the oven to 170 degrees Celsius.
                  <br />
                  <br />
                  <li>Step 6</li>
                  Chocolate Custard filling: In a medium saucepan, heat the milk and cream until simmering.
                  <br />
                  <br />
                  <li>Step 7</li>
                  Meanwhile, in a large bowl, whisk the eggs and sugar together until they turn a creamy color. Add the flour and cornflour and mix.
                  <br />
                  <br />
                  <li>Step 8</li>
                  When the milk and cream reach boiling point, pour 1/3 of the hot liquid over the egg mix. Do this a little bit at a time while mixing, so that you do not cook the eggs.
                  <br />
                  <br />
                  <li>Step 9</li>
                  Return the mixture to the saucepan, and bring to a boil, stirring constantly so the eggs don’t scorch on the bottom.
                  <br />
                  <br />
                  <li>Step 10</li>
                  When the mixture comes to a boil and thickens, remove from the heat, add chocolate and stir till combined to a smooth chocolate batter.
                  <br />
                  <br />
                  <li>Step 11</li>
                  Remove the dough-lined ring from the freezer, Place it on a baking sheet lined with parchment paper. Pour the filling over the dough, flatten and place in the oven.
                  <br />
                  <br />
                  <li>Step 12</li>
                  Bake for about 45-50 minutes, until the filling is firm to the touch.
                  <br />
                  <br />
                  <li>Step 13</li>
                  Remove from the oven, cool to room temperature and refrigerate overnight.
                  <br />
                  <br />
                  <li>Step 14</li>
                  Remove from the refrigerator, sprinkle with cocoa powder and slice generously. It is recommended to remove from the refrigerator about 15 minutes before serving.
                  <br />
                  <br />
                </ul>
              </p>
              <hr></hr>
              Bon-Appétit
            </CCardBody>
            <CButton
              color="primary"
              size="lg"
              href="/"
              variant="outline"
            >
              More Recipes
            </CButton>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Ludus;
