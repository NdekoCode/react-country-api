const Card = ({ country }) => {
  const { flags, name, translations } = country;
  console.log(country);
  return (
    <li className="card">
      <img src={flags.svg} alt={"Drapeau " + name.nativeName.fra.official} />
      <div className="infos">
        <h3>{translations.fra.official}</h3>
      </div>
    </li>
  );
};
export default Card;
