// import React from 'react';
// import "./MusicTable.css";

// import mental from "../../images/Mental.jpg"

// const MusicTable = () => {
//     return (
//         <article>
//             <img src={mental} alt="Mental" />
//             <div>
//                 <h3>Mental</h3>
//                 <p>$49.95</p>
//             </div>
//         </article>
//     );
// };

// export default MusicTable;

import React from 'react';
import TracksPage from '../../pages/TracksPage/TracksPage';

const TracksTable = (props) => {
    console.log(TracksPage);
    return (
        <div className="container">
            <h2>Tracks</h2>
            <TracksPage />
            <TracksTable />
        </div>
    );
};

export default TracksTable;