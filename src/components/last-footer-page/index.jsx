import { Container } from "../../GlobalStyle";
import { LastFooterPagePart, LastFooterPagePartContext } from "./styled";
import PhoneSvg from "../../assets/vectors/Phone.svg";

export const LastFooterPage = () => {
  return (
    <LastFooterPagePart>
      <Container>
        <LastFooterPagePartContext>
          <div>
            <div>
              <div>
                <p>Փեսա</p>
                <p>Հարս</p>
              </div>
            </div>
            <div>
              <img loading="lazy" src={PhoneSvg} />
              <div>
                <p>
                  Սեղմիր՝
                  <a href="tel:077215009"> 077-77-77-77</a>
                </p>
                <p>
                  Սեղմիր՝
                  <a href="tel:077149983"> 077-88-88-88</a>
                </p>
              </div>
            </div>
          </div>
          <p>
            Պատրաստվել է
            <a href="https://www.instagram.com/webinvite.am/"> WEB INVITE </a>
            կողմից
          </p>{" "}
        </LastFooterPagePartContext>
      </Container>
    </LastFooterPagePart>
  );
};
