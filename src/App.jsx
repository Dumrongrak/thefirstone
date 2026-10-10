import './App.css'
import Card from "./components/card.jsx"
import krungthep from "/public/restaurant/krungthep.jpg"
import yuwa from "/public/restaurant/yuwas.jpg"
import lungtom from "/public/restaurant/thainoodles.jpeg"
import rannkhao from "/public/restaurant/raankhao.jpg"
import busnoodle from "/public/restaurant/busnoodles.jpeg"

function App() {

  return (
    <div className="container">
        <h1>The Authentic Thai artistry of Helsinki</h1>
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
        <Card name={"\nBus noodles(Kumphawapi Kitchen)"}
              image={busnoodle}
              type={"Thai Street food"}
              rating={10}
              address={"Kinorinne 1, 01600 Vantaa"}
              info={"One of the interesting things about this business is that it serves food from a vehicle, making it different from a traditional restaurant.Kumphawapi Kitchen offers an affordable option for people who want to enjoy Thai food without spending too much money. It is a great choice for customers who are looking for tasty food at reasonable prices.Thai food is well known for its rich flavors and variety of dishes. This makes it a great option for people who enjoy delicious and flavorful meals.In conclusion, Kumphawapi Kitchen is worth considering for anyone who loves Thai food, wants to save money, and prefers a casual dining experience."}
        ></Card>

    </div>
  )
}
export default App;