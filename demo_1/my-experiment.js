window.onload = () => {
  document.querySelector('#experiment').innerHTML = `
    <p>Welcome to my experiment!</p><p>Press any key to begin</p>`;

  document.addEventListener('keydown', show_instructions);

  function show_instructions(){
    document.removeEventListener('keydown', show_instructions);

    document.querySelector('#experiment').innerHTML = `
      <p>Press the X key if there is a red X</p>
      <p>Press the N key if there is no red X</p>
      <p>Press the spacebar to begin.</p>`

    document.addEventListener('keydown', (e) => {
      if(e.key == ' ') { begin(); }
    });
  }

  function begin(){
    document.querySelector('#experiment').innerHTML = '';
  }
}





