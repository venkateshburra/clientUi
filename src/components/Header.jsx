// import { useEffect, useState } from "react";

// export function Header() {
//   const FetchData = "https://jsonplaceholder.typicode.com/posts";
//   const [data, setData] = useState([]); // State to store fetched data
//   const [error, setError] = useState(); // State to store errors
//   const [loading, setLoading] = useState(true); // State for loading status

//   useEffect(() => {
//    setTimeout(() => {
//     const asyncFetchData = async () => {
//       try {
//         const response = await fetch(FetchData);
//         if (!response.ok) {
//           throw new Error("Something went wrong. Check it and fix it.");
//         }
//         const result = await response.json();
//         setData(result); // Set fetched data
//         setLoading(false); // Stop loading after fetching data
//       } catch (err) {
//         console.error(err);
//         setError(err.message); // Set error message
//         setLoading(false); // Stop loading if an error occurs
//       }
//     };
//     asyncFetchData(); // Fetch data on component mount
//    }, 1000)

   
//   }, []); // Add an empty dependency array to ensure it runs only once

//   return (
//     <div>
//       {loading && <p>Loading...</p>} {/* Show loading message */}
//       {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
//       {!loading && !error && (
//         <ul className="m-2 w-[800px]">
//           {data.map((item) => (
//             <li key={item.id} className="my-6">
//               <h1 className="text-blue-600 text-2xl">{item.title}</h1>
//               <p className="text-gray-800 text-xl">{item.body}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
