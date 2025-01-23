document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("galleryContainer")
    const tabButtons = document.querySelectorAll(".tab-button")
    const searchInput = document.getElementById("searchInput")
    const searchButton = document.getElementById("searchButton")
  
    // Sample data (replace with your actual data)
    const eventsData = {
      2024: {
        January: ["img/2024/jan/1.jpg", "img/2024/jan/2.jpg", "img/2024/jan/3.jpg"],
        February: ["img/2024/feb/1.jpg", "img/2024/feb/2.jpg", "img/2024/feb/3.jpg"],
        // Add more months...
      },
      2025: {
        January: ["img/2025/jan/1.jpg", "img/2025/jan/2.jpg", "img/2025/jan/3.jpg"],
        February: ["img/2025/feb/1.jpg", "img/2025/feb/2.jpg", "img/2025/feb/3.jpg"],
        // Add more months...
      },
    }
  
    function createGallery(year) {
      galleryContainer.innerHTML = ""
      const yearData = eventsData[year]
  
      for (const month in yearData) {
        const monthSection = document.createElement("div")
        monthSection.className = "month-section"
        monthSection.setAttribute("data-month", month)
  
        const monthTitle = document.createElement("h3")
        monthTitle.textContent = month
        monthSection.appendChild(monthTitle)
  
        const masonryGallery = document.createElement("div")
        masonryGallery.className = "masonry-gallery"
  
        yearData[month].forEach((imgSrc, index) => {
          const imgWrapper = document.createElement("div")
          imgWrapper.className = "gallery-item"
  
          const img = document.createElement("img")
          img.src = imgSrc
          img.alt = `${month} Event Image ${index + 1}`
          img.className = "img-fluid"
          img.setAttribute("data-lightbox", `${year}-${month}`)
          img.setAttribute("data-title", `${month} Event Image ${index + 1}`)
  
          imgWrapper.appendChild(img)
          masonryGallery.appendChild(imgWrapper)
        })
  
        monthSection.appendChild(masonryGallery)
        galleryContainer.appendChild(monthSection)
      }
  
      initMasonry()
      initLightbox()
    }
  
    function initMasonry() {
      const masonryGalleries = document.querySelectorAll(".masonry-gallery")
      masonryGalleries.forEach((gallery) => {
        new Masonry(gallery, {
          itemSelector: ".gallery-item",
          columnWidth: ".gallery-item",
          percentPosition: true,
        })
      })
    }
  
    function initLightbox() {
      lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
      })
    }
  
    function searchGallery() {
      const searchTerm = searchInput.value.toLowerCase()
      const allImages = document.querySelectorAll(".gallery-item img")
  
      allImages.forEach((img) => {
        const altText = img.alt.toLowerCase()
        const monthSection = img.closest(".month-section")
  
        if (altText.includes(searchTerm)) {
          img.style.display = "block"
          monthSection.style.display = "block"
        } else {
          img.style.display = "none"
        }
      })
  
      document.querySelectorAll(".month-section").forEach((section) => {
        const visibleImages = section.querySelectorAll('.gallery-item img[style="display: block;"]')
        if (visibleImages.length === 0) {
          section.style.display = "none"
        }
      })
  
      initMasonry()
    }
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        this.classList.add("active")
        const year = this.getAttribute("data-year")
        createGallery(year)
      })
    })
  
    searchButton.addEventListener("click", searchGallery)
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        searchGallery()
      }
    })
  
    // Initialize with 2024 data
    createGallery("2024")
  })
  
  