import React from "react";
import Carousel from "nuka-carousel";

const testowyText1 =
  "Jedna szklana przetworzona butelka, pozwala zaoszczędzić energię równą świeceniu przez 4h, 100 watowej żarówki? Jest to niesamowite, ponieważ tak mała rzecz jak butelka potrafi sprawić, że oszczędzamy energię.";
const testowyText2 =
  "Produkty, które są w 100% szklane, nadają się do ponownego recyklingu i użycia po raz kolejny. Jest to świetna sprawa, ponieważ nasze środowisko nie cierpi na tym, a zyskuje. Dlatego gdy pijesz sok ze szklanej butelki oddawaj ją w sklepach do ponownego recyklingu. Dzięki temu chronisz naszą Matkę Naturę przed rozkładem kilkusetletnim.";
const testowyText3 =
  "6 puszek wyprodukowanych metodą recyklingu, pozwala na zaoszczędzenie 1 litra benzyny.";
const testowyText4 =
  "Recykling jednej metalowej puszki to 3 godzinne oglądanie telewizji.";
const testowyText5 =
  "Przetworzenie puszki na nową trwa ok. 6 tygodni. Jest to praktycznie 2 miesiące, więc jeśli kupujesz napój w puszce, zastanów się dwa razy, czy nie lepiej kupić go w szklanej butelce. Szklane butelki dzięki recyklingowi, używane są wielokrotnie, dzięki czemu zaoszczędzamy czas i mniej zaśmiecamy środowisko, w którym żyjemy.";
const testowyText6 =
  "Cały strój narciarski może zostać stworzony z przetworzenia 26 plastikowych butelek. Jest to niesamowicie dużo pracy i energii osób pracujących w ten sposób";
const testowyText7 =
  "Ilość wyrzucanego przez nas drewna i papieru starcza na ogrzanie ok. 50 milionów domów przez 20 lat? Jest to niesamowicie dużo i długo, ale może dzięki temu zdamy sobie sprawę jak marnujemy każdą kartkę papieru, często nawet niezapisaną wyrzucamy do kosza nie zważając, że zaraz sięgamy po nową robiąc z nią to samo.";
const testowyText8 =
  "Śmieci, które lądują w Twoim koszu prawie w 50% są to odpadki nadające się na kompost. Dzięki własnemu kom postnikowi, będziemy mogli sadzić owoce i warzywa na odpowiednio nawożonym gruncie. Jest to niezwykła bomba witaminowa dla naszych roślin.";
const testowyText9 =
  "By wyprodukować tonę papieru, trzeba pozbawić życia ok. 18 drzew. Często będąc w szkole marnujemy kartki papieru, które później lądują w koszu. A by pozyskać nowe, nadal są ścinane kolejne drzewa.";
const testowyText10 =
  "Przetworzony wcześniej papier można z powodzeniem wykorzystać do izolacji oraz urządzania domu. Świetnie izoluje podłogę.";

class MyCarousel extends React.Component {
  state = {
    slideIndex: 0,
  };

  render() {
    return (
      <Carousel
        autoplay
        autoplayInterval={10000}
        className="my-carousel"
        slideIndex={this.state.slideIndex}
        afterSlide={(slideIndex) => this.setState({ slideIndex })}
        defaultControlsConfig={{
          nextButtonText: "Dalej",
          prevButtonText: "Wstecz",
          pagingDotsStyle: {
            fill: "white",
          },
          nextButtonStyle: {
            color: "black",
            background: "rgba(250, 250, 250, 0.9)",
          },
          prevButtonStyle: {
            color: "black",
            background: "rgba(250, 250, 250, 0.9)",
          },
        }}
        // renderCenterRightControls={({ nextSlide }) => (
        //   <button onClick={nextSlide}>Dalej</button>
        // )}
      >
        <p>{testowyText1}</p>
        <p>{testowyText2}</p>
        <p>{testowyText3}</p>
        <p>{testowyText4}</p>
        <p>{testowyText5}</p>
        <p>{testowyText6}</p>
        <p>{testowyText7}</p>
        <p>{testowyText8}</p>
        <p>{testowyText9}</p>
        <p>{testowyText10}</p>
      </Carousel>
    );
  }
}

export default MyCarousel;
