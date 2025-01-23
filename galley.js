// const galleryData = [
//     {
//       month: "May 2023",
//       id: "may2023",
//       images: [
//         { src: "./img/cardImage4.jpg", alt: "May 2023 Event 1" },
//         { src: "../img/cardImage4.jpg", alt: "May 2023 Event 2" },
//         { src: "./img/may2023-3.jpg", alt: "May 2023 Event 3" },
//         // Add more images as needed
//       ],
//     },
//     {
//       month: "June 2023",
//       id: "june2023",
//       images: [
//         { src: "./img/june2023-1.jpg", alt: "June 2023 Event 1" },
//         { src: "./img/june2023-2.jpg", alt: "June 2023 Event 2" },
//         { src: "./img/june2023-3.jpg", alt: "June 2023 Event 3" },
//         // Add more images as needed
//       ],
//     },
//     {
//       month: "July 2023",
//       id: "july2023",
//       images: [
//         { src: "./img/july2023-1.jpg", alt: "July 2023 Event 1" },
//         { src: "./img/july2023-2.jpg", alt: "July 2023 Event 2" },
//         { src: "./img/july2023-3.jpg", alt: "July 2023 Event 3" },
//         // Add more images as needed
//       ],
//     },
//     // Add more months as needed
//   ]
  
//   function renderGallery() {
//     const tabList = document.getElementById("eventTabs")
//     const tabContent = document.getElementById("eventTabContent")
  
//     galleryData.forEach((event, index) => {
//       // Create tab
//       const tabItem = document.createElement("li")
//       tabItem.className = "nav-item"
//       tabItem.role = "presentation"
//       tabItem.innerHTML = `
//               <button class="nav-link ${index === 0 ? "active" : ""}" id="${event.id}-tab" data-bs-toggle="tab" data-bs-target="#${event.id}" type="button" role="tab" aria-controls="${event.id}" aria-selected="${index === 0 ? "true" : "false"}">${event.month}</button>
//           `
//       tabList.appendChild(tabItem)
  
//       // Create tab content
//       const tabPane = document.createElement("div")
//       tabPane.className = `tab-pane fade ${index === 0 ? "show active" : ""}`
//       tabPane.id = event.id
//       tabPane.role = "tabpanel"
//       tabPane.setAttribute("aria-labelledby", `${event.id}-tab`)
  
//       const gallery = document.createElement("div")
//       gallery.className = "row"
//       gallery.id = `${event.id}Gallery`
  
//       event.images.forEach((image) => {
//         const galleryItem = document.createElement("div")
//         galleryItem.className = "col-md-4 gallery-item"
//         galleryItem.innerHTML = `
//                   <img src="${image.src}" alt="${image.alt}" class="img-fluid">
//               `
//         gallery.appendChild(galleryItem)
//       })
  
//       tabPane.appendChild(gallery)
//       tabContent.appendChild(tabPane)
//     })
  
//     // Initialize Masonry for each gallery
//     galleryData.forEach((event) => {
//       const grid = document.getElementById(`${event.id}Gallery`)
//       new Masonry(grid, {
//         itemSelector: ".gallery-item",
//         columnWidth: ".gallery-item",
//         percentPosition: true,
//       })
//     })
//   }
  
//   document.addEventListener("DOMContentLoaded", renderGallery)
  
  