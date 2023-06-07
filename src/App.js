import { Suspense, useState } from "react";
import "./App.css";
import TourItem from "./TourItem";
let INIT_DATA = [

  {
    id: "1",
    name: "Best Of Paris In 7 Days Tour",
    price: "$1,995",
    imgurl:
      "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    description:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: "2",
    name: "Best Of Ireland In 14 Days Tour",
    price: "$3,895",
    imgurl:
      "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
    description:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    id: "3",
    name: "Best Of Salzburg & Vienna In 8 Days Tour",
    price: "$2,695",
    imgurl:
      "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    description:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
  {
    id: "4",
    name: "Best Of Rome In 7 Days Tour",
    price: "$2,095",
    imgurl:
      "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
    description:
      "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
  },
  {
    id: "5",
    name: "Best Of Poland In 10 Days Tour",
    price: "$2,595",
    imgurl:
      "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
    description:
      "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
  },
];

function App() {
  let [tourItems, setTourItems] = useState(INIT_DATA);
  const handleNotInterested = (data) => {
    setTourItems(tourItems.filter((item) => item.id !== data));
  };

async function f1(){
  await timeout(5000);
}
f1()
  return (
    <div>
      <div className="m-20">
        <div className="flex justify-center m">
          <div className="flex flex-col justify-center">
            {tourItems.length !== 0 ? (
              <h1 className="text-4xl font-black">Our Tours</h1>
            ) : (
              <h1 className="text-4xl font-black">No Tours Left!</h1>
            )}

            <div className="w-20 border-2 mx-auto mt-2 border-cyan-400"></div>

            <div className=" mt-6 self-center">
              {tourItems.length === 0 && (
                <button onClick={() => window.location.reload()} className="  text-white w-24 rounded-md p-2 bg-cyan-500 ">
                  Refresh
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback="Hello">
      <div className=" m-3 lg:m-12 ">
        <div className=" -mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
 
          {tourItems &&
            tourItems.map((item) => (
              <TourItem
                onNotInterested={handleNotInterested}
                key={item.id}
                {...item}
              />
            ))}
        </div>
      </div>
      </Suspense>
    </div>
  );
}

export default App;
