import express from 'express';
import { createBooking, getOccupiedSeats, confirmBookingPayment } from '../controllers/bookingController.js';

const bookingRouter = express.Router();


bookingRouter.post('/create', createBooking);
bookingRouter.get('/seats/:showId', getOccupiedSeats);
bookingRouter.get('/confirm-payment', confirmBookingPayment);

export default bookingRouter;