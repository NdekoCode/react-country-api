const Card = ({ country }) => {
  const { flags, translations, capital, population } = country;
  console.log(country);
  return (
    <li className="card">
      <img src={flags.svg} alt={"Drapeau " + translations.fra.official} />
      <div className="infos">
        <h2>{translations.fra.common}</h2>
        <h4>{capital}</h4>
        <p>Po. {population.toLocaleString()}</p>
      </div>
    </li>
  );
};
export default Card;
