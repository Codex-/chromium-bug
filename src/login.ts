function getFirstElementFromName(name: string): HTMLInputElement {
  const elements = document.getElementsByName(name);
  if (elements.length === 0) {
    throw new Error(`No elements found for ${name}`);
  }
  return elements[0] as HTMLInputElement;
}

function hasPasswordValue(): boolean {
  const passwordInput = getFirstElementFromName("password");

  // Show the value received at runtime
  console.log(passwordInput);
  console.log(passwordInput.value);
  console.log(passwordInput.value.length);

  return passwordInput.value.length > 0;
}

function hasUserValue(): boolean {
  const userInput = getFirstElementFromName("user");

  // Show the value received at runtime
  console.log(userInput);
  console.log(userInput.value);
  console.log(userInput.value.length);

  return userInput.value.length > 0;
}

function isBadLogin(): boolean {
  const badCredentials = document.getElementsByClassName("message-negative");
  return badCredentials.length > 0;
}

function isLoginPage(): boolean {
  return !!document.getElementById("logincontent");
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  try {
    if (!isLoginPage()) {
      return;
    }

    if (isBadLogin()) {
      const errMsg = "Saved credentials are invalid";
      console.error(errMsg);
      alert(errMsg);
      return;
    }

    await sleep(2000);

    if (hasUserValue() && hasPasswordValue()) {
      const connectButton = document.getElementsByClassName(
        "btn-success"
      )[0] as HTMLInputElement;
      connectButton.click();
    }
  } catch (error) {
    console.error(error.message);
  }
})();
