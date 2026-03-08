Create a complete feature module.

Feature name: {{args}}

Follow the architecture defined in:

docs/ARCHITECTURE.md
docs/PROJECT_CONTEXT.md
docs/AI_RULES.md

Create the feature inside:

src/features/{{args}}/

Generate the following files:

src/features/{{args}}/components/{{args | capitalize}}Page.tsx  
src/features/{{args}}/hooks/use{{args | capitalize}}.ts  
src/features/{{args}}/services/{{args}}Service.ts  
src/features/{{args}}/utils/{{args}}Utils.ts  
src/features/{{args}}/types.ts  

Requirements:

- Use TypeScript
- Follow the project architecture
- Use hooks for business logic
- Use services for API communication
- Keep UI components focused on presentation
- Use TailwindCSS for styling
- Keep code simple and readable

Starter implementations should be included for each file so the feature can be extended easily.