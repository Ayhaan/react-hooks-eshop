import React from 'react'

function Article({ article, money, acheter }) {
  return (
    <div className="col-lg-4 col-sm-12 col-md-6 text-light my-3">
                                        {/* Condition ternaire */}
      <div className={`rounded-lg p-4 ${article.stock > 1? `bg-dark`:`${article.stock === 0? "bg-danger": "bg-warning"}`}`}>
        <img src={article.lien} alt={article.nom} />
        <div className="btm">
          <h3>{article.nom}</h3>
          <p><span className="font-weight-bold">Prix :</span> {article.prix}€</p>

          <p><span className="font-weight-bold">Stock :</span> {article.stock} articles restantes</p>
                                                                                        {/* Condition ternaire */}
          <button onClick={acheter} className={`btn btn-outline-light font-weight-bold ${money < article.prix || article.stock <= 0? "d-none" : ""}`}> Acheter {article.name}</button>
        </div>
      </div>
    </div>
  )
}

export default Article;