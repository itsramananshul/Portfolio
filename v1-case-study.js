// V1 Split case studies. Original dialog content, links and handlers stay in app.js.
// Layout reference: Hero05 by felipemenezes098, retrieved through the 21st MCP.
(() => {
  const dialog = document.querySelector('#projectDialog');
  const head = dialog.querySelector('.modal-head');
  const toolbar = document.createElement('div');
  toolbar.className = 'v1-case-toolbar';
  toolbar.append(dialog.querySelector('#mClose'));
  dialog.prepend(toolbar);
  const grid = document.createElement('div');
  grid.className = 'v1-case-head-grid';
  const intro = document.createElement('div');
  intro.className = 'v1-case-intro';
  intro.append(head.querySelector('#mTitle'), head.querySelector('#mOneliner'));
  const preview = document.createElement('figure');
  preview.className = 'v1-case-preview';
  const image = document.createElement('img');
  image.decoding = 'async';
  preview.append(image);
  grid.append(intro, preview);
  head.querySelector('#mTags').before(grid);
  const updatePreview = () => {
    if (!dialog.open) return;
    const title = dialog.querySelector('#mTitle').textContent;
    const id = Object.keys(PROJECTS).find(key => PROJECTS[key].title === title);
    const source = previewImages[id];
    preview.hidden = !source;
    dialog.dataset.hasPreview = String(Boolean(source));
    if (source) {
      image.src = source;
      image.alt = `${title} preview`;
    } else {
      image.removeAttribute('src');
      image.alt = '';
    }
  };
  new MutationObserver(updatePreview).observe(dialog, { attributes: true, attributeFilter: ['open'] });
  dialog.dataset.caseStyle = 'split';
})();
