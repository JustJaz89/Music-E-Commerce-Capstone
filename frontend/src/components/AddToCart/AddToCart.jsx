// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function TrackDetails(props) {
//   const [cartCount, setCartCount] = useState(0);
//   const [trackId, setTrackId] = useState(props.trackId);

//   useEffect(() => {
//     axios.get('/cart/count').then(response => {
//       setCartCount(response.data.count);
//     });
//   }, []);

//   function addToCart() {
//     axios.post('/cart/add', { trackId }).then(response => {
//       setCartCount(cartCount + 1);
//     });
//   }

//   return (
//     <div>
//       <h1>{props.trackName}</h1>
//       <p>{props.trackDescription}</p>
//       <button onClick={addToCart}>Add to cart</button>
//       <p>Items in cart: {cartCount}</p>
//     </div>
//   );
// }

// export default TrackDetails;