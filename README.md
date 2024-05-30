# Stellar UI Workspace

This project demonstrates how to create a versatile Angular library with multiple entry points, allowing for better organization, improved tree shaking, and enhanced code splitting.

## Table of Contents
- [Introduction](#introduction)
- [Why Multiple Entry Points?](#why-multiple-entry-points)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Implementation Steps](#implementation-steps)
  - [1. Create an Angular Workspace](#1-create-an-angular-workspace)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Generate the Library](#3-generate-the-library)
  - [4. Add Subentry Points](#4-add-subentry-points)
  - [5. Dependencies Between Subentry Points](#5-dependencies-between-subentry-points)
  - [6. Unit Testing Configuration](#6-unit-testing-configuration)
  - [7. Demo App to Test](#7-demo-app-to-test)
- [Conclusion](#conclusion)
- [Source Code](#source-code)
- [Medium Article](#medium-article)
- [License](#license)

## Introduction
This guide walks you through creating an Angular library with multiple entry points to improve your project's modularity, tree shaking, and code splitting. By the end of this guide, you'll have a well-organized library with separate entry points for different components, enabling better performance and maintainability.

## Why Multiple Entry Points?
- **Better Tree Shaking:** Separate entry points allow bundlers to eliminate unused code more effectively, resulting in smaller bundle sizes.
- **Improved Code Splitting:** Lazy loading is more efficient with multiple entry points, loading only necessary parts of the library when needed.
- **Flexible Dependency Handling:** Manage dependencies more flexibly by organizing features into separate entry points based on their functionality.
- **Feature Separation:** Achieve better separation of features, with each subentry point focusing on a specific set of components or services.

## Features
- Create an Angular workspace.
- Generate an Angular library.
- Add subentry points for better modularity.
- Manage dependencies between subentry points.
- Configure unit testing.
- Create a demo app to test the library.

## Getting Started

### Prerequisites
- Node.js and npm installed.
- Angular CLI installed globally (`npm install -g @angular/cli`).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/simplycodesmart/stellar-ui-workspace.git
   cd stellar-ui-workspace
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Implementation Steps

### 1. Create an Angular Workspace
Create a new Angular workspace without an initial application:
```bash
ng new stellar-ui-workspace --create-application false
cd stellar-ui-workspace
```

### 2. Install Dependencies
Install necessary dependencies using npm:
```bash
npm install
```

### 3. Generate the Library
Generate the library named `@stellar-ui/st-sdk`:
```bash
ng generate library @stellar-ui/st-sdk --prefix=st
```

### 4. Add Subentry Points
Create subentry points for `Button`, `Card`, and `Accordion` components:

```bash
cd projects/stellar-ui/st-sdk
ng generate component button/button --flat=true --inlineTemplate=true --inlineStyle=true
ng generate component card/card --flat=true --inlineTemplate=true --inlineStyle=true
ng generate component accordion/accordion --flat=true --inlineTemplate=true --inlineStyle=true
```

Create `public-api.ts`, `index.ts`, and `ng-package.json` in each subentry point folder.

### 5. Dependencies Between Subentry Points
Update `tsconfig.json` for flexible dependency handling. For example, if `Button` and `Card` are used in `Accordion`, they should be imported accordingly.

### 6. Unit Testing Configuration
Adjust the `angular.json` configuration to include tests for subentry points:
```json
{
  "projects": {
    "@mycomp/ui-sdk": {
      "sourceRoot": "projects/stellar-ui/st-sdk"
    }
  }
}
```

### 7. Demo App to Test
Create a test app to demonstrate the library usage:
```bash
ng generate app demo-app
```

Update `tsconfig.app.json` to include the library paths:
```json
"paths": {
  "@stellar-ui/st-sdk/*": ["./../../dist/stellar-ui/st-sdk/*"],
  "@stellar-ui/st-sdk": ["./../../dist/stellar-ui/st-sdk"]
}
```

Update `app.component.ts` to use the `AccordionComponent` from the library.

## Conclusion
By following this guide, you have successfully created an Angular library with multiple entry points, enhancing organization, performance, and dependency management. This approach will help you craft robust and versatile Angular libraries that empower developers and improve application quality.

## Source Code
The source code for the `@stellar-ui/st-sdk` library and the demo app is available on GitHub:
[Stellar UI Workspace](https://github.com/simplycodesmart/stellar-ui-workspace)

## Medium Article
For a detailed explanation, check out the accompanying Medium article:
[Crafting a Versatile Angular Library: A Guide to Multiple Entry Points](https://medium.com/@simplycodesmart/crafting-a-versatile-angular-library-a-guide-to-multiple-entry-points-8b924d304b3a)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Now it includes the Medium article link as well. Let me know if you need further adjustments!