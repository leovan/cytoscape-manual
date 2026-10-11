window.MathJax = {
  loader: {
    load: ["[tex]/boldsymbol"],
    paths: {
      fonts: "https://cdn.jsdmirror.com/npm/@mathjax",
    },
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
  output: {
    displayOverflow: "scroll",
  },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
    processEnvironments: true,
    packages: {
      "[+]": ["boldsymbol"],
    },
  },
};

document$.subscribe(() => {
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})

component$.subscribe(({ ref }) => {
  if (ref.classList.contains("md-annotation"))
    MathJax.typesetPromise([ref])
})
