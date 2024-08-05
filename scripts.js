document.addEventListener('DOMContentLoaded', function() {
    // Adiciona animações ou scripts personalizados aqui
    console.log('Scripts carregados com sucesso!');
});

// Set the date we're counting down to
var countDownDate = new Date("Sep 28, 2024 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector("#imagem");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.5) {
        section.classList.add("visible");
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section);
});
window.addEventListener('load', function() {
  tsParticles.load({
    id: "tsparticles",
    options: {
      fullScreen: {
        zIndex: 1
      },
      emitters: [
        {
          position: {
            x: 0,
            y: 30
          },
          rate: {
            quantity: 5,
            delay: 0.15
          },
          particles: {
            move: {
              direction: "top-right",
              outModes: {
                top: "none",
                left: "none",
                default: "destroy"
              }
            }
          }
        },
        {
          position: {
            x: 100,
            y: 30
          },
          rate: {
            quantity: 5,
            delay: 0.15
          },
          particles: {
            move: {
              direction: "top-left",
              outModes: {
                top: "none",
                right: "none",
                default: "destroy"
              }
            }
          }
        }
      ],
      particles: {
        color: {
          value: ["#ffffff", "#FF0000"]
        },
        move: {
          decay: 0.05,
          direction: "top",
          enable: true,
          gravity: {
            enable: true
          },
          outModes: {
            top: "none",
            default: "destroy"
          },
          speed: {
            min: 10,
            max: 50
          }
        },
        number: {
          value: 0
        },
        opacity: {
          value: 1
        },
        rotate: {
          value: {
            min: 0,
            max: 360
          },
          direction: "random",
          animation: {
            enable: true,
            speed: 30
          }
        },
        tilt: {
          direction: "random",
          enable: true,
          value: {
            min: 0,
            max: 360
          },
          animation: {
            enable: true,
            speed: 30
          }
        },
        size: {
          value: {
            min: 0,
            max: 2
          },
          animation: {
            enable: true,
            startValue: "min",
            count: 1,
            speed: 16,
            sync: true
          }
        },
        roll: {
          darken: {
            enable: true,
            value: 25
          },
          enable: true,
          speed: {
            min: 5,
            max: 15
          }
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            min: -7,
            max: 7
          }
        },
        shape: {
          type: "image",
          options: {
            image: [
              {
                src: "https://particles.js.org/images/fruits/apple.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/avocado.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/banana.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/berries.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/cherry.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/grapes.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/lemon.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/orange.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/peach.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/pear.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/pepper.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/plum.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/star.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/strawberry.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/watermelon.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              {
                src: "https://particles.js.org/images/fruits/watermelon_slice.png",
                width: 32,
                height: 32,
                particles: {
                  size: {
                    value: 16
                  }
                }
              }
            ]
          }
        }
      }
    }
  });
});