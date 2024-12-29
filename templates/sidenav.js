function toggleDropdown(btn) {
    var dropdownContent = btn.nextElementSibling; 
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }