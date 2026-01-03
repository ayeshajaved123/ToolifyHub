function generateResume() {
  pName.innerText = name.value || "YOUR NAME";
  pTitle.innerText = title.value || "JOB TITLE";

  pPhone.innerText = phone.value;
  pEmail.innerText = email.value;
  pAddress.innerText = address.value;
  pWebsite.innerText = website.value;

  pProfile.innerText = profile.value;
  pSkills.innerText = skills.value;
  pLanguages.innerText = languages.value;
  pExperience.innerText = experience.value;
  pEducation.innerText = education.value;
  pReference.innerText = reference.value;

  // Photo logic
  const file = photo.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      pPhoto.src = reader.result;
      pPhoto.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    pPhoto.style.display = "none";
  }
}

function downloadPDF() {
  html2pdf().from(document.getElementById("resume")).save("Resume.pdf");
}
