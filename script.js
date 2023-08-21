const formBody = document.getElementById("form-body");

const sideNavBar = document.getElementById("sideNavBar1");

const AssessmentOverview = document.getElementById(
  "assessment-overview-mobile"
);

formBody.style.display = "none";
AssessmentOverview.style.display = "none";
// sideNavBar.style.display = "none";

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

const showAssessmentOverview = () => {
  AssessmentOverview.style.display = "block";
};
