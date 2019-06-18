document.addEventListener("DOMContentLoaded", () => {
  const user = document.getElementById("user") as HTMLInputElement;
  const password = document.getElementById("password") as HTMLInputElement;
  const saveBtn = document.getElementById("save") as HTMLInputElement;

  chrome.storage.sync.get(credentials => {
    if (credentials && credentials.user && credentials.password) {
      user.value = credentials.user;
      password.value = credentials.password;
    }
  });

  saveBtn.onclick = () => {
    chrome.storage.sync.set(
      {
        user: user.value,
        password: password.value
      },
      () => {
        if (chrome.runtime.lastError) {
          saveBtn.classList.replace("btn-dark", "btn-danger");
          saveBtn.classList.add("animated", "shake");
          console.error(
            chrome.runtime.lastError.message || "An unknown error has occurred"
          );
        }
        saveBtn.classList.replace("btn-dark", "btn-success");
        saveBtn.classList.add("animated", "flash");
      }
    );
  };
});
