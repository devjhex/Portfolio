export async function initProjects() {
    const res = await fetch('/data.json');
    const projects = await res.json();
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
