"use strict";
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/top-panel.html")
        .then((response) => response.text())
        .then((data) => {
        const topPanelContainer = document.getElementById("top-panel-container");
        if (topPanelContainer) {
            topPanelContainer.innerHTML = data;
            initializeTopPanel();
        }
    });
    fetch("components/sidebar.html")
        .then((response) => response.text())
        .then((data) => {
        const sidebarContainer = document.getElementById("sidebar-container");
        if (sidebarContainer) {
            sidebarContainer.innerHTML = data;
            initializeSidebar();
        }
    });
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
    tabs.forEach((tab, index) => {
        if (index === 0) {
            tab.classList.add("bg-gray-200", "active");
        }
        tab.addEventListener("click", function () {
            tabs.forEach((t) => t.classList.remove("bg-gray-200", "active"));
            tab.classList.add("bg-gray-200", "active");
            const target = tab.getAttribute("data-tab");
            tabContents.forEach((content) => {
                content.classList.add("hidden");
                if (content.id === target) {
                    content.classList.remove("hidden");
                }
            });
        });
    });
    const filterButton = document.querySelector(".filter-icon");
    if (filterButton) {
        filterButton.addEventListener("click", function () {
            alert("Filter button clicked!");
        });
    }
    const popUpButton = document.querySelector(".fa-external-link-alt");
    if (popUpButton) {
        popUpButton.addEventListener("click", function () {
            alert("Pop-up button clicked!");
        });
    }
    const threeDotButton = document.querySelector(".fa-ellipsis-v");
    if (threeDotButton) {
        threeDotButton.addEventListener("click", function () {
            alert("Three-dot button clicked!");
        });
    }
    const data = [
        {
            img: "assets/images/icons/man.png",
            name: "Aadi Kapoor",
            location: "Redmond, WA",
            role: "Security Associate",
        },
        {
            img: "assets/images/icons/man.png",
            name: "Aaron Buxton",
            location: "Redmond, WA",
            role: "Senior Engineer",
        },
        {
            img: "assets/images/icons/man.png",
            name: "Alvin Tao",
            location: "Redmond, WA",
            role: "Marketing Analyst",
        },
        {
            img: "assets/images/icons/man.png",
            name: "Babak Shammas",
            location: "Redmond, WA",
            role: "Senior Analyst",
        },
        {
            img: "assets/images/icons/man.png",
            name: "Beth Davies",
            location: "Redmond, WA",
            role: "Senior Researcher",
        },
    ];
    const tabContent = document.querySelector("#tab1");
    function addEntryToTab(data) {
        data.forEach((item) => {
            const entrySection = document.createElement("div");
            entrySection.className = "entry-section grid grid-cols-6 gap-6 items-center bg-white p-4 rounded-md shadow mb-1";
            entrySection.innerHTML = `
      
        <div class="checkbox">
          <input type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
        </div>
        <div class="name col-span-1 flex items-center">
          <img src="${item.img}" alt="Profile Icon" class="w-6 h-6 rounded-full mr-2">
          <span>${item.name}</span>
        </div>
        <div class="location flex items-center">
          <i class="fas fa-map-marker-alt text-indigo-700 mr-2"></i>
          <span>${item.location}</span>
        </div>
        <div class="role">
          <span>${item.role}</span>
        </div>
      `;
            if (tabContent) {
                tabContent.appendChild(entrySection);
            }
        });
    }
    addEntryToTab(data);
});
function selectComponent(element) {
    const sidebarIcons = document.querySelectorAll(".sidebar-icon");
    sidebarIcons.forEach((icon) => {
        icon.classList.remove("bg-gray-200");
    });
    element.classList.add("bg-gray-200");
}
function initializeTopPanel() {
    const logo = document.querySelector(".logo img");
    if (logo) {
        logo.classList.add("w-14", "h-14", "rounded-full", "mr-2");
        logo.addEventListener("click", function () {
            location.reload();
        });
    }
}
function initializeSidebar() {
    const sidebarIcons = document.querySelectorAll(".sidebar-icon");
    sidebarIcons.forEach((icon) => {
        icon.addEventListener("click", function () {
            sidebarIcons.forEach((icon) => {
                icon.classList.remove("bg-white", "text-black");
            });
            icon.classList.add("bg-gray-200", "text-gray-900");
        });
    });
    const contosoTab = document.querySelector(".sidebar-icon:nth-child(7)");
    if (contosoTab) {
        contosoTab.classList.add("bg-gray-200", "text-gray-900");
    }
}
//# sourceMappingURL=script.js.map