function calculer() {
  const entreprise = document.getElementById('entreprise').value;
  const siret = document.getElementById('siret').value;
  const client = document.getElementById('client').value;
  const date = document.getElementById('date').value;
  const prestation = document.getElementById('prestation').value;
  const heures = parseInt(document.getElementById('heures').value);
  const taux = parseInt(document.getElementById('taux').value);
  const demande = document.getElementById('demande').value;

  const montantHT = heures * taux;
  const tva = montantHT * 0.2; // TVA à 20%
  const montantTTC = montantHT + tva;

  const resultat = `
    <div class="resultat-container">
      <div class="entreprise-info">
        <h2>Informations de l'entreprise</h2>
        <p>Nom de l'entreprise : ${entreprise}</p>
        <p>N° SIRET : ${siret}</p>
        <p>Tél. : 06 67 11 55 67</p>
      </div>
      <div class="client-info">
        <h2>Informations du client</h2>
        <p>Nom du client : ${client}</p>
        <p>Date : ${date}</p>
      </div>
    </div>
    <table>
      <tr>
        <th>Libellé</th>
        <th>Quantité</th>
        <th>Prix unitaire</th>
        <th>Montant</th>
      </tr>
      <tr>
        <td>${prestation}</td>
        <td>${heures} heures</td>
        <td>${taux} €</td>
        <td>${montantHT} €</td>
      </tr>
      <tr>
        <td>TVA (20%)</td>
        <td></td>
        <td></td>
        <td>${tva} €</td>
      </tr>
      <tr>
        <td>Montant total</td>
        <td></td>
        <td></td>
        <td>${montantTTC} €</td>
      </tr>
    </table>
  `;

  document.getElementById('resultat').innerHTML = resultat;
}

function telechargerDevis() {
  const resultat = document.getElementById('resultat').innerHTML;

  const html = `
    <html>
      <head>
        <title>Devis</title>
      </head>
      <body>
        <table>
          <tr>
            <th>Libellé</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>Montant</th>
          </tr>
          ${resultat}
          <tr>
            <td colspan="4">
              <input type="checkbox" id="lu-et-approuve">
              <label for="lu-et-approuve">Lu et approuvé</label>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const blob = new Blob([html], { type: 'text/html' });

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');

  link.href = url;

  link.download = 'devis.html';

  link.click();

  URL.revokeObjectURL(url);
}
 