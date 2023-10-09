// import React, { useState } from 'react';
// import './Table.css'; // Importe o arquivo CSS aqui
// import Square from './Square'; // Importe o componente Square

// export default function Table() {
//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const numRows = 3;
//   const numCols = 3;

//   return (
//     <div>
//       <table className="table">
//         <tbody>
//           {Array.from({ length: numRows }, (_, rowIndex) => (
//             <tr key={rowIndex}>
//               {Array.from({ length: numCols }, (_, colIndex) => {
//                 const index = rowIndex * numCols + colIndex;
//                 return (
//                   <td key={index}>
//                     <Square 
//                       onClick={ () => setDialogOpen(!isDialogOpen)}
//                     />
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }


// import React, { useState } from 'react';
// import './Table.css'; // Importe o arquivo CSS aqui
// import Square from './Square'; // Importe o componente Square

// export default function Table() {
//   const numRows = 3;
//   const numCols = 3;

//   return (
//     <div>
//       <table className="table">
//         <tbody>
//           <tr>
//             {Array.from({ length: numCols + 1}, (_, colIndex) => (
//               <th key={colIndex}>Coluna {colIndex + 1}</th>
//             ))}
//           </tr>
//           {Array.from({ length: numRows }, (_, rowIndex) => (
//             <tr key={rowIndex}>
//               <th>Linha {rowIndex + 1}</th>
//               {Array.from({ length: numCols }, (_, colIndex) => {
//                 const index = rowIndex * numCols + colIndex;
//                 return (
//                   <td key={index}>
//                     <Square />
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from 'react';
import './Table.css'; // Importe o arquivo CSS aqui
import Square from './Square'; // Importe o componente Square
import collumnName from '../utils/generateCollumName';

export default function Table() {
  const numRows = 3;
  const numCols = 3;

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            {/* Deixe a primeira célula da linha de títulos em branco */}
            <th></th>
            {Array.from({ length: numCols }, (_, colIndex) => (
              <th key={colIndex}> {collumnName()} </th>
            ))}
          </tr>
          {Array.from({ length: numRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              <th>{collumnName()}</th>
              {Array.from({ length: numCols }, (_, colIndex) => {
                const index = rowIndex * numCols + colIndex;
                return (
                  <td key={index} >
                    <Square />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
