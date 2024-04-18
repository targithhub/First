const Employee = (props) => {
  return (
    <div>
      <h2>Q3 Employee Details </h2>
      {props.employeeData.map((item) => {
        return (
          <p>
            {item.name}
            <br></br> {item.position}
            <br></br>
            {item.salary}
          </p>
        );
      })}
    </div>
  );
};

export default Employee;
