
export function CarteLocal({nom, capacite, disponibilite, prix}){
  return (
      <>
        <h2 className="titre"> {nom}</h2>
        <p>Capacité : {capacite} </p>
        <p>Disponibilité : {disponibilite} </p>
        <p>Prix : {prix} </p>
        <br/>
      </>
  );
}