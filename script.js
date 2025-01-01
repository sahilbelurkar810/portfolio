// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#64ffda"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#64ffda",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.setProperty('--width', `${level}%`);
        });
    };

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('skill-bar')) {
                    animateSkillBars();
                }
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements
    document.querySelectorAll('.fade-in, .skill-bar').forEach((el) => observer.observe(el));
});



// Add form validation
document.getElementById('contactForm').addEventListener('input', (e) => {
    const input = e.target;
    if (input.validity.valid) {
        input.style.borderColor = 'var(--accent-color)';
    } else {
        input.style.borderColor = '#ff6464';
    }
});


// js/components/techStack.js
class TechStack {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupHoverEffects();
    }

    setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.tech-item').forEach(item => {
            item.style.animationPlayState = 'paused';
            observer.observe(item);
        });
    }

    setupHoverEffects() {
        document.querySelectorAll('.tech-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-3px)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
            });
        });
    }
}

// Initialize in main.js
document.addEventListener('DOMContentLoaded', () => {
    new TechStack();
});
// js/components/projects.js
class ProjectsSection {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupHoverEffects();
    }

    setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.project-card').forEach(card => {
            card.style.animationPlayState = 'paused';
            observer.observe(card);
        });
    }

    setupHoverEffects() {
        document.querySelectorAll('.project-tech span').forEach(tech => {
            tech.addEventListener('mouseenter', () => {
                tech.style.transform = 'translateY(-3px)';
            });

            tech.addEventListener('mouseleave', () => {
                tech.style.transform = 'translateY(0)';
            });
        });
    }
}

// Initialize in main.js
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsSection();
});
// js/components/skills.js
class SkillsSection {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
    }

    setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const level = entry.target.dataset.level;
                    entry.target.style.setProperty('--level', `${level}%`);
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.2
        });

        document.querySelectorAll('.skill-level').forEach(skill => {
            observer.observe(skill);
        });
    }
}

// Initialize in main.js
document.addEventListener("DOMContentLoaded", () => {
  new SkillsSection();
  new ContactForm();
});

// js/components/contactForm.js
class ContactForm {
  constructor() {
    this.form = document.getElementById("contactForm");
    this.messageDiv = document.getElementById("formMessage");
    this.submitButton = this.form.querySelector(".submit-btn");
    this.addEventListeners();
  }

  addEventListeners() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  async handleSubmit() {
    // Show loading state
    this.setLoadingState(true);
    this.clearMessage();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_name: this.form.name.value,
          from_email: this.form.email.value,
          message: this.form.message.value,
        }),
      });

      if (response.ok) {
        this.showMessage("Message sent successfully!", "success");
        this.form.reset();
      } else {
        this.showMessage("Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      this.showMessage("Failed to send message. Please try again.", "error");
    }

    // Hide loading state
    this.setLoadingState(false);
  }

  setLoadingState(isLoading) {
    const buttonText = this.submitButton.querySelector(".btn-text");
    const spinner = this.submitButton.querySelector(".loading-spinner");

    if (isLoading) {
      buttonText.style.opacity = "0";
      spinner.style.display = "block";
      this.submitButton.disabled = true;
    } else {
      buttonText.style.opacity = "1";
      spinner.style.display = "none";
      this.submitButton.disabled = false;
    }
  }

  showMessage(message, type) {
    this.messageDiv.textContent = message;
    this.messageDiv.className = `form-message ${type}`;
    this.messageDiv.style.display = "block";

    // Hide message after 5 seconds
    setTimeout(() => {
      this.clearMessage();
    }, 5000);
  }

  clearMessage() {
    this.messageDiv.style.display = "none";
    this.messageDiv.textContent = "";
  }
}