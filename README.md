# react-micro-frontend

A **micro frontend application** to display a dashboard with user details and product reports in charts, built using **micro frontend architecture**.

## System Requirements

- [npm](https://www.npmjs.com/)
- [node](https://nodejs.org)
- [git](https://git-scm.com/)

Use the following commands to verify required tooling:

```bash
git --version
node --version ( > 18 version)
npm --version
```

## Setup

1. my-app-container application

```bash
cd my-app-container

npm install
```

2. my-app-profile application

```bash
cd my-app-profile

npm install
```

3. my-app-report application

```bash
cd my-app-report

npm install
```

## Running the project

Start each application to run the project

```bash
npm start
```

Once all applications are running, open your browser at the following URL to view the container micro frontend:

```sh
127.0.0.1:3030 / localhost:3030
```

To view only the report application, open your browser at:

```sh
127.0.0.1:3031 / localhost:3031
```

To view only the profile application, open your browser at:

```sh
127.0.0.1:3033 / localhost:3033
```
