document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('github-cards-row');

  const reposToShow = [
    'nsamelson/Freshwater-Modelling',
    'nsamelson/particle-swarm-optimization',
    '16205/Sid_project',
    'nsamelson/Battery-degradation ',
    'nsamelson/advent-of-code-24',
    'nsamelson/5eiai50_AI_OCR'
  ];

  reposToShow.forEach(repoFullName => {
    fetch(`https://api.github.com/repos/${repoFullName}`)
      .then(response => response.json())
      .then(repo => {
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
      })
      .catch(err => console.error(`Failed to load ${repoFullName}:`, err));
  });
});
