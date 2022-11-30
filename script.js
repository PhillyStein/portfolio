const pageDiv = document.getElementById("page");
const pageHeading = document.getElementById("page-heading");
const pageContent = document.getElementById("page-content");
const zoomSlider = document.getElementById("zoom-slider");
changePage('about');
console.log('If you are reading this, you should hire me :)');

function changePage(newPage) {
    if (newPage === 'about' || (newPage === '' && currentPage === 'projects')) {
        pageHeading.textContent = "About";
        pageContent.textContent = "It's me, hi. I'm the problem, it's me."
        currentPage = 'about';
    } else if (newPage === 'projects' || (newPage === '' && currentPage === 'about')) {
        pageHeading.textContent = "Projects";
        pageContent.textContent = "Some stuff I've med mesen."
        currentPage = 'projects'
    }
}

function zoom(level) {
    if (level === 'in') {
        let headingStyle = window.getComputedStyle(pageHeading, null).getPropertyValue('font-size');
        let headingFontSize = parseFloat(headingStyle);
        let contentStyle = window.getComputedStyle(pageContent, null).getPropertyValue('font-size');
        let contentFontSize = parseFloat(contentStyle);
        if(contentFontSize < 32) {
            pageHeading.style.fontSize = (headingFontSize + 2) + 'px';
            pageContent.style.fontSize = (contentFontSize + 2) + 'px';
            zoomSlider.value = contentFontSize + 2;
        }
    } else if (level === 'out') {
        let headingStyle = window.getComputedStyle(pageHeading, null).getPropertyValue('font-size');
        let headingFontSize = parseFloat(headingStyle);
        let contentStyle = window.getComputedStyle(pageContent, null).getPropertyValue('font-size');
        let contentFontSize = parseFloat(contentStyle);
        if(contentFontSize > 16) {
            pageHeading.style.fontSize = (headingFontSize - 2) + 'px';
            pageContent.style.fontSize = (contentFontSize - 2) + 'px';
            zoomSlider.value = contentFontSize - 2;
        }
    } else {
        let newSize = parseFloat(zoomSlider.value);
        pageHeading.style.fontSize = (newSize + 3.2) + 'px';
        pageContent.style.fontSize = newSize + 'px';
    }
}

