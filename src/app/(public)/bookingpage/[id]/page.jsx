import BookingForm from "@/Components/BookingForm/BookingForm";

export default async function BookingPage({ params }) {
  const { id } = await params;
  return (
    <div>
      <BookingForm id={id}></BookingForm>
    </div>
  );
}
