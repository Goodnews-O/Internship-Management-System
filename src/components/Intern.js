function Intern(props) {
  const intern = props.internData;
  return (
    <>
      <tr>
        <td>
          <img src={intern.imgSrc} alt="profile" />
          {intern.firstName} {intern.lastName}
        </td>
        <td> {intern.attendance} </td>
        <td> {intern.bonus} </td>
        <td> {intern.strikes} </td>
        <td> {intern.powerRanking} </td>
      </tr>
    </>
  );
}
export default Intern;
