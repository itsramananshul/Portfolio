// Read the original data and controls without changing the V1 implementation.
window.portfolioV2 = {
  projects: PROJECTS,
  images: previewImages,
  open: openModal,
  additional: [...document.querySelectorAll('#compact-list .compact-row')].map(row => ({
    id: row.dataset.id,
    title: row.querySelector('.ttl').textContent,
    category: row.querySelector('.yr').textContent,
    description: row.querySelector('.stack').innerHTML
  })),
  featured: tracks.map(track => ({
    id: track.dataset.id,
    title: track.querySelector('.track-t').textContent,
    category: [...track.querySelectorAll('.track-meta span')].map(span => span.textContent.trim()).join(' '),
    description: track.querySelector('.track-d').innerHTML
  }))
};
