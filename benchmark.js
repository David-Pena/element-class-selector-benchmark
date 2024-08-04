function generateElements(container, size, isClass = false) {
    for (let i = 0; i < size; i++) {
        const element = document.createElement('div');
        if (isClass) element.classList.add('class-selector');
        container.appendChild(element);
    }
}

function measureElementSelectorPerformance() {
    const start = performance.now();
    const elements = document.querySelectorAll('div:not(.class-selector)'); // Select only non-class elements
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

function clearContainer() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear the results as well
}

/* Main functions */
function runBenchmark() {
    const container = document.getElementById('container');
    const results = [];

    // Get the user-defined element size
    const elementCountInput = document.getElementById('element-count');
    let size = parseInt(elementCountInput.value, 10);

    // Validate size
    if (isNaN(size) || size < 1 || size > 100_000) {
        alert("Please enter a valid number between 1 and 100,000.");
        return;
    }

    // Generate 10,000 elements with element selector
    generateElements(container, size);

    // Measure performance for element selector
    const elementSelectorTime = measureElementSelectorPerformance();
    results.push({ selector: 'Element', time: elementSelectorTime });

    // Clear the container
    clearContainer();

    // Generate 10,000 elements with class selector
    generateElements(container, size, true);

    // Measure performance for class selector
    const classSelectorTime = measureClassSelectorPerformance();
    results.push({ selector: 'Class', time: classSelectorTime });

    // Display results in the page
    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Results</h2>';

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headerSelector = document.createElement('th');
    headerSelector.innerText = 'Selector';
    const headerTime = document.createElement('th');
    headerTime.innerText = 'Time (ms)';
    headerRow.appendChild(headerSelector);
    headerRow.appendChild(headerTime);
    table.appendChild(headerRow);

    results.forEach(result => {
        const row = document.createElement('tr');
        const cellSelector = document.createElement('td');
        cellSelector.innerText = result.selector;
        const cellTime = document.createElement('td');
        cellTime.innerText = result.time.toFixed(2);
        row.appendChild(cellSelector);
        row.appendChild(cellTime);
        table.appendChild(row);
    });

    resultsDiv.appendChild(table);
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    document.getElementById('clear-benchmark').addEventListener('click', () => clearContainer(container));
    document.getElementById('run-benchmark').addEventListener('click', runBenchmark);
});