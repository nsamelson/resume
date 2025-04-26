// Fetch and display your latest GitHub repos
document.addEventListener('DOMContentLoaded', () => {
    const githubUsername = 'yourusername';  // <-- Replace with your GitHub username
    const target = document.getElementById('github-projects');
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`)
      .then(response => response.json())
      .then(repos => {
        repos.forEach(repo => {
          const col = document.createElement('div');
          col.className = 'col-md-4';
          col.innerHTML = `
            <div class="card h-100">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title"><a href="${repo.html_url}" target="_blank">${repo.name}</a></h5>
                <p class="card-text flex-grow-1">${repo.description || ''}</p>
                <a href="${repo.html_url}" target="_blank" class="mt-auto btn btn-sm btn-outline-secondary">View on GitHub</a>
              </div>
            </div>
          `;
          target.appendChild(col);
        });
      })
      .catch(err => console.error('GitHub fetch error:', err));
  });
    