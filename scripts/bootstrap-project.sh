#!/bin/bash

set -e

# Usage:
# ./scripts/bootstrap-project.sh my-new-project

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
  echo "Please provide a project name."
  echo "Example:"
  echo "./scripts/bootstrap-project.sh my-new-project"
  exit 1
fi

echo "Creating project: $PROJECT_NAME"

mkdir "$PROJECT_NAME"
cd "$PROJECT_NAME"

echo "Scaffolding Next.js project..."

npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

echo "Copying template docs..."

cp -r ../docs .

echo "Copying README..."

cp ../README.md .

echo "Creating standard architecture folders..."

mkdir -p src/features
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/hooks
mkdir -p src/services
mkdir -p src/utils
mkdir -p src/types
mkdir -p src/constants
mkdir -p src/config
mkdir -p src/lib
mkdir -p src/providers
mkdir -p src/auth
mkdir -p src/theme
mkdir -p src/store
mkdir -p src/schemas
mkdir -p src/styles
mkdir -p src/assets

echo "Installing dependencies..."

npm install

echo ""
echo "Project setup complete."
echo ""

echo "Next steps:"
echo "1. Open the project in Cursor"
echo "2. Read docs/START_PROJECT.md"
echo "3. Begin AI-assisted development"