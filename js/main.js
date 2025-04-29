
// fetch github repos
document.addEventListener('DOMContentLoaded', () => {
  const githubUsername = 'nsamelson';
  // const target = document.querySelector('#github-projects .row');
  const target = document.getElementById('github-cards-row');

  const whitelist = ['Freshwater-Modelling', 'particle-swarm-optimization','Battery-degradation','equation-similarities','advent-of-code-24','5eiai50_AI_OCR'];

  fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12`)
    .then(response => response.json())
    .then(repos => {repos
      .filter(repo => whitelist.includes(repo.name))
      .forEach(repo => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title"><a href="${repo.html_url}" target="_blank">${repo.name}</a></h5>
              <p class="card-text flex-grow-1">${repo.description || 'No description provided.'}</p>
              <a href="${repo.html_url}" target="_blank" class="btn btn-sm btn-outline-secondary mt-auto">View on GitHub</a>
            </div>
          </div>
        `;
        target.appendChild(col);
      });
    })
    .catch(err => console.error('GitHub fetch error:', err));
});
