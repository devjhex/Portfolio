const projects = [
  {
    title: "Honey Movies",
    description: "A movie discovery app powered by the TMDB API — search titles, watch trailers, and browse trending films in real time. Tackled dynamic HTML generation at scale and optimized rendering performance to keep the UI snappy.",
    url: "https://devjhex-honey-movies.netlify.app/",
    image: "assets/images/honeyMoviesThumb.webp"
  },
  {
    title: "Learn with Eddie",
    description: "A fully interactive quiz platform with multiple categories, score tracking, and instant feedback. Built to handle dynamic question rendering and complex user input flows cleanly with vanilla JS.",
    url: "https://devjhex-quiz-app.netlify.app/",
    image: "assets/images/learnWithEddie.webp"
  },
  {
    title: "Threadex",
    description: "A productivity tool that lets you write, split, and format Twitter threads before posting. Solved real string manipulation and array logic challenges while keeping the UX dead simple.",
    objectFit: "contain",
    url: "https://threadex.netlify.app/",
    image: "assets/images/threadex.webp"
  },
  {
    title: "MR.Driskell - Tattoo Shop",
    description: "A polished business landing page for a tattoo studio — showcasing artist work, services, and booking info. Focused on strong visual layout, responsive design, and smooth interactive elements.",
    objectFit: "contain",
    url: "https://devjhex-dr-driskell.netlify.app/",
    image: "assets/images/mr.DriskellThumbnail.webp"
  }
];

export function initProjects() {
    const fragment = document.createDocumentFragment();

    projects.forEach(({ title, description, image, url, objectFit = 'cover' }) => {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', `${title}, opens in new tab`);
        a.className = 'w-full max-w-sm md:max-w-none md:min-w-72 md:w-[calc(33%-1rem)] flex';

        a.innerHTML = `
            <article class="bg-secondaryGray border border-gray-700 rounded-2xl overflow-hidden w-full flex flex-col">
                <div class="w-full aspect-video overflow-hidden bg-black">
                    <img class="w-full h-full" style="object-fit:${objectFit}" loading="lazy" src="${image}" alt="${title} screenshot">
                </div>
                <div class="p-4 flex flex-col flex-1">
                    <h3 class="text-2xl font-bold">${title}</h3>
                    <p class="mt-2 text-sm text-text300">${description}</p>
                </div>
            </article>`;

        fragment.appendChild(a);
    });

    document.getElementById('projects-grid').appendChild(fragment);
}
