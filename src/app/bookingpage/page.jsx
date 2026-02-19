import BookingForm from "@/Components/BookingForm/BookingForm";

export default function BookingPage({ searchParams }) {
  //   const  = useSearchParams();
  const id = searchParams?.serviceId;

  return (
    <div>
      <BookingForm id={id}></BookingForm>
    </div>
  );
}
