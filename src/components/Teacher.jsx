import DersList from "./DersList";

const Teacher = ({ name, dep, img }) => {
  return (
    <div>
      <img src={img} alt={name} width="80%" />
      <h4>{name}</h4>
      <h6>{dep}</h6>
      <DersList />
    </div>
  );
};

export default Teacher;
