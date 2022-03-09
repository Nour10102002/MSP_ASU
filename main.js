function showQr_code(name) {
  const qrCodeimage = document.querySelector(".qrCode-image");
  document.querySelector(".qrCodeWindow").style.display = "flex";

  let src;

  if (name === "facebook") {
    src =
      "https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPjZwLeh11CXT8n%252BHMzWMdvUb%252BsqQ%252Foeme7xO4uqEGrEiWXSFsLOZjD0p0af8Oe4JUujrLgxVVfT89%252BGD2g4vFdKZQuP4Fdgab3F2t1Q5SyqVGgU2k2MHaM6r8y%252BsvtU%252F91WamBHQdpDNxkqpcgUiXtGoph66OIEN2tiZCLQX%252BflsPMSfuS%252BmwpJgwkAB14BBMdUO32Hwbx2DQBSFmNC4RhgmL6W4%252BEeixK0%252FwC7Ce8WE7gTIx0XVZwvUMrCILDmre0DFFyx%252Fx7jhUophCXnAe0xedR%252BWYL3khS%252Be19lej6vo&crd=fhOysE0g3Bah%252BuqXA7NPQ87MoHrnzb%252BauJLKoOEbJsqu%252BsMYoR%252FmkCVF6t9QFzo15HYOuvaxz1WyMPsWo0pb6A%253D%253D";
  } else if (name === "linkedin") {
    src =
      "https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPjZwLeh11CXT8n%252BHMzWMdvUb%252BsqQ%252Foeme7xO4uqEGrEiWXSFsLOZjD0p0af8Oe4JUujrLgxVVfT89%252BGD2g4vFdKZQuP4Fdgab3F2t1Q5SyqVAKxBAM%252Fu7kV9E28Zhu5m8Uk6%252B%252FTe0LUTdqPNGCzpps7JW1xbuyL4%252FEnsJXZL6otJORTmsRxJws8FLFIZXWcsgXbo%252FQNHcWOi7ZTcbacpDd5B5qxbQDZdtP4H3tpigPB3o4ta5RwhI8gJqFdXEo0SPVfW4BF61YmbPLOaH9nNGJG9pJHiV61KsCm2DQ6dMTyS&crd=fhOysE0g3Bah%252BuqXA7NPQ87MoHrnzb%252BauJLKoOEbJsqKZv3U1GgktgNBUZQqyqIlBMZ2x%252FnlJyw3B%252BvceBbgBw%253D%253D";
  } else if (name === "youtube") {
    src =
      "https://www.unitag.io/qreator/generate?crs=m9mHWQDvgwWuO19IqjamCz7BBs0IV4Ma6TP5cqQ65b48c2ONU%252FFqLNMOwVkb0vT%252Bi2qjGfDkSZ07ef%252FlO%252B8Zj5DDjXgVldtfuxZ9VKXfRWexri0v8fesl94rVqKpuDX6MVJh%252F1CazQ50nEI8koBIy%252FqOYQ8OVOYHMB4zrVAtMnLuYp2XC7oVUk5DKi1bsULQPJNkpamNrYGl%252Ft%252FaaVVwkNZtl2NBMi7Gu%252BDgHL7rCh6rQsqnbrvMyAjJHMPEdW4b9507BppbuL%252BH0Xckkk7jpLfhcT4x8Hap%252BWOTg4tcetBEEHC8%252B3D9wm9DDGFCAUtzTUplvHwQsMPNsmkyW9koaXJjLaLnEhdnRjS%252FpENkiDgXp3u84fgU1wb5uNQMiiZMp6mtd6z9u5ejkpdMHseOYydYU%252BR0X%252FGO%252FSbC1qAcc22VIFJkX4r5eYcGP8bzz6bBxiGmNyy%252FZ1O%252FbqnuRo2nqEdbthcwqOo9HY8u3RK6Tl4%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ87MoHrnzb%252BauJLKoOEbJspqIr%252Byj3kuiVRP1EyXgvybHa1gEbX6mvxjnpp2BvD2Wg%253D%253D";
  } else if (name === "instagram") {
    src =
      "https://www.unitag.io/qreator/generate?crs=Ppv8rOENN3V1lAwTz82zPjZwLeh11CXT8n%252BHMzWMdvUb%252BsqQ%252Foeme7xO4uqEGrEiWXSFsLOZjD0p0af8Oe4JUujrLgxVVfT89%252BGD2g4vFdK4KfHogEW3eFdy1nG7J9xP2zmR5o6Xg7U8kBsNvOTThm9IXLjTZnj4CrEVuI4xH4zf99Z0h%252FHeexnuiIZsEeFoo5OoBYxFlpN27JvJDrWGMRCHgH9ErdpU3Eaaarr6tXYr8Zl6dSzHYpFkJkzRyiBhDcAkT2X0CkegdlZ3P3Ha%252FZRd6gsaupzVvP607zZOt5wka6rtpQraVVHhGQ%252BAyTqUlW%252BGWaB%252FUPpmC4oM02AVvwgFvEZFaeWwaUUZWXtvX0c%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ87MoHrnzb%252BauJLKoOEbJspG0vX6eqcFpUE6UplWXQiDepzVKDlaOSTVaL4i0VwnqA%253D%253D";
  } else {
    //Twitter
    src = "";
  }

  qrCodeimage.setAttribute("src", src);
}

const containerSlide = document.querySelector(".cards-slide");
const cardSlide = document.querySelectorAll(".qrCode-container");
const peviousButton = document.querySelector(".bi-chevron-left");
const nextButton = document.querySelector(".bi-chevron-right");

const size = cardSlide[0].clientWidth;
let counter = 1;
containerSlide.style.transform = "translateX(" + -size * counter + "px)";

function nextSilde() {
  containerSlide.style.transition = "transform 0.4s ease-in-out";

  if (counter > 3) {
    counter = 5;
  } else {
    counter++;
  }

  containerSlide.style.transform = "translateX(" + -size * counter + "px)";
}

function previousSilde() {
  containerSlide.style.transition = "transform 0.4s ease-in-out";
  if (counter === 1) {
    counter = 1;
  } else {
    counter--;
  }

  containerSlide.style.transform = "translateX(" + -size * counter + "px)";
}
