module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix --max-warnings=0", "prettier --write"],
  "*.{html,scss,css,json}": "prettier --write",
};
