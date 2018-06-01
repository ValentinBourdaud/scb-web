// Fetch API

fetch('https://sgp-api-valentinb.herokuapp.com/api/collaborateurs')

    .then((resp) => resp.json())

    .then(data => afficher(data))



function afficher(data) {



    var lignes = data.map(unCollab => `

        <tr>

            <td>${unCollab.matricule}</td>

            <td>${unCollab.nom}</td>

            <td>${unCollab.prenom}</td>

        </tr>

    `).join('')



    var html = `

        <table>

            <thead>

                <th>Matricule</th>

                <th>Nom</th>

                <th>Prenom</th>

            </thead>

            <tbody>

               ${lignes}

            </tbody>

        </table>

    `;

    document.querySelector('#collabs').innerHTML = html

}
