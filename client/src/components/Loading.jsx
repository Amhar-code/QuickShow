import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Loading = () => {
  const { nextUrl } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { axios } = useAppContext();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sessionId = searchParams.get('session_id');

    // If we have a Stripe session id, confirm the payment on the backend
    if (sessionId) {
      axios.get(`/api/booking/confirm-payment?session_id=${sessionId}`)
        .catch((error) => {
          console.log('Error confirming payment:', error);
        });
    }

    if (nextUrl) {
      setTimeout(() => {
        // Ensure we navigate to an absolute path (e.g. "/my-bookings")
        const target = nextUrl.startsWith('/') ? nextUrl : `/${nextUrl}`;
        navigate(target);
      }, 8000)
    }
  }, [])

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='animate-spin rounded-full h-14
        w-14 border-2 border-t-primary'></div>
    </div>
  )
}

export default Loading