document.addEventListener("DOMContentLoaded", () => {
    // Object mapping section IDs to the correct HTML files
    const sections = {
        home: "home.html",
        profile: "profile.html",
        work: "work.html",
        projects: "projects.html",
        skills: "skills.html"
    };

    // Loop through the sections and load the content into the respective section
    for (const [id, url] of Object.entries(sections)) {
        fetch(url)
            .then(response => {
                // Check if the fetch request was successful
                if (!response.ok) {
                    throw new Error(`Failed to load ${url}`);
                }
                return response.text(); // Get the text (HTML) from the response
            })
            .then(html => {
                // Inject the HTML into the corresponding section
                document.getElementById(id).innerHTML = html;
            })
            .catch(err => {
                // Log the error and display an error message in the section
                console.error(`Error loading ${url}:`, err);
                document.getElementById(id).innerHTML = `<p>Error loading content for ${id}. Please try again later.</p>`;
            });
    }
});
