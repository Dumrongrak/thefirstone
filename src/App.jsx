import './App.css'
import Card from "./components/card.jsx"
import krungthep from "/public/restaurant/krungthep.jpg"
import yuwa from "/public/restaurant/yuwas.jpg"
import lungtom from "/public/restaurant/thainoodles.jpeg"
import rannkhao from "/public/restaurant/raankhao.jpg"
import busnoodle from "/public/restaurant/busnoodles.jpeg"

function App() {

  return (
    <>
        <Card name={"Krung Thep Thai Bistro - Kalasatama"}
              image={krungthep}
              type={"Thai Dining"}
              rating={5}
              address={"Capellanranta 4, 00580 Helsinki"}
              info={"Welcome to experience a refined Thai dining atmosphere in Helsinki’s Kalasatama. Krung Thep Thai Bistro offers fresh and authentic flavors from Thailand, right in the heart of Kalasatama. Our elegant and inviting restaurant serves daily-changing, flavorful lunch options, while our diverse à la carte menu is designed to meet the expectations of dinner guests. We craft both traditional Thai street food dishes and more exotic creations, all prepared with a deep respect for authentic Thai culinary culture. We warmly welcome you for an enjoyable lunch or a delightful dinner experience! • Vegetarian Friendly • Vegan Options • Gluten Free Options"}
        ></Card>
        <Card name={"Yuwa's Thai Dining"}
              image={yuwa}
              type={"Thai Dining"}
              rating={5}
              address={"Lönnrotinkatu 33-35, 00180 Helsinki"}
              info={"Yuwa's Thai Dining is a Thai restaurant in Kamppi, central Helsinki, at Lönnrotinkatu 33–35 — within walking distance of Kamppi metro, Hietalahti market square and Bulevardi. The menu takes guests on a culinary journey to Thailand's heart and the surrounding Asian cultures, with a five-step spice scale that adapts to every palate. Classics like pad thai, som tam and Thai curries form the heart of the menu, and almost every dish can be ordered vegan with a tofu option. Lunch is served Monday to Friday, dinner Wednesday to Saturday. Yuwa's also operates as a private dining venue for groups and its location makes it a natural choice before or after a show at the Aleksanteri Theatre. Friendly and skilled service, restaurant-level flavours and a fair price level appeal to locals and visitors alike. A well-established address for weekday lunches, dinners with friends and group occasions in central Helsinki."}
        ></Card>
        <Card name={"Thai Noodle (lung Tum Tom Tun)"}
              image={lungtom}
              type={"Thai Noodles"}
              rating={5}
              address={"Pursimiehenkatu 12, 00150 Helsinki"}
              info={"Thai ravintola, jossa aidot Thaimaan maut pääsevät hellimään makunystyröitä. Täällä myös halutessaan annoksiin saa kunnon tulisuutta. Annokset ovat riisi- tai nuudelipohjaisia, unohtamatta aitoa Thaimaalaista keittoa. Omistajilla pitkä kokemus ravintola-alalta, joten osataan ottaa huomioon myös pienet nyanssit, jotka tekevät näistä niin \"helpoista\" annoksista suussa sulavia."}
        ></Card>
        <Card name={"Raan Khao Gaeng Thai Street Food"}
              image={rannkhao}
              type={"Thai Stree food"}
              rating={4.5}
              address={"Urho Kekkosen katu 1 E-floor, 00100 Helsinki"}
              info={"The restaurant is located inside Kamppi Shopping Centre, in the city centre of Helsinki, Finland. It specializes in Thai and Asian street food and serves both lunch and dinner.The menu offers a variety of Thai dishes, including Pad Thai, Tom Yum Goong, green curry, papaya salad and crispy pork. These dishes are known for their rich flavors, aromatic ingredients and different levels of spiciness."}
        ></Card>
        <Card name={"Bus noodles(Kumphawapi Kitchen)"}
              image={busnoodle}
              type={"Thai Street food"}
              rating={10}
              address={"Kinorinne 1, 01600 Vantaa"}
              info={"**Kumphawapi Kitchen – Restaurant Introduction**\n" +
                  "\n" +
                  "Kumphawapi Kitchen is a Thai restaurant that offers a taste of local Thai cuisine. It is a place where customers can enjoy delicious food in a welcoming atmosphere. The restaurant is a great choice for those who want to experience Thai food and local flavors."}
        ></Card>
    </>
  )
}
export default App;