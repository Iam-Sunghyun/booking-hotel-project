// import SpinnerMini from "@/app/_components/SpinnerMini";
import { updateReservation } from "@/app/_lib/actions";
// import { useFormStatus } from "react-dom";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import SubmitButton from "@/app/_components/SubmitButton";

export default async function Page({ params }) {
  // CHANGE

  const reservation = await getBooking(params.bookingId);
  const cabin = await getCabin(reservation.cabinId);
  // console.log(reservation, cabin);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{params.bookingId}
      </h2>

      <form
        action={updateReservation}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            required
            name="numGuests"
            id="numGuests"
            defaultValue={reservation.numGuests}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          >
            <option>Select number of guests...</option>
            {Array.from({ length: cabin.maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">Anything we should know about your stay?</label>
          <textarea
            name="observations"
            defaultValue={reservation.observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="업데이트 중...">업데이트</SubmitButton>
        </div>

        <input name="bookingId" defaultValue={params.bookingId} hidden />
      </form>
    </div>
  );
}

// function Button() {
//   const { isPending } = useFormStatus();

//   return (
//     <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
//       {isPending ? <SpinnerMini /> : "Update reservation"}
//     </button>
//   );
// }
