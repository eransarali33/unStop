const formBody = document.getElementById("form-body");

const sideNavBar = document.getElementById("sideNavBar1");

formBody.style.display = "none";

const showForm = () => {
  formBody.style.display = "inline";
  formBody.style.display = "flex";
  formBody.style.justifyContent = "center";
};

const hideForm = () => {
  formBody.style.display = "none";
};

const showNavBar = () => {
  sideNavBar.style.display = "block";
};

const hideNavBar = () => {
  sideNavBar.style.display = "none";
};
