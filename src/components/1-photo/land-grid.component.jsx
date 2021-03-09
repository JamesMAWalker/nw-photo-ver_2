import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import PhotoSmall from './photo-small.component';
import PhotoModal from './photo-modal.component'

import { PHOTO_DATA } from '../../data-store/photos.data';

const LandGrid = (props) => {

  const [calories, setCalories] = useState(Object.values(PHOTO_DATA.calories.photos))

  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const handleModalOpen = (src) => {
    setModalOpen(!modalOpen)
    setModalContent(src)
  }
  

  const row1 = calories.slice(0, 3);
  const row2 = calories.slice(3, 6);
  const row3 = calories.slice(6, 9);
  const calsOne = [row1, row2, row3];

  const calsTwo = calories.slice(9, 13);

  const row4 = calories.slice(13, 16);
  const row5 = calories.slice(16, 19);
  const row6 = calories.slice(19, 22);
  const calsThree = [row4, row5, row6];

  return (
    <div className='land__grid'>
      {
        modalOpen && (
          <PhotoModal 
            srcLink={modalContent}
            action={() => setModalOpen(false)}
          />
        )
      }
      <div className='land__sec-one'>
        {calsOne.map((r) => (
          <div
            className={`land__sec-one--row${
              calsOne.indexOf(r) + 1
            }`}
            key={uuid()}
          >
            {r.map((cal) => (
              <PhotoSmall
                className='photo--small'
                alt={cal.name}
                src={cal.link}
                key={uuid()}
                action={() => handleModalOpen(cal.link)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className='land__sec-two'>
        {calsTwo.map((cal) => (
          <div
            key={uuid()}
            className={`sec2__photo-${
              calsTwo.indexOf(cal) + 1
            }`}
          >
            <PhotoSmall
              className='photo--small'
              alt={cal.name}
              src={cal.link}
              key={uuid()}
            />
          </div>
        ))}
      </div>
      <div className='land__sec-three'>
        {calsThree.map((r) => (
          <div
            key={uuid()}
            className={`land__sec-three--row${
              calsThree.indexOf(r) + 1
            }`}
          >
            {r.map((cal) => (
              <PhotoSmall
                className='photo--small'
                alt={cal.name}
                src={cal.link}
                key={uuid()}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
// class LandGrid extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       calories: Object.values(PHOTO_DATA.calories.photos),
//     };
//   }

//   render() {
//     const { calories } = this.state;

//     const row1 = calories.slice(0, 3);
//     const row2 = calories.slice(3, 6);
//     const row3 = calories.slice(6, 9);
//     const calsOne = [row1, row2, row3];

//     const calsTwo = calories.slice(9, 13);

//     const row4 = calories.slice(13, 16);
//     const row5 = calories.slice(16, 19);
//     const row6 = calories.slice(19, 22);
//     const calsThree = [row4, row5, row6];

//     return (
//       <div className='land__grid'>
//         {

//         }
//         <div className='land__sec-one'>
//           {calsOne.map((r) => (
//             <div
//               className={`land__sec-one--row${
//                 calsOne.indexOf(r) + 1
//               }`}
//               key={uuid()}
//             >
//               {r.map((cal) => (
//                 <PhotoSmall
//                   className='photo--small'
//                   alt={cal.name}
//                   src={cal.link}
//                   key={uuid()}
//                   onClick={showModal(cal.link)}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//         <div className='land__sec-two'>
//           {calsTwo.map((cal) => (
//             <div
//               key={uuid()}
//               className={`sec2__photo-${
//                 calsTwo.indexOf(cal) + 1
//               }`}
//             >
//               <PhotoSmall
//                 className='photo--small'
//                 alt={cal.name}
//                 src={cal.link}
//                 key={uuid()}
//               />
//             </div>
//           ))}
//         </div>
//         <div className='land__sec-three'>
//           {calsThree.map((r) => (
//             <div
//               key={uuid()}
//               className={`land__sec-three--row${
//                 calsThree.indexOf(r) + 1
//               }`}
//             >
//               {r.map((cal) => (
//                 <PhotoSmall
//                   className='photo--small'
//                   alt={cal.name}
//                   src={cal.link}
//                   key={uuid()}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

export default LandGrid;
