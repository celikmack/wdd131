//  Array of Activities Items
const diveActivities = [
    {
        id: "scuba-diving",
        title: "Scuba Diving Certification & Guided Dives",
        category: "scuba",
        description: "Experience the warm, crystalline waters of Baía de Todos os Santos. From discover scuba sessions for beginners to advanced deep wall dives, explore rich aquatic biodiversity under certified PADI guidance.",
        overview: {
            "Experience Level": "All Levels",
            "Average Depth": "08 - 25 meters",
            "Duration": "approx. 50 min",
            "Visibility": "15 - 25 meters"
        },
        logistics: {
            "Departure": "08:30 AM",
            "Boat Ride": "15 - 30 minutes",
            "Group Size": "Max 6 divers",
            "Equipment": "Included"
        },
        spots: [
            { city: "Salvador", name: "Porto da Barra", depth: "08 – 12 m" },
            { city: "Salvador", name: "Quebra-Mar Norte", depth: "10 – 18 m" },
            { city: "Ilha de Itaparica", name: "Paredão de Itaparica", depth: "12 – 25 m" },
            { city: "Ilha dos Frades", name: "Ponta de Nossa Senhora", depth: "06 – 15 m" },
            { city: "Madre de Deus", name: "Ilha dos Maria Guarda Reefs", depth: "08 – 16 m" }
        ],
        image: "images/act-scuba.webp",
        alt: "Scuba divers jumping from a boat."
    },
    {
        id: "wreck-diving",
        title: "Historic Shipwreck Exploration",
        category: "shipwreck",
        description: "Bahia holds the largest concentration of shipwrecks in South America. Dive through centuries of maritime history in All Saints Bay, exploring galleons, tugboats, and steamships that now serve as thriving artificial reefs.",
        overview: {
            "Experience Level": "Intermediate / Advanced",
            "Average Depth": "12 - 30 meters",
            "Duration": "approx. 45 min",
            "Visibility": "15 - 20 meters"
        },
        logistics: {
            "Departure": "08:00 AM",
            "Boat Ride": "20 - 45 minutes",
            "Group Size": "Max 6 divers",
            "Equipment": "Included"
        },
        spots: [
            { city: "Salvador", name: "Cavo Arthemidis", depth: "12 – 28 m" },
            { city: "Salvador", name: "Galeão Sacramento (1668)", depth: "10 – 25 m" },
            { city: "Baía de Aratu", name: "Vapor Maraldi", depth: "06 – 12 m" },
            { city: "Ilha de Itaparica", name: "Rebocador Reliance", depth: "15 – 22 m" },
            { city: "Cotegipe", name: "Navio Germânia", depth: "10 – 18 m" }
        ],
        image: "images/wreck-card1.webp",
        alt: "Divers exploring a historic shipwreck layed on the bottom of the sea."
    },
    {
        id: "coral-reef",
        title: "Coral Reef & Marine Life (Beginner Friendly)",
        category: "reef",
        description: "Glide effortlessly over vibrant, shallow coral gardens thriving in the sheltered waters of the bay. Ideal for beginners, Discover Scuba participants, and underwater photographers.",
        overview: {
            "Experience Level": "Beginner Friendly / Discover Scuba",
            "Average Depth": "05 - 14 meters",
            "Duration": "approx. 50 min",
            "Visibility": "12 - 18 meters"
        },
        logistics: {
            "Departure": "09:30 AM",
            "Boat Ride": "10 - 35 minutes",
            "Group Size": "Max 8 divers",
            "Equipment": "Included"
        },
        spots: [
            { city: "Salvador", name: "Farol da Barra Coral Garden", depth: "06 – 10 m" },
            { city: "Salvador", name: "Boa Viagem Reefs", depth: "05 – 12 m" },
            { city: "Ilha dos Frades", name: "Recife dos Tanoeiros", depth: "06 – 14 m" },
            { city: "Ilha de Maré", name: "Recife de Santana", depth: "04 – 10 m" },
            { city: "Ilha de Itaparica", name: "Caramuanas Reef Complex", depth: "08 – 15 m" }
        ],
        image: "images/act-reef.webp",
        alt: "Lion fish on Vibrant coral garden."
    },
    {
        id: "whale-watching",
        title: "Humpback Whale Watching Excursions",
        category: "whales",
        description: "Between July and November, thousands of Humpback Whales migrate to the warm waters of Bahia to mate and nurse their calves. Experience these majestic giants from coastal historical viewpoints or offshore boat expeditions.",
        overview: {
            "Season": "July to November",
            "Observation Types": "Onshore & Offshore (Embarked)",
            "Sighting Rate": "High Probability",
            "Sighting Range": "Coastline to 12 nautical miles"
        },
        logistics: {
            "Departure": "08:30 AM / 01:30 PM",
            "Boat Duration": "3.5 Hours (Offshore)",
            "Guide": "Marine Biologist Onboard",
            "Equipment": "Binoculars Included"
        },
        spots: [
            { city: "Salvador", name: "Farol da Barra (Coastal Viewpoint)", depth: "Onshore" },
            { city: "Salvador", name: "Forte de São Diogo (Coastal Viewpoint)", depth: "Onshore" },
            { city: "Baía Outer Ocean", name: "Barra to Itapuã Coast Expedition", depth: "Embarked" },
            { city: "Ilha de Itaparica", name: "Channel Offshore Patrol", depth: "Embarked" },
            { city: "Ilha dos Frades", name: "North Bay Sanctuary Crossing", depth: "Embarked" }
        ],
        image: "images/act-whale.webp",
        alt: "Tail fin humpback whale."
    }
];

// Helper Function
function createSpecColumn(headingTitle, specData) {
    const col = document.createElement("div");
    col.className = "spec-column";

    const h3 = document.createElement("h3");
    h3.textContent = headingTitle;
    col.appendChild(h3);

    Object.entries(specData).forEach(([label, value]) => {
        const row = document.createElement("div");
        row.className = "spec-row";

        const labelSpan = document.createElement("span");
        labelSpan.className = "spec-label";
        labelSpan.textContent = label;

        const valSpan = document.createElement("span");
        valSpan.className = "spec-value";
        valSpan.textContent = value;

        row.appendChild(labelSpan);
        row.appendChild(valSpan);
        col.appendChild(row);
    });

    return col;
}

// Render Function 
function renderActivities(filterCategory = "all") {
    const grid = document.getElementById("activities-grid");
    if (!grid) return;

    grid.innerHTML = ""; // Clear existing grid cards

    // Filter array based on selection
    const filteredList = filterCategory === "all" 
        ? diveActivities 
        : diveActivities.filter(item => item.category === filterCategory);

    // Fallback if no items match
    if (filteredList.length === 0) {
        grid.innerHTML = `<p class="no-results" style="color: white; padding: 2rem;">Courses section on construction!</p>`;
        return;
    }

    filteredList.forEach((activity, index) => {
        const card = document.createElement("article");
        card.className = `activity-card ${index % 2 !== 0 ? 'reverse' : ''}`;
        card.id = activity.id; // Assign ID for direct linking/scrolling

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const cardText = document.createElement("div");
        cardText.className = "card-text";

        const h2 = document.createElement("h2");
        h2.textContent = activity.title;

        const pDesc = document.createElement("p");
        pDesc.textContent = activity.description;

        cardText.appendChild(h2);
        cardText.appendChild(pDesc);

        // Specs Container
        const specsContainer = document.createElement("div");
        specsContainer.className = "specs-table-container";

        // Dynamic header title for whale watching vs scuba
        const overviewTitle = activity.category === "whales" ? "TOUR OVERVIEW" : "DIVE OVERVIEW";
        const overviewCol = createSpecColumn(overviewTitle, activity.overview);
        const logisticsCol = createSpecColumn("LOGISTICS", activity.logistics);

        specsContainer.appendChild(overviewCol);
        specsContainer.appendChild(logisticsCol);
        cardText.appendChild(specsContainer);

        // Featured Spots Details/Summary Accordion
        const details = document.createElement("details");
        details.className = "spots-dropdown";

        const summary = document.createElement("summary");
        summary.textContent = `View Featured Locations (${activity.spots.length} Sites)`;
        details.appendChild(summary);

        const table = document.createElement("table");
        table.className = "spots-table";
        table.innerHTML = `
            <thead>
                <tr>
                    <th>City</th>
                    <th>Site / Route Name</th>
                    <th style="text-align: right;">Depth / Type</th>
                </tr>
            </thead>
            <tbody>
                ${activity.spots.map(s => `
                    <tr>
                        <td>${s.city}</td>
                        <td><strong>${s.name}</strong></td>
                        <td style="text-align: right;">${s.depth}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        details.appendChild(table);
        cardText.appendChild(details);

        // Image Section
        const cardImg = document.createElement("div");
        cardImg.className = "card-image";

        const img = document.createElement("img");
        img.src = activity.image;
        img.alt = activity.alt;
        img.loading = "lazy";

        cardImg.appendChild(img);

        // Assemble Final Structure
        cardContent.appendChild(cardText);
        cardContent.appendChild(cardImg);
        card.appendChild(cardContent);
        grid.appendChild(card);
    });
}

// Filter Controls, URL Params, & localStorage Initialization
function initFilterControls() {
    const filterContainer = document.getElementById("filter-buttons");
    if (!filterContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get("category");

    const savedCategory = localStorage.getItem("selectedCategory") || "all";
    const activeCategory = urlCategory || savedCategory;

    // Initial Render
    renderActivities(activeCategory);

    // Update active class on filter button
    const targetBtn = filterContainer.querySelector(`[data-category="${activeCategory}"]`);
    if (targetBtn) {
        filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        targetBtn.classList.add("active");
    }

    // Event Listener for Category Buttons
    filterContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;

        filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.dataset.category;
        localStorage.setItem("selectedCategory", category);
        renderActivities(category);
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", initFilterControls);