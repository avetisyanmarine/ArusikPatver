import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import Bant from "../../assets/image/bant.png";
import PHoto3 from "../../assets/image/photo3.jpg";
import SaveTheDate from "../../assets/image/savethedate.png";
import AttendanceGuests from "../AttendanceGuests";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Գևորգ եկեղեցի"}
            mapSrc={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.89020152337!2d44.3094668!3d40.1669983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a95df45ee7879%3A0x5edc387da55a163a!2z1Y3VuNaC1oDVoiDVgNW81avWg9W91avVtNWlINWl1a_VpdWy1aXWgdWr!5e0!3m2!1shy!2sam!4v1752148881848!5m2!1shy!2sam"
            }
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Եվրոպա (Լենինգրադյան 29)"}
            mapSrc={"https://maps.app.goo.gl/oufTUnqRtCSWSdXF6"}
          />
        </ForthPagePartContext>

        <div className="relative">
          <img src={PHoto3} alt="Photo 3" className="rounded-[15px]" />
          <img
            className="absolute top-1.5 left-1.5 w-[130px]"
            src={SaveTheDate}
            alt="Save The Date"
          />
        </div>
      </Container>
      <div style={{ marginTop: "45px" }} className="text-center w-full">
        <h2 style={{ marginBottom: "20px" }}>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible
            style={{ padding: "0 25px" }}
            data-aos="fade-up"
            className="absolute w-full h-[322px] bg-white/45 text-2xl"
          >
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
      <Container>
        <h3 className="text-center" style={{ margin: "30px 0" }}>
          Խնդրում ենք կապվել մեզ հետ <br /> Ձեր ներկայությունը հաստատելու համար
          մինչև հունիսի 5-ը։
        </h3>
      </Container>
    </ForthPagePart>
  );
};
