import Frontend from "../internsData/Frontend";
import Intern from "./Intern";
import { useState } from "react";

function Leaderboard() {
  const [FrontendInterns, setFrontendInterns] = useState(Frontend);
  //   console.log(FrontendInterns.interns)

  function reverseArray() {
    let reversedArray = [];
    FrontendInterns.interns.forEach((intern) => {
      // reversedArray[FrontendInterns.length-1] = intern;
      reversedArray.unshift(intern);
    });
    setFrontendInterns((prev) => {
      return { ...prev, interns: reversedArray };
    });
    // const newobject = {
    //     track:'Frontend', interns: reversedArray
    // }
    // console.log(newobject);
    // setFrontendInterns();
  }
  return (
    <>
      <button onClick={reverseArray}>Bottom to top</button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Bonus</th>
            <th>Strikes</th>
            <th>Power Ranking</th>
          </tr>
          {FrontendInterns.interns.map((intern) => {
            return <Intern internData={intern} key={intern.id} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Leaderboard;
