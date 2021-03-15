import React from 'react'

function Panier({ article, revendre }) {
  return (
    <div>
      <div className="bg-dark rounded-lg text-light d-flex p-2 m-1 align-items-center justify-content-around">
        <h4 className="m-2">{article.nom}</h4>
        <p className="m-2"><span className="font-weight-bold">Prix :</span> {article.prix}€</p>
        <button onClick={revendre} className="btn btn-outline-danger m-2">Revendre</button>
      </div>
    </div>
  )
};

export default Panier;