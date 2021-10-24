module.exports = {
  apps: [
    {
      name: "beta-9-meals-fe",
      script: "yarn start",
    },
    {
      name: "prod-9-meals-fe",
      script: "yarn start",
    },
  ],

  deploy: {
    beta: {
      user: "devflix",
      host: [
        {
          host: "149.28.144.181",
          port: "22",
        },
      ],
      ssh_options: ["PasswordAuthentication=no", "StrictHostKeyChecking=no"],
      ref: "origin/beta",
      repo: "git@redmine.flix.com.vn:9-meals-fe.git",
      path: "/home/devflix/repos/beta/9-meals-fe",
      "post-deploy":
        "source ~/.nvm/nvm.sh; nvm use 14;cp .env.beta.example .env ; yarn install; yarn build; pm2 startOrReload ecosystem.config.js --only beta-9-meals-fe",
    },
    prod: {
      user: "devflix",
      host: [
        {
          host: "149.28.144.181",
          port: "22",
        },
      ],
      ssh_options: ["PasswordAuthentication=no", "StrictHostKeyChecking=no"],
      ref: "origin/prod",
      repo: "git@redmine.flix.com.vn:9-meals-fe.git",
      path: "/home/devflix/repos/prod/9-meals-fe",
      "post-deploy":
        "source ~/.nvm/nvm.sh; nvm use 14;cp .env.prod.example .env ; yarn install; yarn build; pm2 startOrReload ecosystem.config.js --only prod-9-meals-fe",
    },
  },
};
