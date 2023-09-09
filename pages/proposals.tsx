import Head from "next/head";
import ApplicationLayout from "@/components/Utilities/ApplicationLayout";

const proposals = [
  {
    name: "Add 0xetre....jkn3 to the list of available charging units in the Los Angeles area.",
    status: "active",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    timeRemaining: "3h remaining",
    for: 75000,
    against: 2000,
  },
  {
    name: "Remove faulty charging unit belonging to 0xetre....jkn3 in the downtown Manhattan area.",
    status: "active",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    timeRemaining: "3h remaining",
    for: 75000,
    against: 2000,
  },
];

export default function Proposals() {
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

      <ApplicationLayout>
        <div className="">
          <div className="font-black text-zinc-900 text-2xl">
            Recent Proposals
          </div>
          <div>
            Here&apos;s a list of all recent proposals created on the Electra
            DAO.
          </div>
          {/* Recent Proposals Start */}
          <div className="mt-8">
            <ul role="list" className="divide-y divide-zinc-100">
              {proposals.map((proposal, index) => (
                <li key={index} className="grid grid-cols-12 space-x-6 py-5">
                  <div className="col-span-8 flex items-center min-w-0 gap-x-4">
                    <div className="h-3 w-3">
                      <div className="relative flex items-center h-3 w-3 bg-primary-600 rounded-full">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-auto">
                      <p className="text-xl font-medium leading-6 text-zinc-900 truncate max-w-prose">
                        {proposal.name}
                      </p>
                      <div className="mt-3 flex items-center gap-x-5">
                        <div className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-zinc-900 ring-1 ring-inset ring-zinc-200">
                          <svg
                            className={`h-1.5 w-1.5 ${
                              proposal.status === "active"
                                ? "fill-yellow-500"
                                : proposal.status === "failed"
                                ? "fill-red-500"
                                : "fill-green-500"
                            }`}
                            viewBox="0 0 6 6"
                            aria-hidden="true"
                          >
                            <circle cx={3} cy={3} r={3} />
                          </svg>
                          Active
                        </div>
                        {/* {proposal.lastSeen && (
                          <div className="mt-1 text-xs leading-5 text-zinc-500">
                            <time dateTime={proposal.lastSeenDateTime}>
                              {proposal.lastSeen}
                            </time>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <div className="flex items-center gap-x-3 w-full">
                      <div className="w-full bg-zinc-200 rounded-full h-1">
                        <div
                          className="bg-primary-600 h-1 rounded-full"
                          style={{
                            width:
                              (proposal.for /
                                (proposal.for + proposal.against)) *
                              100,
                          }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-zinc-500 text-right">
                        {proposal.for} For
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3 w-full">
                      <div className="w-full bg-zinc-200 rounded-full h-1">
                        <div
                          className="bg-primary-600 h-1 rounded-full"
                          style={{
                            width:
                              (proposal.against /
                                (proposal.for + proposal.against)) *
                              100,
                          }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-zinc-500 text-right">
                        {proposal.against} Against
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Recent Proposals End */}
        </div>
      </ApplicationLayout>
    </>
  );
}
