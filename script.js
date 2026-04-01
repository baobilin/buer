const hero = document.getElementById('hero');
const trigger = document.getElementById('trigger');
const container = document.getElementById('keywords-container');

const leftGroup = ["Content Creation", "Documentary", "Interview", "Photography", "Storytelling"];
const rightGroup = ["Business Operation", "Key Account Management", "Brand Collaboration", "Event Planning", "Data Analysis"];

const allKeywords = [...leftGroup, ...rightGroup];
const elements = [];

// Initialize keywords with random positions
allKeywords.forEach((text) => {
    const el = document.createElement('div');
    el.className = 'keyword';
    el.innerText = text;

    // Random start positions
    const randomX = Math.random() * 80 + 10;
    const randomY = Math.random() * 80 + 10;

    el.style.left = `${randomX}%`;
    el.style.top = `${randomY}%`;

    container.appendChild(el);
    elements.push({
        el: el,
        text: text,
        initialLeft: `${randomX}%`,
        initialTop: `${randomY}%`
    });
});

// Mouse Enter Center
trigger.addEventListener('mouseenter', () => {
    hero.classList.add('active');

    elements.forEach(item => {
        const isLeft = leftGroup.includes(item.text);
        const index = isLeft ? leftGroup.indexOf(item.text) : rightGroup.indexOf(item.text);

        // Align into editorial columns
        if (isLeft) {
            item.el.style.left = '15%';
            item.el.style.top = `${25 + (index * 12)}%`;
        } else {
            item.el.style.left = '75%';
            item.el.style.top = `${25 + (index * 12)}%`;
        }
    });
});

// Mouse Leave Center
trigger.addEventListener('mouseleave', () => {
    hero.classList.remove('active');

    elements.forEach(item => {
        item.el.style.left = item.initialLeft;
        item.el.style.top = item.initialTop;
    });
});

// Simple parallax for the keywords based on mouse movement
hero.addEventListener('mousemove', (e) => {
    if (!hero.classList.contains('active')) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        elements.forEach((item, i) => {
            const factor = (i % 3 + 1) * 0.5;
            item.el.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        });
    } else {
        elements.forEach(item => item.el.style.transform = `translate(0,0)`);
    }
});

// About Section Steps
const aboutToggle = document.getElementById('about-toggle');
const textSteps = document.querySelectorAll('.about-step');
const imageSteps = document.querySelectorAll('.about-image-step');
let currentStep = 1;
const totalSteps = 3;

// Image data for shared gallery (3 steps)
const galleryImages = [
    // Step 1: Academic/Research
    [
        { src: 'Assets/gallery/step-1-01.jpg', alt: '学术研究' },
        { src: 'Assets/gallery/step-1-02.jpg', alt: '校园生活' },
        { src: 'Assets/gallery/step-1-03.png', alt: '学习环境' },
        { src: 'Assets/gallery/step-1-04.jpg', alt: '团队协作' },
        { src: 'Assets/gallery/step-1-05.jpg', alt: '学术讨论' },
        { src: 'Assets/gallery/step-1-06.jpg', alt: '项目展示' },
        { src: 'Assets/gallery/step-1-07.jpg', alt: '实验研究' },
        { src: 'Assets/gallery/step-1-08.jpg', alt: '资料查阅' },
        { src: 'Assets/gallery/step-1-09.jpg', alt: '校园风景' },
        { src: 'Assets/gallery/step-1-10.jpg', alt: '毕业典礼' }
    ],
    // Step 2: Business/Professional (using same images for now)
    [
        { src: 'https://picsum.photos/400/600?random=21', alt: '商业会议' },
        { src: 'https://picsum.photos/400/600?random=22', alt: '项目策划' },
        { src: 'https://picsum.photos/400/600?random=23', alt: '团队管理' },
        { src: 'https://picsum.photos/400/600?random=24', alt: '客户沟通' },
        { src: 'https://picsum.photos/400/600?random=25', alt: '数据分析' },
        { src: 'https://picsum.photos/400/600?random=26', alt: '商业展示' },
        { src: 'https://picsum.photos/400/600?random=27', alt: '运营策略' },
        { src: 'https://picsum.photos/400/600?random=28', alt: '项目执行' },
        { src: 'https://picsum.photos/400/600?random=29', alt: '商业合作' },
        { src: 'https://picsum.photos/400/600?random=30', alt: '成果汇报' }
    ],
    // Step 3: Creative/Technical
    [
        { src: 'https://picsum.photos/400/600?random=31', alt: '影像拍摄' },
        { src: 'https://picsum.photos/400/600?random=32', alt: '视频剪辑' },
        { src: 'https://picsum.photos/400/600?random=33', alt: 'AI创作' },
        { src: 'https://picsum.photos/400/600?random=34', alt: '技术探索' },
        { src: 'https://picsum.photos/400/600?random=35', alt: '创意设计' },
        { src: 'https://picsum.photos/400/600?random=36', alt: '工具开发' },
        { src: 'https://picsum.photos/400/600?random=37', alt: '实验创作' },
        { src: 'https://picsum.photos/400/600?random=38', alt: '数字艺术' },
        { src: 'https://picsum.photos/400/600?random=39', alt: '技术研究' },
        { src: 'https://picsum.photos/400/600?random=40', alt: '创新应用' }
    ]
];

// Function to animate text words
function animateTextWords(stepElement) {
    // Skip if already animated
    if (stepElement.classList.contains('text-animated')) return;

    // Extract step number from class (e.g., "about-step-1")
    const stepClass = Array.from(stepElement.classList).find(cls => cls.startsWith('about-step-'));
    if (!stepClass) return;
    const stepNum = stepClass.replace('about-step-', '');

    // Find corresponding image step element
    const imageStepElement = document.querySelector(`.about-image-step-${stepNum}`);

    // Animate text in both elements
    animateElementText(stepElement);
    if (imageStepElement) {
        animateElementText(imageStepElement);
    }

    // Mark as animated
    stepElement.classList.add('text-animated');
}

// Helper function to animate text in any element
function animateElementText(element) {
    const paragraphs = element.querySelectorAll('p');
    paragraphs.forEach((p, pIndex) => {
        // Skip if paragraph already has animated spans
        if (p.querySelector('.word-animated')) return;

        // Skip if paragraph contains highlight elements to preserve styling
        if (p.querySelector('.highlight')) return;

        // Save original text and clear
        const originalText = p.textContent;
        const words = originalText.split(' ');
        p.innerHTML = '';

        // Create word spans
        words.forEach((word, wIndex) => {
            const span = document.createElement('span');
            span.className = 'word-animated';
            span.textContent = word;

            // Add space after word (except last word)
            if (wIndex < words.length - 1) {
                span.textContent += ' ';
            }

            // Set transition delay for staggered animation
            span.style.transitionDelay = `${(pIndex * 0.2 + wIndex * 0.05)}s`;

            p.appendChild(span);
        });
    });
}

// Function to reset text animation state (when switching away)
function resetTextAnimation(stepElement) {
    // Extract step number from class (e.g., "about-step-1")
    const stepClass = Array.from(stepElement.classList).find(cls => cls.startsWith('about-step-'));
    if (!stepClass) return;
    const stepNum = stepClass.replace('about-step-', '');

    // Find corresponding image step element
    const imageStepElement = document.querySelector(`.about-image-step-${stepNum}`);

    // Reset text in both elements
    resetElementText(stepElement);
    if (imageStepElement) {
        resetElementText(imageStepElement);
    }

    stepElement.classList.remove('text-animated');
}

// Helper function to reset text in any element
function resetElementText(element) {
    const paragraphs = element.querySelectorAll('p');
    paragraphs.forEach(p => {
        // Skip if paragraph contains highlight elements
        if (p.querySelector('.highlight')) return;

        const spans = p.querySelectorAll('.word-animated');
        if (spans.length > 0) {
            // Restore original text
            let originalText = '';
            spans.forEach(span => {
                originalText += span.textContent;
            });
            p.innerHTML = originalText;
        }
    });
}

// Initialize first step animation
if (document.querySelector('.about-step-1.active')) {
    setTimeout(() => {
        animateTextWords(document.querySelector('.about-step-1.active'));
    }, 100);
}

if (aboutToggle && textSteps.length > 0 && imageSteps.length > 0) {
    aboutToggle.addEventListener('click', () => {
        // Get current step element
        const currentStepElement = document.querySelector(`.about-step-${currentStep}`);
        const currentImageStep = document.querySelector(`.about-image-step-${currentStep}`);

        // Reset text animation for current step
        resetTextAnimation(currentStepElement);

        // Remove active class from current step
        currentStepElement.classList.remove('active');
        currentImageStep.classList.remove('active');

        // Control gallery based on current step before moving to next step
        const sharedGallery = galleries['shared-gallery'];
        if (sharedGallery) {
            if (currentStep === 1) {
                // Clicking "继续探索" (Continue exploring) - expand gallery
                sharedGallery.expand();
            } else if (currentStep === 3) {
                // Clicking "重新开始" (Restart) - retract gallery
                sharedGallery.retract();
            }
            // For step 2 ("下一步"), do nothing - gallery stays as is
        }

        // Move to next step
        currentStep++;

        // If we've reached the end, cycle back to step 1
        if (currentStep > totalSteps) {
            currentStep = 1;
        }

        // Add active class to next step with a slight delay for smoother transition
        setTimeout(() => {
            const nextStepElement = document.querySelector(`.about-step-${currentStep}`);
            const nextImageStep = document.querySelector(`.about-image-step-${currentStep}`);

            nextStepElement.classList.add('active');
            nextImageStep.classList.add('active');

            // Animate text for the newly active step
            setTimeout(() => {
                animateTextWords(nextStepElement);
            }, 150);
        }, 100);

        // Update button text
        const toggleText = aboutToggle.querySelector('.toggle-text');
        if (currentStep === 1) {
            toggleText.textContent = '继续探索';
        } else if (currentStep === 2) {
            toggleText.textContent = '下一步';
        } else if (currentStep === 3) {
            toggleText.textContent = '重新开始';
        }

        // Rotate arrow icon
        aboutToggle.classList.toggle('expanded', currentStep !== 1);
    });
}

// Gallery Animation Logic
const galleryIntervals = {};

// Initialize all galleries
function initGallery(galleryId) {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return null;

    const cards = gallery.querySelectorAll('.card');
    const radius = 200; // Reduced radius for smaller container

    // Calculate positions for each card
    cards.forEach((card, i) => {
        // Clockwise logic: positive angle
        const angle = (i / cards.length) * Math.PI * 2;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // Random rotation -5 to 5 degrees
        const rot = Math.random() * 10 - 5;

        card.style.setProperty('--tx', `${x.toFixed(2)}px`);
        card.style.setProperty('--ty', `${y.toFixed(2)}px`);
        card.style.setProperty('--tr', `${rot.toFixed(2)}deg`);

        // Z-index order
        card.style.zIndex = i;

        // Store original z-index for later restoration
        card.dataset.originalZIndex = i;

        // Add hover effect to bring card to front when gallery is expanded
        card.addEventListener('mouseenter', function() {
            if (this.classList.contains('active')) {
                this.style.zIndex = 1000;
            }
        });

        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('active')) {
                this.style.zIndex = this.dataset.originalZIndex;
            }
        });
    });

    return {
        gallery,
        cards,
        isExpanded: false,
        expand: function() {
            // If already expanded, do nothing
            if (this.isExpanded) return;

            // Expand cards (one becomes a circle)
            this.cards.forEach((card, i) => {
                card.style.transitionDelay = `${i * 0.1}s`;
                card.classList.add('active');
            });

            this.isExpanded = true;
        },
        retract: function() {
            // If not expanded, do nothing
            if (!this.isExpanded) return;

            // Retract cards (circle becomes one)
            this.cards.forEach((card, i) => {
                // Reverse order for retraction (last card first)
                const reverseIndex = this.cards.length - 1 - i;
                card.style.transitionDelay = `${reverseIndex * 0.08}s`;
                card.classList.remove('active');
            });

            this.isExpanded = false;

            // After retraction, stop the gallery completely
            setTimeout(() => {
                this.stop();
            }, 2000); // Wait for retraction animation to complete (1.2s transition + delay)
        },
        start: function() {
            // Start expansion (alias for expand)
            this.expand();
        },
        stop: function() {
            // Clear interval
            if (galleryIntervals[galleryId]) {
                clearInterval(galleryIntervals[galleryId]);
                delete galleryIntervals[galleryId];
            }
            // Reset cards to center position
            this.cards.forEach(card => {
                card.classList.remove('active');
                card.style.transitionDelay = '0s';
            });
            // Reset expanded state
            this.isExpanded = false;
        },
        updateImages: function(stepIndex) {
            // stepIndex: 0 for step 1, 1 for step 2, 2 for step 3
            const images = galleryImages[stepIndex];
            if (!images || images.length !== this.cards.length) return;

            this.cards.forEach((card, i) => {
                const img = card.querySelector('img');
                if (img && images[i]) {
                    img.src = images[i].src;
                    img.alt = images[i].alt;
                }
            });
        }
    };
}

// Initialize shared gallery
const galleries = {
    'shared-gallery': initGallery('shared-gallery')
};

// Initialize gallery with step 1 images
if (galleries['shared-gallery']) {
    galleries['shared-gallery'].updateImages(0); // 0 = step 1
}

// Gallery will be controlled by the about toggle button
// No auto-start on page load

