class SlideDeck {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        this.updateUI();
        this.bindEvents();
        this.updateProgress();
    }
    
    bindEvents() {
        // Navigation buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.prev());
        document.getElementById('nextBtn').addEventListener('click', () => this.next());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                case ' ':
                case 'PageDown':
                    e.preventDefault();
                    this.next();
                    break;
                case 'ArrowLeft':
                case 'PageUp':
                    e.preventDefault();
                    this.prev();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goTo(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goTo(this.totalSlides - 1);
                    break;
                case 'f':
                case 'F':
                    this.toggleFullscreen();
                    break;
                case 'p':
                case 'P':
                    window.print();
                    break;
            }
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }
    
    next() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goTo(this.currentSlide + 1);
        }
    }
    
    prev() {
        if (this.currentSlide > 0) {
            this.goTo(this.currentSlide - 1);
        }
    }
    
    goTo(index) {
        // Remove active class from current
        this.slides[this.currentSlide].classList.remove('active');
        this.slides[this.currentSlide].classList.add('prev');
        
        // Update index
        this.currentSlide = index;
        
        // Add active class to new current
        this.slides[this.currentSlide].classList.remove('prev');
        this.slides[this.currentSlide].classList.add('active');
        
        // Remove prev from all slides after current
        for (let i = this.currentSlide + 1; i < this.totalSlides; i++) {
            this.slides[i].classList.remove('prev');
        }
        
        this.updateUI();
        this.updateProgress();
    }
    
    updateUI() {
        document.getElementById('currentSlide').textContent = this.currentSlide + 1;
        document.getElementById('totalSlides').textContent = this.totalSlides;
        
        // Update button states
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.style.opacity = this.currentSlide === 0 ? '0.3' : '1';
        prevBtn.style.cursor = this.currentSlide === 0 ? 'not-allowed' : 'pointer';
        
        nextBtn.style.opacity = this.currentSlide === this.totalSlides - 1 ? '0.3' : '1';
        nextBtn.style.cursor = this.currentSlide === this.totalSlides - 1 ? 'not-allowed' : 'pointer';
    }
    
    updateProgress() {
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SlideDeck();
});
