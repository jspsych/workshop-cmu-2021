window.onload = () => {
  document.querySelector('#experiment').innerHTML = `
    <p>Welcome to my experiment!</p><p>Press any key to begin</p>`;

  document.addEventListener('keydown', show_instructions);

  function show_instructions(){
    document.removeEventListener('keydown', show_instructions);

    document.querySelector('#experiment').innerHTML = `
      <p>Press the W key if the letters form a valid English word.</p>
      <p>Press the N key if the letters do not form a valid English word.</p>
      <p>Press the spacebar to begin.</p>`

    document.addEventListener('keydown', (e) => {
      if(e.key == ' ') { begin(); }
    });
  }
}


