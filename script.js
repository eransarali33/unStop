const formBody = document.getElementById("form-body");

const sideNavBar = document.getElementById("sideNavBar1");

const AssessmentOverview = document.getElementById(
  "assessment-overview-mobile"
);

const tower = document.getElementById("tower");
const tower1 = document.getElementById("tower1");

formBody.style.display = "none";
AssessmentOverview.style.display = "none";
tower1.style.display = "none";

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
  tower.style.display = "none";
  tower1.style.display = "block";
};

const hideAssessmentOverview = () => {
  AssessmentOverview.style.display = "none";
  tower1.style.display = "none";
  tower.style.display = "block";
};
