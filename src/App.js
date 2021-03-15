import React, { useState } from 'react';
import Article from './components/Article';
import Panier from './components/Panier';

function App() {
  // States
  const [articles, setArticles] = useState(
    [{
      nom: 'Coke',
      prix: 2,
      stock: 6,
      lien: "./img/cocacola.png"
    }, {
      nom: 'Fanta',
      prix: 1.50,
      stock: 6,
      lien: "./img/fanta.png"
    }, {
      nom: 'Lipton',
      prix: 1.75,
      stock: 6,
      lien: "./img/icetea.png"
    }]);
  const [panier, setPanier] = useState([])   //panier
  const [argent, setArgent] = useState(14);  // argent


  //Partie Logique JS
  let acheter = (i) => {
    // copie des states
    let copieArgent = argent;
    let copieArticle = articles;
    
    // logique js
    copieArgent -= articles[i].prix;
    copieArticle[i].stock--;
    panier.push(articles[i])

    //update les states
    setArticles(copieArticle);
    setPanier(panier);
    setArgent(copieArgent);
  };

  let revendre = (i) => {
    // copie des states
    let copieArticle = [...articles];
    let copiePanier = panier;
    let copieArgent = argent;

    // logique js
    copieArticle[copieArticle.indexOf(panier[i])].stock++;
    copieArgent += copieArticle[copieArticle.indexOf(panier[i])].prix;
    panier.splice(i, 1);

    //update les states
    setArticles(copieArticle);
    setPanier(copiePanier);
    setArgent(copieArgent);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav d-flex justify-content-around row w-100 text-center">
            <div className="col-12">
              <span className="font-weight-bold">Argent :</span> {argent}€
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          {articles.map((el, i) => {
            return (
              <Article key={i} article={el} money={argent} acheter={() => acheter(i)} />
            );
          })}
        </div>
        <div className="basket mt-5">
          <h3 className="text-dark">Panier :</h3>
          {panier.map((el, i) => {
            return (
              <Panier key={i} article={el} revendre={() => revendre(i)} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;