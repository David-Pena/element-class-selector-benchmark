function generateElements(container, size, isClass = false) {
    for (let i = 0; i < size; i++) {
        const element = document.createElement('div');
        if (isClass) element.classList.add('class-selector');
        container.appendChild(element);
    }
}

function measureElementSelectorPerformance() {
    const start = performance.now();
    const elements = document.querySelectorAll('div');
    elements.forEach(element => {
        element.style.border = '1px solid black';
    });
    const end = performance.now();
    return end - start;
}

function measureClassSelectorPerformance() {
    const start = performance.now();
    const classElements = document.querySelectorAll('.class-selector');
    classElements.forEach(element => {
        element.style.border = '1px solid black';
    });
    const end = performance.now();
    return end - start;
}

function clearContainer(container) {
    container.innerHTML = '';
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const results = [];

    // Generate 10,000 elements with element selector
    generateElements(container, 10_000);

    // Measure performance for element selector
    const elementSelectorTime = measureElementSelectorPerformance();
    results.push({ selector: 'Element', time: elementSelectorTime });

    // Clear the container
    clearContainer(container);

    // Generate 10_000 elements with class selector
    generateElements(container, 10_000, true);

    // Measure performance for class selector
    const classSelectorTime = measureClassSelectorPerformance();
    results.push({ selector: 'Class', time: classSelectorTime });

    // Display results in a table
    console.table(results);
})