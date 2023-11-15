window.addEventListener("load", () => {
  /** Helper function to apply tw-group to the parent element so it will hold the chevron effect when hovering the menu subitems  */
  function setDropdownGroupModifier(childElementId) {
    const childElement = document.getElementById(childElementId);
    if (childElement) {
      const dropdownContainer = childElement.parentElement.parentElement;
      if (dropdownContainer && dropdownContainer.classList.contains('dropdown--hoverable')) {
          dropdownContainer.classList.add("tw-group");
      }
    }
  }

  setDropdownGroupModifier("learn-navbar-item");;
  setDropdownGroupModifier("platform-navbar-item");;

});
