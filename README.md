# 📊 Benchmarking Class vs Element Selectors in JavaScript

This repository contains a simple yet effective benchmarking tool to compare the performance of class selectors versus element selectors in JavaScript. The benchmark involves creating a specified number of HTML elements (default: 10,000) and measuring the time it takes to apply styles using both types of selectors.

## 🌟 Features

- **Performance Comparison:** Compare the time taken to apply styles using class selectors and element selectors.
- **Dynamic Element Generation:** Generates a specified number of HTML elements dynamically for the benchmark (default: 10,000, max: 100,000).
- **Input for Element Count:** Enter a custom number of elements to benchmark, providing flexibility in testing.
- **Clear and Run Benchmark:** Easy-to-use buttons to clear and rerun the benchmark.
- **Results Display:** Displays the results in a clear and concise table format on the webpage.

## 🛠️ How to Use

1. Clone or download the repository.
2. Open `index.html` in your web browser.
3. Enter the number of elements you want to create for the benchmark (default is 10,000).
4. Click on "Run Benchmark" to perform the test.
5. View the results displayed in the table on the webpage.
6. Use the "Clear Benchmark" button to reset the elements and results.

## 📂 Files

- `index.html`: The main HTML file containing the structure of the webpage.
- `styles.css`: The CSS file for styling the webpage and the elements.
- `benchmark.js`: The JavaScript file containing the logic for generating elements, measuring performance, and displaying results.

## 📸 Screenshot

![Benchmark Results Screenshot w 10_000](/assets/ss-results-10000.png)
![Benchmark Results Screenshot w 20_000](/assets/ss-results-20000.png)
![Benchmark Results Screenshot w 50_000](/assets/ss-results-50000.png)

## 📊 Conclusion

The benchmark results clearly indicate that **class selectors consistently outperform element selectors** in terms of speed when applying styles in JavaScript. As the number of HTML elements increases, the time difference between the two selector types becomes more pronounced. Specifically:

- With **10,000 HTML elements**, class selectors are approximately **17% faster** than element selectors.
- With **20,000 HTML elements**, class selectors are around **12% faster** than element selectors.
- With **50,000 HTML elements**, class selectors are about **18% faster** than element selectors.

> [!IMPORTANT]
> These findings suggest that using class selectors can lead to more efficient performance, especially in scenarios with a large number of elements. Therefore, for better performance in styling large-scale web applications **class selectors should be preferred** over element selectors.
