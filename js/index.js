let randomNumber = Math.floor(Math.random() * 100) + 1;
      const guesses = document.querySelector(".guesses");
      const lastResult = document.querySelector(".lastResult");
      const lowOrHi = document.querySelector(".lowOrHi");
      const guessSubmit = document.querySelector(".guessSubmit");
      const guessField = document.querySelector(".guessField");
      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        let userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = "Intentos anteriores: ";
        }

        guesses.textContent += userGuess + " ";

        if (userGuess === randomNumber) {
          lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
          lastResult.style.backgroundColor = "green";
          lowOrHi.textContent = "";
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = "!!!Fin del juego!!!";
          lowOrHi.textContent = "";
          setGameOver();
        } else {
          lastResult.textContent = "¡Incorrecto!";
          lastResult.style.backgroundColor = "red";
          if (userGuess < randomNumber) {
            lowOrHi.textContent = "¡El número es muy bajo!";
          } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "¡El número es muy grande!";
          }
        }

        guessCount++;
        guessField.value = "";
      }

      guessSubmit.addEventListener("click", checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Iniciar nuevo juego";
        document.body.append(resetButton);
        resetButton.addEventListener("click", resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll(".resultParas p");
        for (let i = 0; i < resetParas.length; i++) {
          resetParas[i].textContent = "";
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
        lastResult.style.backgroundColor = "white";
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }


      alert('¡Bienvenido a nuestro juego! ¡A jugar!');

/*   

1. Generamos un número aleatorio entre 1 y 100 y lo almacenamos en una variable llamada `randomNumber`.
2. Creamos una variable llamada `turnNumber` a 1, que usaremos para realizar un seguimiento del número de turno del jugador.
3. Le damos al jugador una forma de ingresar su suposición agregando un detector de eventos al campo de entrada con la ID "suposición". Cuando el jugador ingresa una suposición, el detector de eventos se activará y la suposición se almacenará en una variable llamada "suposición".
4. Verificamos si la conjetura es correcta comparándola con el `randomNumber`. Si la conjetura es correcta, mostramos un mensaje de felicitación y deshabilitamos el campo de entrada para que el jugador no pueda ingresar más conjeturas. También mostramos un botón que le permite al jugador comenzar un nuevo juego.
5. Si la suposición es demasiado baja, mostramos un mensaje que le dice al jugador que su suposición fue demasiado baja.
6. Si la suposición es demasiado alta, mostramos un mensaje que le dice al jugador que su suposición fue demasiado alta.
7. Incrementamos la variable `turnNumber` cada vez que el jugador adivina.
8. Agregamos un detector de eventos al botón con el ID "inicio". Cuando el jugador hace clic en este botón, se activará el detector de eventos y se restablecerán la lógica del juego y la interfaz de usuario.*/