// types/booking.ts
export type BookingStatus = 'confirmed' | 'pending' | 'cancelled' | 'completed';

export interface Booking {
  id: string;
  destination: string;
  bookingDate: string;
  travelDate: string;
  duration: string;
  status: BookingStatus;
  image: string;
}