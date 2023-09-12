import Head from "next/head";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";

const proposal = {
  id: "2tjnj2g",
  name: "Add 0xetre....jkn3 to the list of available charging units in the Los Angeles area.",
  status: "active",
  timeRemaining: "3h remaining",
  for: 75000,
  against: 2000,
};

const addressesFor = [
  {
    address: "0xkh2gyr624ib7bt8b9",
    votes: "44,000",
  },
  {
    address: "0xkh2gy38yvib7bt8b9",
    votes: "32,000",
  },
  {
    address: "0xkh2gyr624icnii8b9",
    votes: "7,000",
  },
  {
    address: "0xuhuevr624ib7bt8b9",
    votes: "9,000",
  },
  {
    address: "0xkh2gyr624ib7b784g",
    votes: "103,000",
  },
];

const addressesAgainst = [
  {
    address: "0xkh2gyr624ib7bt8b9",
    votes: "44,000",
  },
  {
    address: "0xkh2gy38yvib7bt8b9",
    votes: "32,000",
  },
  {
    address: "0xkh2gyr624icnii8b9",
    votes: "7,000",
  },
  {
    address: "0xuhuevr624ib7bt8b9",
    votes: "9,000",
  },
  {
    address: "0xkh2gyr624ib7b784g",
    votes: "103,000",
  },
];

export default function Proposal() {
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
      </Head>

      <ApplicationLayout customHeader={proposal.name}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
          <div className="rounded-md bg-white shadow py-6">
            {/* Votes Progress Bar Start */}
            <div className="w-full px-5 sm:px-6">
              <p className="mt-1 text-md leading-5 font-bold flex justify-between">
                <span className="text-zinc-700">For</span>
                <span className="">
                  {proposal.for} out of {proposal.for + proposal.against}
                </span>
              </p>
              <div className="mt-3 w-full bg-zinc-200 rounded-full h-1">
                <div
                  className="bg-green-600 h-1 rounded-full"
                  style={{
                    width: `${
                      (proposal.for / (proposal.for + proposal.against)) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            {/* Votes Progress Bar End */}
            {/* Addresses Start */}
            <div className="mt-8 px-5 sm:px-6 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-400 sm:pl-0"
                        >
                          {addressesFor.length} Addresses
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-right text-sm font-semibold text-gray-400"
                        >
                          Votes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {addressesFor.map((address) => (
                        <tr key={address.address}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {address.address}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 text-right">
                            {address.votes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Addresses End */}
            <div className="mt-5 pt-5 border-t border-gray-200 font-black text-gray-600 text-md text-center">
              View All
            </div>
          </div>

          <div className="rounded-md bg-white shadow py-6">
            {/* Votes Progress Bar Start */}
            <div className="w-full px-5 sm:px-6">
              <p className="mt-1 text-md leading-5 font-bold flex justify-between">
                <span className="text-zinc-700">Against</span>
                <span className="">
                  {proposal.against} out of {proposal.for + proposal.against}
                </span>
              </p>
              <div className="mt-3 w-full bg-zinc-200 rounded-full h-1">
                <div
                  className="bg-red-600 h-1 rounded-full"
                  style={{
                    width: `${
                      (proposal.against / (proposal.for + proposal.against)) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
            {/* Votes Progress Bar End */}
            {/* Addresses Start */}
            <div className="mt-8 px-5 sm:px-6 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-400 sm:pl-0"
                        >
                          {addressesFor.length} Addresses
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-right text-sm font-semibold text-gray-400"
                        >
                          Votes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {addressesAgainst.map((address) => (
                        <tr key={address.address}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {address.address}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 text-right">
                            {address.votes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Addresses End */}
            <div className="mt-5 pt-5 border-t border-gray-200 font-black text-gray-600 text-md text-center">
              View All
            </div>
          </div>
        </div>
      </ApplicationLayout>
    </>
  );
}
