import { useState } from "react";
import Head from "next/head";
import {
  BanknotesIcon,
  Battery100Icon,
  CreditCardIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/outline";
import { useAccount } from "wagmi";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";

import {
  GeolocateControl,
  Map,
  Marker,
  NavigationControl,
  useMap,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const stats = [
  {
    name: "Revenue",
    value: "$405,091.00",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Overdue invoices",
    value: "$12,787.00",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Outstanding invoices",
    value: "$245,988.00",
    change: "-1.39%",
    changeType: "positive",
  },
  {
    name: "Expenses",
    value: "$30,156.00",
    change: "+10.18%",
    changeType: "negative",
  },
];
const items = [
  {
    title: "Register a vehicle",
    description: "Another to-do system you'll try but eventually give up on.",
    icon: CursorArrowRippleIcon,
    background: "bg-pink-500",
  },
  {
    title: "Register a charging station",
    description: "Stay on top of your deadlines, or don't — it's up to you.",
    icon: Battery100Icon,
    background: "bg-indigo-500",
  },
  {
    title: "Top up charging points",
    description: "Great for mood boards and inspiration.",
    icon: CreditCardIcon,
    background: "bg-blue-500",
  },
  {
    title: "Withdraw earnings",
    description: "Track tasks in different stages of your project.",
    icon: BanknotesIcon,
    background: "bg-purple-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const { address: walletAddress } = useAccount();
  const [location, setLocation] = useState([]);
  const [address, setAddress] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation([latitude, longitude]);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Make API call to OpenWeatherMap
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        // setAddress((data) => {
        //   data.
        // });

        console.log(data);
        var addressTemp = data.features.filter((item) =>
          item.place_type.includes("address")
        )[0];
        setAddress(addressTemp.place_name);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <>
      <Head>
        <title>
          Dashboard - Electra | Democratizing EV Technology using the Blockchain
        </title>
        <meta
          name="title"
          content="Notifications - Electra | Push Notification Service for the Neo Blockchain"
        />
        <meta
          name="description"
          content="Stay informed and in-the-know with real-time push
            notifications on transactions, smart contracts, and network
            developments. Empower your Neo experience with Electra's
            timely alerts, ensuring you never miss a beat on the Neo
            Blockchain."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neocast.blitzcrafthq.com" />
        <meta
          property="og:title"
          content="Notifications - Electra | Push Notification Service for the Neo Blockchain"
        />
        <meta
          property="og:description"
          content="Stay informed and in-the-know with real-time push
            notifications on transactions, smart contracts, and network
            developments. Empower your Neo experience with Electra's
            timely alerts, ensuring you never miss a beat on the Neo
            Blockchain."
        />
        <meta property="og:image" content="/meta-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://neocast.blitzcrafthq.com/"
        />
        <meta
          property="twitter:title"
          content="Notifications - Electra | Push Notification Service for the Neo Blockchain"
        />
        <meta
          property="twitter:description"
          content="Stay informed and in-the-know with real-time push
            notifications on transactions, smart contracts, and network
            developments. Empower your Neo experience with Electra's
            timely alerts, ensuring you never miss a beat on the Neo
            Blockchain."
        />
        <meta property="twitter:image" content="/meta-image.jpg" />
        <style>
          {`
          .map-container {
            height: 500px;
            }
          `}
        </style>
      </Head>

      <ApplicationLayout customHeader="Your Dashboard">
        {/* Earnings Stats Start */}
        <div className="rounded-md bg-white px-5 py-6 shadow sm:px-6">
          <dl className="mx-auto grid grid-cols-1 gap-px bg-zinc-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt className="text-sm font-medium leading-6 text-zinc-500">
                  {stat.name}
                </dt>
                <dd
                  className={classNames(
                    stat.changeType === "negative"
                      ? "text-rose-600"
                      : "text-zinc-700",
                    "text-xs font-medium"
                  )}
                >
                  {stat.change}
                </dd>
                <dd className="w-full flex-none text-3xl font-bold leading-10 tracking-tight text-zinc-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Earnings Stats End */}
        {/* Map Start */}
        <div className="mt-8 rounded-md bg-white px-5 py-6 shadow sm:px-6">
          <div className="font-semibold text-2xl text-gray-900">
            EV Charging Stations Near Your Location
          </div>
          <div>
            {!location ? (
              <button onClick={handleLocationClick}>Get Location</button>
            ) : null}
            {location ? <p>Loading weather data...</p> : null}
            {location ? (
              <div>
                <p>Location: {address}</p>
              </div>
            ) : null}
          </div>
          <div className="col-span-2 overflow-hidden rounded-md">
            {location && (
              <Map
                mapLib={import("mapbox-gl")}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
                attributionControl={false}
                initialViewState={{
                  longitude: location[1],
                  latitude: location[0],
                  zoom: 10,
                }}
                style={{ height: 500 }}
                // mapStyle="mapbox://styles/mapbox/navigation-day-v1"
                mapStyle="mapbox://styles/mapbox/streets-v9"
                className="relative map-container"
              >
                <GeolocateControl />
                <NavigationControl />
                {/* {showMarker && (
                  <Marker
                    longitude={center[0]}
                    latitude={center[1]}
                    anchor="bottom"
                    draggable={true}
                    onClose={() => setShowPopup(false)}
                  />
                )} */}
              </Map>
            )}
          </div>
        </div>
        {/* Map End */}
        {/* Menu Start */}
        {/* <div className="px-5 lg:px-8">
          <h2 className="pt-8 text-base font-semibold leading-6 text-zinc-900 border-t border-zinc-200">
            {address && (
              <>
                Hello there {address.slice(0, 4)}...
                {address.slice(address.length - 4)}!
              </>
            )}
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            What would you like to do today?
          </p>
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-zinc-200 py-6 sm:grid-cols-2"
          >
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="flow-root">
                <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-zinc-50">
                  <div
                    className={classNames(
                      item.background,
                      "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg"
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <span>{item.title}</span>
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
        {/* Menu End */}
      </ApplicationLayout>
    </>
  );
}